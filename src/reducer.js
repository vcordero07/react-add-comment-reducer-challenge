import { ADD_COMMENT } from "./actions";

const initialState = {
  comments: []
};

function reducer(state = initialState, action) {
  if (action.type === ADD_COMMENT) {
    console.log("test");
    return {
      ...state,
      comments: [
        ...state.comments,
        {
          author: action.author,
          comment: action.comment
        }
      ]
    };
  } else {
    return state;
  }
}

export default reducer;
