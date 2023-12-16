const photoInput = document.querySelector("#phone_input");
const photoButton = document.querySelector("#phone_button");
const photoResult = document.querySelector("#phone_result");

const regExp = /\+996 [2574]\d{2} \d{2}-\d{2}-\d{2}/

photoButton.onclick = () => {
    if (regExp.test(photoInput.value)) {
        photoResult.innerHTML = 'ok'
        photoResult.style.color = '#00ff00'
    }else {
        photoResult.innerHTML = 'not ok'
        photoResult.style.color = '#ff0000'
    }
}

const tabContentBlock = document.querySelector('.tab_content_block')
const itemContentBlock = document.querySelector('.tab_content_items')
const tabBlock = document.querySelector('.tab_content_item')


const hideContentBlock = () => {
    tabContentBlock.forEach(tabContentBlock => {
        tabContentBlock.style.display = 'none'
    })
    tabBlock.forEach(tabBlocks => {
        tabBlocks.classList.remove('tab_content_item_active')
    })
}

const showContent = (indexElement = 0) => {
    tabContentBlock[indexElement].style.display = 'block'
    tabBlock[indexElement].classList.add('tab_content_item_active')
}

hideContentBlock()
showContent()

itemContentBlock.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabBlock.forEach((tabBlocks, tabIndex) => {
            if (event.target === tabBlocks) {
                hideContentBlock()
                showContent(tabIndex)
            }
        })
    }
}

let slaiderIndex = 0

const autoSlaider = () => {
    hideContentBlock()
    slaiderIndex = (slaiderIndex + 1) % tabContentBlock.length
    showContent(slaiderIndex)
}
setInterval(autoSlaider, 3000)

//TAB SLIDER
const tabContendBlocks = document.querySelectorAll('.tab_content_block')
const tabsParentBlock = document.querySelector('.tab_content_items')
const tabsBlocks = document.querySelectorAll('.tab_content_item')



const hideTabContend = () => {
    tabContendBlocks.forEach(tabContendBlock=> {
        tabContendBlock.style.display = 'none'
    })
    tabsBlocks.forEach(tabBlock => {
        tabBlock.classList.remove('tab_content_item_active')

    })
}
const showTabContends = (indexElement = 0) => {
    tabContendBlocks[indexElement].style.display = 'block'
    tabsBlocks[indexElement].classList.add('tab_content_item_active')
}
hideTabContend()
showTabContends()

tabsParentBlock.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabsBlocks.forEach((tabBlock, tabIndex)=> {
            if (event.target === tabBlock){
                hideTabContend()
                showTabContends(tabIndex)
            }
        })
    }
}
let sliderIndex = 0
const autoSlider = () => {
    hideTabContend()
    sliderIndex = (sliderIndex + 1) % tabContendBlocks.length
    showTabContends(sliderIndex)
}
setInterval(autoSlider, 3000)