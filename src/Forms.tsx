import { useRef, useState } from "react";

// const Forms=()=>{
//    // let name="";
//    const [name,setName]=useState("");
//    const [age,setAge]=useState("");
//    const [city,setCity]=useState("");


//    //Destructuring

//     const nameChangeHandler=(evt:React.ChangeEvent<HTMLInputElement>)=>{
// //  console.log(evt.target);
//         //name=evt.target.value;
//         setName(evt.target.value);


//     }
//      const ageChangeHandler=(evt:React.ChangeEvent<HTMLInputElement>)=>{
// //  console.log(evt.target);
//         //name=evt.target.value;
//         setAge(evt.target.value);


//     }
//      const cityChangeHandler=(evt:React.ChangeEvent<HTMLInputElement>)=>{
// //  console.log(evt.target);
//         //name=evt.target.value;
//         setCity(evt.target.value);


//     }

//     const clickHandler=()=>{
//         console.log(name);

//     }
//     const changeHandler=()=>{
//         //name="Test";
//         setName("Test");


//     }
//     return (
//         <>
//         <div>
//             <input type="text" value={name} onChange={nameChangeHandler}/>
//              <input type="text" value={age} onChange={ageChangeHandler}/>
//               <input type="text" value={city} onChange={cityChangeHandler}/>

//             <input type="button" value="send" onClick={clickHandler}/>
//             <input type="button" value="Change" onClick={changeHandler}/>


//         </div>
        
//         </>
//     )
// }
// const Forms=()=>{
//     const [formData,setFormData]=useState({
//         name:"",
//         age:"",
//         city:""
//     })
//     const changeHandler=(evt:React.ChangeEvent<HTMLInputElement>)=>{

// //  evt.target->Object , value,name
// //Destructuring -Object
// const {name,value}=evt.target;

// //setFormData({name:formData.name,age:formData.age,})

// //let obj=formData;
// //obj[name]=value;
// //obj.keyname
// //let obj={name:"Abc",age:10};
// //obj.name="Code";
// //x="age";
// //obj.x=20; Wrong
// //obj[x]=20;Right

//         setFormData((prev)=>({
//              ...prev,
//             [name]:value
           

//         }))



//     }
//     const sendHandler=()=>{
//         console.log(formData);


//     }

//     return (
//         <>
//         <div>
//             <input type="text" value={formData.name} name="name" onChange={changeHandler}/>
//             <input type="text" value={formData.age} name="age" onChange={changeHandler}/>
//             <input type="text" value={formData.city} name="city" onChange={changeHandler}/>
//             <input type="button" value="Send" onClick={sendHandler}/>


//         </div>
//         </>
//     )
// }
// const Forms=()=>{
//         const nameRef=useRef<HTMLInputElement|null>(null);
//         const ageRef=useRef<HTMLInputElement|null>(null);
//         const clickHandler=()=>{
//             console.log(nameRef.current?.value);

//         }

//     return (
//         <>
//         <div>
//             <input ref={nameRef} type="text"/>
//             <input ref={ageRef} type="text"/>
            
//             <input type="button" value="Send" onClick={clickHandler}/>


//         </div>
//         </>
//     )
// }

//REACT-HOOK-FORM
import {useForm} from "react-hook-form"
type FormType={
    name:string,
    age:string,
    city:number
}
const Forms=()=>{

    //useForm()->Object, keys->handleSubmit,register
    //Destructuring
    const {handleSubmit,register}=useForm<FormType>();

    const mySubmit=(data:FormType)=>{
        console.log(data);

    }
    return (
        <>
        <div>
            <form onSubmit={handleSubmit(mySubmit)}>
            <input type="text" {...register("name")}/>
            <input type="text" {...register("age")}/>
            <input type="text" {...register("city")}/>
            <input type="submit"/>
            </form>

        </div>
        </>
    )
}

export default Forms;
