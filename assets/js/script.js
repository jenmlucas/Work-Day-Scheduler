var saveBtn = $(".btn");

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

// WHEN I click into a time block
// THEN I can enter an event

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
var saveTasks = function () {
  var text = $(this).siblings(".description").val();
  var idInfo = $(this).siblings(".description").attr("id");
  //textareaArray= $(".description");
  
  console.log(idInfo);
  textInfo = localStorage.setItem(idInfo, JSON.stringify(text));
  console.log("button clicked");
};

saveBtn.on("click", saveTasks);

// WHEN I refresh the page
// THEN the saved events persist
var loadTask = function() {
  var textareaArray= ["9", "10", "11","12", "13", "14", "15", "16","17"];
  var currentTime = moment().hour();
  for (var i = 0; i < textareaArray.length; i++) {
    var id = "#" + textareaArray[i];
    $(id).val(localStorage.getItem(textareaArray[i]));
    //write within for loop 
    if ( textareaArray[i] > currentTime) {
      //$("p:first").addClass("intro");
      $(id).addClass("bg-success");
      //$("p").removeClass("intro");
      $(id).removeClass("bg-primary");

    } else if (textareaArray[i] < currentTime) {
      $(id).addClass("bg-secondary");
      $(id).removeClass("bg-primary");
    }
  }
  
};

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
loadTask();