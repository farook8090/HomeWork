// Adding evenetListener to button.

document.getElementById("learn_more").addEventListener("click", learnmore);

// What i want if someone clicked on the button.
function learnmore(_learnmore) {
  // ? worked.
  // alert("Worked Smoothly.") = _learnmore;
  //   ? worked.
  //   I want to make the second paragraph visible when clicked on learn more button.
  
  document.getElementById("view-more-text").innerHTML =
    "This is the other para i want to show on clicking the learn more button" +
    _learnmore;
}
