import React, { useState } from "react";

import { Box, Button, Input, FormControl, FormLabel } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
//Action de redux
import { crearNuevaAulaAction } from "../redux/action/aulaActions";

const Gestiondeaulas = () => {
  //state del componente

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  //usar dispath y te crea una funcion
  const dispatch = useDispatch();
  //mandar  llamar el action de aulaActions
  const agregarAula = (aula) => dispatch(crearNuevaAulaAction(aula));
  //funcion que agrega una nueva aula

  const submitNuevaAula = (e) => {
    e.preventDefault();
    //validar formulario
    if (nombre.trim() === "" || descripcion.trim() === "") {
      return;
    }
    //si no hay errores
    //crear nueva aula
    agregarAula({
      nombre,
      descripcion,
    });
  };
  return (
    <>
      <Layout>
        <Box>
          <h1>Gestion de aulas</h1>
          <Box bgColor="red.100" w="800px" h={20}>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Descripcion</FormLabel>
              <Input
                name="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              ></Input>
            </FormControl>
            <Button colorScheme="green" onClick={submitNuevaAula}>
              Agregar Aulas
            </Button>
          </Box>
        </Box>
      </Layout>
    </>
  );
};
export default Gestiondeaulas;
