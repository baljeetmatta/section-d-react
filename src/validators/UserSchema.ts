import * as yup from "yup"
import { passwordSchema } from "./passwordSchema"
//zod
export const UserSchema=yup.object({
    name:yup.string()
    .required("Name must be required")  
    .min(4,"Name must of atleast 4 characters")
    .trim()
    .lowercase(),
    age:yup.number()
    .required(),
    // .min(18,"Age must >18"),
    password:passwordSchema,
    confirmpassword:yup.string()
    .oneOf([yup.ref("password")],"Password not matched"),
    email:yup.string()
    // .required("email must be specified")
    // .email("not valid format")
    .when("age",{
        is:(value:number)=>value>=18,
        then:schema=>
            schema.required("Email must be specified")
             .email("Must be in valid format"),
        otherwise:schema=>
            schema.notRequired()


    })
    .test("EmailCheck","Email already exists", value=>{
        // if(value?.startsWith("admin"))
        //     return false;
        // else 
        //     return true;
       // let response=  await fetch("")
    })


})
