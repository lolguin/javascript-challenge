// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Test to view data
// console.log(data);

// Populate Table with ufo data
tableData.forEach((ufodata) => {
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });