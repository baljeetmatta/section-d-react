import {useForm} from "react-hook-form"
import "./App.css"
import { yupResolver } from "@hookform/resolvers/yup";
import { UserSchema } from "./validators/UserSchema";
const HookForm=()=>{

    const {handleSubmit,register,formState}=useForm({
        resolver:yupResolver(UserSchema)
    });

    //formState->object->keys(object)
    const {errors}=formState;

    const mySubmit=(data:any)=>{
        console.log(data);

    }
    //required, minLength, maxLength, min,max,pattern,validate
    return (
        <>
        <div>
            <form onSubmit={handleSubmit(mySubmit)}>
                <input type="text" {...register("name")}/>
                {/* {errors.name ?<p>{errors.name.message}</p>:"" } */}
                {errors.name && <p className="error-msg">{errors.name.message}</p>}
                <input type="text" {...register("age")}/>
                   {errors.age && <p className="error-msg">{errors.age.message}</p>}
             
                <input type="submit"/>

            </form>
        
        </div>
        </>
    )


}
export default HookForm;



// import {useForm} from "react-hook-form"
// import "./App.css"
// const HookForm=()=>{

//     const {handleSubmit,register,formState}=useForm();

//     //formState->object->keys(object)
//     const {errors}=formState;

//     const mySubmit=(data:any)=>{
//         console.log(data);

//     }
//     //required, minLength, maxLength, min,max,pattern,validate
//     return (
//         <>
//         <div>
//             <form onSubmit={handleSubmit(mySubmit)}>
//                 <input type="text" {...register("name",{
//                     required:"Name is required",
//                     minLength:{
//                         value:4,
//                         message:"Name must of atleast 4 characters"
//                     },
//                     // validate:value=>{
//                     //     return value!="admin" || 'Name is not valid'

//                     // }
//                     validate:{
//                         adminError:value=>{
//                              return value!="admin" || 'Name is not valid'
//                         },
//                         // lengthError:value=>{
//                         //     return value..len()>=10 || 'Name is too large'
//                         // }
                        
//                     }
//                 })}/>
//                 {/* {errors.name ?<p>{errors.name.message}</p>:"" } */}
//                 {errors.name && <p className="error-msg">{errors.name.message}</p>}
//                 <input type="text" {...register("age",{
//                     valueAsNumber:true,

//                     required:"Age is required",
//                     min:{
//                         value:18,
//                         message:"Age must be >18"
//                     }

//                 })}/>
//                    {errors.age && <p className="error-msg">{errors.age.message}</p>}
             
//                 <input type="submit"/>

//             </form>
        
//         </div>
//         </>
//     )


// }
// export default HookForm;