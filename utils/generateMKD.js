function renderLicenseBadge(license, gHubUserName, projectName)
{
    return `![GitHub](https://img.shields.io/github/${license}/${gHubUserName}/${projectName}?style=plastic)`
}

function renderLicenseSection(license, ...args)
{
    return ""
}

const buildRM = (projectName, description, installInstructions, usageInstructions, contributionGuidlines, testInstructions, license, gHubUserName, emailAddr) =>
{
    const lBadge, lSection;
    
    if( license != "none")
    {
        lBadge = renderLicenseBadge(license, gHubUserName, projectName);
        lSection = renderLicenseSection(license);
    }

    return lBadge != "none" ? lBadge : "" +   

    `
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