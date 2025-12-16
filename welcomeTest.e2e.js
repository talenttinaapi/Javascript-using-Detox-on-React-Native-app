// detox recorder --configuration "ios.sim.debug" --outputTestFile "~/Desktop/RecordedTest.js" --testName "My Recorded Test1" --record
//detox test -c ios.sim.debug
//detox test welcomeTest.e2e -c ios.sim.debug
const { waitFor } = require("@testing-library/react-native");
const testIDs = require("./testIDs");
const utils = require("./utils");

describe('Welcome Screen Tests', () => {
  beforeAll(async () => {
    //await device.installApp();
    //await device.launchApp();
  });

  beforeEach(async () => {
    await device.launchApp({delete: true});
    await device.reloadReactNative();
  });

  it.only('Invalid Login followed by Valid Login via Welcome Screen', async () => {
    await expect(element(by.text('Login'))).toBeVisible();
    await element(by.text(testIDs.WelcomeScreen.loginButton)).tap();
    await element(by.label(testIDs.LoginPage.emailField)).atIndex(6).replaceText(utils.InvalidEmailCredentials.email);
    await element(by.label(testIDs.LoginPage.passwordField)).atIndex(6).replaceText(utils.InvalidEmailCredentials.password);
    await element(by.text(testIDs.LoginPage.loginButton)).tap();
    await element(by.text('OK')).tap();
    await element(by.label(testIDs.LoginPage.emailField)).atIndex(6).replaceText(utils.ValidEmailCredentials.email);
    await element(by.label(testIDs.LoginPage.passwordField)).atIndex(6).replaceText(utils.ValidEmailCredentials.password);
    await element(by.text(testIDs.LoginPage.loginButton)).tap();
    await element(by.text(testIDs.BottomNavigationRow.menuButton)).tap();
		await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    await element(by.text(testIDs.MenuTab.logOutButton)).tap();
    await element(by.text(testIDs.MenuTab.logOutYesConfirm)).tap();
    await element(by.type("RCTCustomScrollView")).scrollTo("top");
  });

  it('Register via Welcome Screen. Under 16, no smartcard, postcode lookup', async () => {
    await element(by.label(testIDs.WelcomeScreen.registerButton)).tap();
    await element(by.type(testIDs.RegisterProcess.titleField)).atIndex(4).tap();
    await element(by.label(testIDs.RegisterProcess.titleSelectionMr)).tap();
    await element(by.label(testIDs.RegisterProcess.firstNameField)).atIndex(5).replaceText("Automation");
    await element(by.label(testIDs.RegisterProcess.surnameField)).atIndex(5).replaceText("SurnameAuto");
    await element(by.label(testIDs.RegisterProcess.emailField)).atIndex(5).replaceText(utils.NewRandomEmail.email);
    await element(by.label(testIDs.RegisterProcess.passwordField)).atIndex(5).replaceText("!Testtest12345");
    await element(by.label(testIDs.RegisterProcess.continueButton)).tap();
    await element(by.label(testIDs.RegisterProcess.continueButton)).tap();; //bug, needs to tap twice at start
    await element(by.id(testIDs.RegisterProcess.postcodeFinderField)).replaceText("SE10HS");
    await element(by.id(testIDs.RegisterProcess.postcodeFinderSearchButton)).tap();
    await element(by.id(testIDs.RegisterProcess.postcodeFinderSearchButton)).tap();
    await element(by.id(testIDs.RegisterProcess.postcodeFinderSelectAddress)).tap();
    await element(by.text(testIDs.RegisterProcess.postcodeSelectAnAddress)).tap();
    await element(by.label(testIDs.RegisterProcess.dateField)).atIndex(1).tap();
    await element(by.type("RNDateTimePicker")).setDatePickerDate("2008-04-17T00:00:00+01:00", "ISO8601");
		await element(by.text(testIDs.RegisterProcess.confirmDateButton)).tap();
    await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    await element(by.text(testIDs.RegisterProcess.continueWithoutButton)).tap();
    await element(by.id(testIDs.RegisterProcess.createAccountButton)).tap();
    await element(by.text(testIDs.BottomNavigationRow.menuButton)).tap();
    await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    await element(by.text(testIDs.MenuTab.logOutButton)).tap();
    await element(by.text(testIDs.MenuTab.logOutYesConfirm)).tap();
    await element(by.type("RCTCustomScrollView")).scrollTo("top");
  });

  it('Swipe test/Continue without login/Register test', async () => {
    await expect(element(by.text(testIDs.WelcomeScreen.firstSliderPageText))).toBeVisible();
    await element(by.type("RCTCustomScrollView")).scrollTo("right");
    await expect(element(by.text(testIDs.WelcomeScreen.secondSliderPageText))).toBeVisible();
    await element(by.type("RCTCustomScrollView")).scrollTo("right");
    await expect(element(by.text(testIDs.WelcomeScreen.thirdSliderPageText))).toBeVisible();
    await element(by.type("RCTCustomScrollView")).scrollTo("right");
    await expect(element(by.text(testIDs.WelcomeScreen.fourthSliderPageText))).toBeVisible();
    await element(by.text(testIDs.WelcomeScreen.continueWithoutButton)).tap();
    await element(by.text(testIDs.BottomNavigationRow.menuButton)).tap();
    await expect(element(by.text(testIDs.MenuTab.loginButton))).toBeVisible();
  });
});

// detox test -c ios.sim.debug

//"jest": "^26.x.x",
//"jest-circus": "^26.x.x", 