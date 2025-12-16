//detox recorder --configuration "ios.sim.debug" --outputTestFile "~/Desktop/RecordedTest.js" --testName "My Recorded Test1" --simulatorId booted --record
//detox test -c ios.sim.debug

const { waitFor } = require("@testing-library/react-native");
const { util } = require("prettier");
const testIDs = require("./testIDs");
const utils = require("./utils");

describe('Welcome Screen Tests', () => {
  beforeAll(async () => {
    //await device.installApp();
    await device.launchApp();
  });

  beforeEach(async () => {
    //await device.launchApp({delete: true});
    await device.reloadReactNative();
  });

  it('Passenger Assist, logged out, single journey', async () => { 
    //detox test passengerAssistTest.e2e -c ios.sim.debug
    await expect(element(by.text('Login'))).toBeVisible();
    await element(by.text(testIDs.WelcomeScreen.continueWithoutButton)).tap();
    await element(by.text(testIDs.BottomNavigationRow.menuButton)).tap();
    await element(by.text(testIDs.MenuTab.passengerAssist)).tap();
    await element(by.text(testIDs.PassengerAssist.bookPassengerAssistButton)).tap();
    await element(by.type("RCTTextView")).atIndex(5).tap();
    await element(by.label("Mrs")).tap();
    await element(by.type("RCTUITextField")).atIndex(0).replaceText("Auto");
    await element(by.type("RCTUITextField")).atIndex(1).replaceText("pass assist");
    await element(by.type("RCTUITextField")).atIndex(2).replaceText(utils.NewRandomEmail.email);
    await element(by.type("RCTUITextField")).atIndex(3).replaceText("07545681121");
    await utils.scrollDownUntilVisible(testIDs.PassengerAssist.manualAddressButton);
    await element(by.text(testIDs.PassengerAssist.manualAddressButton)).tap();
    await element(by.text(testIDs.PassengerAssist.manualAddressButton)).tap();
    await utils.scrollDownUntilVisible("County");
    await element(by.type("RCTUITextField")).atIndex(5).replaceText("First line");
    await element(by.type("RCTUITextField")).atIndex(7).replaceText("london");
    await utils.scrollDownUntilVisible(testIDs.PassengerAssist.nextButton);
    await element(by.type("RCTUITextField")).atIndex(9).replaceText("ne51xa");
    await element(by.text(testIDs.PassengerAssist.methodContactEmail)).tap();
    await element(by.text(testIDs.PassengerAssist.methodContactEmail)).tap();
    await element(by.text(testIDs.PassengerAssist.nextButton)).tap();
    await expect(element(by.text(testIDs.PassengerAssist.pointOfAssistanceArrivalStation))).toBeVisible();
    await element(by.label(testIDs.PassengerAssist.nextButton)).tap();
    await element(by.text(testIDs.PassengerAssist.pointOfAssistanceArrivalStation)).tap();
    await element(by.label(testIDs.PassengerAssist.nextButton)).tap();
    await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    await element(by.label(testIDs.PassengerAssist.nextButton)).tap();
    await element(by.label(testIDs.PassengerAssist.reasonOtherPhysical)).tap();
    await element(by.label(testIDs.PassengerAssist.nextButton)).tap();
    await element(by.type("RCTTextView")).atIndex(2).tap();
    await element(by.type("RCTUITextField")).atIndex(0).replaceText(utils.PassengerAssistCredentials.departingStation);
    await element(by.text(testIDs.PassengerAssist.searchForStationField)).atIndex(0).tap();
    await element(by.text(utils.PassengerAssistCredentials.departingStationCode)).tap();
    await element(by.type("RCTTextView")).atIndex(4).tap();
    await element(by.type("RCTUITextField")).atIndex(0).replaceText(utils.PassengerAssistCredentials.arrivalStation);
    await element(by.text(testIDs.PassengerAssist.searchForStationField)).atIndex(0).tap();
    await element(by.text(utils.PassengerAssistCredentials.arrivalStationCode)).tap();
    await element(by.label(testIDs.PassengerAssist.datePickerField)).atIndex(1).tap()
    await element(by.type("RNDateTimePicker")).setDatePickerDate(utils.PassengerAssistDate.date, "ISO8601");
    await element(by.text(testIDs.PassengerAssist.confirmButton)).tap();
    await element(by.label(testIDs.PassengerAssist.timePickerField)).atIndex(1).tap();
		await element(by.type("RNDateTimePicker")).setDatePickerDate("2021-04-24T12:30:52+01:00", "ISO8601");
    await element(by.text(testIDs.PassengerAssist.confirmButton)).tap();
    await element(by.text("to Newcastle")).atIndex(1).tap();
    await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    await element(by.label("Next")).tap();
    await element(by.label(testIDs.PassengerAssist.noButton)).atIndex(0).tap();
		await element(by.label(testIDs.PassengerAssist.noButton)).atIndex(0).tap();
		await element(by.label(testIDs.PassengerAssist.noButton)).atIndex(1).tap();
		await element(by.label("Next")).tap();
		await element(by.label(testIDs.PassengerAssist.noButton)).atIndex(0).tap();
    await element(by.text("Auto")).tap();
		await element(by.text("pass assist")).tap();
    await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    await element(by.text(testIDs.PassengerAssist.submitButton)).tap();
		await element(by.text("Passenger Assist request submitted")).tap();
		await element(by.label("Navigate back")).atIndex(1).tap();
		await element(by.label("Navigate back")).atIndex(1).tap();
    await expect(element(by.text(testIDs.MenuTab.loginButton))).toBeVisible();
    //detox test passengerAssistTest.e2e -c ios.sim.debug --loglevel trace
  });

  it('Passenger Assist, log in and create profile', async () => { 
    //detox test passengerAssistTest.e2e -c ios.sim.debug
    await expect(element(by.text('Login'))).toBeVisible();
    await element(by.text(testIDs.WelcomeScreen.continueWithoutButton)).tap();
    await element(by.text(testIDs.BottomNavigationRow.menuButton)).tap();
    await expect(element(by.text(testIDs.MenuTab.loginButton))).toBeVisible();
    await element(by.text(testIDs.MenuTab.loginButton)).tap();
    await element(by.label(testIDs.LoginPage.emailField)).atIndex(6).replaceText(utils.ValidEmailCredentials.email);
    await element(by.label(testIDs.LoginPage.passwordField)).atIndex(6).replaceText(utils.ValidEmailCredentials.password);
    await element(by.text(testIDs.LoginPage.loginButton)).tap();
    await utils.scrollDownUntilVisible(testIDs.MenuTab.passengerAssist);
    await element(by.text(testIDs.MenuTab.passengerAssist)).tap();
    await element(by.text(testIDs.PassengerAssist.createProfileButton)).tap();
    await utils.scrollDownUntilVisible(testIDs.PassengerAssist.nextButton);
    await element(by.type("RCTUITextField")).atIndex(2).replaceText(utils.PassengerAssistCredentials.phoneNumber);
    await element(by.id("search-text-input")).replaceText(utils.postcodeFinderCredentials.postcode);
    await element(by.id(testIDs.AssistanceSchemes.searchPostcodeButton)).tap();
    await element(by.id(testIDs.AssistanceSchemes.searchPostcodeButton)).tap();
    await utils.scrollDownUntilVisible(testIDs.PassengerAssist.nextButton);
    await element(by.text("Please select address *")).atIndex(1).tap();
    await element(by.text(utils.postcodeFinderCredentials.selectAnAddress)).tap();
    await element(by.text(testIDs.PassengerAssist.methodContactEmail)).tap();
    await element(by.text(testIDs.PassengerAssist.nextButton)).tap();
    await element(by.text(testIDs.PassengerAssist.pointOfAssistanceOther)).tap();
    await element(by.type("RCTUITextField")).atIndex(0).replaceText("Automation POJ");
    await element(by.text(testIDs.PassengerAssist.nextButton)).tap();
    await element(by.text(testIDs.PassengerAssist.nextButton)).tap();
    await utils.scrollDownUntilVisible(testIDs.PassengerAssist.reasonScooter);
    await element(by.text(testIDs.PassengerAssist.reasonScooter)).tap();
    await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    await element(by.text(testIDs.PassengerAssist.nextButton)).tap();
    await element(by.label(testIDs.PassengerAssist.noButton)).atIndex(0).tap();
		await element(by.label(testIDs.PassengerAssist.noButton)).atIndex(1).tap();
    await element(by.text(testIDs.PassengerAssist.nextButton)).tap();
    await element(by.text(utils.ValidEmailCredentials.email)).tap();
    await utils.scrollDownUntilVisible(testIDs.PassengerAssist.reasonScooter);
    await element(by.text("Edit")).atIndex(2).tap();
    await element(by.text(testIDs.PassengerAssist.reasonScooter)).tap();
    await element(by.text(testIDs.PassengerAssist.reasonWheelchairUser)).tap();
    await utils.scrollDownUntilVisible(testIDs.PassengerAssist.nextButton);
    await element(by.text(testIDs.PassengerAssist.nextButton)).tap();
    await element(by.text(testIDs.PassengerAssist.wheelchairPermanentUser)).tap();
    await element(by.text(testIDs.PassengerAssist.saveButton)).tap();
    await element(by.text(testIDs.PassengerAssist.wheelchairPermanentUser)).tap();
    await expect(element(by.text(testIDs.PassengerAssist.reasonScooter))).not.toBeVisible();
    await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    await element(by.text(testIDs.PassengerAssist.submitButton)).tap();
    await element(by.text(testIDs.PassengerAssist.viewAccessibilityProfile)).tap();
    //await element(by.text("Permanent Wheelchair User")).tap();
    await element(by.text(testIDs.PassengerAssist.editProfileButton)).tap();
    await element(by.text(testIDs.PassengerAssist.pointOfAssistanceOther)).tap();
    await element(by.text("Edit")).atIndex(1).tap();
    await element(by.text(testIDs.PassengerAssist.pointOfAssistanceArrivalStation)).tap();
    await element(by.text(testIDs.PassengerAssist.saveButton)).tap();
    await element(by.label("Navigate back")).atIndex(2).tap();
    await element(by.text(testIDs.PassengerAssist.arrivalStationOnly)).tap();
    await element(by.text(testIDs.PassengerAssist.deleteProfileButton)).tap();
    await element(by.text(testIDs.PassengerAssist.confirmDeleteProfile)).tap();


    //detox test passengerAssistTest.e2e -c ios.sim.debug --loglevel trace
  });

  it.only('Passenger Assist, enter flow, register, book, then check booked', async () => { 
    //detox test passengerAssistTest.e2e -c ios.sim.debug
    await expect(element(by.text('Login'))).toBeVisible();
    await element(by.text(testIDs.WelcomeScreen.continueWithoutButton)).tap();
    await element(by.text(testIDs.BottomNavigationRow.menuButton)).tap();
    await element(by.text(testIDs.MenuTab.passengerAssist)).tap();
    await element(by.text(testIDs.PassengerAssist.bookPassengerAssistButton)).tap();
    await element(by.text("Log in")).tap();
    await element(by.text('Register')).tap();
    await element(by.type(testIDs.RegisterProcess.titleField)).atIndex(4).tap();
    await element(by.label(testIDs.RegisterProcess.titleSelectionMr)).tap();
    await element(by.label(testIDs.RegisterProcess.firstNameField)).atIndex(5).replaceText("Automation");
    await element(by.label(testIDs.RegisterProcess.surnameField)).atIndex(5).replaceText("SurnameAuto");
    await element(by.label(testIDs.RegisterProcess.emailField)).atIndex(5).replaceText(utils.NewRandomEmail.email);
    await element(by.label(testIDs.RegisterProcess.passwordField)).atIndex(5).replaceText("!Testtest12345");
    await element(by.label(testIDs.RegisterProcess.continueButton)).tap();
    await element(by.label(testIDs.RegisterProcess.continueButton)).tap();; //bug, needs to tap twice at start
    await element(by.text(testIDs.RegisterProcess.continueWithoutButton)).tap();
    await element(by.id(testIDs.RegisterProcess.createAccountButton)).tap();
    await element(by.type("RCTUITextField")).atIndex(3).replaceText(utils.PassengerAssistCredentials.phoneNumber);
    await element(by.id("search-text-input")).replaceText(utils.postcodeFinderCredentials.postcode);
    await element(by.id(testIDs.AssistanceSchemes.searchPostcodeButton)).tap();
    await element(by.id(testIDs.AssistanceSchemes.searchPostcodeButton)).tap();
    await utils.scrollDownUntilVisible(testIDs.PassengerAssist.nextButton);
    await element(by.text("Please select address *")).atIndex(1).tap();
    await element(by.text(utils.postcodeFinderCredentials.selectAnAddress)).tap();
    await element(by.text(testIDs.PassengerAssist.methodContactEmail)).tap();
    await element(by.text(testIDs.PassengerAssist.nextButton)).tap();
    await element(by.text("All points (change of train is required)")).tap();
		await element(by.text("Next")).tap();
		await element(by.text("Visually Impaired")).tap();
    await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    await element(by.text("Next")).tap();
    await element(by.type("RCTTextView")).atIndex(2).tap();
    await element(by.type("RCTUITextField")).atIndex(0).replaceText(utils.PassengerAssistCredentials.departingStation);
    await element(by.text(testIDs.PassengerAssist.searchForStationField)).atIndex(0).tap();
    await element(by.text(utils.PassengerAssistCredentials.departingStationCode)).tap();
    await element(by.type("RCTTextView")).atIndex(4).tap();
    await element(by.type("RCTUITextField")).atIndex(0).replaceText(utils.PassengerAssistCredentials.arrivalStation);
    await element(by.text(testIDs.PassengerAssist.searchForStationField)).atIndex(0).tap();
    await element(by.text(utils.PassengerAssistCredentials.arrivalStationCode)).tap();
    await element(by.label(testIDs.PassengerAssist.datePickerField)).atIndex(1).tap()
    await element(by.type("RNDateTimePicker")).setDatePickerDate(utils.GetDate.passengerAssistDate, "ISO8601");
    await element(by.text(testIDs.PassengerAssist.confirmButton)).tap();
    await element(by.label(testIDs.PassengerAssist.timePickerField)).atIndex(1).tap();
		await element(by.type("RNDateTimePicker")).setDatePickerDate("2021-04-24T12:30:52+01:00", "ISO8601");
    await element(by.text(testIDs.PassengerAssist.confirmButton)).tap();
    await element(by.text("to Newcastle")).atIndex(0).tap();
    await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    await element(by.label("Next")).tap();
    await element(by.label("Yes")).atIndex(0).tap();
    await element(by.label(utils.GetDate.passengerAssistDateLabel)).atIndex(1).tap()
    await element(by.type("RNDateTimePicker")).setDatePickerDate(utils.GetDate.passengerAssistReturnDate, "ISO8601");
    await element(by.text(testIDs.PassengerAssist.confirmButton)).tap();
    await element(by.label(testIDs.PassengerAssist.timePickerField)).atIndex(1).tap();
		await element(by.type("RNDateTimePicker")).setDatePickerDate("2021-04-24T12:30:52+01:00", "ISO8601");
    await element(by.text(testIDs.PassengerAssist.confirmButton)).tap();
		await element(by.text("to London Kings Cross")).atIndex(0).tap();
    await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    await element(by.text(testIDs.PassengerAssist.nextButton)).tap();
    await element(by.label("Yes")).atIndex(0).tap();
		await element(by.label("Yes")).atIndex(1).tap();
		await element(by.text("Next")).tap();
    await element(by.text("Yes")).tap();
    await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    await element(by.text("Submit")).tap();
    await element(by.text("View booked assistance")).tap();
    await element(by.text("Pending")).tap();
    await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    await element(by.text("Cancel request")).tap();
    await element(by.text("Yes, cancel")).tap();
    await element(by.type("RCTCustomScrollView")).scrollTo("top");
    await element(by.label("Navigate back")).atIndex(1).tap();
    await element(by.text("Cancelled")).tap();
    //detox test passengerAssistTest.e2e -c ios.sim.debug 
  });
});