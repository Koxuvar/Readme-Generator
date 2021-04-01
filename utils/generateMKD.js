const lList = require('./licenseLocker');

function renderLicenseBadge(license, gHubUserName, projectName)
{
    let pNameShort = projectName.split(' ').join('_').trim();
    return license != "none" ? `![GitHub](https://img.shields.io/github/${license}/${gHubUserName}/${pNameShort}?style=plastic)` : "";
}

function renderLicenseSection(license, gHubUserName, projectName)
{
    let licText = "";

    lList.forEach(lic =>
        {
            if(lic.type === license)
            {
                licText = lic.text;
            }
        });

    const year = new Date().getFullYear();
    return  `
## License

Copyright (c) ${year} | ${gHubUserName} | All rights reserved.<br>
 Please be kind and change content if you wish to use this code.


<details>

Copyright ${year} ${gHubUserName}

<blockquote>
${licText}
</blockquote>
</details>` 
}

const buildRM = (projectName, description, installInstructions, usageInstructions, contributionGuidlines, testInstructions, license, gHubUserName, emailAddr) =>
{
    let lBadge, lSection;
    
    if( license != "none")
    {
        lBadge = renderLicenseBadge(license, gHubUserName, projectName);
        lSection = renderLicenseSection(license, gHubUserName, projectName);
    }

    return `
${lBadge != "" ? lBadge : ""}

# ${projectName}

## Description

${description}

## Table of Contents

 - [Description](#Description)
 - [Installation](#Installation)
 - [Usage](#Usage)
 - [Contributing](#Contributing)
 - [Test](#Tests)
 - [Questions](#Questions)
 ${license != "none" ? '- [License](#License)' : ""}
 
## Installation

${installInstructions}
     
## Usage
     
${usageInstructions}
     
## Contributing
     
${contributionGuidlines}
     
## Tests
     
${testInstructions}
     
## Questions
     
For questions concerning this app contact me [here](mailto:${emailAddr})

See more of my work on my [Github Profile](https://www.github.com/${gHubUserName})

${lSection != "" ? lSection : ""}
    ` 
}


module.exports = {buildRM}
