function createMarkDown(userResponses){
    let markDownBase = `
# ${userResponses.projectName}

![License:${userResponses.licenses}](https://img.shields.io/badge/License-${userResponses.licenses.split(" ").join("")}-blue)

## Description

${userResponses.projectDescription}
`

const tableOfContents = `
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Testing](#Testing)
* [Questions](#Questions?)`

let instDescription = `
## Installation

${userResponses.installation}`

let usageDescription = `
## Usage

${userResponses.usage}`

let lice =`
## Licenses

${userResponses.licenses}` 

let contDescription = `
## Contributing

${userResponses.contributions}`

let testDescription = `
## Testing

${userResponses.test}`

let questDescription =`
## Questions?

Do you have any questions about this project (how to install, contribute, or test?) or see something wrong? 
Feel free to reach out.\n 
github: [${userResponses.Github}](https://github.com/${userResponses.Github}) \n
email: ${userResponses.Email}`

return markDownBase + tableOfContents + instDescription + usageDescription + lice + contDescription + testDescription + questDescription
}


module.exports = createMarkDown;
