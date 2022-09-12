const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialisation", () => {
    it("Test the Employee Constructor", () => {
      const id = 2;
      const name = "Susan";
      const email = "susan@email.com";

      const employeeObj = new Employee(id, name, email);

      expect(employeeObj.getID()).toEqual(id);
      expect(employeeObj.getName()).toEqual(name);
      expect(employeeObj.getEmail()).toEqual(email);
    });
  });
});
