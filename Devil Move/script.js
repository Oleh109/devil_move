const box = document.querySelectorAll('.box');
const img = document.querySelector('.img');

box.forEach((el) => {
    el.addEventListener('dragover', (e) => {
        e.preventDefault();
        el.classList.add('hover');
    })

    el.addEventListener('dragleave', () => {
        el.classList.remove('hover');
    })

    el.addEventListener('drop', () => {
        el.appendChild(img)
        el.classList.remove('hover');
    })
});

img.addEventListener('dragstart', () => {
    setTimeout(() => (img.classList.add('hide')), 0);
})

img.addEventListener('dragend', () => {
    img.classList.remove('hide')
})