// compound inyrest calculate
//we can calculte intrest

function calculate(){
    const totalAmount = document.getElementById("total-amount");
    const principalInput = document.getElementById("principal");
    const rateInput= document.getElementById("Intrest Rate");
    const yearsInput= document.getElementById("Years");


    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value);
    let years = Number(yearsInput.value*12);
    
    let  Intrest  = ((principal*rate*years)/100);

    const result = principal+Intrest;

    totalAmount.textContent = result.toLocaleString(undefined,{style:"currency",currency:"INR"});

}
