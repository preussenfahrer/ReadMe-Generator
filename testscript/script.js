'use strict';
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("../generateMarkdown");

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
        type: 'list',
        name: 'proj_licensing',
        message: 'please select any licensing that your project requires. MIT, Apache, and GPL are the most commonly used by developers, and are included here at the top of the list for convenience: ',
        choices: [
            'MIT License',
            'Apache License',
            'GPL License',
            'Affero GPL',
            'Artistic License 2.0',
            'BSD 3-Clause',
            'BSD 2-Clause',
            'Eclipse Public License 1.0',
            'Mozilla Public License 2.0',
            'Public Domain',
        ],
    },
    {
        type: 'input',
        name: 'proj_confirm',
        message: 'Are you satisfied with the Read Me file you are about to generate? '

    },
];

inquirer.prompt(questions).then(answers => {
    const userMarkdown = generateMarkdown(answers);
    fs.writeFile('README.md', userMarkdown, (err) => err ? console.error(err) : console.log('Success!')
    );
}) 



// function init() {
//     inquirer.prompt(questions).then((answers) => {
//         console.log(JSON.stringify(answers, null, '  '));
//     });
//     const readme = 
// };
    


