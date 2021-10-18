var saveBtn = $(".saveBtn");

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

//end of current day display- done

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours-- requirement--- Done in HTML

// WHEN I click into a time block
// THEN I can enter an event- done

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage -done
var saveTasks = function () {
  //this references the html in the dom. siblings is the location that content is in and we're calling the val and attr
  var text = $(this).siblings(".content").val();
  var idInfo = $(this).siblings(".content").attr("id");
  //textareaArray= $(".description");
  
  console.log(idInfo);
  //saving val and attr of content into local storage using Json stringify to make an object a string
  textInfo = localStorage.setItem(idInfo, JSON.stringify(text));
  console.log("button clicked");
};

saveBtn.on("click", saveTasks);

// WHEN I refresh the page
// THEN the saved events persist- done 
var loadTask = function() {
  //an array of id's in my textarea
  var textareaArray= ["9", "10", "11","12", "13", "14", "15", "16","17"];
  //methods to call the hour from the computer
  var currentTime = moment().hour();
  for (var i = 0; i < textareaArray.length; i++) {
    // calls the id from the textarea and adds it to the array
    var id = "#" + textareaArray[i];
    //pulls textarea array val you from local storage to help it remain on the page
    $(id).val(localStorage.getItem(textareaArray[i]));
    //write within for loop 
    
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future- done
    if ( textareaArray[i] > currentTime) {
      //$("p:first").addClass("intro");
      $(id).addClass("bg-secondary");
      //$("p").removeClass("intro");
      $(id).removeClass("bg-primary");

    } else if (textareaArray[i] < currentTime) {
      $(id).addClass("bg-info");
      $(id).removeClass("bg-primary");
    }
  } 
};

//clears all text in calender- done
function clear() {
  var textareaArray= ["9", "10", "11","12", "13", "14", "15", "16","17"];
  for (var i = 0; i < textareaArray.length; i++) {
    var id = "#" + textareaArray[i];
    window.localStorage.removeItem(textareaArray[i]);
    $(id).val("");
}
};

$("#clearCalendar").click(clear);

loadTask();