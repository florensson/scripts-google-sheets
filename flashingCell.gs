// Makes the boarder switch between orange and green for a given cell, this case A22
function onOpen(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var mysheet = ss.getSheetByName("Blad1");
  
  // Run the animation for cell A22
  for (var i = 0; i < 500; i++) {
    if (i % 2 == 0) {
      mysheet.getRange("A22").setBorder(true, true, true, true, null, null, "ORANGE", SpreadsheetApp.BorderStyle.SOLID);
    } else {
      mysheet.getRange("A22").setBorder(true, true, true, true, null, null, "GREEN", SpreadsheetApp.BorderStyle.SOLID);
    }

    SpreadsheetApp.flush();
    Utilities.sleep(300);
  }
}
