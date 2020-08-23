import React, { FC } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { TAppState } from "../../redux/store"
import { getIsAuth } from "../../redux/selectors/auth-selectors"
import AppealPage from "./AppealPage"

type TMapStateToProps = ReturnType<typeof mapStateToProps>

const AppealPageContainer: FC<TMapStateToProps> = ({ isAuth, ...props }) => {
  if (!isAuth) return <Redirect to="/login" />

  return <AppealPage {...props} />
}

const mapStateToProps = (state: TAppState) => ({
  isAuth: getIsAuth(state),
})

export default connect(mapStateToProps)(AppealPageContainer)
