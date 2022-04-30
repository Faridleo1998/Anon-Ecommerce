"use strict";

// modal variables
const $modal = document.querySelector("[data-modal]");
const $modalCloseBtn = document.querySelector("[data-modal-close]");
const $modalCloseOverlay = document.querySelector("[data-modal-overlay]");

// modal function
const modalCloseFunc = () => {
    $modal.classList.add("closed");
};

// modal eventListener
$modalCloseOverlay.addEventListener("click", modalCloseFunc);
$modalCloseBtn.addEventListener("click", modalCloseFunc);

// Notification toast variables
const $notificationToast = document.querySelector("[data-toast]");
const $toastCloseBtn = document.querySelector("[data-toast-close]");

// Notification toast eventListener
$toastCloseBtn.addEventListener("click", () => {
    $notificationToast.classList.add("closed");
});

/* ===== Menu Mobile ===== */
//Menu Mobile variables
const $mobileMenuOpenBtn = document.querySelectorAll(
    "[data-mobile-menu-open-btn]"
);
const $mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const $mobileMenuCloseBtn = document.querySelectorAll(
    "[data-mobile-menu-close-btn]"
);
const $overlay = document.querySelector("[data-overlay]");

const mobileMenuOpenbtnLength = $mobileMenuOpenBtn.length;

for (let i = 0; i < mobileMenuOpenbtnLength; i++) {
    // Mobile Menu function
    const mobileMenuCloseFunc = () => {
        $mobileMenu[i].classList.remove("active");
        $overlay.classList.remove("active");
    };

    $mobileMenuOpenBtn[i].addEventListener("click", () => {
        $mobileMenu[i].classList.add("active");
        $overlay.classList.add("active");
    });

    $mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
    $overlay.addEventListener("click", mobileMenuCloseFunc);
}

//Accordion variables
const $accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const $accordion = document.querySelectorAll("[data-accordion]");
const accordionBtnLength = $accordionBtn.length;
const accordionLength = $accordion.length;

for (let i = 0; i < accordionBtnLength; i++) {
    $accordionBtn[i].addEventListener("click", function() {
        const clickedBtn = this.nextElementSibling.classList.contains("active");

        for (let i = 0; i < accordionLength; i++) {
            if (clickedBtn) break;
            if ($accordion[i].classList.contains("active")) {
                $accordion[i].classList.remove("active");
                $accordionBtn[i].classList.remove("active");
            }
        }

        this.nextElementSibling.classList.toggle("active");
        this.classList.toggle("active");
    });
}
