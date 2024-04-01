// document.onreadystatechange = function () {
//     if (document.readyState !== "complete") {
//         document.querySelector(
//             "body").style.visibility = "hidden";
//         document.querySelector(
//             "#spinner").style.visibility = "visible";
//     } else {
//         document.querySelector(
//             "#spinner").style.display = "none";
//         document.querySelector(
//             "body").style.visibility = "visible";
//     }
// };

//  < !-- for typewriter effect for front view heading-- >
document.addEventListener('DOMContentLoaded', function (event) {
    // array with texts to type in typewriter
    var dataText = ["Planning to study abroad", "Seeking expert advice ", "on abroad study", "Here we are"];
    var colors = ["#fe0000", "#0f2caa", "#fe0000"]; // Define colors for each sentence

    // type one text in the typewriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, color, fnCallback) {
        // check if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1 with color
            document.querySelector("h1").innerHTML = '<span class="type" style="color:' + color + '">' + text.substring(0, i + 1) + '</span>';

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, color, fnCallback)
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 300);
        }
    }

    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 100);
        }
        // check if dataText[i] exists
        if (i < dataText.length) {
            // text exists! start typewriter animation with corresponding color
            typeWriter(dataText[i], 0, colors[i], function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }

    // start the text animation
    StartTextAnimation(0);
});



// for counter progress
// Counter 1: Visa Categories
let counts1 = setInterval(updated1, 100); // Update every 100ms
let upto1 = 0;

function updated1() {
    let count = document.getElementById("visa-categories");
    count.innerHTML = ++upto1; // Increment count
    if (upto1 === 10) {
        clearInterval(counts1); // Stop the counter when it reaches 10
        count.innerHTML += "+"; // Append "+" sign
    }
}

// Counter 2: Visa Process
let counts2 = setInterval(updated2, 1); // Update every 1ms
let upto2 = 0;

function updated2() {
    let count = document.getElementById("visa-process");
    count.innerHTML = ++upto2; // Increment count
    if (upto2 === 1000) {
        clearInterval(counts2); // Stop the counter when it reaches 1000
        count.innerHTML += "K"; // Append "K" sign
    }
}

// Counter 3: Success Rate
let counts3 = setInterval(updated3, 1); // Update every 1ms
let upto3 = 0;

function updated3() {
    let count = document.getElementById("success-rate");
    count.innerHTML = ++upto3; // Increment count
    if (upto3 === 600) {
        clearInterval(counts3); // Stop the counter when it reaches 600
        count.innerHTML += "+"; // Append "+" sign
    }
}

// Counter 4: Pro
let counts4 = setInterval(updated4, 1); // Update every 1ms
let upto4 = 0;

function updated4() {
    let count = document.getElementById("pro");
    count.innerHTML = ++upto4; // Increment count
    if (upto4 === 15) {
        clearInterval(counts4); // Stop the counter when it reaches 15
        count.innerHTML += "+"; // Append "+" sign
    }
}


// ielts tab
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


