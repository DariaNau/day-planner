var currentDate = moment().format('MMMM Do, YYYY');
var now = moment();
var schedule = {};

// show current date on the page

$("#currentDay").text(currentDate);

//onclick event for each save button

$('.saveBtn').on('click', function () {
    var text = $(this).siblings(".description").val()
    var time = $(this).parent().attr("data-time")
    // console.log(time + ": " + text)
    schedule[time] = text;
    // console.log(schedule.hasOwnProperty('key'));
    // console.log(schedule);
    var schedString = JSON.stringify(schedule);
    localStorage.setItem('schedule', schedString)
});

//if local storage have data - get it and Json parse it back to the textarea (and if empty - do nothing)

var storageSchedule = localStorage.getItem('schedule');

if (storageSchedule) {
    schedule = JSON.parse(storageSchedule);
} else {
    for (let i = 0; i <= 17; i++){
    schedule[i] = ''
    console.log("Nothing is saved in local storage.")
}};

// colorcoding: change color of the textarea depending on it's time condition (past, present, or future).
// using "for loop" for attributes and objects and classes defined with css

for (var key in schedule) {

    console.log(key, schedule[key])

    if (moment(key, 'H').isBefore(now, 'hour')) {
        $("[data-time=" + key + "]")

        //target input of the task field's value and add the class

            .find('.description')
            .val(schedule[key])
            .addClass("past");
    }
    else if (moment(key, 'H').isAfter(now, 'hour')) {
        $("[data-time=" + key + "]")
            .find('.description')
            .val(schedule[key])
            .addClass("future");
    }
    else if (moment(key, 'H').isSame(now, 'hour')) {
        $("[data-time=" + key + "]")
            .find('.description')
            .val(schedule[key])
            .addClass("present") 
}
}
