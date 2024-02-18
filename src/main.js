const menuDiv = document.getElementById('menuicon')
const navBarDiv = document.getElementById('navLinks')
const closeIconDiv = document.getElementById('crossIcon')
const NavBarLinks = document.querySelectorAll('.nav__link')

menuDiv.addEventListener("click", ()=>{
    return(
        navBarDiv.classList.remove('hidden')
    )
})

closeIconDiv.addEventListener('click', () => {
    return(
        navBarDiv.classList.add('hidden')
    )
})

NavBarLinks.forEach((link)=>{
    return (
        link.addEventListener("click", ()=> {
            return (
                navBarDiv.classList.add('hidden')
            )
        }) 
    )
})