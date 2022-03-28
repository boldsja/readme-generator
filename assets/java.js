const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [

      {
        name: "title",  
        type: "input",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        message: "Provide a description of your project",
        name: "description"
      },
      {
        type: "input",
        message: "Provide installation instructions",
        name: "installation"
      },
      {
        type: "input",
        message: "Provide usage information",
        name: "usage"  
      },
      {
        type: "input",
        message: "Contribution Guidelines",
        name: "contribution"
      },
      {
        type: "input",
        message: "Test Instructions",
        name: "tests"
      },
      {
        type: "input",
        message: "Enter Github username",
        name: "github"
      },
      {
        type: "input",
        message: "Enter email address",
        name: "email"
      },
]
// .then((response) =>
//     console.log(response)
// );




// // TODO: Create a function to write README file
// function writeToFile('readme-gen', data) {




// fs.writeFile('readme-gen.md', data, err => {
//     if (err) {
//       console.error(err)
//       return
//     }
// })

// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        console.log(response);

        const data = 
`
## ${response.title}

## Description
${response.description}

## Installation
${response.installation}
## Usage
${response.usage}
## Contributing
${response.contribution}
## Test Instructions
${response.tests}

## License


## Questions

`

        fs.writeFile('./readme-gen.md', data, err => {
            if (err) {
              console.error(err)
              return
            }
        })
    }
    
)}

// // Function call to initialize app
init();


