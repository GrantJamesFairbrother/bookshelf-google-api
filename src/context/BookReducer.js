import { GET_BOOKS } from './types';

export default (state, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        searchResults: action.payload
      };

    default:
      return state;
  }
};
