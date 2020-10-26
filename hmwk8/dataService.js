export class DataService {
    constructor() {
        // data = [
        //   {
        //     'name': 'Bobby',
        //     'gender': 'M',
        //     'address': '123 Burton',
        //     'age': 18,
        //     'phoneNumber': '123-456-7890'
        //   },
        //   {
        //     'name': 'Donny',
        //     'gender': 'M',
        //     'address': '321 Pen State',
        //     'age': 26,
        //     'phoneNumber': '0987-654-321'
        //   },
        //   {
        //     'name': 'Ronny',
        //     'gender': 'F',
        //     'address': '911 Police St.',
        //     'age': 3,
        //     'phoneNumber': '567-890-1234'
        //   },
        // ]
        this.data = [];
        this.data = [];
    }
    getData(numRecords) {
        if (numRecords === undefined) {
            return this.data.slice();
        }
        else {
            return this.data.slice(0, numRecords);
        }
    }
    async fetchData() {
        try {
            const response = await fetch('https://randomuser.me/api/?results=10');
            if (!response.ok) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }
            // Examine the text in the response
            this.data = (await response.json()).results;
            console.log(JSON.stringify(this.data, undefined, 2));
        }
        catch {
            (function (err) {
                console.log('Fetch Error :-S', err);
            });
        }
    }
}
//test cases below
// const Test1 = new DataService();
// console.log(Test1.getData());
//output the whole array
// console.log(Test1.getData(1));
//output up to first obj
// console.log(Test1.getData(2));
//output up to second obj
// console.log(Test1.getData(3));
//output up to third obj
//testing fetchData function
// Test2 = new DataService();
// Test2.fetchData()
// Test2.getData()
// async function main() {
//   Test2 = new DataService();
//   await Test2.fetchData();
//   console.log('done with fetchData Call');
// }
// // Test2.getData()
// main()
