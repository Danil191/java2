const btnLove = document.getElementById('Love');
const btnBMI = document.getElementById('BMI');
const btnYear = document.getElementById('Year');
const btnDinner = document.getElementById('Dinner');

btnLove.addEventListener('click', ()=>{
    var you = prompt("Введите первое имя:");
    var lover = prompt("Введите второе имя:");
    alert(`Совместимость: ${you} и ${lover} ` + Math.floor(Math.random() * 100) + " %");
})

btnBMI.addEventListener('click', ()=>{

    var weight = prompt("Введите ваш вес(кг):");
    var height = prompt("Введите ваш рост(cм):");

    var height = height/100;
    imt = weight / (Math.pow(height, 2));
    if (imt < 16){
        alert("Выраженный дефицит массы тела");
    };
    if (imt < 18.5 && imt >= 16){
        alert("Недостаточная масса тела");
    };
    if (imt < 25 && imt >= 18.5){
        alert("Нормальная масса тела");
    };
    if (imt < 30 && imt >= 25){
        alert("Избыточная масса тела (предожирение)");
    }
    if (imt < 35 && imt >= 30){
        alert("Ожирение 1-ой степени");
    }
    if (imt < 40 && imt >= 35){
        alert("Ожирение 2-ой степени");
    }
    if (imt > 40){
        alert("Ожирение 3-ой степени");
    };
})

btnYear.addEventListener('click', ()=>{
    var year = prompt("Введите год:");

    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        alert("Високосный год");
    }
    else {
        alert("Не является високосным");
    }
})

btnDinner.addEventListener('click', ()=>{
    var size = prompt("Введите количество человек");

    let count = new Array();
    for (i = 0; i < size; ++i) {
        var person = prompt(`Введите имя ${i + 1}`);
        count[i] = person;
    }
    alert("Оплачивает: " + count[Math.floor(Math.random() * size )] + ", прости(((" );
})