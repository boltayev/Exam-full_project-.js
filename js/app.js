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

	if(sumValue === -1){
		enc.removeEventListener('click', (e))
	}

}

dec.addEventListener('click', p)

function p (){
	sumValue++
	sum.innerText = sumValue
	if(sumValue === 50){
		dec.removeEventListener('click', (p))
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
console.log(card);
console.log(shop);

shop.addEventListener('click', () =>{
    card.classList.remove('hidden')
    ss.classList.remove('hidden')
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



