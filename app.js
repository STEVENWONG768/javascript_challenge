// from data.js
var tableData = data;
// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
//var button = d3.select("#button");
var inputField1 = d3.select("#datetime");
//var inputField2 = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var populate = (dataInput) => {

	dataInput.forEach(ufo_sightings => {
		var row = tbody.append("tr");
		columns.forEach(column => row.append("td").text(ufo_sightings[column])
		)
	});
}
var form = d3.select("#form");
populate(data);
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter(){
	console.log("form");
	d3.event.preventDefault();
	var inputDate = inputField1.property("value");
	// const date = d3.select(“#datetime”).property(“value”);
    // let filteredData = tableData;// console.log(inputDate);
	// if (date) {
	// 	filteredData = filteredData.filter(row => row.datetime === date);
	// }
    // buildTable(filteredData);
	console.log(data);
	var filteredData = data.filter(data => data.datetime === inputDate);
	console.log(filteredData); 
	tbody.html("");

}
d3.select("#filter-btn").on("click", runEnter);




  
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
  
  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.


button.on("click", () => {
	d3.event.preventDefault();
	var inputDate = inputField1.property("value").trim();
	var filterDate = data.filter(data => data.datetime === inputDate);
	console.log(filterDate)
}


   

