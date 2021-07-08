// Hey kiddo
//two functions... one that greets and
//one that checks if someone is an adult

const checkAdult = function (age) {
    console.log("entering adultChecker..");
    console.log("input:", age);
        if (age >= 18) {
        return true;
    };
    
    return false;
};

console.log(checkAdult(18));

const sayGreeting = function () {
    if (checkAdult = true){
        return ("Hello there...");
    };
    
    return ("Hey kiddo");

    };


    console.log(sayGreeting(11));



//VAT Calculations deel 1
//zo bereken ik de totaalprijs in één functie

const priceIncludingVAT = function (baseprice, VATpercentage) {
    return baseprice * VATpercentage;
};

const VATamount = function () {
    const price = 100
    return priceIncludingVAT (100, 0.21)+price
    
};

console.log(VATamount());

//Deel 2
const priceAndVat = function () {
    const percentage = 1.21
    return [VATamount(100,0.21)/percentage, priceIncludingVAT(100,0.21)]
}

console.log(priceAndVat())