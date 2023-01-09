show = false;

function searchImg() {
    const input = document.getElementById("search-input");
    const number = input ? input.value : '';

    const imgItem = document.getElementById("resultImg");
    input.value = '';

    if (number > 0 && number < 67) {
        imgItem.innerHTML = `<img src="./img/casillas/${number}.png"></img>`;
    } else {
        imgItem.innerHTML = `<img src="./img/title.jpg"></img>`;
    }

}

function showRules() {
    const imgItem = document.getElementById("resultImg");

    if (!show) {
        imgItem.innerHTML = `<img src="./img/rule-01.jpg"></img>
        <img src="./img/rule-02.jpg"></img>`;

        show = true;
    } else {
        imgItem.innerHTML = `<img src="./img/title.jpg"></img>`;

        show = false;
    }
}