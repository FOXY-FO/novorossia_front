import React, { FC } from "react"
import { Switch, Route } from "react-router-dom"
import LoginContainer from "../Login/LoginContainer"
import AppealPageContainer from "../AppealPage/AppealPageContainer"

const App: FC = () => {
  return (
    <Switch>
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/" component={AppealPageContainer} />
    </Switch>
  )
}

export default App
