const password = prompt("Enter a password");

if (password.length >= 6 && password.indexOf(" ") === -1) {
  console.log("Nice password!");
} else {
  console.log("The password CANNOT contain any space characters or be under 6 characters in length!");
}
