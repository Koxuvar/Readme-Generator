const prompts =
[
    {
        name: 'projectName',
        type: 'input',
        message: 'Project title:',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Project description:',
    },
    {
        name: 'installInstructions',
        type: 'input',
        message: 'Installation instructions:',
        default: 'npm i',
    },
    {
        name: 'usageInstructions',
        type: 'input',
        message: 'Usage Instructions:',
    },
    {
        name: 'contributionGuidlines',
        type: 'input',
        message: 'Contribution guidelines:'
    },
    {
        name: 'testInstructions',
        type: 'input',
        message: 'Test Instructions:',
        default: 'node test',
    },
    {
        name: 'license',
        type: 'input',
        message: 'License:',
        default: 'MIT',
    },
    {
        name: 'gHubUserName',
        type: 'input',
        message: 'Github User Name:',
    },
    {
        name: 'emailAddr',
        type: 'input',
        message: 'Email Address:'
    }
];

module.exports = prompts;

