git config user.name "Travis CI"
git config user.email "bobby.brennan@gmail.com"

git fetch origin gh-pages
git checkout gh-pages

mv www/* ./

if [ -z `git diff --exit-code` ]; then
    echo "No changes to the output on this push; exiting."
    exit 0
fi

git add .
git commit -m "Deploy to GitHub Pages"

git push -u https://$GITHUB_ACCESS_TOKEN@github.com/bobby-brennan/kaltura-recipes-v3 gh-pages
