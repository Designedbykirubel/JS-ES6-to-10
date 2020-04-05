//----------ES6 webpack2-------------

// JS FILE 1!
//export more than one function 
export const add =(a,b)=> a+b;
//or to export just one function
export default function add(a,b) {a};

//IMPORT 

//JS FILE 2!
/// destrucutr more thena one function 
import {add} from './add';
//or just one function 
import add from './add';cd 