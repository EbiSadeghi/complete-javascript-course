var john = {
    bills: [124.00, 48.00, 268.00, 180.00, 42.00],
    tips: [],
    final: [],
    tipAmount: function() {
        for(i = 0; i < this.bills.length; i++){
            if(this.bills[i] > 200.00){
                console.log('Tip 10%');
                this.tips.push(this.bills[i]*0.1);
                this.final.push(this.bills[i]*1.1);
            }
            else if(this.bills[i] >= 50.00 && this.bills[i] <= 200.00){
                console.log('Tip 15%');
                this.tips.push(this.bills[i]*0.15);
                this.final.push(this.bills[i]*1.15);
            }
            else if (this.bills[i] < 50.00){
                console.log('Tip 20%');
                this.tips.push(this.bills[i]*0.2);
                this.final.push(this.bills[i]*1.2);
            }
            else{
                console.log('Error - bill not in valid range');
                console.log('Iteration - ' + i);
            }
        }
    }
};

john.tipAmount()
console.log(john.tips);
console.log(john.final);