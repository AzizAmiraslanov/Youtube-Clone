// *****************************************************************************
// When time Click Bars icon toggle Guide code Area Start in the Here
let toggleMenu = document.querySelector(".bar-icon");
let guide = document.querySelector(".guide");
let pageMaanger = document.querySelector(".page-manager");
let alertBtn = document.querySelectorAll(".alert-btn");
let alertBanner = document.querySelector("div.page-manager > div.alert-banner")
let alertBannerUl = document.querySelector("div.page-manager > div.alert-banner > ul")
let updatePage = document.querySelector(".update-page");
let updatePageContent = document.querySelector("update-page-content");
let itemImage = document.querySelectorAll("div.grid-item-content > img");
let videoItemPlay = document.querySelector(".videoItemPlay");


// *****************************************************************************


// Multi Menu Code Area Start in the here

let rightIcon = document.querySelector(".right-icon");
let multiMenu = document.querySelector(".multi-menu");


multiMenu.style.display = "none";
rightIcon.addEventListener("click", function () {
    if (multiMenu.style.display === "none") {
        multiMenu.style.display = "block";
    } else {
        multiMenu.style.display = "none";
    }
})


// Multi Menu Code Area End of the here
// *********************************************************************************************************************************************

guide.className += " d-none";
toggleMenu.addEventListener("click", function (e) {
    guide.classList.toggle("d-block");
    e.preventDefault();

});

// *********************************************************************************************************************************************


// Click Like & dislike & Share Button filled inner code area Start in the Here

let clickIconFilled = document.querySelectorAll("div.player-footer-right-container > ul > li > button > span.material-symbols-outlined");
let clickBtn = document.querySelectorAll("div.player-footer-right-container > ul > li > button");
let calc = document.querySelector("span.calc");



for (let i = 0; i < clickIconFilled.length; i++) {
    clickBtn[i].addEventListener("click", function () {
        clickIconFilled[i].classList.toggle("material-icons");

        if (clickIconFilled[i].className === "material-symbols-outlined material-icons") {
            calc.innerHTML = (parseInt(calc.innerHTML)) + 1;
        } else {
            calc.innerHTML = (parseInt(calc.innerHTML)) - 1;
        }

    })

}
// Click Like & dislike & Share Button filled inner code area Start in the Here

// *********************************************************************************************************************************************

// Follow Button click Show Hide button code Area Start in the here

let showBtn = document.querySelector(".showBtn");
let hideBtn = document.querySelector(".hiddeBtn");
let followIcon = document.querySelector(".follow-icon");

hideBtn.style.display = "none";
followIcon.style.display = "none";

function visibleBtn() {
    showBtn.style.display = "none"
    hideBtn.style.display = "block";
    followIcon.style.display = "block";
}

function hiddenBtn() {
    showBtn.style.display = "block"
    hideBtn.style.display = "none";
    followIcon.style.display = "none";
}

// Follow Button click Show Hide button code Area End of the here
// *********************************************************************************************************************************************

// player-content-main show and hide content code Area Start in the here
let hideContent2 = document.querySelector(".hide-content");
let showContent2 = document.querySelector("#showContent")

function showContent() {
    hideContent2.classList.toggle("d-block");
    showContent2.style.display = "none";
}

function hideContent() {
    hideContent2.classList.remove("d-block");
    showContent2.style.display = "block";
}
// player-content-main show and hide content code Area End of the here

// *********************************************************************************************************************************************


// Comments Toolbar Icon clicked filled in Code Area Start in the Here

let commentLike = document.querySelectorAll("div.like-toolbar > span.material-symbols-outlined");
let commentDislike = document.querySelectorAll("div.dislike-toolbar > span.material-symbols-outlined");
let countLike = document.querySelectorAll("span#like-count");
for (let i = 0; i < commentLike.length; i++) {
    commentLike[i].addEventListener("click", function (e) {
        commentLike[i].classList.toggle("material-icons");
        e.preventDefault();


        if (commentLike[i].className === "material-symbols-outlined material-icons") {
            countLike[i].innerHTML = (parseInt(countLike[i].innerHTML)) + 1;
        } else {
            countLike[i].innerHTML = (parseInt(countLike[i].innerHTML)) - 1;

        }

    })
}

for (let i = 0; i < commentDislike.length; i++) {
    commentDislike[i].addEventListener("click", function (e) {
        commentDislike[i].classList.toggle("material-icons");
        e.preventDefault();
    })
}


// Comments Toolbar Icon clicked filled in Code Area End of the Here

// *********************************************************************************************************************************************