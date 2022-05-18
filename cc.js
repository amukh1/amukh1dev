let options = ['Amukh1.', 'Aditya.']

document.getElementById('n').innerHTML = options[Math.floor(Math.random() * phrases.length)]

let phrases = ['Amukh1.', 'Aditya.']

document.getElementById('rph').innerHTML = phrases[Math.floor(Math.random() * phrases.length)]


document.getElementById('n').onmouseenter = function() {
    console.log('mouse over name')
    let ii = document.getElementById('n').innerHTML
    if(ii == 'Amukh1.'){
    let xedhe = setTimeout(function() {
        document.getElementById('n').innerHTML = 'Aditya.'
    }, 75)
    }else {
        let xedhe = setTimeout(function() {
            document.getElementById('n').innerHTML = 'Amukh1.'
        }, 75)
    }
}


document.getElementById('n').onclick = function(){
    window.location.href = 'https://github.com/amukh1'
}