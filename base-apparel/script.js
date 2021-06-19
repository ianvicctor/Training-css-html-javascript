let input = document.getElementById('email')
let res = document.getElementById('res')

function verificarEmail() {    
    let i = String(input.value)
    let array = i.split('')

    if (array.length == 0 || array[0] == "" || array.indexOf('@') == -1 || array.indexOf('.') == -1) { 
        email.style.border = '2px hsl(0, 87%, 58%) solid'
        email.style.borderRight = 'none'
        email.style.background = 'url(./images/icon-error.svg) no-repeat scroll 85%'
        email.style.opacity = '1'
        res.innerHTML = `Please provide a valid email ` 
        return false;       
    }  else {
        console.log('ok')
    }
    
}
