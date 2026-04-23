import * as yup from "yup"

export const UserSchema=yup.object({
    name:yup.string()
    .required("Name must be required")  
    .length(4,"Name must of atleast 4 characters")
    .trim()
    .lowercase(),
    age:yup.number()
    .required()
    .min(18,"Age must >18")

})
