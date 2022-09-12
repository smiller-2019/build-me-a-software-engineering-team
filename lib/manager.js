const Employee = require("./employee");

class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    // set common properties for all classes and also use super to be able to use this on officeNumber
    super(id, name, email);
    // unique property for an manager
    this.officeNumber = officeNumber;
  }

  getGithubOfficeNumber() {
    return this.officeNumber;
  }

  getGithubRole() {
    return "Manager";
  }
}

module.exports = Manager;
