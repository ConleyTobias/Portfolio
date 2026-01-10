const max = 11
let i = 1;

const data = [
    {
        "name": "2024-25 Robot - Freshmen Year",
        "text": "Last year I worked on the 2024-2025 Robot, mainly on subsystems. I also learned how to create autos.\n" + "\n"
    }
]

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