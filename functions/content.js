const fs = require('fs');
const util = require("util");
const fileAsync = util.promisify(fs.writeFile);
const global = require("../global.json");
const builders = require('./builders');
const start = require('../index')
const inquirer = require('inquirer');

const content = async (managerInfo, engineerInfo, internInfo) => {
    let document = [];

    const header = '\
    <!DOCTYPE HTML>\n\
    <html>\n\
    <body>\n'

    const footer = '\
    </body>\n\
    </html>'

    document.push(header);

    const manArr = global.manArr;
    const engArr = global.engArr;
    const intArr = global.intArr;

    if(manArr.length < 1){
        console.log('No manager found, please add a manager!');
        builders.managerBuilder();
    }
        
    for(let i = 0; i < manArr.length; i++){
        document.push(manArr[i].name, manArr[i].id, manArr[i].email, manArr[i].phone, manArr[i].github);
    }
   
    for(let i = 0; i < engArr.length; i++){
        document.push(engArr[i].name, engArr[i].id, engArr[i].email, engArr[i].phone, engArr[i].github);
    }

    for(let i = 0; i < intArr.length; i++){
        document.push(intArr[i].name, intArr[i].id, intArr[i].email, intArr[i].phone, intArr[i].github);
    }

    document.push(footer);
    let page = document.join('');
    
    try{
        fileAsync('index.html', page);
        console.log('Team page sucessfully created!');
    } catch {
        console.error;
    }

    inquirer
    .prompt([
        {
            type: 'input',
            name: 'startOver',
            message: 'Would you like to start over?',
            validate: function (answer) {
                if(answer.length === 0){
                    return console.log("No valid number recieved");
                } else if(answer.numRegex){
                    return console.log('Phone number cannot contain letters or symbols.')
                } else {
                    return true;
                }
            }
        }
    ]).then(async (answers) =>{
        if (answers.startOver.toLowerCase() ==='yes' || answers.startOver.toLowerCase() === 'y'){
            start.starter();
        } else {
            return;
        }
    })
} 

exports.content = content;