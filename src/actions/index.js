// action suite - 3 things

// action creators - function that... creates actions! 
//(return action objects out of it)  -add_feature

// action types - variables that contain the action type 
//strings to save us from spelling errors  -ADD_FEATURE

// actions - objects that describe to the reducer what
// event has occured and how it should update the state

export const ADD_FEATURE = 'ADD_FEATURE'
export const add_feature = (item) => {
    console.log(`add feature`, item)
    return { type: ADD_FEATURE, payload: item }
};


export const REMOVE = 'REMOVE'
export const remove_feature = item => {
    return { type: REMOVE, payload: item }
};