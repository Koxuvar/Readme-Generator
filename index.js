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
                const outputPath = path.join(__dirname, 'output');
                const filePath = path.join(__dirname, `/output/${foldName}/`); 

                /* Make folder named the project name if it doesnt already exist */
                fs.access(outputPath, fs.constants.F_OK, (err) => //check for output folder
                {
                    if(err) //if doesnt exist
                    {
                        console.log('Creating output folder...');
                        fs.mkdir(outputPath, (err) => //make output folder
                        {
                            if (err) 
                            {
                                console.log(err);
                            }
                            else
                            {
                                fs.mkdir(filePath, (err) => //if successful, make folder named project name
                                {
                                    if(err)
                                    {
                                        console.log(err)
                                    }
                                    else
                                    {
                                        console.log('Directory ' + filePath + ' created successfully!')
                                        fs.writeFile(`${filePath}/README.md`, rmFile, (err) => //write file
                                        {
                                            if (err)
                                            {
                                                console.log(err);
                                            }
                                            else
                                            {
                                                console.log('File written successfully to ' + filePath)
                                            }
                                        });
                                    }
                                })
                                
                            }
                        });
                    }
                    else //if output folder already exists
                    {
                        fs.access(filePath, fs.constants.F_OK, (err) => //check for folder named project name
                        {
                            if (err) //if doesnt exist
                            {
                                fs.mkdir(filePath, (err) => //make folder named project name
                                {
                                    if(err)
                                    {
                                        console.log(err)
                                    }
                                    else
                                    {
                                        console.log('Directory ' + filePath + ' created successfully!')
                                        fs.writeFile(`${filePath}/README.md`, rmFile, (err) => //write file 
                                        {
                                            if (err)
                                            {
                                                console.log(err);
                                            }
                                            else
                                            {
                                                console.log('File written successfully to ' + filePath)
                                            }
                                        });
                                    }
                                })
                            }
                            else // if does exist
                            {
                                fs.writeFile(`${filePath}/README.md`, rmFile, (err) => //write file
                                {
                                    if (err)
                                    {
                                        console.log(err);
                                    }
                                    else
                                    {
                                        console.log('File written successfully to ' + filePath)
                                    }
                                });
                            }
                        })
                    }
                });   
            })
}

App();