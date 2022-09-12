const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialisation", () => {
    it("Test the Intern Constructor", () => {
      const id = 2;
      const name = "Susan";
      const email = "susan@email.com";
      const role = "Intern";
      const schoolName = "My School";

      const internObj = new Intern(id, name, email, schoolName);

      expect(internObj.getID()).toEqual(id);
      expect(internObj.getName()).toEqual(name);
      expect(internObj.getEmail()).toEqual(email);
      expect(internObj.getSchoolName()).toEqual(schoolName);
      expect(internObj.getGithubRole()).toEqual(role);
    });
  });
});
