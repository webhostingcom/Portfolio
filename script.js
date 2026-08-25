/* =====================================================
   PRAISE JOSEPH UFUOMA PORTFOLIO
   MAIN JAVASCRIPT
===================================================== */


document.addEventListener("DOMContentLoaded", () => {


    /* ================================
       HAMBURGER MENU
    ================================= */


    const menuBtn = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");


    if(menuBtn && navMenu){

        menuBtn.addEventListener("click", () => {

            navMenu.classList.toggle("active");

            menuBtn.classList.toggle("open");

        });


        // Close menu when clicking a link

        document.querySelectorAll(".nav-menu a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");

            });

        });

    }





    /* ================================
       LOADING SCREEN
    ================================= */


    const loader = document.querySelector(".loading-screen");


    if(loader){


        window.addEventListener("load", () => {


            setTimeout(() => {

                loader.style.opacity = "0";
                loader.style.visibility = "hidden";


            }, 1500);


        });


    }





    /* ================================
       HEADER SCROLL EFFECT
    ================================= */


    const header = document.querySelector(".site-header");


    window.addEventListener("scroll", () => {


        if(window.scrollY > 50){

            header.style.background =
            "rgba(11,11,11,0.95)";


        } else {


            header.style.background =
            "rgba(11,11,11,0.85)";


        }


    });



});