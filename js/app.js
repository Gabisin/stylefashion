const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu') 

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const signUpButton = document.getElementById('signUp');
            const signInButton = document.getElementById('signIn');
            const container = document.getElementById('container-login');

            signUpButton.addEventListener('click', () => {
                container.classList.add('right-panel-active');
              });
            signInButton.addEventListener('click', () =>{
                  container.classList.remove('right-panel-active');
              });
/* Menu*Bar*/
function toggleMenu(){
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");   
}

 /*slider  */
 