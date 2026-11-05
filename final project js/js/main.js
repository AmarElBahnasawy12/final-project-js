// nav //
const mainoptionmony=document.getElementById("mainoption");
const dropdownoptions=document.querySelectorAll(".droup_down .option")
dropdownoptions.forEach((e) => {
    e.onclick =function(){
        mainoptionmony.innerHTML= this.innerHTML.trim();

    }
    
});

// nav //
// nav sidemenu//
const sidemenu=document.getElementById("menu");//icon
const menucontent=document.querySelector(".menucontent");//main class of menu
const closemenu=document.querySelector(".close")
sidemenu.onclick=function(){
    menucontent.classList.add("activ")
}
closemenu.onclick=function () {
    menucontent.classList.remove("activ")
    cartIcon.classList.remove("activ");

    
}

// nav sidemenu//


// ------------splide ---------------//
const splide = new Splide("#hero-splider",{
    type: "loop",
    arrows: false,
    pagination:true,
    autoplay:true,
    Interval:1000,

});

splide.mount();

const leftarrows=document.getElementById("arrowleft");
const rightarrows=document.getElementById("arrowright");
leftarrows.onclick=function(){
    splide.go("<")
}
rightarrows.onclick=function(){
    splide.go(">")
}

// ------------splide ---------------//



















// rwo os porder-------------------------------

let scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", function () {

    let scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    let scrollPosition = window.scrollY;

    let progress = (scrollPosition / scrollHeight) * 100;

    scrollTop.style.setProperty("--progress", progress + "%");

});

scrollTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
const cartmnuee=document.querySelector(".cart-menu");

const cartbtn=document.getElementById("hcartbtn");
const cartIcon=document.querySelector(".cart");
const closecart=document.getElementById("close-cart");
const addalert=document.getElementById("addalert");
cartbtn.onclick=function(){
    cartIcon.classList.add("activ")
}
closecart.onclick=function(){
    cartIcon.classList.remove("activ")
}
cartmnuee.onclick=function(){
    cartIcon.classList.add("activ")
    menucontent.classList.remove("activ")
    return false;


}


/*----------------------------card----------------- */
const data = [
    {
        id: 1,
        name: "Wireless Noise Cancelling Headphones",
        price: 129,
        category: "Audio",
        description: "Premium wireless headphones with active noise cancellation, deep bass, and long battery life.",
        image_1: "https://i.ibb.co/5WSR2d39/Product-images-1-1-min.jpg",
        image_2: "https://i.ibb.co/bj3Jb2FZ/Product-images-2-1-min.jpg",
        image_3: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg"
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        price: 99,
        category: "Wearables",
        description: "Smart fitness watch with activity tracking, heart rate monitoring, notifications, and multiple sports modes.",
        image_1: "https://i.ibb.co/mZ5jZz1/Product-images-14-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg",
        image_3: "https://i.ibb.co/mVwd0st9/Product-images-10-1-min-690x690.jpg"
    },
    {
        id: 3,
        name: "Mechanical Gaming Keyboard",
        price: 79,
        category: "Gaming",
        description: "RGB mechanical gaming keyboard with responsive switches, durable keys, and customizable lighting.",
        image_1: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg",
        image_2: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg",
        image_3: "https://i.ibb.co/sJzdXcnG/Product-images-8-1-min.jpg"
    },
    {
        id: 4,
        name: "Portable Bluetooth Speaker",
        price: 59,
        category: "Audio",
        description: "Compact Bluetooth speaker delivering powerful sound with a portable design and long battery life.",
        image_1: "https://i.ibb.co/rG8tCNWH/Product-images-6-1-min.jpg",
        image_2: "https://i.ibb.co/TMg1jQLz/Product-images-7-1-min.jpg",
        image_3: "https://i.ibb.co/sJzdXcnG/Product-images-8-1-min.jpg"
    },
    {
        id: 5,
        name: "4K Smart LED Monitor",
        price: 249,
        category: "Computers",
        description: "High-resolution 4K LED monitor with vibrant colors, sharp details, and a modern slim design.",
        image_1: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg",
        image_2: "https://i.ibb.co/rG8tCNWH/Product-images-6-1-min.jpg",
        image_3: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg"
    },
    {
        id: 6,
        name: "Wireless Gaming Mouse",
        price: 69,
        category: "Gaming",
        description: "High-performance wireless gaming mouse with adjustable DPI, fast response time, and ergonomic design.",
        image_1: "https://i.ibb.co/dwCNm5qK/Product-images-9-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/BKKxXkmH/Product-images-9-2-min-690x690.jpg",
        image_3: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg"
    },
    {
        id: 7,
        name: "Smartphone Pro Max",
        price: 899,
        category: "Smart Phones",
        description: "Powerful smartphone featuring a high-resolution display, advanced camera system, and fast processor.",
        image_1: "https://i.ibb.co/60XkDLWN/Product-images-15-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/gLtQJxNh/Product-images-15-2-min-690x690.jpg",
        image_3: "https://i.ibb.co/LXSBrBw4/Product-images-5-1-min.jpg"
    },
    {
        id: 8,
        name: "USB-C Fast Charger",
        price: 35,
        category: "Smart Phones",
        description: "Fast USB-C charger designed to provide safe and efficient charging for compatible smartphones and tablets.",
        image_1: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg",
        image_2: "https://i.ibb.co/rG8tCNWH/Product-images-6-1-min.jpg",
        image_3: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg"
    },
    {
        id: 9,
        name: "Wireless Earbuds Pro",
        price: 89,
        category: "Audio",
        description: "True wireless earbuds with clear audio, touch controls, noise reduction, and a compact charging case.",
        image_1: "https://i.ibb.co/mZ5jZz1/Product-images-14-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/mZ5jZz1/Product-images-14-1-min-690x690.jpg",
        image_3: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg"
    },
    {
        id: 10,
        name: "Gaming Laptop",
        price: 1199,
        category: "Computers",
        description: "High-performance gaming laptop with a powerful processor, dedicated graphics, fast SSD, and high-refresh display.",
        image_1: "https://i.ibb.co/B5TPjpkG/Product-images-12-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg",
        image_3: "https://i.ibb.co/pBGjMNxN/Product-images-13-1-min-690x690.jpg"
    },
    {
        id: 11,
        name: "Smart Home Security Camera",
        price: 75,
        category: "Smart Home",
        description: "Smart security camera with HD video, motion detection, night vision, and mobile app connectivity.",
        image_1: "https://i.ibb.co/sv0Shgzt/Product-images-4-1-min-768x768.jpg",
        image_2: "https://i.ibb.co/LXSBrBw4/Product-images-5-1-min.jpg",
        image_3: "https://i.ibb.co/hFJkTxzC/Product-images-5-2-min-690x690.jpg"
    },
    {
        id: 12,
        name: "Smart Health Tracker",
        price: 119,
        category: "Wearables",
        description: "Advanced wearable device for monitoring daily activity, sleep, heart rate, and fitness performance.",
        image_1: "https://i.ibb.co/pBGjMNxN/Product-images-13-1-min-690x690.jpg",
        image_2: "https://i.ibb.co/mZ5jZz1/Product-images-14-1-min-690x690.jpg",
        image_3: "https://i.ibb.co/8g1DbmmJ/Product-images-3-1-min.jpg"
    }
];
const cardINHome = document.getElementById("card-in-home");

function displaycardinhome() {

    let items = "";

    for (let i = 0; i < data.length; i++) {

        items += `
        
        <div class="card splide__slide">

            <div class="pro-img">

                <img src="${data[i].image_1}" alt="">

                <button class="buy">
                    <i class="fa-solid fa-basket-shopping"></i>
                    add to cart
                </button>

            </div>

            <div class="productinf">

                <p>${data[i].category}</p>

                <b>${data[i].name}</b>

                <strong>$ ${data[i].price.toFixed(2)}</strong>

            </div>

            <div class="diffrant-color">

                <img class="active" src="${data[i].image_1}" alt="">

                <img src="${data[i].image_2}" alt="">

                <img src="${data[i].image_3}" alt="">

            </div>

        </div>

        `;
    }

    cardINHome.innerHTML = items;


    // Splide Slider

    new Splide('#product-slider', {

        type: 'slide',

        perPage: 4,

        perMove: 1,

        gap: '20px',

        pagination: false,

        arrows: true,

        breakpoints: {

            990: {
                perPage: 3,
            },

            768: {
                perPage: 2,
            },

            500: {
                perPage: 1,
            }

        }

    }).mount();

}

displaycardinhome();


/*----------------------------card----------------- */


// rwo os porder-------------------------------
// counter of discound
let endDate = Date.now() + (
    30 * 24 * 60 * 60 * 1000 +  
    16 * 60 * 60 * 1000 +       // 16 ساعة
    50 * 60 * 1000 +            // 50 دقيقة
    14 * 1000                   // 14 ثانية
);

function updateCountdown() {

    let distance = endDate - Date.now();

    if (distance <= 0) {
        clearInterval(timer);
        document.querySelector(".countdown").innerHTML =
            "Offer Expired!";
        return;
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    let minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );

    let seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

let timer = setInterval(updateCountdown, 1000);
// counter of discound


//smart splider

    var smartSplide = new Splide("#smart-splide", {
        type: "loop",
        perPage: 1,
        perMove: 1,
        autoplay: false,
        
        pauseOnHover: true,
        pauseOnFocus: true,
        arrows: false,
        pagination: true,
        speed: 800,
    });

    smartSplide.mount();
    document.querySelectorAll("#smart-splide .splide__pagination__page")
    .forEach((page, index) => {
        page.textContent = index + 1;
    });



    //------------------cARDES
    var cardsSplide = new Splide("#cards-splide", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "35px",
    autoplay: true,
    interval: 4000,
    pauseOnHover: true,
    arrows: true,
    pagination: true,

    breakpoints: {
        990: {
            perPage: 2,
            gap: "20px",
        },
        640: {
            perPage: 1,
            gap: "15px",
        },
    },
});

cardsSplide.mount();
    //------------------cARDES



    //////////end-end
// let moreBtn = document.querySelector(".end-end .continer .more");
// let openBtn = document.querySelector(".end-end .continer .more .open");
// let closeBtn = document.querySelector(".end-end .continer .more .close");
// let moreMenu = document.querySelector(".end-end > .more");

// openBtn.addEventListener("click", function () {
//     moreBtn.classList.add("active");
//     moreMenu.classList.add("active");
// });

// closeBtn.addEventListener("click", function () {
//     moreBtn.classList.remove("active");
//     moreMenu.classList.remove("active");
// });
    //////////end-end
const cartmenu = document.getElementById("cart-menu");

const allproduct = document.getElementById("allproduct");
const cartItemsContainer = document.querySelector(".items-cart");
const cartchang = document.querySelector(".dynamic-1");
const cartafteradd = document.getElementById(".dynamic-2");
const totalPriceElement = document.querySelector(".total-price");
    // *-*****-------********------productive---******-*-*-*-*-*-*-*-*-*--*-*-*-*
    //handelImg
    function handelImg(img) {
        let allImg = img.parentElement.querySelectorAll("img");
        allImg.forEach((e) => {
            e.classList.remove("active");
        });
        let mainImg = img.closest(".card").querySelector(".pro-img img");
        mainImg.src = img.src;
        img.classList.add("active");
    }
    //handelImg
    //add to cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];
displayCart();

function addToCart(items) {
    let fullkey={
        ...data[items],
        amount : 1
    }

    cart.push(fullkey);

    // console.log("Before Display");
    // cartchang.classList.remove("active");

    displayCart();

    // console.log("After Display");

    addalert.classList.add("active");


    setTimeout(() => {
        addalert.classList.remove("active");
    }, 1000);
}

function displayCart() {
    if (cart.length > 0) {
    let cartItems = "";
    let totalPrice = 0;
    cart.map((cartitem, index) => {
        cartItems += `
        <div class="dynamic-2">
        <div class="card">
            <img src=${cartitem.image_1} alt="">
            <div class="info">
                <h3>${cartitem.name}</h3>
                <div class="otherinf">
                    <div class="quantity">
                    <button onclick="decreaseAmount(${index})">-</button>
                    <span>${cartitem.amount}</span>
                    <button onclick="increaseAmount(${index})">+</button>
                </div>
                <p>£ ${cartitem.price.toFixed(2)}</p>
                
                </div>
        </div>
        <div class="delitem" onclick="removeItem(${index})">
            <button>x</button>
        </div>
    </div>
    </div>
        `;
        totalPrice += cartitem.price * cartitem.amount;
        
    });
        cartmenu.innerHTML = `total price: £ ${totalPrice.toFixed(2)}`;

    cartItemsContainer.innerHTML = cartItems;
    totalPriceElement.textContent = `Total: £ ${totalPrice.toFixed(2)}`;
}
else {
     cartItemsContainer.innerHTML = `
     <div class="static">
        <i class="fa-solid fa-bag-shopping"></i>
        <p>cart</p>
    </div>
     <div class="dynamic-1">
        <p>no products in cart</p>
        <a href="#">return to shop</a>
    </div>`
}
    cartbtn.querySelector("span").textContent = cart.length;
    cartend.querySelector("span").textContent = cart.length;

    localStorage.setItem("cart", JSON.stringify(cart));


}
// delet item from cart
function removeItem(i) {
    cart.splice(i, 1);
    displayCart();
    // cartchang.classList.add("active");

// displayCart();
}
// decrease amount
function decreaseAmount(num) {
    if (cart[num].amount > 1) {
    --cart[num].amount;}
    else {
        cart[num].amount = 1;
    }
    displayCart();
//     // console.log(true);
//     // console.log(cart[num].amount);
}
function increaseAmount(num) {
    ++cart[num].amount;
    displayCart();
}