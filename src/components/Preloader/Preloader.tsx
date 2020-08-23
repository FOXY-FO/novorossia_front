import React from "react"
import s from "./Preloader.module.scss"
import CircularProgress from "@material-ui/core/CircularProgress"

const Preloader = () => {
  return (
    <div className={s.overlay}>
      <CircularProgress />
    </div>
  )
}

export default Preloader
