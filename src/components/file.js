import React, { Component } from 'react'

class  File extends Component  {

state = {

    location : "monastir",
    firstname : "jawadi rami",
    age : 30 

}
    render(){

        let   ageControl = ' ';
       let  todos = [


            {id:0 ,name:"rami" , age:15},
            {id:1,name:"amine" , age:25},
            {id:2,name:"salah" , age:35},
           
        ];
    

        if(todos.age > 20){

            ageControl = <h1> age is more than 20</h1>
        }
        else {
         ageControl = <h1> age is less than 20</h1>
    }
  return (
    <div>
       <p> the location is : {this.state.location}</p>

  <ul>
         {todos.map(todo => 
         <li key={todo.id} >  name are :{todo.name}  and the age are : {todo.age} {ageControl}</li>
      
            )}
   </ul>

   <h1> my firstname is {this.state.firstname} and my age is {this.state.age}</h1>
    </div>
  )
}}

export default File;