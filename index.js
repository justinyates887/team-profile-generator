const inquirer = require('inquirer');
const global = require("./global.json");

const starter = async () => {
    console.log ('===============================================================================');
        inquirer
            .prompt([
                {
                    type: 'input',
                    name:'managerBool',
                    message: 'Do you have a manager to add?',
                    validate: function (answer) {
                            if(answer.length === 0){
                                return console.log("No valid name recieved");
                            } else {
                                return true;
                            }
                        }
                }
            ]).then(async (answers) => {
                if(answers.managerBool.toLowerCase() === 'yes' || answers.managerBool.toLowerCase() === 'y'){
                    const mb = require('./functions/builders');
                    mb.managerBuilder();
                }
                else{
                    mb.finishedPrompt();
                }
            })
}

exports.starter = starter;
starter();