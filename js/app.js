/////-----burger------///////

const modal  = document.querySelector('.modal')
const delet  = document.querySelector('.delet')
const ul  = document.querySelectorAll('ul')
const burger  = document.querySelector('header .container #kk')
const ss = document.querySelector('body #remove')
console.log(ss);


burger.addEventListener('click', () =>{
    modal.classList.remove('hidden')
    ss.classList.remove('hidden')
})


delet.addEventListener('click', () =>{
    modal.classList.add('hidden')
    ss.classList.add('hidden')
})

ss.addEventListener('click', () =>{
    modal.classList.add('hidden')
    ss.classList.add('hidden')
    console.log('done');
})



///count---------////---------////----------///---------

const sum = document.querySelector('.sum')
const enc = document.querySelector('.enc')
const dec = document.querySelector('.dec')

let sumValue = 0
sum.innerText = sumValue

enc.addEventListener('click' , (e))
function e (){
	sumValue--
	sum.innerText = sumValue

	if(sumValue === 0){
		dec.removeEventListener('click', (e))
	}

}

dec.addEventListener('click', p)

function p (){
	sumValue++
	sum.innerText = sumValue
	if(sumValue === 3){
		enc.removeEventListener('click', (p))
	}
}


//---time ----/////  /////// ////// /////


const day = document.querySelector('.day')
const hour = document.querySelector('.hour')
const minut = document.querySelector('.minut')
const second = document.querySelector('.secunt')




function sayHello() {
    let dd = Date.parse(new Date())/1000
}

setInterval(() =>{
    // const time = document.querySelector('.time')
    let date = new Date()
    let hours = date.getHours()
    let minuts = date.getMinutes();
    let seconds = date.getSeconds();

    if(minuts < 10){
        minuts = '0' + minuts
    }
    if(seconds< 10){
        seconds = '0' + seconds
    }
    hour.textContent = hours
    minut.textContent = minuts
    second.textContent = seconds
    // time.textContent =  `${hours} : ${minuts} : ${seconds } PM` 
    sayHello()
},1000)



//  card ////  ------ ////// ------ ///// -----

const card = document.querySelector('.card')
const shop = document.querySelector('#online_shop')
const show_count = document.querySelector('.count_shoos_sum')

// console.log(card);
// console.log(shop);

shop.addEventListener('click', () =>{
    card.classList.remove('hidden')
    ss.classList.remove('hidden')
    show_count.classList.add('show_hidden')

})



//-------tab---------//

const li = document.querySelectorAll('.boots_img .shoes')
const slides = document.querySelectorAll('.slide_parent .slide')
const slidess = document.querySelectorAll('.img_block .boots')
// console.log(slidess);
// console.log(li ,slides);
li.forEach((tab, i) =>{
    tab.addEventListener( 'click',() =>{
        slides.forEach((content) =>{
            content.classList.remove('activite')
        })
        li.forEach((tab) =>{
            tab.classList.remove('activite')
        })
        slides[i].classList.add('activite')
        li[i].classList.add('activite')
        console.log('done');
    })


    tab.addEventListener( 'click',() =>{
        slidess.forEach((content) =>{
            content.classList.remove('activite')
        })
        li.forEach((tab) =>{
            tab.classList.remove('activite')
        })
        slidess[i].classList.add('activite')
        li[i].classList.add('activite')
    })


})


///////------- into_card delete -------///////


const into_card = document.querySelector('.into_card')
const into_card_delet = document.querySelector('.delete')
const card_perent = document.querySelector('.card')
const hh = document.querySelector('.card_active')

// console.log(card_perent);
// console.log(into_card_delet);


into_card_delet.addEventListener('click', () =>{
    card_perent.classList.remove('card_hidden_delet')
    // console.log('done');

})


into_card_delet.addEventListener('click', () =>{
    hh.classList.remove('card_hidden_delet')
    card_perent.classList.remove('sell')
    console.log('done');

})



//// ----- Add to card--------////////

const add_to_card = document.querySelector('.p')
const count_sum = document.querySelector('.sum')
const count_send = document.querySelector('.boots_price')

// console.log(add_to_card);
console.log(count_sum);

add_to_card.addEventListener('click', ()=>{

    console.log('done');


    if(sumValue === 0){
    console.log('your card is empty')
  }
  else{
    let result = 125   * sumValue
    count_send.innerText =  sumValue + ' ' + '$' + result
  }
    
})


    // show_count.classList.add('show_hidden')


add_to_card.addEventListener('click',()=>{

    show_count.classList.remove('show_hidden')
    hh.classList.remove('card_hidden_delet')
    show_count.innerText = sumValue

    card.classList.remove('hidden')
    ss.classList.remove('hidden')
    show_count.classList.add('show_hidden')


    console.log('done');

})





///-------slider--------////

let slidesw = document.querySelectorAll('.slider-inner .slide')
let slidesInner = document.querySelector('.slider-inner')
let prevBtn = document.querySelector('.slide-prev')
let nextBtn = document.querySelector('.slide-next')

//Carousel Slider
let slideCount = 0

prevBtn.addEventListener('click', () => {
	if(slideCount <= 0){
		slideCount = slidesw.length - 1
	}else{
		slideCount--
	}

	slidesInner.style.transform = `translateX(-${slideCount * 900}px)`
})

nextBtn.addEventListener('click', () => {
	if(slideCount < slidesw.length - 1){
		slideCount++
	}else{
		slideCount = 0
	}
	
	slidesInner.style.transform = `translateX(-${slideCount * 900}px)`
})












































// let newTime = new Date("aprel 3, 2023 10:00:00").getTime()
// let now = new Date ().getTime()
// let time  = newTime - now

// let dayss = Math.floor(time/(1000 * 60 * 60* 24))
// let hourss = Math.floor(time%(1000 * 60 * 60* 24)/(1000 * 60 * 60))
// let minutss = Math.floor(time%(1000 * 60 * 60)/(1000 * 60 ))
// let secondss = Math.floor(time%(1000 * 60 )/1000 )

// setInterval(() =>{
//     day.textContent = dayss
//     hour.textContent = hourss
//     minut.textContent = minutss
//     second.textContent = secondss

// },1000)






// function sayHello(){
//         let newTime = new Date("aprel 3, 2023 10:00:00").getTime()
//         let now = new Date ().getTime()
//         let time  = newTime - now

//         let dayss = Math.floor(time/(1000 * 60 * 60* 24))
//         let hourss = Math.floor(time%(1000 * 60 * 60* 24)/(1000 * 60 * 60))
//         let minutss = Math.floor(time%(1000 * 60 * 60)/(1000 * 60 ))
//         let secondss = Math.floor(time%(1000 * 60 )/1000 )

//         if(minutss < 10){
//             minutss = '0' + minutss
//         }
//         if(secondss< 10){
//             secondss = '0' + secondss
//         }

//         day.textContent = dayss
//         hour.textContent = hourss
//         minut.textContent = minutss
//         second.textContent = secondss
// }
// sayHello()

// setInterval(sayHello,1000)



