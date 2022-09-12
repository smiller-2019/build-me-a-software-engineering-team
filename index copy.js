const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const fsc = require("fs");

const mainMenuQuestions = [
  {
    type: "list",
    default: "Build my team",
    choices: [
      "Add a Manager",
      "Add an Engineer",
      "Add an Intern",
      "Build my team",
    ],
    message: "Select a job role to add to your team then build your team: ",
    name: "option",
  },
];

const managerQuestions = [
  {
    type: "input",
    message: "Enter the manager's name: ",
    name: "managerName",
  },

  {
    type: "input",
    message: "Enter the manager's employee ID: ",
    name: "managerEmployeeID",
  },
  {
    type: "input",
    message: "Enter the manager's email address: ",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "Enter the manager's office number: ",
    name: "managerOfficeNumber",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "Enter the engineer's name: ",
    name: "engineerName",
  },

  {
    type: "input",
    message: "Enter the engineer's employee ID: ",
    name: "engineerEmployeeID",
  },
  {
    type: "input",
    message: "Enter the engineer's email address: ",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "Enter the engineer's github name: ",
    name: "engineerGithub",
  },
];
const internQuestions = [
  {
    type: "input",
    message: "Enter the intern's name: ",
    name: "internName",
  },

  {
    type: "input",
    message: "Enter the intern's employee ID: ",
    name: "internEmployeeID",
  },
  {
    type: "input",
    message: "Enter the intern's email address: ",
    name: "internEmail",
  },
  {
    type: "input",
    message: "Enter the intern's school name: ",
    name: "internSchoolName",
  },
];

const managers = [];
const engineers = [];
const interns = [];
let generateHTML = "";

const managersQuestions = () => {
  inquirer.prompt(managerQuestions).then((response) => {
    // create the manager object
    const manager = new Manager(
      response.managerEmployeeID,
      response.managerName,
      response.managerEmail,
      response.managerOfficeNumber
    );
    // add manager details to the array
    managers.push(manager);

    // display the main menu
    mainMenu();
  });
};

const engineersQuestions = () => {
  inquirer.prompt(engineerQuestions).then((response) => {
    // create the engineer object
    const engineer = new Engineer(
      response.engineerEmployeeID,
      response.engineerName,
      response.engineerEmail,
      response.engineerGithub
    );
    // add engineer details to the array
    engineers.push(engineer);

    // display the main menu
    mainMenu();
  });
};

const internsQuestions = () => {
  inquirer.prompt(internQuestions).then((response) => {
    // create the engineer object
    const intern = new Intern(
      response.internEmployeeID,
      response.internName,
      response.internEmail,
      response.internSchoolName
    );
    // add engineer details to the array
    interns.push(intern);

    // display the main menu
    mainMenu();
  });
};

const mainMenu = () => {
  inquirer.prompt(mainMenuQuestions).then((response) => {
    console.log(response);
    switch (response.option) {
      case "Add a Manager":
        // ask manager questions
        managersQuestions();
        break;

      case "Add an Engineer":
        // ask manager questions
        engineersQuestions();
        break;

      case "Add an Intern":
        // ask manager questions
        internsQuestions();
        break;

      case "Build my team":
        // ask manager questions
        console.log("Build a team");
        createHTML();
        createCSS();
        break;
    }
  });
};

// format and create HTML
function createHTML() {
  // create variable to hold format for each card, one for each role
  let addCard = "";
  // variable to hold format of html file. This is the head data and beginning of the body
  generateHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/style.css">
  <title>Build me a software engineer team</title>
</head>
<body>
<header>
<div class="header-main">
<h1>My Team</h1>
</div>
</header>
<div class="d-flex justify-content-center flex-wrap">
`;

  // format the manager details for each manager for the html file
  // read the manager details from the array and place into the manager object
  managers.forEach((manager) => {
    addCard = `<div class="card bg-light" style="width: 18rem;">
  <div class="card-header bg-primary text-white">
  <h2 class="card-title">${manager.getName()}</h2>
  <h2 class="card-subtitle mb-2 ">${manager.getGithubRole()}</h2>
  </div>
  <div class="card-body p-4">    
  <ul class="list-group list-group-flush border">
  <li class="list-group-item">ID:${manager.getID()}</li>
  <li class="list-group-item"> Email: <a href="#" class="card-link">${manager.getEmail()}</a></li>
  <li class="list-group-item">GitHub: <a href="#" class="card-link">${manager.getGithubOfficeNumber()}</a></li>
</ul>
</div>
</div>`;
    generateHTML += addCard;
    addCard = "";
  });
  // format the engineer details for each engineer for the html file
  // read the engineer details from the array and place into the engineer object
  engineers.forEach((engineer) => {
    addCard = `<div class="card bg-light" style="width: 18rem;">
    <div class="card-header bg-primary text-white">
    <h2 class="card-title">${engineer.getName()}</h2>
    <h2 class="card-subtitle mb-2 ">${engineer.getGithubRole()}</h2>
    </div>
    <div class="card-body p-4">    
    <ul class="list-group list-group-flush border">
    <li class="list-group-item">ID:${engineer.getID()}</li>
    <li class="list-group-item"> Email: <a href="mailto:${engineer.getGithubName()}" class="card-link">${engineer.getEmail()}</a></li>
    <li class="list-group-item">GitHub: <a href=https://github.com/${engineer.getGithubName()}/ class="card-link">${engineer.getGithubName()}</a></li>
  </ul>
  </div>
  </div>`;
    generateHTML += addCard;
    addCard = "";
  });

  // format the intern details for each intern for the html file
  // read the intern details from the array and place into the intern object
  interns.forEach((intern) => {
    addCard = `<div class="card bg-light" style="width: 18rem;">
    <div class="card-header bg-primary text-white">
    <h2 class="card-title">${intern.getName()}</h2>
    <h2 class="card-subtitle mb-2 ">${intern.getGithubRole()}</h2>
    </div>
    <div class="card-body p-4">    
    <ul class="list-group list-group-flush border">
    <li class="list-group-item">ID:${intern.getID()}</li>
    <li class="list-group-item"> Email: <a href="#" class="card-link">${intern.getEmail()}</a></li>
    <li class="list-group-item">GitHub: <a href="#" class="card-link">${intern.getSchoolName()}</a></li>
  </ul>
  </div>
  </div>`;
    generateHTML += addCard;
    addCard = "";
  });

  // format the end of the html file
  generateHTML += ` 
    </div>
   </body>
  </html>`;
  // create html file index.html
  fs.writeFile("./dist/index.html", generateHTML, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}

// format the css file and create the file
function createCSS() {
  generateCSS = `
  .header-main {
    background: red;
    color: #fff;
    height: 100px;
    margin-bottom: 2%;
    text-align: center;
    padding: 1%;
  }`;

  // create html file index.html
  fsc.writeFile("./dist/css/style.css", generateCSS, (err) =>
    err ? console.log(err) : console.log("Successfully created style.css!")
  );
}

mainMenu();
