var numberSelected = 0;
var submitEnabled = false;

function resetColors(excludeClass) {
    const classesToColor = ["one", "two", "three", "four", "five"];
    const commonColor = `hsl(213, 19%, 18%)`;
  
    for (const className of classesToColor) {
      if (className !== excludeClass) {
        document.querySelector(`.${className}`).classList.remove('selected');
      }
    }
  }

  function updateNumberSelected() {
    document.querySelector('.selection-text #numberSelected').textContent = "\u00A0" + numberSelected + "\u00A0";
    submitEnabled = true;
}

document.querySelector('.selection-text #numberSelected').textContent = numberSelected;
  
  document.querySelector('.one').addEventListener('click', function(event) {
    resetColors("one");
    document.querySelector(".one").classList.add('selected');
    numberSelected = "1";
    updateNumberSelected()
  });

  document.querySelector('.two').addEventListener('click', function(event) {
    resetColors("two");
    document.querySelector(".two").classList.add('selected');
    numberSelected = "2";
    updateNumberSelected()
  });

  document.querySelector('.three').addEventListener('click', function(event) {
    resetColors(".three");
    document.querySelector(".three").classList.add('selected');
    numberSelected = "3";
    updateNumberSelected()
  });

  document.querySelector('.four').addEventListener('click', function(event) {
    resetColors(".four");
    document.querySelector(".four").classList.add('selected');
    numberSelected = "4";
    updateNumberSelected()
  });

  document.querySelector('.five').addEventListener('click', function(event) {
    resetColors(".five");
    document.querySelector(".five").classList.add('selected');
    numberSelected = "5";
    updateNumberSelected()
  });

  document.querySelector('.container-submit').addEventListener('click', function(event) {
    if (submitEnabled) {
        document.querySelector(".stage-one").style.display = "none";
        document.querySelector(".stage-two").style.display = "flex";
    }
    });