import { auth } from "../../config"

export const currentUser = (callback: (state: any) => {}) => {
  let state = null
  auth.onAuthStateChanged((user) => {
    if (user) {
      state = user;
    } else {
      state = null;
    }
    callback(state);
  })
}


