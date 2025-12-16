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

  it('Apply for SE priority Card when logged out', async () => { 
    //detox test sePrioritySeatCardTest.e2e -c ios.sim.debug
    await element(by.text(testIDs.WelcomeScreen.continueWithoutButton)).tap();
    await element(by.text(testIDs.BottomNavigationRow.menuButton)).tap();
    await element(by.text(testIDs.MenuTab.assistanceSchemes)).tap();
    await element(by.text(testIDs.AssistanceSchemes.menuSePrioryApply)).tap();
    await element(by.text(testIDs.AssistanceSchemes.startSEApplicationButton)).tap();
    await element(by.text(testIDs.AssistanceSchemes.titleField)).tap();
		await element(by.label("Mr")).tap();
    await element(by.type("RCTUITextField")).atIndex(0).replaceText(utils.AssistanceSchemeCredentials.firstName);
    await element(by.type("RCTUITextField")).atIndex(1).replaceText(utils.AssistanceSchemeCredentials.surname);
    await utils.scrollDownUntilVisible(testIDs.AssistanceSchemes.nextButton);
    await element(by.type("RCTUITextField")).atIndex(2).replaceText(utils.ValidEmailCredentials.email);
    await element(by.type("RCTUITextField")).atIndex(3).replaceText(utils.AssistanceSchemeCredentials.phoneNumber);
    await element(by.id("search-text-input")).replaceText(utils.postcodeFinderCredentials.postcode);
    await element(by.id(testIDs.AssistanceSchemes.searchPostcodeButton)).tap();
    await element(by.id(testIDs.AssistanceSchemes.searchPostcodeButton)).tap();
    await utils.scrollDownUntilVisible(testIDs.AssistanceSchemes.nextButton);
    await element(by.type("RCTView")).atIndex(54).tap();
		await element(by.text(utils.postcodeFinderCredentials.selectAnAddress)).tap();
    await element(by.text(testIDs.AssistanceSchemes.nextButton)).tap();
    await element(by.text(testIDs.AssistanceSchemes.nextButton)).tap();
    await element(by.text(testIDs.AssistanceSchemes.over65selectCheckbox)).tap();
		await element(by.text(testIDs.AssistanceSchemes.travelWithInfantCheckbox)).tap();
		await element(by.text(testIDs.AssistanceSchemes.pregnantCheckbox)).tap();
		await element(by.text(testIDs.AssistanceSchemes.medConditionCheckbox)).tap();
    await element(by.text(testIDs.AssistanceSchemes.nextButton)).tap();
    await element(by.text(testIDs.AssistanceSchemes.nextButton)).tap();
    await element(by.text(testIDs.AssistanceSchemes.temporaryCheckbox)).tap();
		await element(by.text(testIDs.AssistanceSchemes.permanentCheckbox)).tap();
    await element(by.text(testIDs.AssistanceSchemes.nextButton)).tap();
    await element(by.text(testIDs.AssistanceSchemes.nextButton)).tap();
    await element(by.label(testIDs.AssistanceSchemes.datePickerField)).atIndex(1).tap();
    await element(by.type("RNDateTimePicker")).setDatePickerDate(utils.GetDate.over65Date, "ISO8601");
		await element(by.text(testIDs.AssistanceSchemes.confirmButton)).tap();
    await element(by.text(testIDs.AssistanceSchemes.nextButton)).tap();
    await element(by.label(testIDs.AssistanceSchemes.datePickerField)).atIndex(1).tap();
		await element(by.type("RNDateTimePicker")).setDatePickerDate(utils.GetDate.dueDate, "ISO8601");
    await element(by.text(testIDs.AssistanceSchemes.confirmButton)).tap();
    await element(by.text(testIDs.AssistanceSchemes.nextButton)).tap();
    await element(by.label(testIDs.AssistanceSchemes.datePickerField)).atIndex(1).tap();
		await element(by.type("RNDateTimePicker")).setDatePickerDate(utils.GetDate.infantDate, "ISO8601");
		await element(by.text(testIDs.AssistanceSchemes.confirmButton)).tap();
    await element(by.text(testIDs.AssistanceSchemes.nextButton)).tap();

    ///---no photo picker
    //await element(by.text("Use photo library")).tap();
		//await element(by.text("Next")).tap();
		//await element(by.label("Image 1 of 5, press to remove")).atIndex(4).tap();
		//await element(by.text("Upload images / documents")).tap();
		//await element(by.text("Use photo library")).tap();
		//await element(by.text("Upload images / documents")).tap();
		//await element(by.text("Use photo library")).tap();
		//await element(by.text("Upload images / documents")).tap();
		//await element(by.text("Use photo library")).tap();
		//await element(by.text("Minimum upload of 3 files.\nMaximum upload of 5 files.")).tap();
		//await element(by.text("Next")).tap();
		//await element(by.text("Next")).tap();
		//await element(by.text("No")).atIndex(0).tap();
		//await element(by.text("Next")).tap();
		//await element(by.label("No")).atIndex(2).tap();
		//await element(by.text("Next")).tap();
		//await element(by.text("Check all your details are correct")).tap();
		//await element(by.text("email@mail.com")).tap();
		//await element(by.text("0123456")).tap();
    //await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    //await element(by.text("Apply for Priority Seat Card")).tap();
		//await element(by.text("Your application for a Priority Seat Card has been submitted")).tap();
		//await element(by.label("Close and return to Assistance Schemes screen")).atIndex(1).tap();
    //await element(by.text("Start application")).tap();
  });
//detox test sePrioritySeatCardTest.e2e -c ios.sim.debug
  it('Apply for JAM Card when logged in', async () => {
    await element(by.text(testIDs.WelcomeScreen.continueWithoutButton)).tap();
    await element(by.text(testIDs.BottomNavigationRow.menuButton)).tap();
    await utils.scrollDownUntilVisible(testIDs.MenuTab.assistanceSchemes);
    await element(by.text(testIDs.MenuTab.assistanceSchemes)).tap();
    await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    await element(by.text(testIDs.AssistanceSchemes.menuJamApply)).tap();
    await element(by.text(testIDs.AssistanceSchemes.loginButton)).tap();
    await element(by.label(testIDs.LoginPage.emailField)).atIndex(6).replaceText(utils.ValidEmailCredentials.email);
    await element(by.label(testIDs.LoginPage.passwordField)).atIndex(6).replaceText(utils.ValidEmailCredentials.password);
    await element(by.text(testIDs.LoginPage.loginButton)).tap();
    //await expect(element(by.text('Ball'))).toBeVisible();
    await element(by.text(testIDs.AssistanceSchemes.titleField)).tap();
		await element(by.label("Mr")).tap();
    await utils.scrollDownUntilVisible(testIDs.AssistanceSchemes.enterAddressManually);
    await element(by.type("RCTUITextField")).atIndex(3).replaceText(utils.AssistanceSchemeCredentials.phoneNumber);
    await element(by.text(testIDs.AssistanceSchemes.enterAddressManually)).tap();
    await element(by.text(testIDs.AssistanceSchemes.enterAddressManually)).tap();
    await utils.scrollDownUntilVisible(testIDs.AssistanceSchemes.nextButton);
    await element(by.label(testIDs.AssistanceSchemes.nextButton)).tap();
    await element(by.label(testIDs.AssistanceSchemes.nextButton)).tap();
    await element(by.text('OK')).tap();
    await element(by.type("RCTUITextField")).atIndex(5).replaceText(utils.AssistanceSchemeCredentials.firstLineAddress);
    await element(by.type("RCTUITextField")).atIndex(6).replaceText(utils.AssistanceSchemeCredentials.secondLineAddress);
    await element(by.type("RCTUITextField")).atIndex(7).replaceText(utils.AssistanceSchemeCredentials.city);
    await element(by.type("RCTUITextField")).atIndex(8).replaceText(utils.AssistanceSchemeCredentials.county);
    await element(by.type("RCTUITextField")).atIndex(9).replaceText(utils.AssistanceSchemeCredentials.postcode);
    await element(by.text(testIDs.AssistanceSchemes.selectJamDropdownReason)).tap();
    await element(by.text(testIDs.AssistanceSchemes.selectJamDropdownReason)).tap();
    await element(by.text(testIDs.AssistanceSchemes.JamReasonLearningDisability)).tap();
    await element(by.text(testIDs.AssistanceSchemes.nextButton)).tap();
    await element(by.type("RNSVGSvgView")).atIndex(0).tap();
    await element(by.type("RCTCustomScrollView")).scrollTo("top");
    await element(by.text(testIDs.AssistanceSchemes.titleField)).tap();
		await element(by.text("Dr")).tap();
    await utils.scrollDownUntilVisible(testIDs.AssistanceSchemes.nextButton);
    await element(by.label(testIDs.AssistanceSchemes.nextButton)).tap();
    await element(by.text("Dr")).tap();
    await element(by.text(testIDs.AssistanceSchemes.applyJamButton)).tap();
    await element(by.text(testIDs.AssistanceSchemes.jamApplicationConfirmedText)).tap();
    await element(by.type("RNSVGSvgView")).atIndex(0).tap();
    await element(by.type("RNSVGSvgView")).atIndex(0).tap();
    await expect(element(by.text("Messages"))).toBeVisible();
    await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    await element(by.text(testIDs.MenuTab.logOutButton)).tap();
		await element(by.text(testIDs.MenuTab.logOutYesConfirm)).tap();
    await expect(element(by.text(testIDs.MenuTab.logOutButton))).not.toBeVisible();
  });

  it('Apply for Sunflower lanyard whatever its called test', async () => {
    //detox test sePrioritySeatCardTest.e2e -c ios.sim.debug
    await element(by.text(testIDs.WelcomeScreen.continueWithoutButton)).tap();
    await element(by.text(testIDs.BottomNavigationRow.menuButton)).tap();
    await expect(element(by.text(testIDs.MenuTab.loginButton))).toBeVisible();
    await element(by.text(testIDs.MenuTab.loginButton)).tap();
    await element(by.label(testIDs.LoginPage.emailField)).atIndex(6).replaceText(utils.ValidEmailCredentials.email);
    await element(by.label(testIDs.LoginPage.passwordField)).atIndex(6).replaceText(utils.ValidEmailCredentials.password);
    await element(by.text(testIDs.LoginPage.loginButton)).tap();
    await utils.scrollDownUntilVisible(testIDs.MenuTab.assistanceSchemes);
    await element(by.text(testIDs.MenuTab.assistanceSchemes)).tap();
    await utils.scrollDownUntilVisible(testIDs.AssistanceSchemes.menuSunflowerApply);
    await element(by.text(testIDs.AssistanceSchemes.menuSunflowerApply)).tap();
    await element(by.text(testIDs.AssistanceSchemes.titleField)).tap();
		await element(by.label("Mx")).tap();
    await utils.scrollDownUntilVisible(testIDs.AssistanceSchemes.nextButton);
    await element(by.type("RCTUITextField")).atIndex(3).replaceText(utils.AssistanceSchemeCredentials.phoneNumber);
    await element(by.id("search-text-input")).replaceText(utils.postcodeFinderCredentials.postcode);
    await element(by.id(testIDs.AssistanceSchemes.searchPostcodeButton)).tap();
    await element(by.id(testIDs.AssistanceSchemes.searchPostcodeButton)).tap();
    await utils.scrollDownUntilVisible(testIDs.AssistanceSchemes.nextButton);
    await element(by.text("Please select address*")).tap();
		await element(by.text(utils.postcodeFinderCredentials.selectAnAddress)).tap();
    await element(by.text(testIDs.AssistanceSchemes.nextButton)).tap();
    await element(by.text("Edit")).tap();
    await element(by.type("RCTUITextField")).atIndex(3).replaceText(utils.PassengerAssistCredentials.editedPhoneNumber);
    await utils.scrollDownUntilVisible(testIDs.AssistanceSchemes.nextButton);
    await element(by.text(testIDs.AssistanceSchemes.nextButton)).tap();
    await element(by.text(testIDs.AssistanceSchemes.nextButton)).tap();
    await element(by.text(utils.PassengerAssistCredentials.editedPhoneNumber)).tap();
    await element(by.text(testIDs.AssistanceSchemes.applySunflowerButton)).tap();
    await element(by.text(testIDs.AssistanceSchemes.sunflowerApplicationConfirmedText)).tap();
  });
});