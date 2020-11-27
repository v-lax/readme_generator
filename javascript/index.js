//requiring our necessary modules. We will load in 'fs' from node and 
//the 'inquirer' package. 
const { create } = require('domain');
const fs = require('fs');
const inq = require('inquirer');
const createMarkDown = require('./createMarkDown.js');


//questions that will be presented to the user
var questions = [
    {
        type:'input',
        name:'projectName',
        message:'What is the name of your project?',
        validate: async (input) => {
            if (input === '') {
               return 'Whoops! You forgot to provide a response. Please enter in a valid title';
            }
            return true;
         }
    },
    {
        type:'input',
        name:'projectDescription',
        message:'What is your project about?',
        validate: async (input) => {
            if (input === '') {
               return 'Whoops! You forgot to provide a response. Please enter in a description';
            }
            return true;
         }
    },
    {
        type:'input',
        name:'installation',
        message:'What are the instructions for installation?',
        validate: async (input) => {
            if (input === '') {
               return 'Whoops! You forgot to provide a response. Please describe how someone can install your project. If there is not installation process, please type in NA';
            }
            return true;
         }
    },
    {
        type:'input',
        name:'usage',
        message:'What are some of the ways I can use this project?',
        validate: async (input) => {
            if (input === '') {
               return 'Whoops! You forgot to provide a response. Please describe how someone may be able to use your project.';
            }
            return true;
         }
    },
    {
        type:'list',
        name:'licenses',
        message:'What type of license does your project use?',
        choices:['GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0','MIT License','Boost Software License 1.0','The Unlicense']
    },
    {
        type:'input',
        name:'contributions',
        message:'How can someone add their contributions to this project',
        validate: async (input) => {
            if (input === '') {
               return 'Please describe how one can contribute to your project.';
            }
            return true;
         }
    },
    {
        type:'input',
        name:'test',
        message:'What are the steps one should take in order to test this project?',
        validate: async (input) => {
            if (input === '') {
               return 'Please describe how someone can run tests. If testing is not applicable to your project, please type in NA';
            }
            return true;
         }
    },
    {
        type:'input',
        name:'Github',
        message:'What is your github username?',
        validate: async (input) => {
            if (input === '') {
               return 'Please enter in your github username so that people can reach out to you if they have questions about your project. ';
            }
            return true;
         }
    },
    {
        type:'input',
        name:'Email',
        message:'What is your email?',
        validate: async (input) => {
            if (input === '') {
               return 'Please enter in an email so that people can reach out to you if you have questions. ';
            }
            return true;
         }
    }
]

inq.prompt(questions)
   .then((response)=>{

    var data = createMarkDown(response)

    const filename = `${response.projectName.toLowerCase().split(' ').join('')}.md`;
    fs.writeFile(filename, data, (err) =>
        err ? console.log(err) : console.log('Generating readme file. Hang tight...')
    );

})
