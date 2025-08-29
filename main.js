function openTabs(tabName) {
    console.log("Opening " + tabName);
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

window.onload = function() {
    const home = document.getElementById("homeBtn");
    const stressed = document.getElementById("stressedBtn");
    const bored = document.getElementById("boredBtn");
    const sad = document.getElementById("sadBtn");
    const about = document.getElementById("aboutBtn");
    const animationInput = document.querySelector("input[type='number']");

    home.addEventListener("click", () => openTabs("home"));
    stressed.addEventListener("click", () => openTabs("stressed"));
    bored.addEventListener("click", () => openTabs("bored"));
    sad.addEventListener("click", () => openTabs("sad"));
    about.addEventListener("click", () => openTabs("about"));

    animationInput.addEventListener("change", (event) => {
        document.documentElement.style.setProperty("--animationTime", animationInput.value + "s");
    });

    home.click();
}