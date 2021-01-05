const input = document.querySelector('#input');
const btn = document.querySelector('button.btn');
const para = document.querySelector('.para');

btn.onclick = function () {
    input.select();
    document.execCommand('copy');
    alert('Copied');
}

btn.onmouseover = function () {
    para.innerHTML = 'Click this button to copy the redeem code';
    
}



// btn.addEventListener('click', function() {
//     input.select();
//     document.execCommand('copy');
//     alert('Copied');
// })




