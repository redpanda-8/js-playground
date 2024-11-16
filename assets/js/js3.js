// JS-3 - 16 skaidre
// 1 -----------------------------------------------------------------------------------------------------------------------
//Apibrezkite funkcija pavadinimu hello(), kuria pasaukus, atspausdintu konsoleje "Hello World"
function hello(){
    console.log('Hello World');
};

hello();

// 2 -----------------------------------------------------------------------------------------------------------------------
//pakeiciam is hello() i helloW2() kad nesusipjautu su dviguba deklaracija consolej ziurint web'e
// priskiriame funkcijai helloW2 parametra vardas, vardui nustatome default reiksme 'Panda' 
function helloW2(vardas = 'Panda') {
    console.log(`Hello ${vardas}`);
};

// pirma karta kvieciant funkcija argumento vardas nepateikiame, taigi paima default 'Panda'
// antra karta kvieciant funkcija argumento vardas reiksme 'Petras', tdl parodo console.log
helloW2();
helloW2('Petras');

// 3 -----------------------------------------------------------------------------------------------------------------------
// kadangi kintamasis amzius yra uz funkcijos ribu, jis yra pasiekiamas funkcijos viduje ir taip pat funkcija
// gali ji pakeisti, tdl kaskarta paleidziant funckija prabegoMetai amzius vis dideja plius vienu, jei
// kintamasis amzius butu funkcijos viduje funkcija issaukiant butu per nauja deklaruojama reiksme
let vardas = 'Panda';
let amzius = 20;


function prabegoMetai() {
    ++amzius
    console.log(vardas, amzius);
};

prabegoMetai();
prabegoMetai();
prabegoMetai();

// 4 -----------------------------------------------------------------------------------------------------------------------
// aprasiau funkcija kuri is pateiktu 3 skaciu suranda maziausia naudojant Math.min metoda
// kadangi yra return statement'as pakviesta funckija tiesiog grazins maziausia skaiciu todel ja galima tiesiai naudoti
// kitose funkcijose ar console.log'e
function maziausiasNumeris(a, b, c) {

    let maziausias = Math.min(a, b, c);   
    return maziausias;

};

var maziausiasSkaicius = maziausiasNumeris(4, 6, 8);

console.log(maziausiasSkaicius);

// 5 -----------------------------------------------------------------------------------------------------------------------
// taip pat kaip 4 uzduotis
function apskaiciuotiVidurki(a, b, c) {

    let vidurkis = (a + b + c) / 3;   
    return vidurkis;

};

var vidurinisSkaicius = apskaiciuotiVidurki(maziausiasSkaicius, 8, 10);

console.log(vidurinisSkaicius);

// 6 -----------------------------------------------------------------------------------------------------------------------


function padidinamNumeri(numeris) {
    ++numeris 
    return numeris
};

var startinisNumeris = 40;
var padidintasNumeris = padidinamNumeri(startinisNumeris);

console.log(padidintasNumeris);


