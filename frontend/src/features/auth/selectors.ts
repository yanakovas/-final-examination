import { RootState } from "../../store";
import User from "./types/User";

export const selectAuthChecked = (state:RootState):boolean => state.auth.authChecked;
export const selectUser = (state:RootState): User | undefined => state.auth.user;
export const selectCreateError = ( state:RootState): string | undefined => state.auth.createError