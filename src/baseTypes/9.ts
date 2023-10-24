/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/


// ------------------------ 1 -------------------------//
type Accounts = [string, ...string[]];
type Details = { createAt: Date, updateAt: Date }

type ObjType = {
  title: string;
  likes: number;
  accounts: Accounts;
  status: string;
  details: Details;
}

const page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}
// ------------------------ 2 -------------------------//

type ObjTypeTwo = {
  title: string;
  likes: number;
  account: [string];
  status: string;
}


const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

export {};