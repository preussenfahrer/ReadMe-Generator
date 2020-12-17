'use strict';
const inquirer = require('inquirer');
const fs = require(fs);
const markDown = require("./generateMarkdown")

// question arrays will go here
var questions = [
  {
    type: 'input',
    name: 'proj_name',
    message: "Hello! What will be the name of your new repository?"
  },
  {
    type: 'input',
    name: 'proj_description',
    message: "Please provide a description of your repository"
  },
  {
    type: 'input',
    name: 'proj_install',
    message: "Include installation instructions for your project here"
  },
  {
    type: 'input',
    name: 'proj_information',
    message: "Here you can provide information about the usage of your new project"
  },
  {
    type: 'input',
    name: 'proj_contribution',
    message: "List any contribution guidelines for your project here"
  },
  {
    type: 'input',
    name: 'proj_test_instructions',
    message: "Please list any test instructions for your new project"
  }
];

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
});
// first array of questions for README info to be updated by user of app

// array for contributors to project

// array for licenses