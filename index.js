// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';


// TODO: Create an array of questions for user input
 inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'This is a README generator console application. To start please enter the title of your project:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project: ',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Add installation instructions: ',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Add usage information: ', 
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Add contribution guidelines: ', 
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Add test instructions: ', 
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select the license for this project: ', 
            choices: ['MIT', 'GPL', 'BSD', 'APACHE']
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Finally please provide the email address for people to reach out to you if they have any questions: ', 
        }
    ])

    .then(answers => {
        const data = generateMarkdown(answers);
        fs.writeFile('README.md', data, (err) => {
            if (err) {
                console.log('There was an error')
            } else {
                console.log('Your README file was created');
            }
        })
    });




// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then(data) => {
//         fs.writeToFile(readMe.md, )
//     }
// }

// // Function call to initialize app
// init();
