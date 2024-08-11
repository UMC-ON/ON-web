import { SET_USER, CLEAR_USER } from './actionTypes';
import { UserList } from '../components/Common/TempDummyData/PostList';

const initialState = {
  user: UserList[0],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
