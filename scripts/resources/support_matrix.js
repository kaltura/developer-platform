const fs = require('fs');
const url = require('url');
const path = require('path');
const https = require('https');

const jsonURL = 'https://api.github.com/repos/kaltura/clients-generator';
const filepath = path.resolve('./markdown/generated/support_matrix.md')

function copySupportMatrix(defaultBranch){
	var opts = url.parse(`https://raw.githubusercontent.com/kaltura/clients-generator/${defaultBranch}/support_matrix.md`);
    opts.headers = {
      'User-Agent': 'javascript'
    };
    https.get(opts, (res) => {
    	const ws = fs.createWriteStream(filepath)
    	res.pipe(ws)
    }).on('error', (e) => {
    	throw `Got error: ${e.message}`;
    }).end();
}



var opts = url.parse(jsonURL);
opts.headers = {
  'User-Agent': 'javascript'
};

https.get(opts, (res) => {
	const { statusCode } = res;
	const contentType = res.headers['content-type'];

	let error;
	if (statusCode !== 200) {
		error = new Error(`Request Failed, Status Code: ${statusCode}`);
	}
	else if (!/^application\/json/.test(contentType)) {
		error = new Error(`Invalid content-type, Expected application/json but received ${contentType}`);
	}
	
	if (error) {
		console.error(error.message);
		res.resume();
		process.exit(-1);
	}

	res.setEncoding('utf8');
	let rawData = '';
	res.on('data', (chunk) => { rawData += chunk; });
	res.on('end', () => {
		try {
			const parsedData = JSON.parse(rawData);
			const {default_branch} = parsedData;
			copySupportMatrix(default_branch)
		} catch (e) {
			console.error(e.message);
			process.exit(-1);
		}
	});
}).on('error', (e) => {
	throw `Got error: ${e.message}`;
}).end();

