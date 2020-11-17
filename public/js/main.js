function showMenu() {
  if (!document.getElementById("check").checked) {
    document.getElementById("navmenu").style.background = "rgba(0, 0, 0, 0.9)";
    document.getElementById("navmenu").style.textAlign = "center";
    document.getElementById("navmenu").style.display = "block";
    document.getElementById("navmenu").style.position = "fixed";
    document.getElementById("navmenu").style.width = "100%";
    document.getElementById("navmenu").style.height = "100vh";
    document.getElementById("navmenu").style.top = "80px";
    document.getElementById("navmenu").style.left = "0";
    document.getElementById("navmenu").style.transition = "all 0.5s";
  } else {
    document.getElementById("navmenu").style.display = "none";
  }
}

function menuSelect() {
  document
    .getElementById("navmenu")
    .getElementsByClassName("active")[0]
    .classList.remove("active");
  document.activeElement.classList.add("active");
}

function expandPaper() {
  var papers = document.getElementsByClassName("expanded-paper-div");
  if (papers.length !== 0) {
    papers[0].classList.remove("expanded-paper-div");
  }
  document.activeElement.classList.add("expanded-paper-div");
  // let i;
  // for (i = 0; i < papers.length; i++) {
  //   papers[i].style.maxHeight = "200px";
  // }
  if (document.activeElement.classList.contains("paper-div")) {
    document.activeElement.classList.add("expanded-paper-div");
  } else {
    document.activeElement
      .closest(".paper-div")
      .classList.add("expanded-paper-div");
    // var closestElement = getClosestElement(
    //   document.activeElement,
    //   ".paper-div"
    // );
    // if (closestElement != null) {
    //   closestElement.classList.add("expanded-paper-div");
    // }
  }
  return false;
}

function getClosestElement(elem, selector) {
  for (; elem && elem !== document; elem = elem.parentNode) {
    console.log(elem);
    if (elem.matches(selector)) return elem;
  }
  return null;
}
