// packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');
const generateReadMe = ('./utils/generateReadMe');

// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project.',
        validate: titleInput => {
            if (titleInput) {
                return true;
             } else {
                console.log('You must provide a title for your project!');
             }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('You must provide a description of your project!');
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please provide instructions on how to install your application.',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('You must provide installation instructions!');
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use of your application.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You must provide usage instructions!');
            }
        }
    },
    {
        type: 'confirm',
        name: 'contributeConfirm',
        message: 'Are there other contributors for this project?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please list the other contributors to this project',
        when: ({ contributeConfirm }) => {
            if (contributeConfirm) {
                return true
            } else {
                return false
            }
        }
        
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please input your license for this project',
        choices: ['Apache 2.0', 'GNU General Public License 3.0', 'MIT License', 'Mozilla Public License Version 2.0','none']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'If there testing options for your project, please describe them here:'
    }
];

// TODO: Create a function to write README file
function writeToFile(Samp) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        fs.writeFile("SampleREADME.md", generateReadMe(answers), err => {
            console.log(err)
        })
    });
}

// Function call to initialize app
init();
