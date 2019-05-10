var budgetController = (function(){

    /*
    Create function constructors to create lots of objects
    of the same type
    */

    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        //Predefine percentage as -1
        this.percentage = -1;
    };

    // Give expenses a percentage property based off of total income
    Expense.prototype.calcPercentage = function(totalIncome) {
        // Calculate the percentage of income that we spent, and round it to nearest percentage point
        if(totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome ) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function() {
        return this.percentage;
    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc:[]
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1

    };

    // Calculates either the total income or expense
    var calculateTotal = function(type) {
        var sum = 0;

        // Iterate over all elements in either the inc or exp arrays
        data.allItems[type].forEach(function(current) {
            sum += current.value;
        });
        data.totals[type] = sum;
    }

    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            /*
            Take the last item in the list, and use ID + 1
            so as not to repeat IDs. Unless the array is empty,
            then define ID = 0
            */
           if(data.allItems[type],length > 0){
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
           } else {
               ID = 0;
           }

           // Create the object
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Push it into our data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;

        },

        deleteItem: function(type, id){
            // Initialize variables
            var ids, index;

            ids = data.allItems[type].map(function(current){
                return current.id;
            });

            index = ids.indexOf(id);

            // So long as the index value is valid, delete it
            if(index !== -1) {
                //starting from the index, remove 1 item
                data.allItems[type].splice(index, 1)
            }
        },

        calculateBudget: function() {
            // Initialize variables
            
            // Calculate total income and expense
            calculateTotal('exp');
            calculateTotal('inc');

            // Calculate the budget (income - expenses)
            data.budget = data.totals.inc - data.totals.exp;

            // Calculate the percentage of income that we spent, and round it to nearest percentage point
            if(data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },

        calculatePercentages: function() {
            data.allItems.exp.forEach(function(cur){
                cur.calcPercentage(data.totals.inc);
            });
        },

        getPercentages: function() {
            var allPerc = data.allItems.exp.map(function(cur){
                // Evaluate and return each percentage
                return cur.getPercentage();
            });
            // Return a (list?) of all percentages
            return allPerc;
        },

        getBudget: function() {
            return {
                // We stored the total budget in data
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },
    }
    
})();

/*
Seperation of concerns: each part handles an indepedent task,
here the UI is seperate from the budget data.
*/
var UIController = (function(){

    //Help make the code neater 
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercentageLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

       /*
        * Create a consistent format for the numbers,
        * and make sure they are properly aligned
        */
       var formatNumber = function(num, type) {
        // Initialize variables
        var numSplit;

        num = Math.abs(num);

        // Make consistent decimal places (will round if needed)
        num = num.toFixed(2);

        // Split numbers in the thousands with a comma
        numSplit = num.split('.');
        int = numSplit[0];
        if (int.length > 3){
            int = int.substr(0,int.length - 3) + ',' + int.substr(int.Arraylength - 3,3); //input: 23510 || output: 23,510
        };
        dec = numSplit[1];

        //Add + or = depending on type

        /*type === 'exp' ? sign = '-' : sign = '+';
        return type + ' ' + int + dec;*/
                    
        return (type === 'exp' ? sign = '-' : sign = '+') + ' ' + int + '.' + dec;

    };

    var nodeListForEach = function(list, callback){
        for (var i = 0; i < list.length; i++){
            callback(list[i], i);
        }
    };
 
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },

        addListItem: function(obj, type){
            // Initialize variables
            var html, newHtml, element;

            // Create HTML string with placeholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // Replace placeholder text with data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

            // Insert HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        /*
         * Delete items from DOM (UI)
         */
        deleteListItem: function(selectorID) {
            //In JS you can only delete a child, not a element directly
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },
        
        /**
         * After a user inputs an income/expense, clear the
         * field.
         */
        clearFields: function(){
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array) {
                // CLear value by setting to empty string
                current.value = "";
            });

            // Make the user select the description again
            fieldsArr[0].focus();
        },

        displayBudget: function(obj) {
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';

            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');

            // Only show a percentage if valid
            if (obj.percentage > 0){
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }
            
        },

        displayPercentages: function(percentages){
            var fields = document.querySelectorAll(DOMstrings.expensesPercentageLabel);

            nodeListForEach(fields, function(current, index) {
                if(percentages[index] > 0){
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });
        },
        displayMonth: function() {
            var now, months, month, year;
            
            //var christmas = new Date(2016, 11, 25);
            now = new Date();
            
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            month = now.getMonth();
            
            year = now.getFullYear();
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
        },

        changedType: function() {
            var fields = document.querySelectorAll(
                DOMstrings.inputType + ',' + DOMstrings.inputDescription + ',' + DOMstrings.inputValue
            );

            nodeListForEach(fields, function(cur){
                cur.classList.toggle('red-focus');
            });

            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
        },

        /*
        Make the DOMstrings public so that another controller
        can use the same implementation
        */
        getDOMstrings: function(){
            return DOMstrings;
        }
    };

})();

/*
Here we have another controller that deals with changing the
UI based off of the budget data.

We pass the other two modules as arguments to this
global app controller.
*/
var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function() {
        //Get the DOM strings from before
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
        document.addEventListener('keypress', function(event){
            //Here is what happens when any key is clicked
            console.log(event);
            //A good reference: keycodes.atjayjo.com/#
    
            if (event.keyCode === 13 || event.which === 13){
                //console.log('ENTER was pressed.');
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);

    };

    var updatePercentages = function() {
        // 0. Initialize vars
        
        // 1. Calculate the percentages
        budgetCtrl.calculatePercentages();

        // 2. Read percentages from the budget controller
        var percentages = budgetCtrl.getPercentages();

        // 3. Update the UI
        UICtrl.displayPercentages(percentages);
        console.log(percentages);
    };

    var updateBudget = function(){
        // 0. Initialize variables

        // 1. Calculate the budget
        budgetCtrl.calculateBudget();

        // 2. Return the budget
        var budget = budgetCtrl.getBudget();

        // 3. Display the budget on the UI
        UICtrl.displayBudget(budget);
        console.log(budget);

        // 4. Calculate and Update the percentages
        updatePercentages();
    };

    var ctrlAddItem = function() {
        // 0. Initialize variables
        var input, newItem;

        // 1. Get the filled input data
        input = UICtrl.getInput();
        console.log(input);

        if (input.description !== "" && !isNaN(input.value && input.value > 0)){
            // 2. Add the ite, to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            // Clear the fields
            UICtrl.clearFields();

            // 5. Recalculate the budget
            updateBudget();

            // 6. Calculate and Update the percentages
            updatePercentages();
        }
    };

    // Use DOM traversing and DOM bubbling to delete an item
    var ctrlDeleteItem = function(event) {
        var itemID, splitID, type, ID;

        // We hardcoded the HTML, so its not so bad to hard code the traversing of the DOM structure
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        
        // itemID will be null for anything other than delete button clicks
        if (itemID){
            /* 
             * As soon as we call a method on a string, JS 
             * turns it from a primitive to an object. So we 
             * have access to a bunch of String methods.
             */
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            // 1. Delete the item from the data structute
            budgetCtrl.deleteItem(type, ID);

            // 2. Delete the item from the UI
            UICtrl.deleteListItem(itemID);

            // 3. Update and show the new budget
            updateBudget();
        }
    };

    return {
        init: function() {
            console.log('Application has started');
            UICtrl.displayMonth();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();
