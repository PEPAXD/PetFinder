document.addEventListener("DOMContentLoaded", function () {
    
    //GET-BUTTONS
    const dogIcon = document.getElementById("dogIcon");
    const dogRadioLabel = dogIcon.closest("label");

    const catIcon = document.getElementById("catIcon");
    const catRadioLabel = catIcon.closest("label");

    //ENABLE / DISABLE - BUTTONS
    function setButtonStyle(activeIcon, inactiveIcon) {

        //STYLE ON
        activeIcon.querySelector("span").style.background = "white";
        activeIcon.querySelector("span").style.color = "transparent";
        activeIcon.querySelector("span").style.boxShadow =
            "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset";

        activeIcon.querySelector("i").style.display = "inline-block";
        activeIcon.querySelector("i").style.color = "#f4845f";

        //STYLE OFF
        inactiveIcon.querySelector("span").style.background = "transparent";
        inactiveIcon.querySelector("span").style.color = "#ffffff";
        inactiveIcon.querySelector("span").style.boxShadow = "none";

        inactiveIcon.querySelector("i").style.color = "transparent";
    }

    dogIcon.addEventListener("click", function () {
        setButtonStyle(dogRadioLabel, catRadioLabel);
    });

    catIcon.addEventListener("click", function () {
        setButtonStyle(catRadioLabel, dogRadioLabel);
    });
});

