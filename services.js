document.addEventListener("DOMContentLoaded", () => {
  const serviceList = [
    {
      name: "Engine Repair",
      url: "enginerepair.html",
      price: "$200",
    },

    {
      name: "Battery Replacement",
      url: "batteryreplacement.html",
      price: "$100",
    },

    {
      name: "Brake Repair",
      url: "brakerepair.html",
      price: "$150",
    },

    {
      name: "Oil Change",
      url: "oilchange.html",
      price: "$50",
    },
  ];

  const serviceListContainer = document.getElementById("service-list");

  serviceList.forEach((service) => {
    const listItem = document.createElement("div");
    listItem.innerHTML = `
            <h3>${service.name}</h3>
            <p>Price: ${service.price}</p>
            <button class = "button" onclick="window.location.href='${service.url}'">Learn More</button>
        `;
    serviceListContainer.appendChild(listItem);
  });

  const offerExpiration = new Date();
  offerExpiration.setDate(offerExpiration.getDate() + 10);
  const updateTimer = () => {
    const currentTime = new Date();
    const remainingTime = offerExpiration - currentTime;
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    timer.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  };
  updateTimer();
  setInterval(updateTimer, 1000);
});
