document.addEventListener("DOMContentLoaded", function () {
    const catsButton = document.getElementById("catsButton");
    const dogsButton = document.getElementById("dogsButton");
    const line = document.querySelector(".line");
    let activeButton = catsButton;

    catsButton.addEventListener("click", function () {
        if (activeButton !== catsButton) {
            catsButton.style.color = "#f7b267";
            catsButton.style.backgroundColor = "transparent";
            dogsButton.style.backgroundColor = "#ccc";
            dogsButton.style.color = "#888";
            line.style.left = "0";
            activeButton = catsButton; // Actualiza el botón activo
        }
        document.querySelector(".tab").classList.add("active");
    });

    dogsButton.addEventListener("click", function () {
        if (activeButton !== dogsButton) {
            dogsButton.style.color = "#f7b267";
            dogsButton.style.backgroundColor = "transparent";
            catsButton.style.backgroundColor = "#ccc";
            catsButton.style.color = "#888";
            line.style.left = "50%";
            activeButton = dogsButton; // Actualiza el botón activo
        }
        document.querySelector(".tab").classList.add("active");
    });
});
