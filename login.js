const jsonData = [
  { username: "user1", password: "pass1" },
  { username: "user2", password: "pass2" },
  { username: "user3", password: "pass3" },
];

const loginForm = document.getElementById("loginForm");
const result = document.getElementById("result");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = jsonData.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    result.textContent = "";
    window.location.href = "index.html";
  } else {
    result.textContent = "Incorrect username or password.";
    result.classList.add("error");
    result.classList.remove("success");
  }
});

// document.getElementById('login-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;

//     fetch('users.json')
//         .then(response => response.json())
//         .then(users => {
//             let isValid = false;
//             for (let user of users) {
//                 if (user.username === username && user.password === password) {
//                     isValid = true;
//                     sessionStorage.setItem('user', JSON.stringify(user));
//                     location.assign('home.html');
//                     break;
//                 }
//             }
//             if (!isValid) {
//                 alert('Invalid username or password. Please try again.');
//             }
//         });
// });
