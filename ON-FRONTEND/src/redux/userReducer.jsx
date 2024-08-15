import { SET_USER, CLEAR_USER, SIGN_IN_USER } from './actionTypes';
import { UserList } from '../components/Common/TempDummyData/PostList';

const initialState = {
  ...UserList[0],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_USER:
      return null;
    case SIGN_IN_USER:
      return {
        ...state,
        signInSuccess: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
