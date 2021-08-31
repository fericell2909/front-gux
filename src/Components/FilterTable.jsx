import React, { useEffect, useState } from 'react'
import { TestingsServices, AllPrevesionApi, FilterTestingsServices } from "../Services/TableServices"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const FilterTable = (props) => {

  const [filter, setFilters] = useState({
    numero_rol: "",
    nombre_paciente: "",
    fecha_hospitalizacion: "",
    fecha_alta: "",
    fecha_alta_desde: "",
    fecha_alta_hasta: "",
    fecha_prevision: "",
    codigo_prevision: "",
    accion: "",
    numero: "",
    tipo_RAM: ""
  })
  const [AllPrevesion, setAllPrevesion] = useState([{}])

  useEffect(() => {
    AllPrevesionApi().then(res => {
      setAllPrevesion(res.data.result)
    })
  }, [])

  const classes = useStyles();
  const reset = () => {
    console.log("reset")
    setFilters({
      numero_rol: "",
      nombre_paciente: "",
      fecha_hospitalizacion: "",
      fecha_alta_desde: "",
      fecha_alta_hasta: "",
      fecha_prevision: "",
      codigo_prevision: " ",
      accion: "",
      numero: "",
      tipo_RAM: ""
    })
    TestingsServices().then(res => {
      props.setState(res.data)
    })

  }

  const filtrar = () => {
    console.log("filtrar")
    FilterTestingsServices(filter.numero_rol, filter.nombre_paciente, filter.codigo_prevision, filter.fecha_alta_desde, filter.fecha_alta_hasta).then(res => {
      console.log(res.data)
      props.setState(res.data)

    })
  }


  return (
    <div>

<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Filtrar</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="ROL" type="text" value={filter.numero_rol} onChange={
          (event) => {
            console.log(event.target.value)
            setFilters({ ...filter, numero_rol: event.target.value })
          }
        } variant="outlined" />
        <TextField id="PACIENTE" label="PACIENTE" variant="outlined" value={filter.nombre_paciente} onChange={
          (event) => {
            console.log(event.target.value)
            setFilters({ ...filter, nombre_paciente: event.target.value })
          }
        } />
        <TextField id="outlined-basic" label="PREVICÍON" type="text" value={filter.codigo_prevision} variant="outlined" select onChange={
          (event) => {
            console.log(event.target.value)
            setFilters({ ...filter, codigo_prevision: event.target.value })
          }
        } 
        >
          {AllPrevesion.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}

        </TextField>
        <TextField id="outlined-basic" label="ESTADO" variant="outlined" defaultValue="no logre realcionar esto con nada" />

        <TextField id="outlined-basic" label="FECHA ALTA DESDE" type="date" InputLabelProps={{ shrink: true, }} 
          variant="outlined" 
          value={filter.fecha_alta_desde}
          onChange={
            (event) => {
              console.log(event.target.value)
              setFilters({ ...filter, fecha_alta_desde: event.target.value })
            }
          }
          
          />
        <TextField id="outlined-basic" label="FECHA ALTA HASTA" type="date" InputLabelProps={{ shrink: true, }} 
          variant="outlined" 
          value={filter.fecha_alta_hasta}
          onChange={
            (event) => {
              console.log(event.target.value)
              setFilters({ ...filter, fecha_alta_hasta: event.target.value })
            }
          }
          
          /> 

      </form>

      <form className={classes.root} noValidate autoComplete="off">
        <Button id="reset" variant="contained" onClick={reset} color="primary">
          RESET
        </Button>
        <Button id="filtar" variant="contained" onClick={filtrar} color="primary">
          FILTRAR
        </Button>
      </form>
        </AccordionDetails>
      </Accordion>

     
    </div>
  )
}

export default FilterTable;