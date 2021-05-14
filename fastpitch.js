// Picture Slider
const slider = document.querySelector('.slider');
const images = [
    'http://waltonfastpitch.com/wp-content/uploads/2020/08/2020_JV_website.jpg',
    'http://waltonfastpitch.com/wp-content/uploads/2020/08/Varsity_website.jpg',
];

var i = 0;

function right()
{
    i = (i + 1) % images.length;
    clearTimeout(timeout);
    changeImage();
    console.log('right');
}

function left()
{
    i--;
    if(i < 0)
    {
        i = images.length - 1;

    }
    
    clearTimeout(timeout);
    changeImage();
}

function changeImage() {
    slider.style.backgroundImage = 'url(' + images[i] + ')';
    timeout = setTimeout(right, 3000);
}

changeImage();

