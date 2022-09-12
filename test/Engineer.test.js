const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialisation", () => {
    it("Test the Engineer Constructor", () => {
      const id = 2;
      const name = "Susan";
      const email = "susan@email.com";
      const githubName = "susan-2019";
      const role = "Engineer";

      const engineerObj = new Engineer(id, name, email, githubName);

      expect(engineerObj.getID()).toEqual(id);
      expect(engineerObj.getName()).toEqual(name);
      expect(engineerObj.getEmail()).toEqual(email);
      expect(engineerObj.getGithubName()).toEqual(githubName);
      expect(engineerObj.getGithubRole()).toEqual(role);
    });
  });
});
