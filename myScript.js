window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  var eventsArray = [
    {
      title  : 'Appointment with Dallas and Instructor Abraham in Mitsubishi Outlander',
      start  : '2023-05-11',
      time: '3:00 P.M',
      driver: "Abraham",
      passenger: "Dallas",
      duration: '2 hours'
    },
    {
      title  : 'Appointment with Khris and Instructor Kourteny in Toyota Supra',
      start  : '2023-05-12',
      time: '8:00 A.M',
      driver: "Khris",
      passenger: "Kourteny",
      duration: '1 hours'
    },
    {
      title  : 'Appointment with Larry and Instructor Janice in Honda Civic',
      start  : '2023-05-13',
      time: '1:00 P.M',
      driver: "Larry",
      passenger: "Janice",
      duration: '1 hours'
    },
    {
      title  : 'Appointment with Garrett and Instructor Janice in Honda Civic',
      start  : '2023-05-22',
      time: '11:00 A.M',
      driver: "Garrett",
      passenger: "Janice",
      duration: '3 hours'
    }
  ];

  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      height: 500,
      plugins: [ 'dayGrid', 'interaction' ],
  
      eventClick: function(info) {
        PopUpFuction(info.event);
      },
  
      events: function(info, successCallback, failureCallback) {
        successCallback(eventsArray);
      }
    });
  
    calendar.render();
  });
  

  function PopUpFuction(event) {
    var popup = document.getElementById("myPopup");
    popup.innerHTML = '<p><b>Title:</b> ' + event.title + '</p>' +
                       '<p><b>Date:</b> ' + event.start + '</p>'
    popup.classList.toggle("show");
  }
  
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  