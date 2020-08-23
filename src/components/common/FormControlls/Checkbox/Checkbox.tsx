import React, { FC } from "react"
import s from "./Checkbox.module.scss"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkboxx from "@material-ui/core/Checkbox"
import FormControl from "@material-ui/core/FormControl"
import FormHelperText from "@material-ui/core/FormHelperText"

const Checkbox: FC<any> = ({ input, meta, label, ...props }) => {
  let hasError = meta.error && meta.touched

  return (
    <div className={s.formControll}>
      <FormControl required error={hasError} component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkboxx
                {...input}
                {...meta}
                color={hasError ? undefined : "primary"}
              />
            }
            label={label}
          />
        </FormGroup>

        <FormHelperText>{meta.error}</FormHelperText>
      </FormControl>
    </div>
  )
}

export default Checkbox
