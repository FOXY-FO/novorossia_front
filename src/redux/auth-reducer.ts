import { authAPI } from "../api/auth-api"

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA"
const LOGOUT = "LOGOUT"

const initialState = {
  userId: null as number | null,
  login: null as string | null,
  email: null as string | null,
  fullName: null as string | null,
  name: null as string | null,
  isAuth: false,
}

type TInitialState = typeof initialState

const authReducer = (
  state = initialState,
  action: ActionsTypes
): TInitialState => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      }
    case LOGOUT:
      return {
        ...state,
        userId: null,
        login: null,
        email: null,
        name: null,
        fullName: null,
        isAuth: false,
      }
    default:
      return state
  }
}

type ActionsTypes = TSetAuthUserDataAction | TLogoutSuccessAction

type TSetAuthUserDataActionPayload = Omit<TInitialState, "isAuth">
type TSetAuthUserDataAction = {
  type: typeof SET_AUTH_USER_DATA
  payload: TSetAuthUserDataActionPayload
}
export const setAuthUserData = (
  payload: TSetAuthUserDataActionPayload
): TSetAuthUserDataAction => ({
  type: SET_AUTH_USER_DATA,
  payload,
})
type TLogoutSuccessAction = {
  type: typeof LOGOUT
}
export const logoutSuccess = (): TLogoutSuccessAction => ({ type: LOGOUT })

export const getAuthUserData = () => async (dispatch: any) => {
  let meData: any = await authAPI.me()
  if (meData.status === 200) {
    let { id, login, email, fullName, name } = meData.data
    dispatch(setAuthUserData({ userId: id, login, email, fullName, name }))
  }
}

export const login = (
  email: string,
  password: string,
  rememberMe: boolean
) => async (dispatch: any) => {
  let data: any = await authAPI.login(email, password, rememberMe)
  if (data.status === 200) {
    dispatch(getAuthUserData())
  }
}

export const logout = () => async (dispatch: any) => {
  let response: any = await authAPI.logout()
  if (response.status === 200) {
    dispatch(logoutSuccess())
  }
}

export default authReducer
