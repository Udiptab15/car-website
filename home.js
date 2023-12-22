document.addEventListener("DOMContentLoaded", () => {
  const serviceList = [
    {
      name: "Engine Repair",
      url: "engine-repair.html",
      price: "$200",
    },
    {
      name: "Battery Replacement",
      url: "battery-replacement.html",
      price: "$100",
    },
    {
      name: "Brake Repair",
      url: "brake-repair.html",
      price: "$150",
    },
    {
      name: "Oil Change",
      url: "oil-change.html",
      price: "$50",
    },
    {
      name: "Preventive Maintenance Service",
      url: "preventive-maintenance-service.html",
      price: "$75",
    },
  ];

  const serviceListContainer = document.getElementById("service-list");

  serviceList.forEach((service) => {
    const listItem = document.createElement("div");
    listItem.classList.add("service");
    listItem.innerHTML = `
            <h3>${service.name}</h3>
            <p>Price: ${service.price}</p>
            <button onclick="window.location.href='${service.url}'">Learn More</button>
        `;
    serviceListContainer.appendChild(listItem);
  });
});
