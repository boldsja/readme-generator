const inquirer = require("inquirer");


// TODO: Create an array of questions for user input
const questions = [
    inquirer
   .prompt([
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
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
      }
])
.then((response) =>
    console.log(response)
)];



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


