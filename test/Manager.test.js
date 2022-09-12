const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialisation", () => {
    it("Test the Manager Constructor", () => {
      const id = 2;
      const name = "Susan";
      const email = "susan@email.com";
      const githubName = "susan-2019";
      const role = "Manager";
      const officeNumber = 20;

      const managerObj = new Manager(id, name, email, officeNumber);

      expect(managerObj.getID()).toEqual(id);
      expect(managerObj.getName()).toEqual(name);
      expect(managerObj.getEmail()).toEqual(email);
      expect(managerObj.getGithubOfficeNumber()).toEqual(officeNumber);
      expect(managerObj.getGithubRole()).toEqual(role);
    });
  });
});
