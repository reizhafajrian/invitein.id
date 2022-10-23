import { auth } from "../../../firebase/config";

export const signOut = async () => {

  return await auth.signOut()
}