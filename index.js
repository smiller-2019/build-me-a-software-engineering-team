const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const buildWebpage = require("./src/buildWebpage");

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
        buildWebpage(managers, engineers, interns);
        break;
    }
  });
};

mainMenu();
