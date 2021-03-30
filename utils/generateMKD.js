function renderLicenseBadge(license, gHubUserName)
{
    return ""
}

const buildRM = (projectName, description, installInstructions, usageInstructions, contributionGuidlines, testInstructions, license, gHubUserName, emailAddr) =>
{
    const lBadge;
    const lLink; 
    const lSection;
    
    if( license != "")
    {
        lBadge = renderLicenseBadge(license, gHubUserName);
        lLink = renderLicenseLink(license);
        lSection = renderLicenseSection(license);
    }

    return lBadge != "" ? lBadge : "" +   

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
     - [Questions](#Questions)
     - [License](#License)
    
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
    
     license != "" ? lSection : "";
    

}


module.exports = {buildRM}