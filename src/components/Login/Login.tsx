import React, { FC } from "react"
import { Field, reduxForm } from "redux-form"
import s from "./Login.module.scss"
import {
  required,
  maxLengthCreator,
  minLengthCreator,
} from "../../utils/helpers/validators"
import Input from "../common/FormControlls/Input/Input"
import Checkbox from "../common/FormControlls/Checkbox/Checkbox"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"

let maxLength100 = maxLengthCreator(100)
let minLength5 = minLengthCreator(5)

let LoginForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.formRow}>
        <Field
          type="email"
          name="email"
          label="Email"
          validate={[required, maxLength100, minLength5]}
          component={Input}
        />
      </div>
      <div className={s.formRow}>
        <Field
          type="password"
          name="password"
          label="Пароль"
          validate={[required, maxLength100, minLength5]}
          component={Input}
        />
      </div>
      <div>
        <Field
          type="checkbox"
          name="rememberMe"
          label="Запомнить меня"
          component={Checkbox}
        />
      </div>
      {props.error && <div className={s.formSummaryError}>{props.error}</div>}
      <div className={s.formRow}>
        <Button type="submit" variant="contained" color="primary">
          Отправить
        </Button>
      </div>
    </form>
  )
}

let ReduxForm = reduxForm({
  form: "login",
})(LoginForm)

type TProps = {
  login: (email: string, password: string, rememberMe: boolean) => void
}

let Login: FC<TProps> = ({ login }) => {
  let onSubmit = (formData: any) => {
    debugger
    let { email, password, rememberMe } = formData

    login(email, password, rememberMe)
  }

  return (
    <Container maxWidth="sm">
      <h1>Вход</h1>

      <ReduxForm onSubmit={onSubmit} />
    </Container>
  )
}

export default Login
