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
        type: 'list',
        message: 'License:',
        default: 'MIT',
        choices:[
            'Apache-2.0',
            'BSD-3.0',
            'BSD-2.0',
            'GPL-2.0',
            'GPL-3.0',
            'LGPL-3.0',
            'MIT',
            'MPL-2.0',
            'CDDL-1.0',
            'EPL-2.0',
            'none'
        ],
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

