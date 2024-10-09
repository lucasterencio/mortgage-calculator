const ipt = document.querySelectorAll(".input-field")
const imgRadio = document.querySelectorAll(".img-radio")

const inputBox = document.querySelectorAll(".input-box")
const inputForm = document.querySelectorAll(".input-form")
const simbolMortageAmount = document.querySelectorAll(".simbol-mortage-amount")
const inputRate = document.querySelector(".input-rate")


// ipt.style.border = '2px solid #D8DB2F'
// ipt.style.backgroundColor = 'rgba(216, 219, 47, 0.15)'
// 'assets/images/ph--circle(1).png'
// 'assets/images/ph--radio-button-fill.png'




ipt.forEach((i, index) =>{
    i.addEventListener('click', function(){
        if(ipt[index].style.backgroundColor === 'rgba(216, 219, 47, 0.15)'){
            ipt[index].style.backgroundColor = ''
            ipt[index].style.border = ''
            imgRadio[index].src = 'assets/images/ph--circle(1).png'
        } else{
            ipt[index].style.backgroundColor = 'rgba(216, 219, 47, 0.15)';
            ipt[index].style.border = '2px solid #D8DB2F';
            imgRadio[index].src = 'assets/images/ph--radio-button-fill.png';
        }
    })
})

inputBox.forEach((input, index) =>{
    input.addEventListener('mouseover', function(){
        inputForm[index].style.borderColor = '#133041';
        simbolMortageAmount[index].style.borderColor = '#133041';
    })

    input.addEventListener('mouseout', function(){
        inputForm[index].style.borderColor = '#6B94A8';
        simbolMortageAmount[index].style.borderColor = '#6B94A8';
    })
})





