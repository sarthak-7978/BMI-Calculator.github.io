setInterval( () =>{
    let feet = document.querySelector('#feet').value;
    let inch = document.querySelector('#inches').value;
    let kg = document.querySelector('#weight').value;
    let metre = document.querySelector('.metre');
    let kilog = document.querySelector('.kg');

    let met = (feet * 0.3048)  + (inch * 0.0254);
    metre.innerHTML = `In metre = ${met} `;
    kilog.innerHTML = `${kg} kg`;
},1)


let btn = document.querySelector('.submit');

btn.addEventListener('click', () =>{
    let feet = document.querySelector('#feet').value;
    let inch = document.querySelector('#inches').value;
    let kg = document.querySelector('#weight').value;
    let bmi = document.querySelector('.bmi');
    let info = document.querySelector('.info');


    let met = (feet * 0.3048)  + (inch * 0.0254);
    let BMI = kg / (met * met);

    bmi.innerHTML = ` Your BMI value = ${BMI}`;

    var txt ;


    if ( BMI < 18.5){
        txt = " you are underweight. 😔 ";
    }
    else if (BMI > 18.5 && BMI < 24.9){
        txt = " you are normal or healthy weight. 🙂 ";
    }
    else if (BMI > 25 && BMI < 29.9){
        txt = " you are over weight. 😐 " ;
    }
    else if ( BMI >= 30) {
        txt = " you are obese. 😮 ";
    }

    let i = 0;
    let speed = 100;
    
    function type() {
      if (i < txt.length) {
        info.innerHTML += txt.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  
    
})