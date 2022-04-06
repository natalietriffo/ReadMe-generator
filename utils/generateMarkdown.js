// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return ""
  }
  else {
    return`![GitHub license](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return ""
  }
  else {
    return`
   [license](#license)
    `;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return ""
  }
  else {
    return`
    ## license 
    This project is licensed under ${license}.
    `;
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## description
  ${data.description}
  ## table of contents 
  [Installation] (#intallation)
  ${renderLicenseLink(data.license)}
  [Usage](#usage)
  [Test](#test)
  [Questions](#questions)

  ## Installation

  ${data.install}
Run this in your terminal.
  
## Usage

${data.usage}
${renderLicenseSection(data.license)}

## Test

${data.test}

To test the code, run this in your terminal.

## Questions

${data.questions}
To get help for any questions, please email me ${data.email}, ${data.github}
`;
}



module.exports = generateMarkdown;
