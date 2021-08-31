import axios from "axios";


export const TestingsServices = () => {
    return axios.get(
        `http://localhost:8000/api/testings/`,
    )
};


export const FilterTestingsServices = (numero_rol, nombre_paciente, codigo_prevision, fecha_alta_desde, fecha_alta_hasta) => {
    return axios.get(
        `http://localhost:8000/api/testings/?numero_rol__contains=${numero_rol}&nombre_paciente__contains=${nombre_paciente}&codigo_prevision__contains=${codigo_prevision}&fecha_alta__gte=${fecha_alta_desde}&fecha_alta__lte=${fecha_alta_hasta}`,
    )
};

export const AllPrevesionApi = () => {
    return axios.get(
        `http://localhost:8000/api/testings/all_pevesion/`,
    )
};

export const postTestingsServices = (data) => {
    return axios.post(
        `http://localhost:8000/api/testings/`,
        data,
    )
};

export const deleteTestingsServices = (id) => {
    return axios.delete(
        `http://localhost:8000/api/testings/${id}`,
    )
};




