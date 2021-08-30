import React from 'react'
import { useEffect } from 'react'
import { TestingsServices } from '../Services/TableServices'
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const FilterTable = (setState) => {
  const [filter, setFilters] = useState({
    numero_rol : "",
    nombre_paciente : "",
    fecha_hospitalizacion : "",
    fecha_alta : "",
    fecha_prevision : "",
    codigo_prevision : "",
    accion : "",
    numero : "",
    tipo_RAM : ""
  })

  const classes = useStyles();
  const reset = () => {
    console.log("reset")
  }

  const filtrar = () => {
    console.log("filtrar")
  }




  return (
    <div>

      <form className={classes.root} noValidate autoComplete="off">

        <TextField id="outlined-basic" label="ROL" variant="outlined" />
        <TextField id="outlined-basic" label="PACIENTE" variant="outlined" />
        <TextField id="outlined-basic" label="PREVICÍON" variant="outlined" select />
        <TextField id="outlined-basic" label="ESTADO" variant="outlined" select />

        <TextField id="outlined-basic" label="FECHA ALTA DESDE" type="date" InputLabelProps={{ shrink: true, }} variant="outlined" />
        <TextField id="outlined-basic" label="FECHA ALTA HASTA" type="date" InputLabelProps={{ shrink: true, }} variant="outlined" />

      </form>

      <form className={classes.root} noValidate autoComplete="off">
      <Button variant="contained" onClick={reset} color="primary">
          RESET
        </Button>
        <Button variant="contained" onClick={filtrar} color="primary">
          FILTRAR
        </Button>
      </form>
    </div>
  )
}

export default FilterTable;