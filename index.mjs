import inquirer from "inquirer";
import fs from "fs/promises";

let {title, description, installation, usage, license, contributions, tests, questions} = await inquirer
.prompt([
  {
    type: "input",
    name: "title",
    message: "Project name: ",
  },
  
  {
    type: "input",
    name: "project_description",
    message: "Please describe your project: ",
  },
  
  {
    type: "input",
    name: "installation",
    message:"Installation process for your project: ",
  },
  
  {
    type: "input",
    name: "usage",
    message: "screenshots go here",
  },
  
  {
    type: "list",
    name: "license",
    message: "Which license did you use",
    choices: ['Mozilla Public License 2.0', 'The Perl License', 'The Artistic License 2.0'],
  },
  
  {
    type: "input",
    name: "contributions",
    message: "Contributions go here",
  },
  
  {
    type: "input",
    name: "tests",
    message: "Testing results go here",
  },
  
  {
    type: "input",
    name: "questions",
    message: "Please enter your github profile and email address here",
  },
]);

console.log({ title, description, installation, usage, license, contributions, tests, questions });

let readmeText = `# ${title}
${title}

## Table of Contents
- [Project Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## License
${generateLicense(license)}

## Contributions
${contributions}

## Tests
${tests}

## Questions
if you have an questions/concerns contact via email through Github ${questions}`;

fs.writeFile("README.md", readmeText);

function generateLicense(license) 
{
    if (license === "mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

  } else if (license === "artistic") {
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";

  } else if (license === "eclipse") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";

  } else return "No license selected";
}