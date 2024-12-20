// const goods = document.querySelector('button[data-id="goods"]')
// const cart = document.querySelector('button[data-id="cart"]')

// function clickHandler(event) {
//     // event.target.dataset.id
//     // event.target.getAttribute('data-id')
//     // console.log(event.target.getAttribute('data-id'))

//     // console.log(id)

//     // return (event) => {
//     //     console.log(event)
//     // }

//     // const id = event.target.dataset.id;
//     // if (id === 'goods') {
//     //     goods.classList.add('active');
//     //     cart.classList.remove('active');
//     // }
//     // else if (id === 'cart') {
//     //     cart.classList.add('active');
//     //     goods.classList.remove('active');
//     // }

//     goods.classList.toggle('active')
//     cart.classList.toggle('active')
// }

// goods.addEventListener('click', clickHandler)
// cart.addEventListener('click', clickHandler)

let activeTabId = 'goods';
const initialTab = document.querySelector(`button[data-tab-id="${activeTabId}"]`)
initialTab.classList.add('active')

const tabs = document.querySelectorAll('button.tab')

for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i]
    tab.addEventListener('click', clickHandler)
}

function clickHandler(event) {
    const active = document.querySelector(`button[data-tab-id="${activeTabId}"]`)
    active.classList.toggle('active')
    event.target.classList.toggle('active')
    // console.log(event.target.dataset)
    activeTabId = event.target.dataset.tabId;
    // for (let i = 0; i < tabs.length; i++) {
    //     const tab = tabs[i]
    //     tab.classList.toggle('active')
    // }
}