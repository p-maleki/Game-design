let num = prompt("لطفا شماره ی ماشین را وارد کنید :"); // ورود تعداد ماشین ها توسط کاربر//
let silender = [];
let position = [];
let cars = [];
let carsPosition = [];
let oldPosition = [];
let win = [];
////////////  اطلاعات به ماشین ها  ////////////////
function Cars(name, numberOfSilenders, numberOfChance, position) {
    this.name = name;
    this.numberOfSilenders = numberOfSilenders;
    this.numberOfChance = numberOfChance;
    this.position = position;
}

for (let i = 0; i < num; i++) { /// حرکت تصادفی به ماشین 
    let silent = Math.ceil(5 * Math.random());   // گرد به سمت بالا
    silender.push(silent);
}  
//// vector     ‌در جیسون یک آرایه ساختیم 
///   اول شروع بازی دو تا ماشین  باهم برابرن 
//// خروجی این حلقه ی فور دو تا بردار پوزیشن و الدپوزیشن با طول نام و مقدار اولیه یک هستند
for (i = 0; i < num; i++) {
    position.push(1);
    oldPosition.push(1);
}

function Game() {
    for (let j = 0; j < num; j++) {
        if (oldPosition[j] < 100) {
            let k1 = oldPosition[j];
            let k = "t" + k1;
            document.getElementById(k).innerHTML = "*";
        }
    }

    for (i = 0; i < num; i++) {
        let z = document.getElementById("demo");
        let randomNumber1 = document.getElementById("demo").value;
        let randomNumber2 = Math.ceil(10 * Math.random());
        let pos = (Math.abs(randomNumber1 - randomNumber2) * silender[i]) + oldPosition[i];    /// abs ()  عدد مثبت را برمیگرداند
        let chance = Math.max(...silender) - silender[i] + 1;   /// ماکزیمم سیلندرها منهای سیلندر خود ماشین بعلاوه یک رو برابر شانس ماشین قرار میده
        let car = new Cars(i, silender[i], chance, position[i]);
        carsPosition.push(pos);
        oldPosition[i] = pos;
        cars.push(car);
        cars[i].position = pos;
        if (cars[i].position > 100) {
            cars[i].position = 100;
            pos = 100;
            win.push(i);
        }

        z.value = "";
        let x = "t" + pos;
        console.log(pos);
        document.getElementById(x).innerHTML = i;
    }
    console.log(win);
    let result = win[0];
    document.getElementById("final").innerHTML = `ماشین` +  result + ` برنده میشود `;
}