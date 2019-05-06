var bill1 = 124.00;
var bill2 = 48.00;
var bill3 = 268.00;

var tips = []; // = [0, 1, 2];
var final = []; // = [0, 1, 2];

function tipAmount(bill) {
    if(bill > 200.00){
        console.log('Tip 10%');
        tips.push(bill*0.1);
        return tips;
    }
    else if(bill >= 50.00 && bill <= 200.00){
        console.log('Tip 15%');
        tips.push(bill*0.15);
        return tips;
    }
    else if (bill < 50.00){
        console.log('Tip 20%');
        tips.push(bill*0.2);
        return tips;
    }
    else{
        console.log('Error - bill not in valid range');
    }
}

function finalAmount(bill) {
    if(bill > 200.00){
        console.log('Tip 10%');
        final.push(bill*1.1);
        return final;
    }
    else if(bill >= 50.00 && bill <= 200.00){
        console.log('Tip 15%');
        final.push(bill*1.15);
        return final;
    }
    else if (bill < 50.00){
        console.log('Tip 20%');
        final.push(bill*1.2);
        return final;
    }
    else{
        console.log('Error - bill not in valid range');
    }
    
}

console.log(tipAmount(bill1));
console.log(tipAmount(bill2));
console.log(tipAmount(bill3));

console.log(finalAmount(bill1));
console.log(finalAmount(bill2));
console.log(finalAmount(bill3));

/*
Python form does not work in JS:
    var bills = [124.00,48.00,268.00];
    console.log(tipAmount(bill));
    console.log(finalAmount(bill));
*/
