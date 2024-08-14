import { SET_USER, CLEAR_USER } from './actionTypes';
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
    default:
      return state;
  }
};

export default userReducer;
