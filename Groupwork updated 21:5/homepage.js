function myFunction() {
    let text;
    let person = prompt("Please enter your name:", "");
    if (person == null || person == "") {
      alert("Hello, welcome to our website");
    } else {
      alert("Hello " + person + "! Welcome to our website!");
    }
  }