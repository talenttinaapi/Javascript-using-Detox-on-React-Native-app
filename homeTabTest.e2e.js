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
    await device.launchApp({delete: true});
    await device.reloadReactNative();
  });

  it('Test Southeastern updates', async () => { 
    //detox test homeTabTest.e2e -c ios.sim.debugb
    await expect(element(by.text(testIDs.WelcomeScreen.loginButton))).toBeVisible();
    await element(by.text(testIDs.WelcomeScreen.continueWithoutButton)).tap();
    await expect(element(by.text(testIDs.HomeTab.myStationsHeader))).toBeVisible();
    await element(by.type(testIDs.HomeTab.settingsCog)).atIndex(1).tap();
    await element(by.text(testIDs.HomeTab.myStationsHeader)).tap();
    await element(by.label(testIDs.HomeTab.settingsBackButton)).atIndex(1).tap();
    await expect(element(by.text(testIDs.HomeTab.myStationsHeader))).not.toBeVisible();
    await expect(element(by.text(testIDs.HomeTab.hayesStation))).toBeVisible();
    await element(by.label(testIDs.HomeTab.southeasternEditButton)).atIndex(1).tap();
    await element(by.text(testIDs.HomeTab.sidcupStation)).tap();
    await element(by.text(testIDs.HomeTab.bexleyheathStation)).tap();
    await element(by.type(testIDs.HomeTab.southeasternEditBackButton)).atIndex(0).tap();
    await expect(element(by.text(testIDs.HomeTab.southEasternUpdatesHeader))).toBeVisible();
    await expect(element(by.text(testIDs.HomeTab.sidcupStation))).toBeVisible(); //visible
    await expect(element(by.text(testIDs.HomeTab.bexleyheathStation))).toBeVisible(); //visible
    await expect(element(by.text(testIDs.HomeTab.hayesStation))).not.toBeVisible(); //not visible
    await element(by.label(testIDs.HomeTab.southeasternEditButton)).atIndex(1).tap();
    await element(by.text(testIDs.HomeTab.bexleyheathStation)).tap();
    await element(by.text(testIDs.HomeTab.sidcupStation)).tap();
    await element(by.text(testIDs.HomeTab.woolwichStation)).tap();
    await element(by.type(testIDs.HomeTab.southeasternEditBackButton)).atIndex(0).tap();
    await expect(element(by.text(testIDs.HomeTab.woolwichStation))).toBeVisible();
    await expect(element(by.text(testIDs.HomeTab.sidcupStation))).not.toBeVisible();
    await expect(element(by.text(testIDs.HomeTab.bexleyheathStation))).not.toBeVisible();
    await element(by.label(testIDs.HomeTab.southeasternEditButton)).atIndex(1).tap();
    await element(by.text(testIDs.HomeTab.woolwichStation)).tap();
    await element(by.type(testIDs.HomeTab.southeasternEditBackButton)).atIndex(0).tap();
    await expect(element(by.text(testIDs.HomeTab.hayesStation))).toBeVisible();
    await expect(element(by.text(testIDs.HomeTab.woolwichStation))).toBeVisible();
  });

  it('Test My Stations functionality with Home Tab', async () => { 
    await expect(element(by.text(testIDs.WelcomeScreen.loginButton))).toBeVisible();
    await element(by.text(testIDs.WelcomeScreen.continueWithoutButton)).tap();
    await expect(element(by.text(testIDs.HomeTab.myStationsHeader))).toBeVisible();
    await element(by.text(testIDs.HomeTab.searchForMyStationField)).tap();
    await element(by.type("RCTUITextField")).tap();
    await element(by.type("RCTUITextField")).atIndex(0).replaceText(utils.PassengerAssistCredentials.departingStation);
    await element(by.text(testIDs.HomeTab.searchForMyStationTitle)).atIndex(0).tap();
    await element(by.text(utils.PassengerAssistCredentials.departingStationCode)).tap();
    await expect(element(by.text(testIDs.HomeTab.myStationUnpinnedText))).toBeVisible();
    await element(by.label(testIDs.HomeTab.myStationUnpinnedIcon)).atIndex(1).tap();
    await expect(element(by.text(testIDs.HomeTab.myStationUnpinnedText))).not.toBeVisible();
    await element(by.label(testIDs.HomeTab.myStationBackButton)).atIndex(1).tap();
    await expect(element(by.text(utils.PassengerAssistCredentials.departingStation))).toBeVisible();
    await device.terminateApp();
    await device.launchApp();
    await expect(element(by.text(utils.PassengerAssistCredentials.departingStation))).toBeVisible();
    await element(by.text(utils.PassengerAssistCredentials.departingStation)).tap();
    await element(by.label(testIDs.HomeTab.myStationPinnedIcon)).atIndex(1).tap();
    await expect(element(by.text(testIDs.HomeTab.myStationUnpinnedText))).toBeVisible();
    await element(by.text(testIDs.BottomNavigationRow.homeButton)).tap();
    await expect(element(by.text(utils.PassengerAssistCredentials.departingStation))).not.toBeVisible();
  });

  it('Test London Tube updates', async () => { 
    await expect(element(by.text(testIDs.WelcomeScreen.loginButton))).toBeVisible();
    await element(by.text(testIDs.WelcomeScreen.continueWithoutButton)).tap();
    await element(by.type(testIDs.HomeTab.settingsCog)).atIndex(1).tap();
    await element(by.text(testIDs.HomeTab.myStationsHeader)).tap(); 
    await element(by.text(testIDs.HomeTab.southEasternUpdatesHeader)).tap();
    await element(by.text(testIDs.HomeTab.onBoardMagazineHeader)).tap();
    await element(by.label(testIDs.HomeTab.settingsBackButton)).atIndex(1).tap();
    await element(by.label(testIDs.HomeTab.londonTubeEditButton)).atIndex(1).tap();
    await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    await element(by.text(testIDs.HomeTab.waterlooStation)).tap();
    await element(by.label(testIDs.HomeTab.londonTubeBackButton)).atIndex(1).tap();
    await expect(element(by.text(testIDs.HomeTab.bakerlooStation))).not.toBeVisible(); 
    await expect(element(by.text(testIDs.HomeTab.waterlooStation))).toBeVisible(); 
    await element(by.label(testIDs.HomeTab.londonTubeEditButton)).atIndex(1).tap();
    await element(by.type("RCTCustomScrollView")).scrollTo("bottom");
    await element(by.text(testIDs.HomeTab.waterlooStation)).tap();
    await element(by.label(testIDs.HomeTab.londonTubeBackButton)).atIndex(1).tap();
    await expect(element(by.text(testIDs.HomeTab.bakerlooStation))).toBeVisible(); 
    await element(by.type(testIDs.HomeTab.settingsCog)).atIndex(1).tap();
    await element(by.text(testIDs.HomeTab.londonTubeHeader)).tap(); 
    await element(by.label(testIDs.HomeTab.settingsBackButton)).atIndex(1).tap();
    await expect(element(by.text(testIDs.HomeTab.londonTubeHeader))).not.toBeVisible() 
  });

  it('Common journeys with My Stations off', async () => { 
    await expect(element(by.text(testIDs.WelcomeScreen.loginButton))).toBeVisible();
    await element(by.text(testIDs.WelcomeScreen.continueWithoutButton)).tap();
    await element(by.text(testIDs.HomeTab.pinCommonJourneyButton)).tap();
    await element(by.label(testIDs.CommonJourneys.leavingFromField)).atIndex(1).tap();
    await element(by.type("RCTUITextField")).replaceText(utils.CommonJourneysCredentials.departingStation);
    await element(by.text(testIDs.CommonJourneys.searchForStationHeader)).tap();
    await element(by.text(utils.CommonJourneysCredentials.departingStationCode)).tap();
    await element(by.text(testIDs.CommonJourneys.goingToField)).tap();
    await element(by.type("RCTUITextField")).replaceText(utils.CommonJourneysCredentials.arrivalStation);
    await element(by.text(testIDs.CommonJourneys.searchForStationHeader)).tap();
    await element(by.text(utils.CommonJourneysCredentials.arrivalStationCode)).tap();
    await element(by.text(testIDs.CommonJourneys.viaButton)).tap();
    await element(by.text(testIDs.CommonJourneys.goingViaField)).tap();
    await element(by.type("RCTUITextField")).replaceText(utils.CommonJourneysCredentials.viaStation);
    await element(by.text(testIDs.CommonJourneys.searchForStationHeader)).tap();
    await element(by.text(utils.CommonJourneys.viaStationCode)).tap();
    await element(by.text(testIDs.CommonJourneys.pinJourneyButton)).tap();
    await element(by.text("{toggled, select, true {Hide} false {View more}} times")).tap(); //change
    await element(by.text(testIDs.CommonJourneys.showJourneyInformation)).atIndex(1).tap();
    await element(by.text(utils.CommonJourneysCredentials.toDepartingStationTitle)).tap();
    await utils.scrollDownUntilVisible(testIDs.CommonJourneys.buyTicketsNowButton);
    await element(by.text(testIDs.CommonJourneys.buyTicketsNowButton)).tap();
    await element(by.text("Find train tickets")).tap();
  });  

  it('Common journeys with My Stations on', async () => { 
    await expect(element(by.text(testIDs.WelcomeScreen.loginButton))).toBeVisible();
    await element(by.text(testIDs.WelcomeScreen.continueWithoutButton)).tap();
    await element(by.type(testIDs.HomeTab.settingsCog)).atIndex(1).tap();
    await element(by.text(testIDs.HomeTab.myStationsHeader)).tap(); 
    await element(by.text(testIDs.HomeTab.pinCommonJourneyButton)).tap();
    await element(by.label(testIDs.HomeTab.settingsBackButton)).atIndex(1).tap();
    await element(by.text(testIDs.HomeTab.pinCommonJourneyButton)).tap();
    await element(by.label(testIDs.CommonJourneys.leavingFromField)).atIndex(1).tap();
    await element(by.type("RCTUITextField")).replaceText(utils.CommonJourneysCredentials.departingStation);
    await element(by.text(testIDs.CommonJourneys.searchForStationHeader)).tap();
    await element(by.text(utils.CommonJourneysCredentials.departingStationCode)).tap();
    await element(by.text(testIDs.CommonJourneys.goingToField)).tap();
    await element(by.type("RCTUITextField")).replaceText(utils.CommonJourneysCredentials.arrivalStation);
    await element(by.text(testIDs.CommonJourneys.searchForStationHeader)).tap();
    await element(by.text(utils.CommonJourneysCredentials.arrivalStationCode)).tap();
    await element(by.text(testIDs.CommonJourneys.directButton)).tap();
    await element(by.text(testIDs.CommonJourneys.seOnlyButton)).tap();
    await element(by.text(testIDs.CommonJourneys.pinJourneyButton)).tap();
    await element(by.text(testIDs.CommonJourneys.pinStationsToHomeMessage)).tap();
    await element(by.label(utils.CommonJourneysCredentials.departingStation)).atIndex(2).tap();
    await element(by.label(utils.CommonJourneysCredentials.arrivalStation)).atIndex(2).tap();
    await element(by.text(testIDs.CommonJourneys.doneButton)).tap();
    await element(by.text(testIDs.CommonJourneys.sorryNoServicesMessage)).tap();
    await element(by.label(testIDs.HomeTab.commonJourneysEditButton)).atIndex(1).tap();
    await element(by.text(utils.CommonJourneysCredentials.arrivalStation)).tap();
    await element(by.label(testIDs.CommonJourneys.backToHomeButton)).atIndex(1).tap();
    await expect(element(by.text(testIDs.HomeTab.pinCommonJourneyButton))).toBeVisible();
    await element(by.type(testIDs.HomeTab.settingsCog)).atIndex(1).tap();
    await element(by.label(testIDs.HomeTab.commonJourneysHeader)).tap();
    await element(by.text(testIDs.HomeTab.settingsBackButton)).atIndex(1).tap();
    //not to be visible CJ pin button
    await expect(element(by.text(utils.CommonJourneysCredentials.departingStation))).toBeVisible();
    await expect(element(by.text(utils.CommonJourneysCredentials.arrivalStation))).toBeVisible();
  
  }); 

});
