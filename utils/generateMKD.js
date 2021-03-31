const lList = require('./licenseLocker');

function renderLicenseBadge(license, gHubUserName, projectName)
{
    return license != "none" ? `![GitHub](https://img.shields.io/github/${license}/${gHubUserName}/${projectName}?style=plastic)` : "";
}

function renderLicenseSection(license, projectName)
{
    let licText = "";

    lList.forEach(lic =>
        {
            if(lic.type === license)
            {
                licText = lic.text;
            }
        });

    if(license == 'MIT' || license == 'Apache-2.0' || license == 'BSD-3-Clause' || license == 'BSD-2-Clause' || license == 'GPL-3.0' || license == 'GPL-2.0')
    {
        const year = new Date();
        return  `Copyright ${year.getYear()} ${projectName}
        ` + licText; 
    }
    else
    {
        return licText;
    }
}

const buildRM = (projectName, description, installInstructions, usageInstructions, contributionGuidlines, testInstructions, license, gHubUserName, emailAddr) =>
{
    let lBadge, lSection;
    
    if( license != "none")
    {
        lBadge = renderLicenseBadge(license, gHubUserName, projectName);
        lSection = renderLicenseSection(license);
    }

    return lBadge != "none" ? lBadge : "" +   `
    # ${projectName}

    ## Description
    
    ${description}
    
    ## Table of Contents
    
     - [Description](#Description)
     - [Installation](#Installation)
     - [Usage](#Usage)
     - [Contributing](#Contributing)
     - [Test](#Tests)
     - [Questions](#Questions)`+
     license != "none" ? '- [License](#License)' : "" +
     `    
     ## Installation
    
     ${installInstructions}
    
     ## Usage
    
     ${usageInstructions}
    
     ## Contributing
    
     ${contributionGuidlines}
    
     ## Tests
    
     ${testInstructions}
    
     ## Questions
    
     Developed by: https://www.github.com/${gHubUserName}
     For other questions concerning this app contact me [here](mailto:${emailAddr})` +
    
     license != "none" ? lSection : "";
    

}


module.exports = {buildRM}