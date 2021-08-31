import React, { useState, useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import { TestingsServices } from "../Services/TableServices"
import FilterTable from "./FilterTable"
import Add from "./Add"
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { deleteTestingsServices } from '../Services/TableServices'
import Edit from './Edit'

//import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
//import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



const Table = () => {
    const [state, setState] = useState([])
    const [open, setOpen] = useState(false);
    const [idRow, setID] = useState("")

    const DeleteRow = (id) => {
        deleteTestingsServices(id).then(res => {
            TestingsServices().then(res => {
                setState(res.data)
            })

        })
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const EditRow = (value) => {
        handleClickOpen(value)
        console.log(value)
        setID(value)
    }


    const columns = [
        {
            name: "id",
            label: "id",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "numero_rol",
            label: "N° rol",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "nombre_paciente",
            label: "Paciente",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "fecha_hospitalizacion",
            label: "fecha_hospitalizacion",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "fecha_alta",
            label: "fecha_alta",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "fecha_prevision",
            label: "fecha_prevision",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "codigo_prevision",
            label: "codigo_prevision",
            options: {
                filterType: 'select',
                filter: true,
                sort: true,
            }
        },
        {
            name: "accion",
            label: "accion",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "numero",
            label: "numero",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "tipo_RAM",
            label: "tipo_RAM",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "id", label: "Aciones", options: {
                customBodyRender: (value) => {
                    return (
                        <div>
                            <IconButton aria-label="Edit" >
                                <EditIcon onClick={() => { EditRow(value) }} />


                            </IconButton>
                            <IconButton aria-label="delete" >
                                <DeleteIcon onClick={() => { DeleteRow(value) }} />
                            </IconButton>

                        </div>

                    )
                },
            }
        }



    ];

    const options = {
        filterType: "textField",
        responsive: "vertical",

        fixedSelectColumn: false,
        draggableColumns: {
            enabled: true,
        },
        search: true,
        filter: true,
        download: false,
        print: false,
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 10, 20, 50],
        textLabels: {
            body: {
                noMatch: "Loading...",
                toolTip: "Sort",
            },
        }
    };

    useEffect(() => {
        TestingsServices().then(res => {
            setState(res.data)
        })
    }, [])

    return (
        <div className="Components">
            <Add setState={setState} />
            <FilterTable setState={setState} />
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Editar Registro"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <Edit idRow={idRow} handleClose={handleClose} setState={setState} />
                    </DialogContentText>
                </DialogContent>

            </Dialog>
            <MUIDataTable
                title={"Tabla de prueba"}
                data={state}
                columns={columns}
                options={options}
            />
        </div>
    )
}

export default Table;