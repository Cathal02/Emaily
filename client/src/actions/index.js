import axios from "axios";
import { FETCH_USER } from "./types";

// UPDATES USER STATE
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user")
  dispatch({ type: FETCH_USER, payload: res.data })
};

export const handleToken = ( token ) => async dispatch => {
  
  // Sends back user object after payment has been finalized
  const res = await axios.post("/api/stripe", token)
 
  dispatch({type: FETCH_USER, payload: res.data})
} 