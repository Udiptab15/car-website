function goBack() {
  window.history.back();
}

localStorage.setItem("serviceName", "Preventive Maintenance Service");

if (document.referrer !== "booking.html") {
  localStorage.removeItem("serviceName");
}
