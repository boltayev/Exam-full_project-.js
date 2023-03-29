
const num = document.querySelector('#title')
const text = document.querySelector('#text')
const bottom = document.querySelector('.bottom_img')


const getAdvice = () =>{

    const abs = new XMLHttpRequest()

    abs.open('GET', 'https://api.adviceslip.com/advice')

    abs.send()


    abs.addEventListener('readystatechange', () =>{
        if(abs.status === 200 && abs.readyState === 4){
            const response = JSON.parse(abs.response)
            title.innerText = response.slip.id
            text.innerText = response.slip.advice;
        }
    })

}

getAdvice()

bottom.addEventListener('click', () =>{
    getAdvice()
})

















// let abs = new XMLHttpRequest()

// abs.open('GET', 'https://api.adviceslip.com/advice')

// abs.setRequestHeader("Content_type", "application/json")

// abs.send() 


// abs.addEventListener('readystatechange', () =>{
//     if(abs.status === 200 && abs.readyState === 4){
//     console.log(JSON.parse(abs.response));
//     }
// })

 


// bottom.addEventListener('click', () =>{
//     say()
// })
// const say = async () =>{

//     const res = await fetch ('https://api.adviceslip.com/advice')
//     const data = await res.json()

//     // console.log(data);

//     document.getElementById('title').innerHTML = `${data.slip.id}`
//     document.getElementById('text').innerHTML = `${data.slip.advice}`


// }

// say()




