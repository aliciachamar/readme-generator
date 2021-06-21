// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "desc",
        message: "Please enter a description of your project.",
    },
    {
        type: "input",
        name: "install",
        message: "Please enter installation instructions for your project.",
    },
    {
        type: "input",
        name: "use",
        message: "Please enter usage information for your project.",
    },
    {
        type: "input",
        name: "contribute",
        message: "Please enter contribution guidelines for your project.",
    },
    {
        type: "input",
        name: "test",
        message: "Please enter test instructions for your project.",
    },
    {
        type: "list",
        name: "license",
        message: "Please choose the correct license for your project.",
        choices: [
            "Apache 2.0",
            "BSD-3 Clause",
            "MIT",
            "None",
        ],
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Readme file successfully generated!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response => {
            const fileText = generateMarkdown(response);
            const fileName = response.title + "-readme.md";
            writeToFile(fileName, fileText);
        });
}

// Function call to initialize app
init();
