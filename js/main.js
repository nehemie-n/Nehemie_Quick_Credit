
const sideMenu = document.getElementById("page-wrapper-left");
const menuToggle = document.getElementById("side-menu-toogler")

/**
 * Adding event listener
 */
menuToggle.addEventListener("click", (event)=>{
    if(!sideMenu){return;}
    tooggleMenu();
})

/**
 * For toogling the menu
 */
const tooggleMenu = ()=>{
    if(sideMenu.classList.contains("show")){
        sideMenu.classList.remove("show");
    } else{
        sideMenu.classList.add("show");
    }
};