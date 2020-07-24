const tallesBtn = document.getElementById('talles-button');
const tallesBtn2 = document.getElementById('talles-button2');
const tallesTable = document.getElementById('talles-table');
const close = document.getElementById('close');

tallesBtn.addEventListener('click', () => {
    tallesTable.style.display = 'block';
});

close.addEventListener('click', () => {
    tallesTable.style.display = 'none';
})

tallesBtn2.addEventListener('click', () => {
    tallesTable.style.display = 'block';
})
