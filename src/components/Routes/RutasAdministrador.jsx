import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Administrador from "../pages/Administrador";
import FormularioProducto from '../Productos/FormularioProducto';

const RutasAdministrador = () => {
    return (
        <Routes>
            <Route path="/" element={<Administrador />} />
            <Route path="crear" element={<FormularioProducto crearProducto={true} />} />
            <Route path="editar/:id" element={<FormularioProducto crearProducto={false} />} />
        </Routes>
    );
};

export default RutasAdministrador;

