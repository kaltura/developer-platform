const versionSource = document.getElementById('versionSource');
const versionDest = document.getElementById('versionDest');
const gitLikeSelect = document.getElementById('gitLikeSelect');
const gitLikeResult = document.getElementById('gitLikeResult');
const objectCompareSelect = document.getElementById('objectCompareSelect');
const objectCompareResult = document.getElementById('objectCompareResult');

let result = {};

function getJsons() {
  fetch(`/api-diff?src=${versionSource.value}&dest=${versionDest.value}`)
    .then((res) => res.json())
    .then((res) => {
      console.log('result: ', res);

      result = res;
      getGitLikeComparison(gitLikeSelect.value);
      getObjectComparison(objectCompareSelect.value);
    })
    .catch((err) => { throw err });
}

/** GitHub style */
function getGitLikeComparison(outputFormat = 'side-by-side') {
  if (!Object.keys(result || {}).length) {
    return;
  }

  const diffString = Diff.createPatch( // createTwoFilesPatch
    'json',
    // versionSource.value,
    // versionDest.value,
    JSON.stringify(result.src, null, 2),
    JSON.stringify(result.dest, null, 2),
  );
  const diffHtml = Diff2Html.html(
    diffString,
    {
      drawFileList: true,
      outputFormat,
    },
  );

  gitLikeResult.innerHTML = diffHtml;
}

function getObjectComparison(formatter = 'html') {
  if (!Object.keys(result || {}).length) {
    return;
  }

  const delta = jsondiffpatch.diff(result.src, result.dest);

  switch (objectCompareSelect.value) {
    case 'visual': // beautiful html diff
      formatter = 'html';
      break;
    case 'annotated': // self-explained json
      formatter = 'annotated';
      break;
  }
  objectCompareResult.innerHTML = jsondiffpatch.formatters[formatter].format(delta, result.src);

  // jsondiffpatch.formatters.html.hideUnchanged(objectCompareResult, 10);
  jsondiffpatch.formatters.html.showUnchanged(true, objectCompareResult, 10);
}
