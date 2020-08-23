import React, { FC } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { getIsAuth } from "../../redux/selectors/auth-selectors"
import { login } from "../../redux/auth-reducer"
import { TAppState } from "../../redux/store"
import Login from "./Login"

type TMapStateToProps = ReturnType<typeof mapStateToProps>
type TMapDispatchToProps = {
  login: (email: string, password: string, rememberMe: boolean) => void
}

const LoginContainer: FC<TMapStateToProps & TMapDispatchToProps> = ({
  isAuth,
  ...props
}) => {
  if (isAuth) return <Redirect to="/" />

  return <Login {...props} />
}

const mapStateToProps = (state: TAppState) => ({
  isAuth: getIsAuth(state),
})

export default connect(mapStateToProps, { login })(LoginContainer)
