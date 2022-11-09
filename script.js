/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const input = document.querySelector('#input');
const container = document.querySelector('#items')

input.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {

        const product = input.value;

        const newProduct = document.createElement('p');
        newProduct.textContent = product;
        newProduct.addEventListener('click', function() {
            newProduct.classList.toggle('done');
        });

        if (product != '') {
            container.prepend(newProduct);
        }

        input.value = '';
    }
});