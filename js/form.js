function loginUser() {
  //document.user_form.action = "login.html";
  let myUsername = document.getElementById('username');
  let myPassword = document.getElementById('password');

  if (myUsername.value === "Selenium" && myPassword.value === "password123") {
    document.getElementById("result").innerHTML = "Success!"
  } else {
    document.getElementById("result").innerHTML = "Invalid username or password."
  }

  //console.log(myUsername.value);
  //alert(myUsername.value);
  return false;
}
