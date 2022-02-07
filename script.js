const openPage = document.getElementById('open');
const closePage = document.getElementById('close');
const container = document.querySelector('.container');


openPage.addEventListener('click', () => container.classList.add('show-nav'))
closePage.addEventListener('click', () => container.classList.remove('show-nav'))