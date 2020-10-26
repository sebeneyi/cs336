class DataService {
  data = [
    {
      'name': 'Bob',
      'gender': 'M',
      'address': '123 Burton',
      'age': 18,
      'phoneNumber': '123-456-7890'
    },
    {
      'name': 'Don',
      'gender': 'M',
      'address': '321 Pen State',
      'age': 26,
      'phoneNumber': '0987-654-321'
    },
    {
      'name': 'Ronny',
      'gender': 'F',
      'address': '911 Police St.',
      'age': 3,
      'phoneNumber': '567-890-1234'
    },
  ]
  constructor() { }
  getData(numRecords) {
    if (numRecords === undefined) {
      return this.data.slice();
    }
    else {
      return this.data.slice(0, numRecords)
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