//REDUX 
//PARENT -> child 
/*
props
context -variable Simple Data

Redux ->Store-Central Storage->read only, events
1. Centralized Storage
2. Logical Code on Store
3. Global Data

Redux

Store, Action, Reducer

Store->Centralized Storage

Actions -Events->Raise

Reducer ->Event Handler
(ExistingStoreState, action)
///Pure Function
must return updatedStoreState

1. Design the Store
2. Define Actions
3. Create Reducer
4. Setup Store

1. Design the Store
    Structure
        BugTracking(Todo)
        [
            {
                id:number,
                description:string,
                resolved:boolean
            }
        ]
            1 Slice, 1 Reducer
            ECommerce
        {
            carts:[
                {
                    productid:number,
                    qty:number
                }
            ] ,
             userAuth:{}
             favourites:[{productid:number},{}]   
        
        }
                3 Slices, 3 Reducer


2. Actions-> Object

BugAdded, BugResolved, BugDelete

BugAdded
{
    type:"BUG_ADDED",
    payload:{
            description:string
    }

}
    BugResolved
    {
        type:"BUG_RESOLVED",
        payload:{
                id:number
        }
    }
    BugDelete
    {
        type:"BUG_DELETED",
        payload:{
            id:number
        }
    }
3. Reducer
Plain Javascript Function(Pure Function)
(existingStoreState,action)
Logical Code

must return the update Store


*/

import { createStore } from "redux"

//1. Design the Store
type StoreType={
    id:number,
    description:string,
    resolved:boolean
}
//2. Action Type
type AddActionType={
    type:"Add",
    payload:{
        description:string
    }
}

type DeleteActionType={
    type:"Delete",
    payload:{
        id:number
    }
}

type ResolveActionType={
    type:"Resolve",
    payload:{
        id:number
    }
}
type BugActions=AddActionType|DeleteActionType|ResolveActionType;
//3. Reducer
let id=1
function BugReducer(state:StoreType[]=[],action:BugActions)
{
    if(action.type=="Add")
    {
        const currentState=[...state];
        currentState.push({
            id:id,
            description:action.payload.description,
            resolved:false
        })
        id++;

        return currentState;
    }

    if(action.type=="Delete")
    {
        const currentState=state.filter((item)=>{
            if(item.id!=action.payload.id)
                return true
        })

        return currentState;
    }

    if(action.type=="Resolve")
    {
        const currentState=state.map((item)=>{
            if(item.id==action.payload.id)
                item.resolved=true;
            return item;
        })

        return currentState;
    }
return state;
}
//4. Create the Store
//npm i redux
const store=createStore(BugReducer);

//Test 
console.log(store.getState());

//Raise an Event
store.dispatch({
    type:"Add",
    payload:{
            description:"First Bug"
    }
})
console.log(store.getState());

//Raise an Event
store.dispatch({
    type:"Resolve",
    payload:{
            id:1
    }
})
console.log(store.getState());
//Raise an Event
store.dispatch({
    type:"Delete",
    payload:{
            id:1
    }
})
console.log(store.getState());
