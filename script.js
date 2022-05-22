const body = document.querySelector('body');
const keys = document.querySelectorAll('.keys');
const len = keys.length;
body.addEventListener('keypress', keyboard);
function keyboard(e) {
    let letter = e.key;
    if (e.key == ' ') { letter = 'space' }

    if (checker(letter)) { return console.log('false') }
    let Lkey = document.querySelector(`[data-key=${letter}]`)
    remove()
    Lkey.classList.add('sqz');
}

function remove() {
    Array.from(keys).forEach(e => {
        return e.classList.remove('sqz');
    })
}
function checker(key) {
    let props = String(key).toLowerCase();

    let value = Array.from(keys).some(e => {
        e.classList.contains(`${props}`);
    })
    return console.log(`value: ${value}`);
}