const Employee = require("./employee");

class Intern extends Employee {
  constructor(id, name, email, schoolName) {
    // set common properties for all classes and also use super to be able to use this on officeNumber
    super(id, name, email);
    // unique property for an manager
    this.schoolName = schoolName;
  }

  getSchoolName() {
    return this.schoolName;
  }

  getGithubRole() {
    return "Intern";
  }
}

module.exports = Intern;
