// detox recorder --configuration "ios.sim.debug" --outputTestFile "~/Desktop/RecordedTest.js" --testName "My Recorded Test1" --record
//detox test -c ios.sim.debug
//detox test menuTabTest.e2e -c ios.sim.debug

const { waitFor } = require("@testing-library/react-native");
const { util } = require("prettier");
const testIDs = require("./testIDs");
const utils = require("./utils");

describe('Welcome Screen Tests', () => {
  beforeAll(async () => {
    await device.installApp();
    await device.launchApp();
  });

  beforeEach(async () => {
    //await device.launchApp({delete: true});
    await device.reloadReactNative();
  });

  it.only('Top section of Menu tab w/ logged out, low test', async () => { //detox test menuTabTest.e2e -c ios.sim.debug
    await expect(element(by.text('Login'))).toBeVisible();
    await element(by.text(testIDs.WelcomeScreen.continueWithoutButton)).tap();
    await element(by.text(testIDs.BottomNavigationRow.menuButton)).tap();
    await expect(element(by.text(testIDs.MenuTab.registerLink))).toBeVisible();
    await element(by.text(testIDs.MenuTab.planJourneyButton)).tap();
    await expect(element(by.text(testIDs.PlanJourney.planJourneyTitle))).toBeVisible();
    await element(by.text(testIDs.BottomNavigationRow.menuButton)).tap();
    await expect(element(by.text(testIDs.MenuTab.registerLink))).toBeVisible();
    await element(by.text(testIDs.MenuTab.liveDepartButton)).tap();
    await expect(element(by.text('Live departures and arrivals'))).toBeVisible();
    await element(by.text(testIDs.BottomNavigationRow.menuButton)).tap();
    await expect(element(by.text(testIDs.MenuTab.registerLink))).toBeVisible();
    await element(by.text(testIDs.MenuTab.delayRepayButton)).tap();
    await element(by.label("Navigate back")).atIndex(1).tap();
    await expect(element(by.text('Register'))).toBeVisible();
  });
});