(function () {
    let inputs = document.getElementsByTagName('input');
    let barra1 = document.getElementById('barra1');
    let barra2 = document.getElementById('barra2');
    let barra3 = document.getElementById('barra3');
    let barra4 = document.getElementById('barra4');
    let barra5 = document.getElementById('barra5');
    let Lbarra = document.getElementById('Lbarra');
    //console.log(inputs);
    //console.log(Lbarra.value);
    let button = document.getElementById('Desenhar');

    button.onclick = function() {
        barra1.style.height = `${parseInt(inputs[0].value)}px`;
        barra1.style.width =  `${Lbarra.value}px`;

        barra2.style.height = `${parseInt(inputs[1].value)}px`;
        barra2.style.width =  `${Lbarra.value}px`;

        barra3.style.height = `${parseInt(inputs[2].value)}px`;
        barra3.style.width =  `${Lbarra.value}px`;

        barra4.style.height = `${parseInt(inputs[3].value)}px`;
        barra4.style.width =  `${Lbarra.value}px`;

        barra5.style.height = `${parseInt(inputs[4].value)}px`;
        barra5.style.width =  `${Lbarra.value}px`;
    }
})()