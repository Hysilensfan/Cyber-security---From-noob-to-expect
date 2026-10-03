/* =========================================================
   Cyber Security
   Main JavaScript
   ========================================================= */


/**
 * Toggle an element open / closed.
 *
 * @param {HTMLElement} button
 * @param {HTMLElement} target
 */
function toggle(button, target) {

    button.addEventListener("click", () => {

        const isOpen =
            target.classList.toggle("open");

        button.setAttribute(
            "aria-expanded",
            isOpen
        );
    });
}


/* =========================================================
   Menu
   ========================================================= */

const menuButton =
    document.getElementById("menuBtn");

const menuList =
    document.getElementById("menuList");


if (menuButton && menuList) {

    toggle(
        menuButton,
        menuList
    );
}


/* =========================================================
   MISC
   ========================================================= */

const miscButton =
    document.getElementById("miscBtn");

const subList =
    document.getElementById("subList");


if (miscButton && subList) {

    toggle(
        miscButton,
        subList
    );
}
