const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const {render, renderManager} = require("./lib/htmlRenderer");

const teamMembers = ;
const idArray = [];

function promptUser(answer) {
    return inquirer.prompt([
        {
            type: "list",
            name:"role",
            message:"What Position Would You like to Create?",
            choices: ["Engineer", "Intern", "Manager", "No More Employees"]
        }, 
      
    ]).then(function (res) {
        console.log(res)
            if (res.role === "Engineer") {
                inquirer.prompt ([
                    {
                        type: "input",
                        name: "name",
                        message: "Enter Employees Name"
                    },
                   {
                       type: "input",
                       name: "github",
                       message: "Enter Github Username"
                   },
                   {
                       type: "input",
                       name: "email",
                       message: "Enter Employees Email"
                   }
                ])
