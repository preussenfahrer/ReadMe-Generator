'use strict';
const inquirer = require('inquirer');
// const fs = require(fs);
// const markDown = require("generateMarkdown");

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
        message: "Please provide a description of your repository: "
    },
    {
        type: 'input',
        name: 'proj_install',
        message: "Include installation instructions for your project here: "
    },
    {
        type: 'input',
        name: 'proj_information',
        message: "Here you can provide information about the usage of your new project: "
    },
    {
        type: 'input',
        name: 'proj_contribution',
        message: "List any contribution guidelines for your project here: "
    },
    {
        type: 'input',
        name: 'proj_test_instructions',
        message: "Please list any test instructions for your new project: "
    },
    {
        type: 'checkbox',
        name: 'proj_licensing',
        message: 'please select any licensing that your project requires. MIT, Apache, and GPL are the most commonly used by developers, and are included here at the top of the list for convenience: ',
        choices: [
            {
                name: 'MIT License',   
            },
            {
                name: 'Apache License',
            },
            {
                name: 'GPL License',
            },
            {
                name: 'Affero GPL',
            },
            {
                name: 'Artistic License 2.0',
            },
            {
                name: 'BSD 3-Clause',
            },
            {
                name: 'BSD 2-Clause',
            },
            {
                name: 'Eclipse Public License 1.0',
            },
            {
                name: 'Mozilla Public License 2.0',
            },
            {
                name: 'Public Domain',
            }
        ]
    }
];

inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
});
// first array of questions for README info to be updated by user of app

// array for contributors to project

// array for licenses