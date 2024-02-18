const menuDiv = document.getElementById('menuicon')
const navBarDiv = document.getElementById('navLinks')
const closeIconDiv = document.getElementById('crossIcon')

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