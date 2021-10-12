var saveBtn= $(".btn");

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar- DONE

// On page load:
// Generate current date
// Select element on page that will show the date
// Add date text to the selected element

//var currentDay = document.querySelector("#currentDay");
//var currentDate = moment();
//currentDay.textContent = currentDate.format("MMMM Do YYYY");

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours-- requirement--- Done in HTML


// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future




// WHEN I click into a time block
// THEN I can enter an event

$(".description").on("click", "p", function(){
  var textInfo = $(this).text().trim();
  
  console.log(textInfo);

  saveTasks();
})

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
var saveTasks = function(){
 textInfo= localStorage.setItem("textInfo", JSON.stringify(this));
  console.log("button clicked");
};

saveBtn.on("click", saveTasks);
// WHEN I refresh the page
// THEN the saved events persist