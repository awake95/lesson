 //меню
 const toggleMenu = () => {

    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu')
    }

    btnMenu.addEventListener('click', handlerMenu);
    menu.addEventListener('click', (event) => {

        let target = event.target;

        if (target.classList.contains('close-btn')) {
            handlerMenu();
        } else {
            target.closest('ul>li');
            handlerMenu();
        }
    });
}

export default toggleMenu;