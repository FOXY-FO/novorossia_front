import { getAuthUserData } from "./auth-reducer"

const INITIALIZE = "INITIALIZE"

const initialState = {
  initialized: false,
}

type TInitialState = typeof initialState

const appReducer = (
  state = initialState,
  action: ActionsTypes
): TInitialState => {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state
  }
}

type ActionsTypes = TInitializedSuccess

type TInitializedSuccess = {
  type: typeof INITIALIZE
}
const initializedSuccess = (): TInitializedSuccess => ({ type: INITIALIZE })

export const initializeApp = () => async (dispatch: any) => {
  let promise = await getAuthUserData()

  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess())
  })
}

export default appReducer
