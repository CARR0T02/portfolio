const sections = document.querySelectorAll('section');
const navList = document.querySelectorAll('.aside-nav-link');
const navBar = document.querySelector('#nav-bar') as HTMLElement;
const navBarHeight = navBar.offsetHeight;
console.log(navBarHeight)
export const handleScroll = () => { 
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        console.log(scrollY, sectionTop - navBarHeight)
        if (scrollY >= sectionTop - navBarHeight) {
            const currSection = section.getAttribute('id');
            if (currSection === null) {
                throw new Error('Section does not have an id')
            }
            current = currSection;
        }
    })
    navList.forEach( li => {
        li.classList.remove('active');
        if (li.getAttribute('data-for') === current) {
            li.classList.add('active');
        }
    })
 }
