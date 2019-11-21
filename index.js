const jest = require("jest");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const mustache = require("mustache");
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const writeFileAsync = util.promisify(fs.writeFile);
const employeeArray = [];
async function addEmployee() {
    return inquirer.prompt(
        {
            type: "list",
            name: "add",
            message: "Would you like to add an Employee?",
            choices: ["Yes","No"]
        }
    );
}
async function addAnother() {
    return inquirer.prompt(
        {
            type: "list",
            name: "add",
            message: "Would you like to add another Employee?",
            choices: ["Yes","No"]
        }
    );
}
async function employeeRole() {
    return inquirer.prompt(
        {
            type: "list",
            name: "role",
            message: "What is the employee role?",
            choices: ["Employee", "Manager", "Engineer", "Intern"]
        }
    );
}
async function inputID() {
    return inquirer.prompt(
        {
            type: "number",
            name: "id",
            message: "What is the employee ID?",
        }
    );
}
async function inputOfficeNumber() {
    return inquirer.prompt(
        {
            type: "number",
            name: "officeNumber",
            message: "What is the manager's office number?",
        }
    );
}
async function inputGithub() {
    return inquirer.prompt(
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?",
        }
    );
}
async function inputSchool() {
    return inquirer.prompt(
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?",
        }
    );
}

// function generateHTML(answers, gitInfo, stars) {
//     return `
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//     <title>Document</title>
//   </head>
//   <body style="background-color: white">
    
//   </body>
//   </html>`;
//   }

// async function init() {
//     console.log("hi");
//     try {
//       const answers = await promptUser();
  
//       const gitInfo = await gitAPICall(answers);
//       const gitStars = await gitStarsAPICall(answers);
//       const stars = gitStars.data.length;
  
//       const html = generateHTML(answers, gitInfo, stars);
  
//       await writeFileAsync("index.html", html);
  
//       console.log("Successfully wrote to index.html");
//     } catch (err) {
//       console.log(err);
//     }
//   }
  
//   init();