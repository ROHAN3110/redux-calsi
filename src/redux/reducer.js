const ADD_COUNTER="ADD_COUNTER"
const REDUCE_COUNTER="REDUCE_COUNTER"

const add_COUNTER="add_COUNTER"
const SUBRACT_COUNTER="SUBRACT_COUNTER"
const MULTIPLY_COUNTER="MULTIPLY_COUNTER"
const initState={
    counter:1
}

const reducer=(store,{type,payload})=>{
switch(type){
    case ADD_COUNTER:
        return{...store,counter:store.counter+payload};

     
    case REDUCE_COUNTER:
        return{...store,counter:store.counter-payload};

    case add_COUNTER:
      return{...store,counter:store.counter+payload};

    case MULTIPLY_COUNTER:
        return{...store,counter:store.counter*payload};

    case SUBRACT_COUNTER:
         return{...store,counter:store.counter-payload};
    
  default:
      return store
                                
}
}

    export{reducer}