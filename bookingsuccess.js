function rateExperience() {
  let rating = prompt("Please rate your experience from 1 to 5.");
  if (rating && !isNaN(rating) && rating >= 1 && rating <= 5) {
    alert("Thank you for providing your rating!");
  } else {
    alert("Invalid rating. Please provide a rating between 1 and 5.");
    rateExperience();
  }
}

function logoutfunc() {
  window.location.href = "home.html";
  alert("You have successfully logged out.");
}

// document.getElementById('rating-button').addEventListener('click', () => {
//     const rating = prompt('Please provide a rating between 1 and 5.');
//     if (rating && !isNaN(rating) && rating >= 1 && rating <= 5) {
//         alert('Thank you for providing your rating!');
//     } else {
//         alert('Invalid rating. Please provide a rating between 1 and 5.');
//     }
// });

// document.getElementById('logout-button').addEventListener('click', () => {
//     sessionStorage.clear();
//     alert('Logged out successfully');
//     location.assign('home.html');
// });
