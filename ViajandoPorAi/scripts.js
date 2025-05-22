let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let tumb = document.querySelector('.container .tumb')


btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')


function moveItemsOnClick(type){
    let listItems = document.querySelectorAll('.list .list-item')
    let tumbItems = document.querySelectorAll('.tumb .tumb-item')

    if (type === 'next') {
        list.appendChild(listItems[0])
        tumb.appendChild(tumbItems[0])
        container.classList.add('back')
    } else {
        list.prepend(listItems[listItems.length - 1])
        tumb.prepend(tumbItems[listItems.length - 1])
        container.classList.add('next')
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000);   
}

