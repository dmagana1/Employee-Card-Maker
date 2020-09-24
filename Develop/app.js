const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];
    
createManager();


    function createManager() {
        inquirer.prompt([{
            type:"input",
            name:"name",
            message:"Enter Manger's Name"  
        },
        {
            type:"input",
            name:"email",
            message:"Enter Manger's Email"
        },
        {
            type:"input",
            name:"id",
            message:"Enter Manger's ID Number"
        },
        {
            type:"input",
            name:"num",
            message:"Enter Manger's Office Number"
        },
    ]).then((answers) => {
        let manger = new Manager(
            answers.name,
            answers.email,
            answers.id,
            answers.num
        );
    teamMembers.push(manger);
        createTeam(); 

    });
}

function addEngineer() {
    inquirer.prompt([{
        type:"input",
        name:"name",
        message:"Enter Engineer's Name"
    },
    {
        type:"input",
        name:"email",
        message:"Enter Engineer's Email"
    },
    {
        type:"input",
        name:"id",
        message:"Enter Engineer ID Number"
    },
    {
        type:"input",
        name:"git",
        message:"Enter Engineer's Github Username"
    }
]).then((answers) => {
    let engineer = new Engineer(
        answers.name,
        answers.email,
        answers.id,
        answers.git
    );
    teamMembers.push(engineer);
        createTeam(); 

    })
}

function addIntern() {
    inquirer.prompt([{
        type:"input",
        name:"name",
        message:"Enter Interns name"
    },
    {
        type:"input",
        name:"email",
        message:"Enter Intern's Email"
    },
    {
        type:"input",
        name:"id",
        message:"Enter Intern's ID Number"
    },
    {
        type:"input",
        name:"school",
        message:"Enter College Name that the Intern attended"
    }
]).then((answers) => {
    let intern = new Intern(
        answers.name,
        answers.email,
        answers.id,
        answers.school
    );
    teamMembers.push(intern);
     createTeam(); 

    })
}
function createTeam() {

    inquirer.prompt([{
        type:"list",
        name:"employees",
        message:"Would You like to add more Employees?",
        choices:["Manger", "Engineer", "Intern", "None"]
    }
]).then((answers) => {
    switch (answers.teamMembers) {
        case "Engineer":
            addEngineer();
            break;
        case "Intern":
            addIntern();
            break;
        default:
            buildTeam();
    }
});
}
function buildTeam() {
    const renderteamMembers = render(teamMembers);
    fs.writeFile("./team.html", renderteamMembers, function (error) {
        if (error) {
            return console.log(error);
        }
        console.log("You Have Created Your Team Profile");
    })
}