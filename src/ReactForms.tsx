import { useState } from "react";

const ReactForms=()=>

{
    const [errors,setErrors]=useState("");

    const [formData,setFormData]=useState({
        name:"",
        age:""
    })
    const changeHandler=(evt:React.ChangeEvent<HTMLInputElement>)=>{

        const {name,value}=evt.target;
        // if(name=="age")
        // {
        //     if(parseInt(value)<18)
        //     {
        //         console.log("Age is not valid")
        //         return ;
        //     }
        // }
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }));


    }
    const clickHandler=()=>{
        console.log(formData);
        // if(parseInt(formData.age)<18)
        // {
        //     setErrors("Age is not valid");

        //     console.log("Age is not valid");
        //     return ;

        // }

        console.log("Submit data");


    }
    return (
        <>
        <div>
            {errors}
            <form>
            <input required type="text" name="name" value={formData.name} onChange={changeHandler}/>
            <input type="number" min={18}  name="age" value={formData.age} onChange={changeHandler}/>
            <input type="button" value="Send" onClick={clickHandler}/>
            <input type="submit"/>

</form>
        </div>
        </>
    )

}
export default ReactForms;