
import axios from "axios";


export const TestingsServices = () => {
    return axios.get(
        `http://localhost:8000/api/testings/`,
    )
};


export const FilterTestingsServices = () => {
    return axios.get(
        `http://localhost:8000/api/testings/?numero_rol__contains=&numero_rol=&nombre_paciente__contains=&nombre_paciente=&fecha_hospitalizacion__contains=&fecha_hospitalizacion=&fecha_alta__contains=&fecha_alta=&codigo_prevision__contains=&codigo_prevision=`,
    )
};


