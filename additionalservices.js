document.addEventListener("DOMContentLoaded", () => {
  const serviceList = [
    {
      name: "Car Care Services",
      url: "carcareservice.html",
      price: "$100",
    },
    {
      name: "Body Repair Service",
      url: "bodyrepairservice.html",
      price: "$500",
    },
    {
      name: "Preventive Maintenance Service",
      url: "preventivemaintenanceservice.html",
      price: "$50",
    },
  ];

  const serviceListContainer = document.getElementById("service-list");

  serviceList.forEach((service) => {
    const listItem = document.createElement("div");
    listItem.innerHTML = `
            <h3>${service.name}</h3>
            <p>Price: ${service.price}</p>
            <button onclick="window.location.href='${service.url}'">Learn More</button>
        `;
    serviceListContainer.appendChild(listItem);
  });
});
