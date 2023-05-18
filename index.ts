type Person = {
  name: string;
  surname: string;
  age: number;
};

const person: Person = {
  name: 'name',
  surname: 'surname',
  age: 18,
};

const printPerson = (person: Person) =>
  person.name + person.surname + person.age;

console.log(printPerson(person));

type GetFunction = () => () => string;

const getFunction: GetFunction = () => {
  return () => {
    return '3';
  };
};


type ArrData = Array<string | boolean | number>
const myArray: ArrData = [1, 2, 'hello', false];
console.log(myArray)

type Calculator = {
  add: (num1: number, num2: number) => number;
  substract: (num1: number, num2: number) => number;
  multiply: (num1: number, num2: number) => number;
  divide: (num1: number, num2: number) => number;
}

const myCalculator: Calculator = {
  add: (num1, num2) => num1 + num2,
  substract: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
  divide: (num1, num2) => num1 / num2
}

type Movie = {
  title: string
  director: string
  year: number
  genre: Array<string>
  rating: number
  getInfo: () => string
}

const myMovie: Movie = {
  title: "something",
  director: "someone",
  year: 2020,
  genre: ["fantastic", "sci-fi"],
  rating: 5,
  getInfo: () => {
    return myMovie.title + myMovie.director + myMovie.year + myMovie.genre.toString() + myMovie.rating
  }
}

console.log(myMovie.getInfo())

type Playlist = {
  name: string
  songs: Array<string>
  duration: number
  addSong: (str
    : string) => void
  getPlaylistInfo: () => { name: string; totalSongs: number; totalDuration: number }
}

const myPlaylist: Playlist = {
  name: "I've got my eyes on u",
  songs: ["song1", "song2", "song3"],
  duration: 3,
  addSong: (str: string) => myPlaylist.songs.push(str),
  getPlaylistInfo: () => ({
    name: myPlaylist.name,
    totalSongs: myPlaylist.songs.length,
    totalDuration: myPlaylist.duration * 60,
  }),
}

type ArrayFilter = (arr: Array<number>, callback: (num: number) => boolean) => Array<number>;
const getEvenNumbers: ArrayFilter = (arr, callback) => arr.filter(number => callback(number))

const numbers = [1, 2, 3, 4, 5, 6, 7, 11];
const evenNumbers = getEvenNumbers(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);


type Transform<T, U> = (input: T) => U;

const doubleTransformer: Transform<number, number> = (input) => input * 2;

type ArrString = Array<string>;
type ArrNumber = Array<number>;
const transformToArrOfStrings: Transform<ArrNumber, ArrString> = (input) => 
input.map(number => String(number));

console.log(transformToArrOfStrings(numbers));

type PersonInfo = {
  name: string
  age: number
  email?: string
}

const person1: PersonInfo = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com"
};

const getPersonSummary = (obj: PersonInfo) => {
  return `Name: ${obj.name}, Age: ${obj.age}${obj.email ? `, Email: ${obj.email}` : ""} `
}

console.log(getPersonSummary(person1))

type FilterFunction<T> = (arr: Array<T>, callback: (arg: T) => boolean) => Array<T>;

const filterArray: FilterFunction<string> = (arr, callback) => arr.filter(word => callback(word));
const words = ["apple", "banana", "orange", "kiwi"];
const filteredWords = filterArray(words, (word) => word.length > 5);
console.log(filteredWords)

const filterOdd: FilterFunction<number> = (arr: ArrNumber, callback: Transform<number,boolean>) => arr.filter(number => callback(number));
console.log(filterOdd(numbers, (number) => number % 2 === 1))






