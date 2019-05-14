/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class TownElements { // classes
    // All parks and streets have a name and a build year.
    constructor(name, yearOfCreation){
        this.name = name;
        this.yearOfCreation = yearOfCreation;
    }
    calcAges(){
        this.age = new Date().getFullYear() - this.yearOfCreation;
    }
}

class Parks extends TownElements { // subclasses
    constructor(name, yearOfCreation, trees, area){
        super(name, yearOfCreation);
        this.trees = trees;
        this.area = area;
    }

    CalcTreeDensity() {
        const treeDensity = this.trees / this.area;
        return treeDensity;
    }

    parkReport() {
        /*report with the following:
        1. Tree density of each park in the town (forumla: number of trees/park area)
        3. The name of the park that has more than 1000 trees*/
        console.log(`${this.name} has a tree density of ${this.CalcTreeDensity()} trees per square meter.`);
        if(this.trees > 1000){ // better to use find index instead of this
            console.log(`${this.name} has over 1000 trees, at ${this.trees} trees!`)
        }
    }
}

class Streets extends TownElements {
    constructor(name, yearOfCreation, length, classification = 'normal'){ // default parameters
        super(name, yearOfCreation);
        this.length = length;
        this.classification = classification;
    }

    streetReport(){
        /*report with the following:
        4. Length of the town's streets
        5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal*/
        console.log(`${this.name}, built in ${this.yearOfCreation} is ${this.classification}.`);
    }
}

parksList = [
    ['St. Bernard', 1990, 303, 2000],
    ['Valantinek', 1875, 2501, 3000],
    ['Memorial Park', 1950, 417, 4000]
]

streetsList = [
    ['Mgnsz St.', 1870, 20, 'tiny'],
    ['Trafalgar St.', 2001, 250, 'small'],
    ['Memorial Road' ,1946, 1775, 'big'],
    ['Dakhaus Ave.', 1802, 3002, 'huge']
]

var pk1 = new Parks(...parksList[0]);
var pk2 = new Parks(...parksList[1]);
var pk3 = new Parks(...parksList[2]);
const allPk = [pk1, pk2, pk3];

var st1 = new Streets(...streetsList[0]);
var st2 = new Streets(...streetsList[1]);
var st3 = new Streets(...streetsList[2]);
var st4 = new Streets(...streetsList[3]);
const allSt = [st1, st2, st3, st4];

function calc(arr){
    const sum = arr.reduce((prev,cur,index) => prev + cur, 0);

    return [sum, sum/arr.length];
}

const report = new Map(); // maps
report.set('Parks Header', '~-~-~ PARKS REPORT ~-~-~');
//report.set('Overall parks', `Our ${allPk.length} parks have an average age of ${averageParkAge} years.`);
report.set('Streets Header', '~-~-~ STREETS REPORT ~-~-~');
//report.set('Overall streets', `Our ${allSt.length} streets have a total length of ${averageStreetLength} meters, and have an average length of ${totalStreetLength} meters.`);


function printReport (pk, st) {

    // At an end-of-year meeting, your boss wants a final report with the following
    
    // Parks
    console.log(report.get('Parks Header'));
    pk.forEach(el => el.parkReport());
    pk.forEach(el => el.calcAges());
    //2. Average age of each town's park (forumla: sum of all ages/number of parks)
    //console.log(report.get('Overall parks'));
    parkAges = pk.map(el => el.age);
    avgAge = calc(parkAges)[1]
    console.log('Overall parks', `Our ${allPk.length} parks have an average age of ${avgAge} years.`);


    // Streets
    console.log(report.get('Streets Header'));
    st.forEach(el => el.streetReport());
    //4. Total and average length of the town's streets
    //console.log(report.get('Overall streets'));
    streetLengths = st.map(el => el.length);
    avgLength = calc(streetLengths)[0];
    totLength = calc(streetLengths)[1];
    console.log('Overall streets', `Our ${allSt.length} streets have a total length of ${totLength} meters, and have an average length of ${avgLength} meters.`);

}

printReport(allPk, allSt)