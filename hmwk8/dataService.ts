export interface Person {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Dob;
  phone: string;
  cell: string;
  id: ID;
  picture: Picture;
  nat: string;
}

export interface Dob {
  date: string;
  age: number;
}

export interface ID {
  name: string;
  value: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Street {
  number: number;
  name: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export class DataService {

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

  data: [] = [];
  constructor() { this.data = [] }

  getData(numRecords?: number) {
    if (numRecords === undefined) {
      return this.data.slice();
    }
    else {
      return this.data.slice(0, numRecords)
    }
  }

  async fetchData() {
    try {
      const response = await fetch('https://randomuser.me/api/?results=10')
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
      (function (err: string) {
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





