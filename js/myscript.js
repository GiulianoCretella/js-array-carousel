const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];
let itemTemplate='';
let thumbTemplate='';
let currentindexactive = 0;
for(let i=0; i<items.length;i++){
    let classActive ="";
    if(i===currentindexactive){
        classActive = "active"
    }
    itemTemplate +=`
    <div class="item h-100 ${classActive}">
        <img src="./${items[i]}" class="h-100 w-100" alt="">
        <div class="news">
           <h4>${title[i]}</h4>
           <p>${text[i]}</p>
        </div>
    </div>`;
    thumbTemplate +=` 
    <div class="transparent col-img g-0 ${classActive}">
       <img src="./${items[i]}" class="h-100 w-100" alt="">
    </div>`
}
const myrow = document.querySelector('.item_image');
myrow.innerHTML += itemTemplate;

const thumb_row = document.querySelector('.thumb_image') ;
thumb_row.innerHTML+= thumbTemplate;

const next = document.querySelector('.arrow_top');
const prev = document.querySelector('.arrow_bottom');
function slideDown(){
    const imgs = document.getElementsByClassName('item');
    imgs[currentindexactive].classList.remove('active')
    const thumb = document.getElementsByClassName('transparent')
    thumb[currentindexactive].classList.remove('active')
    if(currentindexactive === 4){
        currentindexactive = 0;
    }else {
        currentindexactive ++;
    }
    imgs[currentindexactive].classList.add('active');
    thumb[currentindexactive].classList.add('active')
}
function slideUp(){
    const imgs = document.getElementsByClassName('item');
    imgs[currentindexactive].classList.remove('active')
    const thumb = document.getElementsByClassName('transparent')
    thumb[currentindexactive].classList.remove('active')
    if(currentindexactive === 0){
        currentindexactive = items.length - 1;
    }else {
        currentindexactive --;
    }
    imgs[currentindexactive].classList.add('active');
    thumb[currentindexactive].classList.add('active')
}           
next.addEventListener('click', slideDown); 
prev.addEventListener('click', slideUp);
