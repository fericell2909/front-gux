import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { postTestingsServices, TestingsServices } from '../Services/TableServices'
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


const Add = (props) => {
    const classes = useStyles();

    const [Add, setAdd] = useState({
        numero_rol: "",
        nombre_paciente: "",
        fecha_hospitalizacion: "",
        fecha_alta: "",
        fecha_prevision: "",
        codigo_prevision: "",
        accion: "",
        numero: "",
        tipo_RAM: ""
    })

    const guardar = () => {
        console.log("guardar")
        postTestingsServices(Add).then(res => {
            console.log(res)
            setAdd({
                numero_rol: "",
                nombre_paciente: "",
                fecha_hospitalizacion: "",
                fecha_alta: "",
                fecha_prevision: "",
                codigo_prevision: "",
                accion: "",
                numero: "",
                tipo_RAM: ""

            })
            TestingsServices().then(res => {
                props.setState(res.data)
            })

        })
    }

    return (<div>

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}> Crear Registro </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="ROL" type="text" value={Add.numero_rol} onChange={
                        (event) => {
                            console.log(event.target.value)
                            setAdd({ ...Add, numero_rol: event.target.value })
                        }
                    } variant="outlined" />
                    <TextField id="PACIENTE" label="PACIENTE" variant="outlined" value={Add.nombre_paciente} onChange={
                        (event) => {
                            console.log(event.target.value)
                            setAdd({ ...Add, nombre_paciente: event.target.value })
                        }
                    } />
                   
                    <TextField id="outlined-basic" label="Fecha Hospitalizacion" type="date" InputLabelProps={{ shrink: true, }}
                        variant="outlined"
                        value={Add.fecha_hospitalizacion}
                        onChange={
                            (event) => {
                                console.log(event.target.value)
                                setAdd({ ...Add, fecha_hospitalizacion: event.target.value })
                            }
                        }/>
                    
                    <TextField id="outlined-basic" label="Fecha Alta" type="date" InputLabelProps={{ shrink: true, }}
                        variant="outlined"
                        value={Add.fecha_alta}
                        onChange={
                            (event) => {
                                console.log(event.target.value)
                                setAdd({ ...Add, fecha_alta: event.target.value })
                            }
                        }/>
                    
                    <TextField id="outlined-basic" label="Fecha Prevision" type="date" InputLabelProps={{ shrink: true, }}
                        variant="outlined"
                        value={Add.fecha_prevision}
                        onChange={
                            (event) => {
                                console.log(event.target.value)
                                setAdd({ ...Add, fecha_prevision: event.target.value })
                            }
                        }/>
                    
                    <TextField id="outlined-basic" label="Codigo Prevision" type="text" value={Add.codigo_prevision} onChange={
                        (event) => {
                            console.log(event.target.value)
                            setAdd({ ...Add, codigo_prevision: event.target.value })
                        }
                    } variant="outlined" />
                    
                    <TextField id="outlined-basic" label="Accion" type="text" value={Add.accion} onChange={
                        (event) => {
                            console.log(event.target.value)
                            setAdd({ ...Add, accion: event.target.value })
                        }
                    } variant="outlined" />

                    <TextField id="outlined-basic" label="Numero" type="number" value={Add.numero} onChange={
                        (event) => {
                            console.log(event.target.value)
                            setAdd({ ...Add, numero: event.target.value })
                        }
                    } variant="outlined" />

                    <TextField id="outlined-basic" label="Tipo RAM" type="text" value={Add.tipo_RAM} onChange={
                        (event) => {
                            console.log(event.target.value)
                            setAdd({ ...Add, tipo_RAM: event.target.value })
                        }
                    } variant="outlined" />
                </form>
            </AccordionDetails>
            <form className={classes.root} noValidate autoComplete="off">
                    <Button id="reset" variant="contained" onClick={guardar} color="primary">
                        Guardar
                    </Button>
                </form>
        </Accordion>
    </div>)
}

export default Add;