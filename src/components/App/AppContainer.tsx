import React, { FC } from "react"
import { connect } from "react-redux"
import { TAppState } from "../../redux/store"
import { getInitialized } from "../../redux/selectors/app-selectors"
import App from "./App"
import Preloader from "../Preloader/Preloader"

type TMapProps = ReturnType<typeof mapStateToProps>
type TDispatchProps = {}

const AppContainer: FC<TMapProps & TDispatchProps> = ({
  initialized,
  ...props
}) => {
  // if (!initialized) return <Preloader />

  return <App {...props} />
}

const mapStateToProps = (state: TAppState) => ({
  initialized: getInitialized(state),
})

export default connect(mapStateToProps, {})(AppContainer)
