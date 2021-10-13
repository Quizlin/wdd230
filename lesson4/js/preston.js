const hamButton = document.querySelector('.ham');
const mainMenu = document.querySelector('.navigation');

hamButton.addEventListener('click', () =>{mainMenu.classList.toggle('responsive')}, false);

window.onresize = () => {
    if(window.innerWidth > 760){
        mainMenu.classList.remove('responsive');
    }
}

const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(event.toLocaleDateString('de-DE', options));
// expected output: Donnerstag, 20. Dezember 2012
