const inquirer = require('inquirer');
const global = require("../global.json");
const builders = require('./builders')

const managerInfo = async (answers) => {
    let manObj = {
        name: `<h5>${answers.managerName}<h5>\n`,
        id: `<strong>${answers.managerID}</strong>\n`,
        email: `<a href="mailto:${answers.managerEmail}">${answers.managerEmail}</a>\n`,
        phone: `<p>${answers.managerNumber}</p>\n`,
        github: `<a href="https://github.com/${answers.managerGithub}">Github</a>\n`
    };
    global.manArr.push(manObj);
    console.log('Manager sucessfully added!');
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'anotherManager',
            message: 'Would you like to add another manager?',
            validate: function (answer) {
                if(answer.length === 0){
                    return console.log("No valid input recieved");
                } else {
                    return true;
                }
            }
        }
    ]).then(async (answers) => {
        if(answers.anotherManager.toLowerCase() === 'y' || answers.anotherManager.toLowerCase() === 'yes'){
            builders.managerBuilder();
        } else if (answers.anotherManager.toLowerCase() === 'n' || answers.anotherManager.toLowerCase() === 'no'){
            builders.finishedPrompt();
        } else {
            console.log('No valid input recieved.')
        }
    })
}

const engineerInfo = async (answers) => {
    let engObj = {
        name: `<h5>${answers.engineerName}<h5>\n`,
        id: `<strong>${answers.engineerID}</strong>\n`,
        email: `<a href="mailto:${answers.engineerEmail}">${answers.engineerEmail}</a>\n`,
        phone: `<p>${answers.engineerNumber}</p>`,
        github: `<a href="https://github.com/${answers.engineerGithub}">Github</a>\n`
    };
    global.engArr.push(engObj);
    console.log('Engineer sucessfully added!');
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'anotherEngineer',
            message: 'Would you like to add another Engineer?',
            validate: function (answer) {
                if(answer.length === 0){
                    return console.log("No valid input recieved");
                } else {
                    return true;
                }
            }
        }
    ]).then(async (answers) => {
        if(answers.anotherEngineer.toLowerCase() === 'y' || answers.anotherEngineer.toLowerCase() === 'yes'){
            builders.engineerBuilder();
        } else if (answers.anotherEngineer.toLowerCase() === 'n' || answers.anotherEngineer.toLowerCase() === 'no'){
            builders.finishedPrompt();
        } else {
            console.log('No valid input recieved.')
        }
    })
}


const internInfo = async (answers) => {
    let intObj = {
        name: `<h5>${answers.internName}<h5>\n`,
        id: `<strong>${answers.internID}</strongn`,
        email: `<a href="mailto:${answers.internEmail}">${answers.internEmail}</a>\n`,
        phone: `<p>${answers.internNumber}</p>\n`,
        github: `<a href="https://github.com/${answers.internGithub}">Github</a>\n`
    };
    global.intArr.push(intObj);
    console.log('Intern sucessfully added!');
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'anotherIntern',
            message: 'Would you like to add another Intern?',
            validate: function (answer) {
                if(answer.length === 0){
                    return console.log("No valid input recieved");
                } else {
                    return true;
                }
            }
        }
    ]).then(async (answers) => {
        if(answers.anotherIntern.toLowerCase() === 'y' || answers.anotherIntern.toLowerCase() === 'yes'){
            builders.internBuilder();
        } else if (answers.anotherIntern.toLowerCase() === 'n' || answers.anotherIntern.toLowerCase() === 'no'){
            builders.finishedPrompt();
        } else {
            console.log('No valid input recieved.')
        }
    })
}

exports.managerInfo = managerInfo;
exports.engineerInfo = engineerInfo;
exports.internInfo = internInfo;