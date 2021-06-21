// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";  
  switch (license) {
      case "Apache 2.0": 
        badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "BSD-3 Clause":
        badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        break;
      case "MIT":
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "None":
        break;
    }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.license);
  
  return `# ${data.title}

  ## Description

  ${data.desc}

  ${badge}
  

  ## Table of Contents 

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)


  ## Installation

  ${data.install}


  ## Usage

  ${data.use}


  ## License

  This project is covered under the following license: ${data.license}.


  ## Contributing

  ${data.contribute}


  ## Tests

  ${data.test}


  ## Questions

  Visit my [GitHub profile](https://www.github.com/${data.github}).

  Please [email me](${data.email}) with any questions. 

`;
}

module.exports = generateMarkdown;
