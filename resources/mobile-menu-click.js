function activateMobileMenu (){
    const menuIcon=document.getElementById('menu-icon');
    const navigationList=document.getElementById('navigation-list');
    const headerWrapper=document.getElementById('header-wrapper');
    const reviewMenuIcon=document.getElementById('icon')


    menuIcon.addEventListener('click', function() {
        if(navigationList.classList.contains('activating-navigation-list')){
            navigationList.classList.remove('activating-navigation-list')
            headerWrapper.style.cssText="background-color: #fff; color: #000";
            reviewMenuIcon.classList.remove('fa-times');
            reviewMenuIcon.classList.add('fa-bars');
        }else{
            navigationList.classList.add('activating-navigation-list')
            headerWrapper.style.cssText="background-color: #000; color: #fff";
            reviewMenuIcon.classList.remove('fa-bars');
            reviewMenuIcon.classList.add('fa-times');
        }
    });
   
}
activateMobileMenu();