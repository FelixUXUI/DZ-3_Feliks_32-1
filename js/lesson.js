const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabsBlocks = document.querySelectorAll('.tab_content_item');

const toggleContent = (indexElement = 0) => {
  tabContentBlocks.forEach((block, i) => block.style.display = i === indexElement ? 'block' : 'none');
  tabsBlocks.forEach((block, i) => block.classList.toggle('tab_content_item_active', i === indexElement));
};

let sliderIndex = 0;

const autoSlider = () => {
  hideContentBlock();
  sliderIndex = (sliderIndex + 1) % tabContentBlocks.length;
  toggleContent(sliderIndex);
};

const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');

const validatePhone = () => {
  const phone = phoneInput.value.trim();
  const regex = /\+996 [2574]\d{2} \d{2}-\d{2}-\d{2}/;
  if (regex.test(phone)) {
    phoneResult.textContent = 'ok';
    phoneResult.style.color = '#00ff00';
  } else {
    phoneResult.textContent = 'not ok';
    phoneResult.style.color = '#ff0000';
  }
};

phoneButton.onclick = validatePhone;

itemContentBlock.onclick = (event) => {
  if (event.target.classList.contains('tab_content_item')) {
    const index = tabsBlocks.indexOf(event.target);
    if (index > -1) toggleContent(index);
  }
};

setInterval(autoSlider, 3000);
