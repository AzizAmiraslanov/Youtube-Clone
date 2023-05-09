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

toggleMenu.addEventListener("click", function (e) {
    guide.classList.toggle("d-none");

    e.preventDefault();
    let guide2 = document.querySelector("#content > div > div.guide.d-none");

    if (guide2) {
        pageMaanger.style.position = "absolute";
        pageMaanger.style.left = "0";
        pageMaanger.style.top = "56px";
        alertBanner.style.width = "100%";
        alertBanner.style.display = "flex";
        alertBanner.style.alignItems = "center";
        alertBanner.style.justifyContent = "center";

        updatePage.style.width = "100%"
        for (let images of itemImage) {
            images.style.width = "100%"
            images.style.height = "100%"
        }

    } else {
        pageMaanger.style.position = "absolute";
        pageMaanger.style.left = "240px";
        pageMaanger.style.top = "56px";
        alertBanner.style.width = "100%";
        alertBanner.style.display = "flex";
        alertBanner.style.alignItems = "center";
        alertBanner.style.justifyContent = "start";
        updatePage.style.width = "calc(100% - 240px)"

    }

});

if (window.innerWidth < 1313) {
    // guide.className = "guide d-none"

    toggleMenu.addEventListener("click", function () {
        guide.classList.remove("d-none");
        guide.classList.toggle("d-block");

    })
}
// When time Click Bars icon toggle Guide code Area Start in the Here

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
    }

)



// Multi Menu Code Area End of the here
// *****************************************************************************

// alert-btn button click change Update Page area updating code area start in the here
for (let i = 0; i < alertBtn.length; i++) {
    alertBtn[i].addEventListener("click", function (e) {
        let activeBtn = document.getElementsByClassName("active-btn");
        activeBtn[0].className = activeBtn[0].className.replace(" active-btn", "");
        this.className += " active-btn";
        e.preventDefault();

        let gridItem = document.querySelectorAll(".grid-item");
        let bmw = document.querySelectorAll("#bmw");
        let mercedes = document.querySelectorAll("#mercedes");
        let audi = document.querySelectorAll("#audi");
        let porsche = document.querySelectorAll("#porsche");
        let rangeRover = document.querySelectorAll("#rangeRover");
        let lamborghini = document.querySelectorAll("#lamborghini");
        let tesla = document.querySelectorAll("#tesla");
        let lexus = document.querySelectorAll("#lexus");
        let ferrari = document.querySelectorAll("#ferrari");



        // console.log(activeBtn[0].innerText);
        for (let m = 0; m < gridItem.length; m++) {
            gridItem[m].style.display = "none";

        }

        if (alertBtn[i].innerText === "Hamısı") {
            for (let t = 0; t < gridItem.length; t++) {
                gridItem[t].style.display = "block";
                updatePage.style.height = "calc(100% - 56px)"

            }
        }

        if (alertBtn[i].innerText === "Bmw") {
            for (let t = 0; t < bmw.length; t++) {
                bmw[t].style.display = "block";
                updatePage.style.height = "calc(100% - 56px)"


            }
        }

        if (alertBtn[i].innerText === "Mercedes") {
            for (let t = 0; t < mercedes.length; t++) {
                mercedes[t].style.display = "block";
                updatePage.style.height = "calc(100% - 56px)"

            }
        }

        if (alertBtn[i].innerText === "Audi") {
            for (let t = 0; t < audi.length; t++) {
                audi[t].style.display = "block";
                updatePage.style.height = "calc(100% - 56px)"

            }
        }

        if (alertBtn[i].innerText === "Porsche") {
            for (let t = 0; t < porsche.length; t++) {
                porsche[t].style.display = "block";
                updatePage.style.height = "calc(100% - 56px)"

            }
        }

        if (alertBtn[i].innerText === "Land Rover") {
            for (let t = 0; t < rangeRover.length; t++) {
                rangeRover[t].style.display = "block";
                updatePage.style.height = "calc(100% - 56px)"


            }
        }

        if (alertBtn[i].innerText === "Lamborghini") {
            for (let t = 0; t < lamborghini.length; t++) {
                lamborghini[t].style.display = "block";
                updatePage.style.height = "calc(100% - 56px)"

            }
        }

        if (alertBtn[i].innerText === "Tesla") {
            for (let t = 0; t < tesla.length; t++) {
                tesla[t].style.display = "block";
                updatePage.style.height = "calc(100% - 56px)"

            }
        }

        if (alertBtn[i].innerText === "Lexus") {
            for (let t = 0; t < lexus.length; t++) {
                lexus[t].style.display = "block";
                updatePage.style.height = "calc(100% - 56px)"

            }
        }

        if (alertBtn[i].innerText === "Ferrari") {
            for (let t = 0; t < ferrari.length; t++) {
                ferrari[t].style.display = "block";
                updatePage.style.height = "calc(100% - 56px)"

            }
        }

    })
}




// alert-btn button click change Update Page area updating code area End of the here

// *****************************************************************************


let videosContent = {
    bmw: `
    <div id="bmw" class="grid-item">
    <div class="grid-item-container">
        <div class="grid-item-content">
            <img src="./images/grid_item_content/1.png" alt="">
        </div>
        <div class="grid-item-header">
            <div class="grid-item-left">
                <img src="./images/grid_item_content/logo.png" alt="">
            </div>
            <div class="grid-item-right">
                <div class="item-name">
                    2022 Akrapovic BMW X5 M - Wild X5M from Renegade Design
                </div>
                <div class="item-channel-name">
                    RoCars
                </div>
                <div class="item-see">
                    <div class="item-views">
                        2.3 mln baxış
                    </div>
                    <div class="item-date">
                        3 ay öncə
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>


        `,
    mercedes: `
    <div id="mercedes" class="grid-item">
    <div class="grid-item-container">
        <div class="grid-item-content">
            <img src="./images/grid_item_content/2.png" alt="">
        </div>
        <div class="grid-item-header">
            <div class="grid-item-left">
                <img src="./images/grid_item_content/logo.png" alt="">
            </div>
            <div class="grid-item-right">
                <div class="item-name">
                    <span>2022 Akrapovic BMW X5 M - Wild X5M from Renegade Design</span>
                </div>
                <div class="item-channel-name">
                    <span>RoCars</span>
                </div>
                <div class="item-see">
                    <div class="item-views">
                        <span>2.3 mln baxış</span>
                    </div>
                    <div class="item-date">
                        <span>3 ay öncə</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

    `,
    audi: `
    <div id="audi" class="grid-item">
    <div class="grid-item-container">
        <div class="grid-item-content">
            <img src="./images/grid_item_content/3.png" alt="">
        </div>
        <div class="grid-item-header">
            <div class="grid-item-left">
                <img src="./images/grid_item_content/logo.png" alt="">
            </div>
            <div class="grid-item-right">
                <div class="item-name">
                    <span>2022 Akrapovic BMW X5 M - Wild X5M from Renegade Design</span>
                </div>
                <div class="item-channel-name">
                    <span>RoCars</span>
                </div>
                <div class="item-see">
                    <div class="item-views">
                        <span>2.3 mln baxış</span>
                    </div>
                    <div class="item-date">
                        <span>3 ay öncə</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

    `,
    porsche: `
    <div id="porsche" class="grid-item">
    <div class="grid-item-container">
        <div class="grid-item-content">
            <img src="./images/grid_item_content/4.png" alt="">
        </div>
        <div class="grid-item-header">
            <div class="grid-item-left">
                <img src="./images/grid_item_content/logo.png" alt="">
            </div>
            <div class="grid-item-right">
                <div class="item-name">
                    <span>2022 Akrapovic BMW X5 M - Wild X5M from Renegade Design</span>
                </div>
                <div class="item-channel-name">
                    <span>RoCars</span>
                </div>
                <div class="item-see">
                    <div class="item-views">
                        <span>2.3 mln baxış</span>
                    </div>
                    <div class="item-date">
                        <span>3 ay öncə</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
    `,
    rangeRover: `
    <div id="rangeRover" class="grid-item">
    <div class="grid-item-container">
        <div class="grid-item-content">
            <img src="./images/grid_item_content/5.png" alt="">
        </div>
        <div class="grid-item-header">
            <div class="grid-item-left">
                <img src="./images/grid_item_content/logo.png" alt="">
            </div>
            <div class="grid-item-right">
                <div class="item-name">
                    <span>2022 Akrapovic BMW X5 M - Wild X5M from Renegade Design</span>
                </div>
                <div class="item-channel-name">
                    <span>RoCars</span>
                </div>
                <div class="item-see">
                    <div class="item-views">
                        <span>2.3 mln baxış</span>
                    </div>
                    <div class="item-date">
                        <span>3 ay öncə</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
    `,
    lamborghini: `
    <div id="lamborghini" class="grid-item">
    <div class="grid-item-container">
        <div class="grid-item-content">
            <img src="./images/grid_item_content/6.png" alt="">
        </div>
        <div class="grid-item-header">
            <div class="grid-item-left">
                <img src="./images/grid_item_content/logo.png" alt="">
            </div>
            <div class="grid-item-right">
                <div class="item-name">
                    <span>2022 Akrapovic BMW X5 M - Wild X5M from Renegade Design</span>
                </div>
                <div class="item-channel-name">
                    <span>RoCars</span>
                </div>
                <div class="item-see">
                    <div class="item-views">
                        <span>2.3 mln baxış</span>
                    </div>
                    <div class="item-date">
                        <span>3 ay öncə</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
    `,
    tesla: `
    <div id="tesla" class="grid-item">
    <div class="grid-item-container">
        <div class="grid-item-content">
            <img src="./images/grid_item_content/7.png" alt="">
        </div>
        <div class="grid-item-header">
            <div class="grid-item-left">
                <img src="./images/grid_item_content/logo.png" alt="">
            </div>
            <div class="grid-item-right">
                <div class="item-name">
                    <span>2022 Akrapovic BMW X5 M - Wild X5M from Renegade Design</span>
                </div>
                <div class="item-channel-name">
                    <span>RoCars</span>
                </div>
                <div class="item-see">
                    <div class="item-views">
                        <span>2.3 mln baxış</span>
                    </div>
                    <div class="item-date">
                        <span>3 ay öncə</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
    `,
    lexus: `
    <div id="lexus" class="grid-item">
    <div class="grid-item-container">
        <div class="grid-item-content">
            <img src="./images/grid_item_content/8.png" alt="">
        </div>
        <div class="grid-item-header">
            <div class="grid-item-left">
                <img src="./images/grid_item_content/logo.png" alt="">
            </div>
            <div class="grid-item-right">
                <div class="item-name">
                    <span>2022 Akrapovic BMW X5 M - Wild X5M from Renegade Design</span>
                </div>
                <div class="item-channel-name">
                    <span>RoCars</span>
                </div>
                <div class="item-see">
                    <div class="item-views">
                        <span>2.3 mln baxış</span>
                    </div>
                    <div class="item-date">
                        <span>3 ay öncə</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
    `,
    ferrari: `
                             <div id="ferrari" class="grid-item">
                                <div class="grid-item-container">
                                    <div class="grid-item-content">
                                        <img src="./images/grid_item_content/9.png" alt="">
                                    </div>
                                    <div class="grid-item-header">
                                        <div class="grid-item-left">
                                            <img src="./images/grid_item_content/logo.png" alt="">
                                        </div>
                                        <div class="grid-item-right">
                                            <div class="item-name">
                                                <span>2022 Akrapovic BMW X5 M - Wild X5M from Renegade Design</span>
                                            </div>
                                            <div class="item-channel-name">
                                                <span>RoCars</span>
                                            </div>
                                            <div class="item-see">
                                                <div class="item-views">
                                                    <span>2.3 mln baxış</span>
                                                </div>
                                                <div class="item-date">
                                                    <span>3 ay öncə</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
    `
}

let obsi = document.querySelector(".update-page-content");
obsi.innerHTML = (videosContent.bmw.concat(videosContent.mercedes).concat(videosContent.audi).concat(videosContent.porsche)
    .concat(videosContent.rangeRover).concat(videosContent.lamborghini).concat(videosContent.tesla).concat(videosContent.lexus)
    .concat(videosContent.ferrari)).repeat(50);




// ****************************************************************************************************************************
let gridItems = document.querySelectorAll("div.update-page-content > div.grid-item")


for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener("click", () => {
        window.location.assign("../item_video.html");

    })

}