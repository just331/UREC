document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listDay,listWeek',
    },

      views:{
        listDay: {buttonText: 'Today'},
        listWeek: {buttonText: 'Week'}
      },
    initialView: 'listDay',
    displayEventTime: true, // don't show the time column in list view

    // THIS KEY WON'T WORK IN PRODUCTION!!!
    // To make your own Google API key, follow the directions here:
    // http://fullcalendar.io/docs/google_calendar/
    googleCalendarApiKey: 'AIzaSyAJ8F-W3G8QdVUijSeBiSNTai9bKDEcSKc',

    // US Holidays
    events: 'a8n57484qtiggrf5p9tr2rnveg@group.calendar.google.com',
    className: 'gcalevent',
    eventClick: function(event) {
      window.open(event.url, 'gcalevent', 'width=400,height=600');
      return false;
    },
    eventRender: function(event, element, view) {
      if (view.name === "listDay"){
        element.find('_blank').append("<br/>"  + event.location, "&nbsp;" + "<br/>" + event.description);
      }
    },

  });

  calendar.render();
});