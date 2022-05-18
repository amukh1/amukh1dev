let options = ['Amukh1.', 'Aditya.']

document.getElementById('n').innerHTML = options[Math.floor(Math.random() * options.length)]

let phrases = ['eternal', 'parking' , 'split' ,'penetrate' ,'color' ,'colleague' ,'hide' ,'fuel' ,'challenge' ,'incongruous' ,'suffering' ,'cater' ,'help' ,'nonsense' ,'transition' ,'secular' ,'basis' ,'harvest' ,'headline' ,'marathon' ,'machinery' ,'area' ,'charter' ,'appoint' ,'glove' ,'volunteer' ,'tray' ,'slogan' ,'unlawful' ,'killer' ,'appearance' ,'pierce' ,'adviser' ,'physical' ,'mean' ,'slippery' ,'cry' ,'leaflet' ,'user']

// I *could* have used fetch or http(s) requests, But I wanted to do it this way.

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