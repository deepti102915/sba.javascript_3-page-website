function calculator() {
    const loanstruct = {
    loanAmount:document.getElementById("amount").value,
    annualInterestrate:document.getElementById("apr").value,
    loanDuration:document.getElementById("tenure").value
    };
  // Passing the object as the arguement. The function also returns an object that includes both EMI & Total
  console.log(loanstruct)
  function EMIVal2(loan){
      interest = loan.annualInterestrate/1200;
      let term = loan.loanDuration*12;
      let top = Math.pow((1+interest),term);
      let bottom = top - 1;
      let ratio = top/bottom;
      if(loan.loanAmount ==0){
          EMI =0
          console.log("L: " + loan.loanAmount)
      }
      else if (loan.annualInterestrate==0){
        EMI =0 
        console.log("ANNUAL: " + loan.annualInterestrate)
      }
      else if (loan.loanDuration==0){
        EMI =0 
        console.log("LD: " + loan.loanDuration)
      }
      else{
      EMI = loan.loanAmount * interest * ratio
      console.log("2: " + loan.loanAmount)
      }

      console.log("annual: " + loan.annualInterestrate)
      console.log("duration: " + loan.loanDuration)

      Total = EMI*term;
      const EMIObj = {
        EMI:EMI.toFixed(2),
        Total:Total.toFixed(2)
        };
      return EMIObj
  }
  console.log(EMIVal2(loanstruct));
  document.getElementById("EMICapt").innerHTML='<P><b>EMI: $ </b>' + EMIVal2(loanstruct).EMI + '<br>' + '<b> Total: $ </b>' + EMIVal2(loanstruct).Total +'</P>';

  return false
}