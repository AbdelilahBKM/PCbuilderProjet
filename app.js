// build your pc page:

const btns = document.querySelectorAll('.btn');
const try_again = document.querySelector('.try-again');

// try again btn
if (try_again) {
    try_again.addEventListener('click', () => {
        location.reload();
    });
}

// building pc process
var pc_built = {};
var price = 0;
btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        let parentDiv = event.target.closest('.components-card');
        let parentId = Number(parentDiv.id);
        let componentDiv = event.target.closest('.component');
        let cmpPrice = componentDiv.querySelector('.price').innerHTML;
        price += Number(cmpPrice.split('$')[0]);

        const component = {
            name: componentDiv.querySelector('.name').innerHTML,
            price: cmpPrice,
            picture: componentDiv.querySelector('img').getAttribute('src')
        };

        let componentType = parentDiv.getAttribute('data-comp');
        pc_built[componentType] = component;

        if (parentId != 8) {
            parentDiv.classList.remove('active');
            const nextDiv = document.getElementById(parentId + 1);
            nextDiv.classList.add('active');
        } else {
            const build_product = document.querySelector('.build-slides');
            const finished_product = document.querySelector('.final-product');
            build_product.classList.remove('active');
            finished_product.classList.add('active');

            const pc_pic = document.querySelector('.image img');
            pc_pic.src = pc_built.case.picture;

            const cmps = document.querySelectorAll('.cmp');
            cmps.forEach((cmp) => {
                cmp.querySelector('.cmp-name').innerHTML = pc_built[cmp.id].name;
                cmp.querySelector('.cmp-price').innerHTML = pc_built[cmp.id].price;
            });

            const total = document.querySelector('.total-price span');
            total.innerHTML = price + '&dollar;';
        }


        console.log(parentId);
    });
});
