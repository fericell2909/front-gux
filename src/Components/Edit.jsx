import React, { useState , useEffect} from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { putTestingsServices, TestingsServices, TestingsServicesId } from '../Services/TableServices'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Edit = (props) => {
    const classes = useStyles();
    const [Edit, setEdit] = useState({
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
    
    useEffect(() => {
        TestingsServicesId(props.idRow).then(res => {
            //console.log(res.data)
            setEdit(res.data)
        })
    }, [props.idRow])

    const guardar = () => {
        console.log("Edit");
        putTestingsServices(Edit, props.idRow).then(res => {
            console.log(res)
            
            TestingsServices().then(res => {
                props.setState(res.data)
            })
        })

        props.handleClose()
    }


    return (<div>

                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="ROL" type="text" value={Edit.numero_rol} onChange={
                        (event) => {
                            console.log(event.target.value)
                            setEdit({ ...Edit, numero_rol: event.target.value })
                        }
                    } variant="outlined" />
                    <TextField id="PACIENTE" label="PACIENTE" variant="outlined" value={Edit.nombre_paciente} onChange={
                        (event) => {
                            console.log(event.target.value)
                            setEdit({ ...Edit, nombre_paciente: event.target.value })
                        }
                    } />
                   
                    <TextField id="outlined-basic" label="Fecha Hospitalizacion" type="date" InputLabelProps={{ shrink: true, }}
                        variant="outlined"
                        value={Edit.fecha_hospitalizacion}
                        onChange={
                            (event) => {
                                console.log(event.target.value)
                                setEdit({ ...Edit, fecha_hospitalizacion: event.target.value })
                            }
                        }/>
                    
                    <TextField id="outlined-basic" label="Fecha Alta" type="date" InputLabelProps={{ shrink: true, }}
                        variant="outlined"
                        value={Edit.fecha_alta}
                        onChange={
                            (event) => {
                                console.log(event.target.value)
                                setEdit({ ...Edit, fecha_alta: event.target.value })
                            }
                        }/>
                    
                    <TextField id="outlined-basic" label="Fecha Prevision" type="date" InputLabelProps={{ shrink: true, }}
                        variant="outlined"
                        value={Edit.fecha_prevision}
                        onChange={
                            (event) => {
                                console.log(event.target.value)
                                setEdit({ ...Edit, fecha_prevision: event.target.value })
                            }
                        }/>
                    
                    <TextField id="outlined-basic" label="Codigo Prevision" type="text" value={Edit.codigo_prevision} onChange={
                        (event) => {
                            console.log(event.target.value)
                            setEdit({ ...Edit, codigo_prevision: event.target.value })
                        }
                    } variant="outlined" />
                    
                    <TextField id="outlined-basic" label="Accion" type="text" value={Edit.accion} onChange={
                        (event) => {
                            console.log(event.target.value)
                            setEdit({ ...Edit, accion: event.target.value })
                        }
                    } variant="outlined" />

                    <TextField id="outlined-basic" label="Numero" type="number" value={Edit.numero} onChange={
                        (event) => {
                            console.log(event.target.value)
                            setEdit({ ...Edit, numero: event.target.value })
                        }
                    } variant="outlined" />

                    <TextField id="outlined-basic" label="Tipo RAM" type="text" value={Edit.tipo_RAM} onChange={
                        (event) => {
                            console.log(event.target.value)
                            setEdit({ ...Edit, tipo_RAM: event.target.value })
                        }
                    } variant="outlined" />
                </form>
            <form className={classes.root} noValidate autoComplete="off">
                    <Button id="reset" variant="contained" onClick={guardar} color="primary">
                        Actualizar
                    </Button>
                </form>
    </div>)
}

export default Edit;