function showRegForm() {
    var x = document.getElementById("loginBox");
    if (x.style.display === "none") {
      x.style.display = "fixed";
    } else {
      x.style.display = "none";
    }
  }