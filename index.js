const fs = require('fs');
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
                
            })
}

App();