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

const enc = document.querySelector('.enc')
const dec = document.querySelector('.dec')
const sum = document.querySelector('.sum')

let sumValue = 0
sum.innerText = sumValue


function decrement(){
  if(sumValue === 0){

    sumValue = 0
  }
  else{
    sumValue--
  }
  sum.innerText = sumValue
}

dec.addEventListener('click', decrement)

function increment(){
  sumValue++
  sum.innerText = sumValue
  if(sumValue === 10){
    enc.removeEventListener("click", increment)
  }
}

enc.addEventListener('click', increment)



//---time ----/////  /////// ////// /////


const day = document.querySelector('.day')
const hour = document.querySelector('.hour')
const minut = document.querySelector('.minut')
const second = document.querySelector('.secunt')



function showTime(){

        nextYear = new Date('2023-04-05'),
        currentTime = new Date(),
        diff = nextYear - currentTime,
        daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24),
        hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24,  
        minutesLeft = Math.floor(diff / 1000 / 60) % 60,  
        secondsLeft = Math.floor(diff / 1000) % 60
    
    if(diff > 0) {
        day.innerText = daysLeft;
        hour.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
        minut.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
        second.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
    }else {
        day.innerText = '00'
        hour.innerText = '00'
        minut.innerText = '00'
        second.innerText = '00'
    }    
}

setInterval(showTime, 1000)

showTime()




// function sayHello() {
//     let dd = Date.parse(new Date())/1000
// }

// setInterval(() =>{
//     // const time = document.querySelector('.time')
//     let date = new Date()
//     // let days = data.getDays()
//     let hours = date.getHours()
//     let minuts = date.getMinutes();
//     let seconds = date.getSeconds();

//     if(minuts < 10){
//         minuts = '0' + minuts
//     }
//     if(seconds< 10){
//         seconds = '0' + seconds
//     }
//     day.textContent = days
//     hour.textContent = hours
//     minut.textContent = minuts
//     second.textContent = seconds
//     // time.textContent =  `${minuts} : ${hours} : ${minuts} : ${seconds } PM` 
//     sayHello()
// },1000)



//  card ////  ------ ////// ------ ///// -----

const card = document.querySelector('.card')
const shop = document.querySelector('#online_shop')
const show_count = document.querySelector('.count_shoos_sum')

// console.log(card);
// console.log(shop);

shop.addEventListener('click', () =>{
    card.classList.toggle('hidden')
    ss.classList.remove('hidden')
    show_count.classList.add('show_hidden')

})



//     add_to_card.addEventListener('click', () =>{
//         if(sum.innerText >0){
//         card.classList.toggle('hidden')
//         ss.classList.remove('hidden')
//         show_count.classList.add('show_hidden')

//         }

// })




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


// into_card_delet.addEventListener('click', () =>{
//     card_perent.classList.remove('card_hidden_delet')
//     console.log('done');

// })


into_card_delet.addEventListener('click', () =>{
    hh.classList.remove('card_hidden_delet')
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



//// ------- add_to_card ------///////
const seell = document.querySelector('.sell')

add_to_card.addEventListener('click',()=>{

    show_count.classList.remove('show_hidden')
    hh.classList.remove('card_hidden_delet')
    show_count.innerText = sumValue

    card.classList.remove('hidden')
    ss.classList.remove('hidden')
    // show_count.classList.add('show_hidden')
    seell.classList.remove('jjj')



    console.log('done');

})





///-------slider--------////

let slidesw = document.querySelectorAll('.slider-inner .slide')
let slidesInner = document.querySelector('.slider-inner')
let prevBtn = document.querySelector('.slide-prev')
let nextBtn = document.querySelector('.slide-next')
let close_Btn= document.querySelector('.close-btn')

//Carousel Slider
let slideCount = 0

prevBtn.addEventListener('click', () => {
	if(slideCount <= 0){
		slideCount = slidesw.length - 1
	}else{
		slideCount--
	}

	slidesInner.style.transform = `translateX(-${slideCount * 550}px)`
})

nextBtn.addEventListener('click', () => {
	if(slideCount < slidesw.length - 1){
		slideCount++
	}else{
		slideCount = 0
	}
	
	slidesInner.style.transform = `translateX(-${slideCount * 550}px)`
})



let boots = document.querySelectorAll('.boots')
let sliderModal = document.querySelector('.slider__modal')
let overly = document.querySelector('.overly')

boots.forEach((item) => {
    item.addEventListener('click', () => {
        sliderModal.classList.remove('hidden')
        overly.classList.remove('hidden')
    })
})


overly.addEventListener('click', () => {
    sliderModal.classList.add('hidden')
    overly.classList.add('hidden')
})

close_Btn.addEventListener('click',() =>{
    // overly.classList.remove('hidden')
    sliderModal.classList.add('hidden')
    overly.classList.add('hidden')


    console.log('lddkd');

})


//mobilne slider----

// Fade Slider
// let slides = document.querySelectorAll('.slider-wrapper .slide')
// let prevBtn = document.querySelector('.slide-prev')
// let nextBtn = document.querySelector('.slide-next')
// let slideCount = 0

// prevBtn.addEventListener('click', () => {
//   if(slideCount <= 0){
//     slideCount = slides.length - 1
//   }else{
//     slideCount--
//   }

//   hideSlide()
//   showSlide(slideCount)
//   console.log('prev')
// })

// nextBtn.addEventListener('click', () => {
//   if(slideCount >= slides.length - 1){
//     slideCount = 0
//   }else{
//     slideCount++
//   }
  
//   hideSlide()
//   showSlide(slideCount)
// })


// function showSlide(i = 0){
//   slides[i].classList.add('active')
// }

// function hideSlide(){
//   slides.forEach((slide) => {
//     slide.classList.remove('active')
//   })
// }

// hideSlide()
// showSlide()


































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



