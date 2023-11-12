window.addEventListener("load", () => {
  const buttons = document.getElementsByClassName("issue-button");

  /* 
  Upon loading we create an event listener for each of our images such that upon 
  clicking the pdf, the overlay div we created gets embedded with the respective 
  pdf so that the user can read the pdf of the NU Sci issue they clicked on 
  */

  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener("click", () => {
      console.log(buttons.length);
      var issueName = "issue" + (buttons.length - i);

      document.getElementById("pdf-container").innerHTML =
        '<embed id="pdf-display" src="issues/' +
        issueName +
        '.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&scrollbar=0"/>';

      document.getElementById("overlay").style.display = "block";
      document.getElementById("issuu").style.display = "none";
      document.getElementById("logo").style.display = "none";
      document.getElementById("divider").style.display = "none";
      document.body.style.overflow = "hidden";
    });
  }

  /* 
  Another listener event is added so that when we are on the overlay view and 
  we click on the "X" button, the overlay stops being displayed, essentially we've
  exited out of the overlay. 
  */

  document.getElementById("close-overlay").addEventListener("click", () => {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("issuu").style.display = "flex";
    document.getElementById("logo").style.display = "flex";
    document.getElementById("divider").style.display = "block";
    document.body.style.overflow = "";
  });
});
