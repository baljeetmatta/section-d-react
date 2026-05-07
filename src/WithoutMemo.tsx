import { useCallback, useMemo, useState } from "react";

const WithoutMemo=()=>{
    const [count,setCount]=useState(0);
    const [counter,setCounter]=useState(0);


    // const expensiveCal=(no:number)=>{

    //     console.log("Calculation stated...")
    //     let total=0;
    //     for(let i=1;i<=10000000;i++)
    //         total+=i;

    //     console.log("calculation Done...")
    //     return total+no;

    // }
    const expensiveCal=useCallback((no:number)=>{
         console.log("Calculation stated...")
        let total=0;
        for(let i=1;i<=10000000;i++)
            total+=i;

        console.log("calculation Done...")
        return total+no;
    },[])
    const result=useMemo(()=>expensiveCal(count),[count]);
//const result=expensiveCal();


return(

    <>
    <div>
        Result:{result}
        <div>Count:{count}</div>
        <div>Counter:{counter}</div>
        <button onClick={()=>setCount(count+1)}>Change</button>
        <button onClick={()=>setCounter(counter+1)}>Change Counter</button>
    </div>
    
    </>
)

}
export default WithoutMemo;
