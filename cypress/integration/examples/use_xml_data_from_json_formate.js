
import LoginPagess from '../pageobject/page' // this will import the all methode under page file under pageobject folder
const testData = require("../../fixtures/testdata.json");// this will fetch the value from testdata file under fixture folder
describe("Dynamically Generated Tests", () => {
  testData.forEach((testDataRow,qbc) => { // run loop to enter value multiple time 
    const data = {
      username: testDataRow.username,
      password: testDataRow.password };

    context(`Generating a test for ${data.username}`, () => {
      it("should fail to login for the specified details", () => {
        const login=new LoginPagess // this will store all methode of login pagess to constant var login for future use
        login.visit(); // directly call visit method with variable
        login.fillusername(data.username);// while running loop this will take data from testdata file and enter here at username
        login.fillpassword(`${data.password}{enter}`); // while running loop this will take data from testdata file and enter here at password
        
      });
    });
  });
});