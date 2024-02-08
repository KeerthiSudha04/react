// actions/asyncActions.ts
import { Dispatch } from "redux";

const fetchData = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: 'FETCH_DATA_REQUEST' });

      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();

      dispatch({
        type: 'FETCH_DATA_SUCCESS',
        payload: data,
      });
    } catch (error:any) {
      dispatch({
        type: 'FETCH_DATA_FAILURE',
        payload: error.message,
      });
    }
  };
};

export default fetchData;
