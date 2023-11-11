window.addEventListener("load", () => {
  const buttons = document.getElementsByClassName("issue-button");

  console.log(buttons);

  for (let i = 0; i < buttons.length; i += 1) {
    console.log(buttons[i]);
    buttons[i].addEventListener("click", () => {
      var issueName = "issue" + (i + 1);
      document.getElementById("pdf-container").innerHTML =
        '<embed id="pdf-display" src="issues/' +
        issueName +
        '.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&scrollbar=0"/>';
      document.getElementById("overlay").style.display = "block";
      document.getElementById("issuu").style.display = "none";
      document.body.style.overflow = "hidden";
    });
  }

  document.getElementById("close-overlay").addEventListener("click", () => {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("issuu").style.display = "flex";
    document.body.style.overflow = "";
  });
});
