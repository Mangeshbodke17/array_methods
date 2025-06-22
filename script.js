/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];



function PrintDeveloperbyMap() {
  //Write your code here , just console.log

  arr.map((element,i)=>{
     if(arr[i].profession=="developer"){
      console.log(element);
     }
  })


}

function PrintDeveloperbyForEach() {

   arr.forEach((element,i)=>{

     if(arr[i].profession=="developer"){
      console.log(element);
     }

  })
 
}

function addData() {
  //Write your code here, just console.log

   let a={ id: 4, name: "rolex", age: "46", profession: "developer" };
   
   arr.push(a);
   console.log(arr);
  


}

function removeAdmin() {
  //Write your code here, just console.log


   arr.filter((element,i)=>{

 if(arr[i].profession=="developer"){
      console.log(element);
     }
 

  })

}

function concatenateArray() {

  let narr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

  let c= arr.concat(narr);

  console.log(c);
}
