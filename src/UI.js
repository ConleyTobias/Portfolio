const max = 11
let i = 1;

while (i < max + 1) {
    const text = document.getElementById('content'+i);
    const button = document.getElementById('button'+i);
    button.addEventListener('click', function() {
        if (text.style.display === 'none') {
            text.style.display = 'inline';
        } else {
            text.style.display = 'none';
        }
    });
    i++;
}