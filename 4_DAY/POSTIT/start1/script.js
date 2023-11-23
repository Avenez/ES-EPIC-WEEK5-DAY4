let eliminaPostit = function (e) {
  if (e.target.tagName == "DIV") e.target.classList.add("delete");
};

let postit = document.getElementsByTagName("div");

const evento = function () {
  let postit = document.querySelectorAll("div"); //seleziono tutti i p dal DOM
  for (i = 0; i < postit.length; i++) {
    //Ad ognuno aggiungo un "EventListener" che al click lancia le funzioni create
    postit[i].addEventListener("click", function (e) {
      eliminaPostit(e);
    });
  }
};

evento();
