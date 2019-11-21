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

// async function promptUser() {
//     return inquirer.prompt([
//       {
//         type: "list",
//         name: "color",
//         message: "What is your favorite color?",
//         choices: ["red","orange","yellow","green","blue","purple"]
//       },
//       {
//         type: "input",
//         name: "github",
//         message: "Enter your GitHub Username"
//       }
//     ]);
//   }

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