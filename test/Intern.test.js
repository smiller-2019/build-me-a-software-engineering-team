const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialisation", () => {
    it("Test the Intern Constructor", () => {
      const id = 2;
      const name = "Susan";
      const email = "susan@email.com";
      const githubName = "susan-2019";
      const role = "Intern";

      const internObj = new Intern(id, name, email, githubOfficeNumber);

      expect(internObj.getID()).toEqual(id);
      expect(internObj.getName()).toEqual(name);
      expect(internObj.getEmail()).toEqual(email);
      expect(internObj.getSchoolName()).toEqual(githubOfficeNumber);
      expect(internObj.getGithubRole()).toEqual(role);
    });
  });
});
