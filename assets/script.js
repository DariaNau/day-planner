var currentDate = moment().format('MMMM Do, YYYY');
var now = moment();
var schedule = {};

$("#currentDay").text(currentDate);

$('.saveBtn').on('click', function () {
    var text = $(this).siblings(".description").val()
    var time = $(this).parent().attr("data-time")
    console.log(time + ": " + text)

    schedule[time] = text;
    console.log(schedule);

    var schedString = JSON.stringify(schedule);
    localStorage.setItem('schedule', schedString)
})


var storageSchedule = localStorage.getItem('schedule');
if (storageSchedule) {
    schedule = JSON.parse(storageSchedule);
} else {
    console.log("Nothing in local storage")
}
console.log(schedule)

for (var key in schedule) {
    console.log(key, schedule[key])
    var timeClass = '';

    if (moment(key, 'H').isBefore(now, 'hour')) {
        timeClass = "past"
    }
    else if (moment(key, 'H').isAfter(now, 'hour')) {
        timeClass = "future"
    }
    
    $("[data-time=" + key + "]")
        .find('.description')
        .val(schedule[key])
        .addClass(timeClass)
}








// $(".saveBtn").on('click', function () {


//     if (storedTodos !== null) {
//         todos = storedTodos;
//       }


//     $("textarea").each(function () {
//         var taskId = $(this).attr('id');
//         var value = $(this).val();
//         localStorage.setItem(taskId, value);
//         var getValue = localStorage.getItem(taskId);
//         $(this).val(getValue);

//     });
// });

// $buttons.click (function() {
//     var inputID = $(".userInput").attr("id");
//     var inputVal = $(".userInput").val();
//     inputArr[inputID] = inputVal;
//     var inputString = (JSON.stringify(inputArr[inputID]));
//     localStorage.setItem([inputID],inputString);
//     console.log(inputString);
// });

// function returnInput(){
//     var getInput = localStorage.getItem(inputID);
//     var gotInput = JSON.parse(getInput);
//     console.log(gotInput);
// }

// returnInput();


// var table = document.getElementsByTagName('table')[0],
//     rows = table.getElementsByTagName('tr'),
//     text = 'textContent' in document ? 'textContent' : 'innerText';

// for (var i = 0, len = rows.length; i < len; i++){
//     rows[i].children[0][text] = i + ': ' + rows[i].children[0][text];
// }

// var newRow = $("<tr>").addClass("row");
// var hourCol = $("<td>").addClass("hour");
// var taskCol = $("<td><input></input></td>").addClass("description");
// var saveCol = $("<td>").addClass("saveBtn");

// newRow.append(hourCol, taskCol, saveCol);
// $(".container .hour").append(newRow);


// onclick save button logging input to localStorage (even after reload)

// color - moment === 9am or 10 am 




// var hours = [];
// hours.push(moment({hour, minute: 0}).format('h:mm A'));
// console.log(hours);

// currenDate = currentDate.add(60, 'minutes');





// someFunction = () => {
//     var items = []
//     var currentDate = moment('12');
//     new Array(48).fill().map((acc, index) => {
//       items.push(currentDate.format('h:mm A'))
//       currenDate = currentDate.add(30, 'minutes');
//     })
//     return items
//   }

//   console.log(someFunction())