
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  }
};

function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else if (license === "MIT") {
    return `https://choosealicense.com/licenses/mit/`
  } else if (license === "GNU") {
    return `https://choosealicense.com/licenses/gpl-3.0/`
  } else if (license == "Apache") {
    return `https://choosealicense.com/licenses/apache-2.0/`
  } else if (license == "ISC") {
    return `https://choosealicense.com/licenses/isc/`
  }
};

function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else if (license === "MIT") {
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else if (license === "GNU") {
    return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
  } else if (license == "Apache") {
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else if (license == "ISC") {
    return `A permissive license lets people do anything with your code with proper attribution and without warranty. The ISC license is functionally equivalent to the BSD 2-Clause and MIT licenses, removing some language that is no longer necessary.`
  }
};

function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.install}
  
## Usage
  
${data.usage}

## License

${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

## Contributing

${data.contribute}

## Tests
  
${data.tests}

## Questions

https://github.com/${data.questions}
`;
};

module.exports = generateMarkdown;
