const topMenu = document.getElementById('vlp-top-menu')
const toggleTopMenuIcon = document.getElementById('vlp-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
    if (toggleTopMenuIcon.contains(e.target)) {
        topMenu.classList.toggle('vlp-top-menu-expanded')
        topMenu.classList.toggle('hidden')
    } else {
        if (topMenu.classList.contains('vlp-top-menu-expanded')) {
            topMenu.classList.remove('vlp-top-menu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})