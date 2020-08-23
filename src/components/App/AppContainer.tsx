import React, { FC } from "react"
import { connect } from "react-redux"
import { TAppState } from "../../redux/store"
import { getIsAuth } from "../../redux/selectors/auth-selectors"
import { getInitialized } from "../../redux/selectors/app-selectors"
import { logout, login } from "../../redux/auth-reducer"
import App from "./App"
import Preloader from "../Preloader/Preloader"

type TMapProps = ReturnType<typeof mapStateToProps>
type TDispatchProps = {
  login: (email: string, password: string, rememberMe: boolean) => void
  logout: () => void
}

const AppContainer: FC<TMapProps & TDispatchProps> = ({
  initialized,
  ...props
}) => {
  if (!initialized) return <Preloader />

  return <App {...props} />
}

const mapStateToProps = (state: TAppState) => ({
  initialized: getInitialized(state),
  isAuth: getIsAuth(state),
})

export default connect(mapStateToProps, { login, logout })(AppContainer)
