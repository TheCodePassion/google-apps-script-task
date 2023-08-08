function sendAverageEmail() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let cell1 = sheet.getRange("A1").getValue(); 
  let cell2 = sheet.getRange("B1").getValue(); 
  let average = (cell1 + cell2) / 2;

  let recipientEmail = "example@gmail.com";

  let subject = "Arithmetic average";
  let message = "The arithmetic mean of the values of cells A1 and B1 is equal to: " + average;

  MailApp.sendEmail(recipientEmail, subject, message);
}
sendAverageEmail()
