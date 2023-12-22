function checkAppointmentDate() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();

    var selectedDate = new Date(document.getElementById('appointment-date').value);
    var selectedYear = selectedDate.getFullYear();
    var selectedMonth = selectedDate.getMonth();
    var selectedDay = selectedDate.getDate();

    if (selectedYear < currentYear || (selectedYear == currentYear && selectedMonth < currentMonth) || (selectedYear == currentYear && selectedMonth == currentMonth && selectedDay < currentDay)) {
       
        document.getElementById("date-error").innerHTML = "Invalid date selected.Please select a date in the future.";
    
        return false;
    } else {
        window.location.assign('bookingsuccess.html');
        return false;
    }
};
