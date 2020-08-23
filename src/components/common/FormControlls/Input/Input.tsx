import React, { FC } from "react"
import s from "./Input.module.scss"
import TextField from "@material-ui/core/TextField"

const Input: FC<any> = ({ input, meta, ...props }) => {
  let hasError = meta.error && meta.touched

  return (
    <div className={s.formControll}>
      <TextField
        {...input}
        {...meta}
        error={hasError}
        label={props.label}
        helperText={hasError ? meta.error : false}
      />
    </div>
  )
}

export default Input
