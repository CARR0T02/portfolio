const sections = document.querySelectorAll('section');
const navList = document.querySelectorAll('.aside-nav-link');
const navBar = document.querySelector('#nav-bar') as HTMLElement;
const navBarHeight = navBar.offsetHeight;
let sectionMap: Map<number, string> = new Map;
sections.forEach((section) => { 
    const sectionID = section.getAttribute('id');
    if (sectionID === null) {
        throw new Error('Section does not have an id')
    }
    sectionMap.set(section.offsetTop - navBarHeight - 5, sectionID);
 })
export const handleScroll = () => { 
    let current = '';
    sectionMap.forEach((sectionID, sectionTop) => { 
        if (scrollY >= sectionTop ) {
            current = sectionID;
        }
     })

    for (const li of navList) {
        li.classList.remove('active');
        if (li.getAttribute('data-for') === current) {
            li.classList.add('active');
        }
    }

 }
