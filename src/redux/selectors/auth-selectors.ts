import { TAppState } from "../store"

export const getIsAuth = (state: TAppState) => {
  return state.auth.isAuth
}

export const getLogin = (state: TAppState) => {
  return state.auth.login
}

export const getEmail = (state: TAppState) => {
  return state.auth.email
}

export const getName = (state: TAppState) => {
  return state.auth.name
}

export const getFullName = (state: TAppState) => {
  return state.auth.fullName
}
