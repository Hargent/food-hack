const menuIcon = document.getElementById("menu-icon")
const menu = document.getElementById("menu")

const callBack =(e)=>{
    // console.log(e.target);
    const target = e.target.closest("#menu-icon")
    if(!target) return
    menu.classList.toggle("hidden")
}

document.addEventListener("click",callBack)