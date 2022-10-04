let linkedinButton = document.getElementById("linkedin");
let githubButton = document.getElementById("github");
let gmailButton = document.getElementById("gmail");
let instagramButton = document.getElementById("instagram");

let experienceRadioButton = document.getElementById("Experience");
let softSkillsRadioButton = document.getElementById("softSkills");
let hardSkillsRadioButton = document.getElementById("hardSkills");
let curiositiesRadioButton = document.getElementById("curiosities");

linkedinButton.addEventListener('click', function() {
    openInNewTab("https://linkedin.com");
})

githubButton.addEventListener('click', function() {
    openInNewTab("https://github.com/aquilesRod");
})

gmailButton.addEventListener('click', function() {
    openInNewTab("mailto:aquiles.2020131298@unicap.br");
})

instagramButton.addEventListener('click', function() {
    openInNewTab("https://instagram.com/_ragazzoo/");
})

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

//-------------------------------------------------------------------//

experienceRadioButton.addEventListener('click', function() {
    updateToNewFrame("Frames/experience.html");
})

softSkillsRadioButton.addEventListener('click', function() {
    updateToNewFrame("Frames/softSkills.html");
})

hardSkillsRadioButton.addEventListener('click', function() {
    updateToNewFrame("Frames/hardSkills.html");
})

curiositiesRadioButton.addEventListener('click', function() {
    updateToNewFrame("Frames/curiosities.html");
})

function updateToNewFrame(url) {
    let iframe = document.getElementById("aboutFrame");
    iframe.setAttribute("src", url);
}