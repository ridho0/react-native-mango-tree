import * as actionType from '../actions/constant'

let initialState = {
  userName : "input your Name",
  treeName : "input Tree Name",
  treeAge : 0
}

const changeUserName = (state, data) => {
  let newState = {
    ...state,
    userName:data
  }
  return newState
}

const changeTreeName = (state, data) => {
  let newState = {
    ...state,
    treeName: data
  }
  return newState
}

const addTreeAge = (state, data) => {
  let newState = {
    ...state,
    treeAge: treeAge + data
  }
  return newState
}

const treeReducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case actionType.CHANGE_USER_NAME:
      return changeUserName(state, payload)
    case actionType.CHANGE_TREE_NAME:
      return changeTreeName(state, payload)
    case actionType.ADD_TREE_AGE:
      return addTreeAge(state, payload)
    default: return state
  }
}

export default treeReducer
