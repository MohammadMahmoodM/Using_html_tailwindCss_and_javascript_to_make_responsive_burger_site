const menuDiv = document.getElementById('menuicon')
const navBarDiv = document.getElementById('navLinks')

menuDiv.addEventListener("click", ()=>{
    return(
        navBarDiv.classList.remove('hidden')
    )
})