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

  var button = d3.select("#filter-btn");
  var form = d3.select("form");

  button.on("click", runQuery);
  form.on("submit", runQuery);

  function runQuery()
  {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select(".form-control");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(data => data.datetime === inputValue);

    console.log(filteredData);

  };

  function clearTable()
  {
    //insert code to clear table data


  }