 const ADD_COUNTER="ADD_COUNTER"
 const REDUCE_COUNTER="REDUCE_COUNTER"
 
 const add_COUNTER="add_COUNTER"
 const SUBRACT_COUNTER="SUBRACT_COUNTER"
 const MULTIPLY_COUNTER="MULTIPLY_COUNTER"
 

const AddCounter=(data)=>{
  return {
      type:ADD_COUNTER,
      payload:data
  }
}

const reduceCounter=(data)=>{
    return {
        type:REDUCE_COUNTER,
        payload:data
    }
  }

  const ADDCounter=(data)=>{
    return {
        type:add_COUNTER,
        payload:data
    }
  }

  const multiplyCounter=(data)=>{
    return {
        type:MULTIPLY_COUNTER,
        payload:data
    }
  }

  const subractCounter=(data)=>{
    return {
        type:SUBRACT_COUNTER,
        payload:data
    }
  }

  

  export {reduceCounter,AddCounter,ADDCounter,multiplyCounter,subractCounter}