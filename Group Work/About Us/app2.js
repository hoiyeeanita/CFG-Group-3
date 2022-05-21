document.getElementById("form").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("form").scrollIntoView({behavior: 'smooth'});
}

function show_alert() {
    if(!confirm("Do you really want to do this?")) {
      return false;
    }
    this.form.submit();
  }
