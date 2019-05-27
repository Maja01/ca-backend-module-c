import axios from 'axios';
import configs from '../../config/urls';
import fs from 'fs';

const urlConfig = configs['dev'];

const { posts } = urlConfig;
// const dkajsdl = urlCongig.posts;


// complete below functions
// function for getting one post per even id as a object
const get = async (req, res, next) => {
  const { id }: { id: string } = req.params;

  // exercise 2
  // read data from storage file
  // add way in order to get single item to retrieve the posts with id having even number
  // provide end user (front-end) with that data..as a response
  // put your code below


  // put your code above 
  await next;
}

// function for listing posts as an array of objects
const list = async(req, res, next) => {
  const { data } = await axios.get(posts);
   
  // missing this one (JSON.stringify(data, null, 2));
  // jsonString = JSON.stringify(value, [, replacer [, space ]]);
  // value -> the js object to conver into a JSON string
  
  // replacer -> a fun that alerts the behaviour of the stingification process,
  // ... or an array of String and Number objs that serve as a whitelist for selecting
  // ... the properties of the values obj to be included in the JSON string
  // if this value is null or not provided, all properies of the obj are included
  // ... in the resulting JSON string

  // space -> a String or Number obj that's used to insert white space into the output
  // ... JSON string for readability purposese.

  const writeDataToStorageFile: string = JSON.stringify(data, null, 2)  
  fs.writeFileSync('localStorage.json', writeDataToStorageFile);

  res.status(200).send(data);
  await next;
}

const create = async (req, res, next) => {
  const {
    id,
    userId,
    title,
    body,
    commNums,
    notify,
    likes
  }: {
    id: string,
    userId: string,
    title: string,
    body: string,
    commNums: ?number,  
    notify: ?number,
    likes: ?number
  } = req.body;

  const checkFile: boolean = fs.existsSync('localStorage.json');
  // console.log('Does file exists?', checkFile);
  if (checkFile) {
    const readStorageFile = fs.readFileSync('localStorage.json');
    // console.log('reader 1', readStorageFile);
    const parsedReadStorageFile = JSON.parse(readStorageFile);
    // console.log('reader 2', parsedReadStorageFile);
    const arr: Array = [];
    arr.push(parsedReadStorageFile, { id, userId, title, likes, body, commNums, notify });
    const writeDataToStorage = JSON.stringify(arr, null, 2);
    fs.writeFileSync('localStorage.json', writeDataToStorage);

    // console.log('Sho se deshava???', arr);
    res.status(201).send(arr);
  } else {
    const writeDataToStorage = JSON.stringify([{ id, userId, title, likes, body, commNums, notify }], null, 2);
    console.log('write', writeDataToStorage);
    fs.writeFileSync('localStorage.json', writeDataToStorage);
    res.status(201).send(writeDataToStorage);

    // if (array && array.length > 0) {};
    // if (str !== '' && str !== null && str !== undefined) {
      //zeleno
    };
    // const a = a ? a : b;
  await next;
};

const update = async (req, res, next) => {
  await next;
}

const del = async (req, res, next) => {
  const numbersAsAStrings = ['1', '2', '3', '4', '5'];
  const findIndexFromArray = numbersAsAStrings.findIndex(id => id === '3');
  
  console.log(findIndexFromArray);

  // exercise 2
  // find a way of removing item from array (in our case from a local storage file) 
  // using the same approach as the above example in order to find index of that
  
  // const removeFromArray = 
  await next;
};

export default {
  get,
  list,
  del,
  update,
  create,
};
