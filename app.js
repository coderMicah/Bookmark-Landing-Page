const questions = document.querySelectorAll('.arrow')
const menu = document.querySelectorAll('.menu-item')
const bookmarks = document.querySelectorAll('.bookmark')
const hamburger = document.querySelector('.hamburger')
const closeIcon = document.querySelector('.close')
const navbar = document.querySelector('.nav-list')

hamburger.addEventListener('click', (e) => {

     navbar.classList.toggle('open');
     hamburger.classList.toggle('hide')
     closeIcon.classList.toggle('close')
     
    // e.preventDefault()
})

closeIcon.addEventListener('click', (e) => {
    navbar.classList.toggle('open');
    hamburger.classList.toggle('hide')
    closeIcon.classList.toggle('close')
})

questions.forEach( question => {
    question.addEventListener('click', (e) => {
        const answer = question.parentElement.nextElementSibling;
    
        answer.classList.toggle('show')
        question.classList.toggle('rotate')

        e.preventDefault();
    }) 
});

menu.forEach((menuItem,index) => {
    
    menuItem.addEventListener('click', (e) => {

        removeActiveClass();
        bookmarks[index].classList.toggle('active')
        
        e.preventDefault()
    })

});


function removeActiveClass()
{
    bookmarks.forEach((bookmark,index) => {
        if(bookmark.classList.contains('active'))
        {
            bookmark.classList.remove('active') 
        }
    })
}



