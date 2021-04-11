//node modules
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Our readme info
const writeFile = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
      {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Instructions to be followed?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Do you have any credits?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What licensing am I using?',
      choices: ['MIT','Apache', 'ISC']
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address',
    },
]);
};
const generateReadMe = (answers) =>
`# ${answers.title}
## Instructions:
${answers.instructions}
## Credits
${answers.credits}
## Installation: 
${answers.instructions}
## License: ${answers.license}
## Questions:
Contact me @
GitHub: https://github.com/${answers.github}
Email: ${answers.email}`;


//Writing a FileAsync as a promise
const init = () => {
    promptUser()
      .then((answers) => writeFile('README.md', generateReadMe (answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
  // Initialize
  init();