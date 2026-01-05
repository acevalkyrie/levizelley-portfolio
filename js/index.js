const imgCheckboxes = document.querySelectorAll('.caritem input[type="checkbox"]');
let backFill = document.getElementById("uncheck");
let fullImage = document.getElementById("fullscreen")

for (i of imgCheckboxes) {
    i.addEventListener("click", setFullScreen)
}

function setFullScreen() {
    for (i of imgCheckboxes) {
        if (i.checked) {
            let style = window.getComputedStyle(i);
            let bgImg = style.backgroundImage;
            
            backFill.classList.remove("atrest")
            backFill.classList.add("coverscreen")
            fullImage.classList.remove("atrest")
            fullImage.classList.add("coverscreen")
            fullImage.style.backgroundImage = bgImg;
        }
    }
}

backFill.addEventListener("click", unsetFullScreen)

function unsetFullScreen() {
    fullImage.style.backgroundImage = null;
    backFill.classList.add("atrest")
    backFill.classList.remove("coverscreen")
    fullImage.classList.add("atrest")
    fullImage.classList.remove("coverscreen")
    for (i of imgCheckboxes) {
        if (i.checked) {
            i.checked = false;
        }
    }
}

const colorThemes = document.querySelectorAll('[name="themeswitcher"]');

storeTheme = function(theme) {
    localStorage.setItem("theme", theme);
}

retrieveTheme = function() {
    const activeTheme = localStorage.getItem("theme");
    colorThemes.forEach(themeOption => {
        if (themeOption.id === activeTheme) {
            themeOption.checked = true;
        }
    })
}

colorThemes.forEach(themeOption => {
    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id);
    })
})

document.onload = retrieveTheme();


/**** POSSIBLE FRAMEWORK FOR STORING EXTRANEOUS CONTENT ELSEWHERE UNTIL IT NEEDS TO LOAD, CUTTING DOWN ON LOADING TIME ****/
/* const projects = document.getElementById("projectcontainer");

const url = "js/test.html";

async function inserttext(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const text = await response.text();
        projects.innerHTML = text;
    } catch (e) {
        console.error(e);
    }
}

inserttext(url); */