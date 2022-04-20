var typed = new Typed(".typing", {
    strings: ["Web Developer", "Computer Programmer", "Software Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


function toggleSkin() {

    if (document.getElementById("style-switcher").style.transform == "translateX(100%)") {
        document.getElementById("style-switcher").style.transform = "translateX(0%)"
    } else {
        document.getElementById("style-switcher").style.transform = "translateX(100%)"
    }

}

function changeMode() {
    /************
     *          --bg-black-900: #f2f2fc;
                --bg-black-100: #fdf9ff;
                --bg-black-50: #e8dfec;
                --text-black-900: #302e4d;
                --text-black-700: #504e70;
*/
    let y = new String('f2f2fc');
    let x = getComputedStyle(document.documentElement).getPropertyValue('--bg-black-900');
    if (x.includes(y)) {

        document.documentElement.style.setProperty('--bg-black-900', '#000000');
        document.documentElement.style.setProperty('--bg-black-100', '#000000');
        document.documentElement.style.setProperty('--text-black-900', '#fdf9ff');
        document.documentElement.style.setProperty('--text-black-700', '#fdf9ff');

    } else {
        document.documentElement.style.setProperty('--bg-black-900', '#f2f2fc');
        document.documentElement.style.setProperty('--bg-black-100', '#fdf9ff');
        document.documentElement.style.setProperty('--text-black-900', '#302e4d');
        document.documentElement.style.setProperty('--text-black-700', '#504e70');
    }
    /*
        document.documentElement.style.setProperty('--skin-color', '#ec1839');
        document.documentElement.style.setProperty('--skin-color', '#ec1839');
    */
    //let x = getComputedStyle(document.documentElement).getPropertyValue('--bg-black-900');


}

function redSkin() {
    document.documentElement.style.setProperty('--skin-color', '#ec1839');
}

function orangeSkin() {
    document.documentElement.style.setProperty('--skin-color', '#fa5b0f');
}

function greenSkin() {
    document.documentElement.style.setProperty('--skin-color', '#37b185');
}

function blueSkin() {
    document.documentElement.style.setProperty('--skin-color', '#1854b4');
}

function pinkSkin() {
    document.documentElement.style.setProperty('--skin-color', '#f021b2');
}