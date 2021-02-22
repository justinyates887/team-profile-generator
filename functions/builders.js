const inquirer = require('inquirer');
const infos = require('./infos');
const content = require('./content');

//manager
const managerBuilder = () => {
    const numRegex = /[A-Z|a-z|!|@|#|$|%|^|&|*|-|_|=|+|?|/|{|}|[|\]||]/
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Please enter manager\'s name.',
            validate: function (answer) {
                if(answer.length === 0){
                    return console.log("No valid name recieved");
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'Please enter manager\'s employee ID.',
            validate: function (answer) {
                if(answer.length === 0){
                    return console.log("No valid ID recieved");
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Please enter manager\'s email.',
            validate: function (answer) {
                if(answer.length === 0){
                    return console.log("No valid email recieved");
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'managerNumber',
            message: 'Please enter manager\'s phone number.',
            validate: function (answer) {
                if(answer.length === 0){
                    return console.log("No valid number recieved");
                } else if(answer.numRegex){
                    return console.log('Phone number cannot contain letters or symbols.')
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'managerGithub',
            message: 'Please enter manager\'s Github username?.',
            validate: function (answer) {
                if(answer.length === 0){
                    return console.log("No valid email recieved");
                } else {
                    return true;
                }
            }
        }
    ]).then(async (answers) => {
        infos.managerInfo(answers);
    })
}

//Engineer
const engineerBuilder = () => {
    const numRegex = /[A-Z|a-z|!|@|#|$|%|^|&|*|-|_|=|+|?|/|{|}|[|\]||]/
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Please enter engineer\'s name.',
            validate: function (answer) {
                if(answer.length === 0){
                    return console.log("No valid name recieved");
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'Please enter engineer\'s employee ID.',
            validate: function (answer) {
                if(answer.length === 0){
                    return console.log("No valid ID recieved");
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Please enter engineer\'s email.',
            validate: function (answer) {
                if(answer.length === 0){
                    return console.log("No valid email recieved");
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerNumber',
            message: 'Please enter engineer\'s phone number.',
            validate: function (answer) {
                if(answer.length === 0){
                    return console.log("No valid number recieved");
                } else if(answer.numRegex){
                    return console.log('Phone number cannot contain letters or symbols.')
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'Please enter engineer\'s Github username?.',
            validate: function (answer) {
                if(answer.length === 0){
                    return console.log("No valid email recieved");
                } else {
                    return true;
                }
            }
        }
    ]).then(async (answers) => {
        infos.engineerInfo(answers);
    })
}

//Intern
const internBuilder = () => {
    const numRegex = /[A-Z|a-z|!|@|#|$|%|^|&|*|-|_|=|+|?|/|{|}|[|\]||]/
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Please enter intern\'s name.',
            validate: function (answer) {
                if(answer.length === 0){
                    return console.log("No valid name recieved");
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'internID',
            message: 'Please enter intern\'s employee ID.',
            validate: function (answer) {
                if(answer.length === 0){
                    return console.log("No valid ID recieved");
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Please enter intern\'s email.',
            validate: function (answer) {
                if(answer.length === 0){
                    return console.log("No valid email recieved");
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'internNumber',
            message: 'Please enter intern\'s phone number.',
            validate: function (answer) {
                if(answer.length === 0){
                    return console.log("No valid number recieved");
                } else if(answer.numRegex){
                    return console.log('Phone number cannot contain letters or symbols.')
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'internGithub',
            message: 'Please enter intern\'s Github username?.',
            validate: function (answer) {
                if(answer.length === 0){
                    return console.log("No valid email recieved");
                } else {
                    return true;
                }
            }
        }
    ]).then(async (answers) => {
        infos.internInfo(answers);
    })
}

const finishedPrompt = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'done',
            message: 'Would you like to add an engineer(e) or intern(i), or are you finished(f)?'
        }
    ]).then(async (answers) => {
        if(answers.done.toLowerCase() === 'e' || answers.done.toLowerCase() === 'engineer'){
            engineerBuilder();
        } else if(answers.done.toLowerCase() === 'i' || answers.done.toLowerCase() === 'intern'){
            internBuilder();
        } else if(answers.done.toLowerCase() === 'f' ||answers.done.toLowerCase() === 'finished'){
            content.content();
        }
    })
}

exports.managerBuilder = managerBuilder;
exports.internBuilder = internBuilder;
exports.engineerBuilder = engineerBuilder;
exports.finishedPrompt = finishedPrompt;
