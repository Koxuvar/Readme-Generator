const fs = require('fs');
const inq = require('inquirer');
const pmpts = require('./utils/prompts');
const gmkd = require('./utils/generateMKD');
const path = require('path');

const App = () =>
{
    inq.prompt(pmpts)
    .then((
        {
            projectName, 
            description, 
            installInstructions, 
            usageInstructions, 
            contributionGuidlines, 
            testInstructions, 
            license, 
            gHubUserName, 
            emailAddr
        }
        ) =>
            {
                const rmFile = gmkd.buildRM(projectName, description, installInstructions, usageInstructions, contributionGuidlines, testInstructions, license, gHubUserName, emailAddr);

                const foldName = projectName.split(' ').join('').trim();
                
                /* MAKE output folder if none exists */
                if(!fs.existsSync(path.join(__dirname, 'output')))
                {
                    fs.mkdir(path.join(__dirname, 'output'));
                }

                /* Make folder named the project name if it doesnt already exist */
                if(!fs.existsSync(path.join(__dirname + '/output/', `${foldName}`)))
                {
                    fs.mkdir(path.join(__dirname + '/output/', `${foldName}`), (err) =>
                    {
                        if (err)
                        {
                            console.log(err);
                        }
                        else
                        {
                            console.log('Directory created successfully!')
                        }
                    });
                }
                
                const filePath = `./output/${foldName}/README.md`; 
                
                /* Create file with the readme info returned from gmkd.buildRM */
                fs.writeFile(filePath, rmFile, (err) =>
                {
                    if (err)
                    {
                        console.log(err);
                    }
                    else
                    {
                        console.log('File written successfully!')
                    }
                });
            })
}

App();