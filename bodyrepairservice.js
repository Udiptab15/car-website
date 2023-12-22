function goBack() {
  window.history.back();
}

localStorage.setItem("serviceName", "Body Repair Service");

if (document.referrer !== "booking.html") {
  localStorage.removeItem("serviceName");
}
