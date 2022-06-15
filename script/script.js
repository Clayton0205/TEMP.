const calculate = document.getElementById('calculate');

calculate.addEventListener('click',()=>{
    let celsius = document.getElementById('celsius').value;
    let total = ((celsius * 9/5) + 32 )

    document.getElementById('display').innerHTML =
    total + " fahrenheit" ;
}  
);

