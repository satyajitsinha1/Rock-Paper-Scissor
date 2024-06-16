let userscore = 0;
let compscore = 0;

let us = document.querySelector('#uscore')
let cs = document.querySelector('#cscore')
let newbtn = document.querySelector('#new')

us.innerText = userscore
cs.innerText = compscore

const gencompchoice = () =>{
let options = ['rock','paper','scissor']
let no = Math.floor(Math.random() * 3)
let option = options[no]
return option
}

let msg = document.querySelector('#msg')

const choices = document.querySelectorAll('.choice')

choices.forEach((choice) =>{
    choice.addEventListener('click',() =>{
        let userchoice = choice.getAttribute('id')
        let compchoice = gencompchoice()
        let us = document.querySelector('#uscore')
        let cs = document.querySelector('#cscore')

        if (userchoice == compchoice){
            msg.innerText = `Draw Both Selected ${userchoice}`
        }else if((userchoice=='rock' && compchoice=='paper') || (userchoice=='paper' && compchoice=='scissor') || (userchoice=='scissor' && compchoice=='rock')){
            compscore++
            cs.innerText = compscore   
            msg.innerText = 'Comp Wins'
        }else if((compchoice=='rock' && userchoice=='paper') || (compchoice=='paper' && userchoice=='scissor') || (compchoice=='scissor' && userchoice=='rock')){
            userscore++
            us.innerText = userscore
            msg.innerText = 'You Win'
        }
    })
})

newbtn.addEventListener('click',()=>{
    let us = document.querySelector('#uscore')
    let cs = document.querySelector('#cscore')
    userscore = 0
    compscore = 0
    us.innerText = userscore
    cs.innerText = compscore
})