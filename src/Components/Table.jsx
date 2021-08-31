import React, { useState, useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import { TestingsServices } from "../Services/TableServices"
import FilterTable from "./FilterTable"
import Add from "./Add"

const Table = () => {
    const [state, setState] = useState([])

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
            label: "numero_rol",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "nombre_paciente",
            label: "nombre_paciente",
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
            <Add setState={setState}/>
            <FilterTable setState={setState}/>
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