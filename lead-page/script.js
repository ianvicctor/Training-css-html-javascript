let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')
let password = document.getElementById('password')

function verificarDados() {
    let fn = String(firstName.value)
    let afn = fn.split('')
    let ln = String(lastName.value)
    let aln = ln.split('')
    let em = String(email.value)
    let aem = em.split('')
    let pa = String(password.value)
    let apa = pa.split('')

    if (afn.length == 0) {
        firstName.style.border = '2px hsl(0, 100%, 74%) solid'
        firstName.style.background = 'url(./images/icon-error.svg) no-repeat scroll 95%'
        firstName.placeholder = ''
        firstName.style.opacity = '1'
        document.getElementById('resFN').innerHTML = `First Name cannot be empty`    
    }

    if (aln.length == 0) {
        lastName.style.border = '2px hsl(0, 100%, 74%) solid'
        lastName.style.background = 'url(./images/icon-error.svg) no-repeat scroll 95%'
        lastName.placeholder = ''
        lastName.style.opacity = '1'
        document.getElementById('resLN').innerHTML = `Last Name cannot be empty`    
    }

    if (aem.length == 0 || aem[0] == "" || aem.indexOf('@') == -1 || aem.indexOf('.') == -1) {
        email.style.border = '2px hsl(0, 100%, 74%) solid'
        email.style.background = 'url(./images/icon-error.svg) no-repeat scroll 95%'
        email.placeholder = ''
        email.style.opacity = '1'
        document.getElementById('resEM').innerHTML = `Looks like this is not an email`    
    }

    if (apa.length == 0) {
        password.style.border = '2px hsl(0, 100%, 74%) solid'
        password.style.background = 'url(./images/icon-error.svg) no-repeat scroll 95%'
        password.placeholder = ''
        password.style.opacity = '1'
        document.getElementById('resPA').innerHTML = `Password cannot be empty`    
    }
    return 'ok'    
}