// from data.js
var tableData = data;
var tbody = d3.select("tbody");

var button = d3.select("#filter-btn");
var form = d3.select("form");

fillTable(tableData);
button.on("click", runQuery);
form.on("submit", runQuery);
  
function clearTable()
{
  console.log("clearTable called");
  d3.selectAll("tr").remove()
};

function fillTable(myData)
    { 
      console.log("fillTable called");
      clearTable();
      myData.forEach((data) =>
        {
          var row = tbody.append("tr");
          Object.entries(data).forEach(([key, value]) =>
           {
            var cell = row.append("td");
            cell.text(value);
           });
        });
    };

  function runQuery()
  {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    //var inputElement = d3.select(".form-control");
    var dateElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputdateValue = dateElement.property("value");

    console.log("date", inputdateValue);
    
    var filteredData = tableData.filter(data => data.datetime === inputdateValue);
    
    //Clear existing table on page
    clearTable();

    //Fill Table with filtered data
    fillTable(filteredData);

    //print filtered table in log
    console.log(filteredData);

  };

