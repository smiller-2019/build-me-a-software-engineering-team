const Employee = require("./employee");

class Engineer extends Employee {
  constructor(id, name, email, githubName) {
    // set common properties for all classes and also use super to be able to use this on githubName
    super(id, name, email);
    // unique property for an engineer
    this.githubName = githubName;
  }

  getGithubName() {
    return this.githubName;
  }

  getGithubRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
