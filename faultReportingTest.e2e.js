// detox recorder --configuration "ios.sim.debug" --simulatorId booted --outputTestFile "~/Desktop/RecordedTest.js" --testName "My Recorded Test1" --record
//detox recorder --bundleId "com.example.myApp" --simulatorId booted --outputTestFile "~/Desktop/RecordedTest.js" --testName "My Recorded Test" --record
//detox test -c ios.sim.debug
//detox test menuTabTest.e2e -c ios.sim.debug

const { action } = require("@storybook/addon-actions");
const { waitFor } = require("@testing-library/react-native");
const { tap } = require("lodash");
const { util } = require("prettier");
const testIDs = require("./testIDs");
const utils = require("./utils");

describe('Apply for Assistance Scheme Card Tests', () => {
  beforeAll(async () => {
    //await device.installApp();
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.launchApp({delete: true});
    await device.reloadReactNative();
  });

  it('Other category, log in and send', async () => { 
    await element(by.text(testIDs.WelcomeScreen.continueWithoutButton)).tap();
    await element(by.text(testIDs.BottomNavigationRow.menuButton)).tap();
    await utils.scrollDownUntilVisible(testIDs.MenuTab.faultReportingButton);
    await element(by.text(testIDs.MenuTab.FaultReporting)).tap();
    await element(by.text(testIDs.FaultReporting.reportFaultButton)).tap();
    await element(by.text(testIDs.FaultReporting.otherCategory)).tap();
    await element(by.text(testIDs.FaultReporting.nextButton)).tap();
    await element(by.label(testIDs.FaultReporting.reasonField)).atIndex(5).replaceText(utils.ReasonForFault.CharacterReason);
    await element(by.text(testIDs.FaultReporting.nextButton)).tap();
    await element(by.text(testIDs.FaultReporting.photoOfFaultHeading)).tap();
    await element(by.text(testIDs.FaultReporting.nextButton)).tap();
    await element(by.text(testIDs.FaultReporting.loginButton)).tap();
    await element(by.text(testIDs.FaultReporting.loginButton)).tap();
    await element(by.label(testIDs.LoginPage.emailField)).atIndex(6).replaceText(utils.ValidEmailCredentials.email);
    await element(by.label(testIDs.LoginPage.passwordField)).atIndex(6).replaceText(utils.ValidEmailCredentials.password);
    await element(by.text(testIDs.LoginPage.loginButton)).tap();
    await utils.scrollDownUntilVisible(testIDs.FaultReporting.nextButton);
    await element(by.text(testIDs.FaultReporting.nextButton)).tap();
    await element(by.text(utils.ValidEmailCredentials.email)).tap();
    await utils.scrollDownUntilVisible(testIDs.FaultReporting.summaryPhotoHeader);
    await element(by.text("Edit")).atIndex(2).tap();
    // NEED TO CHECK THISawait element(by.label("Please provide as much information as possible")).atIndex(5).replaceText(utils.ReasonForFault.CharacterReason);
    await element(by.text(testIDs.FaultReporting.saveButton)).tap();
    await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    await element(by.text(testIDs.FaultReporting.submitButton)).tap();
    await element(by.text(testIDs.FaultReporting.faultApplyConfirmedText)).tap();
  });

  it('Log in, make Train report', async () => { 
    await element(by.text(testIDs.WelcomeScreen.loginButton)).tap();
    await element(by.label(testIDs.LoginPage.emailField)).atIndex(6).replaceText(utils.ValidEmailCredentials.email);
    await element(by.label(testIDs.LoginPage.passwordField)).atIndex(6).replaceText(utils.ValidEmailCredentials.password);
    await element(by.text(testIDs.LoginPage.loginButton)).tap();
    await element(by.text(testIDs.BottomNavigationRow.menuButton)).tap();
    await utils.scrollDownUntilVisible(testIDs.MenuTab.faultReportingButton);
    await element(by.text(testIDs.MenuTab.faultReportingButton)).tap();
    await element(by.text(testIDs.FaultReporting.reportFaultButton)).tap();
    await element(by.text("Train")).tap();
    await element(by.type("RCTTextView")).atIndex(2).tap();
    await element(by.type("RCTUITextField")).atIndex(0).replaceText(utils.FaultReportingCredentials.departingStation);
    await element(by.text(testIDs.FaultReporting.searchForAStationHeader)).tap();
    await element(by.text(utils.FaultReportingCredentials.departingStationCode)).tap();
    await element(by.type("RCTTextView")).atIndex(28).tap();
    await element(by.type("RCTUITextField")).atIndex(0).replaceText(utils.FaultReportingCredentials.arrivalstation);
    await element(by.text(testIDs.FaultReporting.searchForAStationHeader)).tap();
    await element(by.text(utils.FaultReportingCredentials.arrivalStationCode)).tap();
    await element(by.label(testIDs.FaultReporting.datePickerField)).atIndex(1).tap();
    await element(by.type("RNDateTimePicker")).setDatePickerDate(utils.GetDate.faultReportingDate, "ISO8601");
    await element(by.text(testIDs.FaultReporting.confirmButton)).tap();
    await element(by.label(testIDs.FaultReporting.timePickerField)).atIndex(1).tap();
	await element(by.text(testIDs.FaultReporting.confirmButton)).tap();
    await element(by.text("to London Charing Cross")).atIndex(0).tap();
    await utils.scrollDownUntilVisible(testIDs.FaultReporting.nextButton);
    await element(by.text(testIDs.FaultReporting.nextButton)).tap();
    await element(by.type("RCTUITextField")).atIndex(0).replaceText(utils.FaultReportingCredentials.coachNumber);
    await element(by.text(testIDs.FaultReporting.nextButton)).tap();
    await element(by.label(testIDs.FaultReporting.reasonField)).atIndex(5).replaceText(utils.ReasonForFault.CharacterReason);
    await element(by.text(testIDs.FaultReporting.nextButton)).tap();
    await element(by.text(testIDs.FaultReporting.photoOfFaultHeading)).tap();
    await element(by.text(testIDs.FaultReporting.nextButton)).tap();
    await element(by.text(testIDs.FaultReporting.contactDetailsHeading)).tap();
    await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    await element(by.text(testIDs.FaultReporting.nextButton)).tap();
    await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    await element(by.text(testIDs.FaultReporting.submitButton)).tap();
    await element(by.text(testIDs.FaultReporting.faultApplyConfirmedText)).tap();
    await element(by.type("RNSVGSvgView")).atIndex(0).tap();
    await element(by.label("Fault reporting")).atIndex(2).tap();
  });

  it('Station report when logged out', async () => { 
    await expect(element(by.text(testIDs.WelcomeScreen.loginButton))).toBeVisible();
    await element(by.text(testIDs.WelcomeScreen.continueWithoutButton)).tap();
    await utils.scrollDownUntilVisible(testIDs.MenuTab.faultReportingButton);
    await element(by.text(testIDs.MenuTab.FaultReporting)).tap();
    await element(by.text(testIDs.FaultReporting.reportFaultButton)).tap();
    await element(by.text(testIDs.FaultReporting.stationCategory)).tap();
    await element(by.type("RCTUITextField")).replaceText(utils.FaultReportingCredentials.departingStation);
    await element(by.text(testIDs.FaultReporting.searchForAStationHeader)).tap();
    await element(by.text(utils.FaultReportingCredentials.departingStationCode)).tap();
    await element(by.text(testIDs.FaultReporting.whereFaultStairsButton)).tap();
    await element(by.label(testIDs.FaultReporting.reasonField)).atIndex(5).replaceText(utils.ReasonForFault.CharacterReason);
    await element(by.text(testIDs.FaultReporting.nextButton)).tap();
    await element(by.text(testIDs.FaultReporting.nextButton)).tap();
    await element(by.text(testIDs.AssistanceSchemes.titleField)).tap();
    await element(by.label("Mr")).tap();
    await element(by.type("RCTUITextField")).atIndex(0).replaceText(utils.FaultReportingCredentials.firstName);
    await element(by.type("RCTUITextField")).atIndex(1).replaceText(utils.FaultReportingCredentials.surname);
    await element(by.type("RCTUITextField")).atIndex(2).replaceText(utils.NewRandomEmail.email);
    await utils.scrollDownUntilVisible(testIDs.FaultReporting.nextButton);
    await element(by.text(testIDs.FaultReporting.nextButton)).tap();
    await utils.scrollDownUntilVisible(testIDs.FaultReporting.whereFaultStairsButton);
    await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    await element(by.text(testIDs.FaultReporting.submitButton)).tap();
    await element(by.text(testIDs.FaultReporting.faultApplyConfirmedText)).tap();

  });
});