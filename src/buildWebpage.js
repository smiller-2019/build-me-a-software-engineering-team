const inquirer = require("inquirer");
const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const fs = require("fs");
const fsc = require("fs");

// format and create HTML
function createHTMLWebpage(managers, engineers, interns) {
  // create variable to hold format for each card, one for each role
  let addCard = "";
  // variable to hold format of html file. This is the head data and beginning of the body
  generateHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
  <link rel="stylesheet" href="./css/style.css">
  <title>Build me a software engineer team</title>
</head>
<body>
<header>
<div class="header-main">
<h1>My Team</h1>
</div>
</header>
<div class="custom-flex">
`;

  // format the manager details for each manager for the html file
  // read the manager details from the array and place into the manager object
  managers.forEach((manager) => {
    addCard = `<div class="card bg-light" style="width: 18rem;">
  <div class="card-header bg-primary text-white">
  <h2 class="card-title"> ${manager.getName()}</h2>
  <h2 class="card-subtitle mb-2 "><i class="bi bi-cup-hot"></i> ${manager.getGithubRole()}</h2>
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
    <h2 class="card-title"> ${engineer.getName()}</h2>
    <h2 class="card-subtitle mb-2 "><i class="bi bi-eyeglasses"></i> ${engineer.getGithubRole()}</h2>
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
    <h2 class="card-subtitle mb-2 "><i class="bi bi-person"></i> ${intern.getGithubRole()}</h2>
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

  // call function to create the style.css file
  createCSS();
}

// format the css file and create the file
function createCSS() {
  generateCSS = `
  .custom-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

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

module.exports = createHTMLWebpage;
