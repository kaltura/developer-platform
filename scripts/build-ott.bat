@ECHO OFF

SET VERSION=%1
SET CLIENT_LIBS_DIR=%2
SET CLIENT_LIBS_URL=%3

ECHO Version: [%VERSION%]
ECHO Client libraries directory: [%CLIENT_LIBS_DIR%]
ECHO Client libraries URL: [%CLIENT_LIBS_URL%]

ECHO Changing directory
CD %0\..\..\

ECHO Creating generated markdown directory  
MKDIR markdown\generated

ECHO Installing node modules and dependencies
"C:\Program Files\nodejs\npm.cmd" install

ECHO Setting environment variable
SET TARGET_API=ott

ECHO Generating client libraries markdown
"C:\Program Files\nodejs\node.exe" scripts\resources\client_libraries_from_dir.js ott %VERSION% %CLIENT_LIBS_DIR% %CLIENT_LIBS_URL%

ECHO Generating schemes markdown
"C:\Program Files\nodejs\node.exe" scripts\resources\schemas.js

ECHO Generating ott documentation
("C:\Program Files\nodejs\node.exe" scripts\resources\ott.js

ECHO Generating ott documentation
("C:\Program Files\nodejs\node.exe" scripts\resources\support_matrix.js

ECHO Running lucybot
("C:\Program Files\nodejs\node.exe" lucybot build --prerender --destination generated/ott


