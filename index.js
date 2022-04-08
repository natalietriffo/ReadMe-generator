// TODO: Include packages needed for this application
const fs = require ("fs")
const path = require ("path")
const inquirer = require ("inquirer")
const generateMD = require ("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message:"What is the title of your project",
    },
    {
        type: "input",
        name: "description",
        message:"What is the description of your project",
    },
    {
        type: "input",
        name: "GitHubURL",
        message:"What is your Github",
    },
    {
        type: "input",
        name: "Email",
        message:"What is your Email",
    },
    
    {
         type: 'checkbox',
        message: 'Please provide the license you used for this project',
        name: 'license',
        choices: ["MIT", "Apache", "Mozilla Public License", "none"]
    },

    {
        type: "input",
        name: "questions",
        message:"Do you have any questions about the project?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((Response)=>{
        console.log("writingReadME")
        writeToFile("README.md",generateMD({...Response}))
    })
}

// Function call to initialize app
init();

