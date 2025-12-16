const { waitFor } = require("@testing-library/react-native");
const { util } = require("prettier");
const testIDs = require("./testIDs");
const utils = require("./utils");

module.exports.InvalidEmailCredentials = {
    email: 'failedlogin@test.com',
    password: 'Badpassword!',
  };

module.exports.ValidEmailCredentials = {
    email: 'craig.ball@ontrackretail.co.uk',
    password: '!Testtest12345',
  };

  module.exports.NewRandomEmail = {
    email: GetRandomEmail(),
  }

  module.exports.ReasonForFault = {
    CharacterReason: 'Reason Reason Reason Reason Reason',
  }

  module.exports.GetDate = {
      passengerAssistDate: GetPassengerAssistDate(),
      over65Date: GetOver65DateofBirth(),
      dueDate: GetBabyDueDate(),
      infantDate: GetInfantDate(),
      passengerAssistReturnDate: GetPassengerAssistReturnDate(),
      passengerAssistDateLabel: GetLabelForPassengerAssistDate(),
      faultReportingDate: GetFaultReportingDate(),
  }

  module.exports.FaultReportingCredentials = {
    departingStation: 'Sevenoaks',
    departingStationCode: 'SEV',
    arrivalstation: 'London Charing Cross',
    arrivalStationCode: 'CHX',
    coachNumber: '12345',
    firstName: 'Automation',
    surname: 'PassAssist',
    phoneNumber: '07545691123',
}

module.exports.CommonJourneysCredentials = {
    departingStation: 'Newcastle',
    departingStationCode: 'NCL',
    arrivalStation: 'York',
    arrivalStationCode: 'YRK',
    viaStation: 'Darlington',
    viaStationCode: 'DAR',
    toDepartingStationTitle: 'to York',
}


  module.exports.PassengerAssistCredentials = {
    firstName: 'Automation',
    surname: 'PassAssist',
    phoneNumber: '07545691123',
    editedPhoneNumber: '0754569444',
    firstLineAddress: 'PassAssist address',
    town: 'London',
    postcode: 'NE51XA',
    departingStation: 'London Kings Cross',
    departingStationCode: 'KGX',
    arrivalStation: 'Newcastle',
    arrivalStationCode: 'NCL',
}

module.exports.AssistanceSchemeCredentials = {
    firstName: 'Automation',
    surname: 'AssistScheme',
    phoneNumber: '07545691123',
    firstLineAddress: 'AssistScheme 1st address',
    secondLineAddress: 'AssistScheme 2nd address',
    city: 'London',
    county: 'Greater London',
    postcode: 'NE51XA',
    departingStation: 'London Kings Cross',
    departingStationCode: 'KGX',
    arrivalStation: 'Newcastle',
    arrivalStationCode: 'NCL',
    
}

module.exports.postcodeFinderCredentials = {
    postcode: 'SE10HS',
    selectAnAddress: '16 Great Guildford Street, London, SE10HS',
}


  function GetRandomEmail() {
    var date = new Date();
    var aaaa = date.getUTCFullYear();
    var gg = date.getUTCDate();
    var mm = (date.getUTCMonth() + 1);

    if (gg < 10)
        gg = "0" + gg;
    if (mm < 10)
        mm = "0" + mm;

    var cur_day = aaaa +  mm  + gg;
    var hours = date.getUTCHours()
    var minutes = date.getUTCMinutes()
    var seconds = date.getUTCSeconds();

    if (hours < 10)
        hours = "0" + hours;
    if (minutes < 10)
        minutes = "0" + minutes;
    if (seconds < 10)
        seconds = "0" + seconds;

    var current_time =  cur_day + hours + minutes + seconds;
    var fullemail = "craig.ball+" + current_time + "@ontrackretail.co.uk";
    console.log(typeof fullemail);
    return fullemail;
}

function GetPassengerAssistDate() {
    var today = new Date();
    var dd = today.getDate() + 2;
    var mm = today.getMonth() + 1; 

    if (dd > 28){
    dd = 1;
    mm = mm + 1;
    }

    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd + "T11:34:12+01:00";
    return today;
}

function GetFaultReportingDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth(); 

    if (dd > 28){
    dd = 1;
    mm = mm + 1;
    }

    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd + "T11:34:12+01:00";
    return today;
}


function GetLabelForPassengerAssistDate() {
    var today = new Date();
    var dd = today.getDate() + 2;
    var mm = today.getMonth(); 
    var yyyy = today.getFullYear();
    var suffix = "th";
    
    if (dd > 28){
    dd = 1;
    mm = mm + 1;
    }
    
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][mm];
    
    var j = dd % 10,
    k = dd % 100;
    if (j == 1 && k != 11) {
    suffix = "st";
    }
    if (j == 2 && k != 12) {
    suffix = "nd";
    }
    if (j == 3 && k != 13) {
    suffix = "rd";
    }
    
    var textedit = "Selected date is " + dd + suffix + " " + month + " " + yyyy + ". Tap to edit.";
    return textedit;
}

function GetPassengerAssistReturnDate() {
    var today = new Date();
    var dd = today.getDate() + 5;
    var mm = today.getMonth() + 1; 

    if (dd > 28){
        dd = 3;
        mm = mm + 1;
        }

    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd + "T11:34:12+01:00";
    return today;
}



function GetOver65DateofBirth() {
    var today = new Date();
    var dd = 1;
    var mm = today.getMonth(); 
    var yyyy = today.getFullYear() - 70;
    today = yyyy + '-' + mm + '-' + dd + "T11:34:12+01:00";
    return today;
}

function GetBabyDueDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 2; 
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd + "T11:34:12+01:00";
    return today;
}


function GetInfantDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth(); 
    var yyyy = today.getFullYear() - 2;

    today = yyyy + '-' + mm + '-' + dd + "T11:34:12+01:00";
    return today;
}

module.exports.scrollDownUntilVisible = async (buttonByText) => { 
    var visible = false;
    var counter = 0;
    while(!visible && counter < 10){
        try{
        await expect(element(by.text(buttonByText))).toBeVisible()
        visible = true;
        //waitFor(1);
    } catch (e) {
        await element(by.type("RCTCustomScrollView")).scroll(125, "down");
        counter = counter + 1;
    }
    } 
  }




