const fs = require('fs');
const path = require('path');
const inq = require('inquirer');
const pmpts = require('./utils/prompts');
const gmkd = require('./utils/generateMKD');


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

                const foldName = projectName.split(' ').join('_').trim();
                const filePath = path.join(__dirname, `/output/${foldName}/`); 

                /* Make folder named the project name if it doesnt already exist */
                fs.access(filePath, fs.constants.F_OK, (err) =>
                {
                    if(err)
                    {
                        fs.mkdir(filePath, (err) =>
                        {
                            if (err)
                            {
                                console.log(err);
                            }
                            else
                            {
                                console.log('Directory created successfully!')
                                fs.writeFile(`${filePath}/README.md`, rmFile, (err) =>
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
                            }
                        });
                    }
                });   
            })
}

App();