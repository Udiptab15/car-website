function goBack() {
  window.history.back();
}

localStorage.setItem("serviceName", "Car Care Service");

if (document.referrer !== "booking.html") {
  localStorage.removeItem("serviceName");
}
