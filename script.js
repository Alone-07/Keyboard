const body = document.querySelector('body');
const keys = document.querySelectorAll('.keys');
const len = keys.length;
body.addEventListener('keypress', keyboard);
function keyboard(e) {
    let letter = e.key;
    if (e.key == ' ') { letter = 'space' }
    let pattern = /[;'!-_,.]/;
    let pool = pattern.test(letter);
    if (pool) {
        return console.log('fail')
    }
    let Lkey = document.querySelector(`[data-key=${letter}]`)
    remove()
    return Lkey.classList.add('sqz');
}

function remove() {
    Array.from(keys).forEach(e => {
        return e.classList.remove('sqz');
    })
}
console.log('hi')
