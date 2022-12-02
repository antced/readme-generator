
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your title?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'What is your description?',
                name: 'description',
            },
            {
                type: 'input',
                message: 'What are your installation instructions?',
                name: 'install',
            },
            {
                type: 'input',
                message: 'What are your usage instructions?',
                name: 'usage',
            },
            {
                type: 'list',
                message: 'What license are you using?',
                choices: ["MIT","GNU","Apache","ISC"],
                name: 'license'
            },
            {
                type: 'input',
                message: 'How can people contribute?',
                name: 'contribute',
            },
            {
                type: 'input',
                message: 'How can people test?',
                name: 'tests',
            },
            {
                type: 'input',
                message: 'Where should people send questions?',
                name: 'questions',
            },
        ])
        .then((response) =>
        {const readmeInfo = generateMarkdown(response);
        fs.writeFile('README.md', readmeInfo, (err) =>
        err ? console.error(err) : console.log('Created README')
        );}
        );
}



// Function call to initialize app
init();
