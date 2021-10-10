// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// On page load:
// Generate current date
// Select element on page that will show the date
// Add date text to the selected element

var currentDay= document.querySelector("#currentDay");
var currentDate= moment();
currentDay.textContent =currentDate.format("MMMM Do YYYY");

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours-- requirement

    //create time blocks using <ul> <li> elements 
    // create element within <li> for each hour of the work day which is 9 to 5
    //make each <li> slot 1 hour of the day. example 9 am
    //append to div in html
    
    var timeBlocks = document.querySelector(".container");
    var dateSlots = document.createElement("ul")
       
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future


// WHEN I click into a time block
// THEN I can enter an event


// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage


// WHEN I refresh the page
// THEN the saved events persist