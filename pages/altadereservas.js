import React, { useState } from "react";

import {
  Box,
  Radio,
  RadioGroup,
  Stack,
  Select,
  FormLabel,
  FormControl,
  Input,
  Button,
  Grid,
} from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import { TituloPantalla, Pasos, CuadroPasos } from "../components/ui/index";
const Altadereservas = () => {
  const [value, setValue] = useState("1");
  return (
    <>
      <Layout>
        <TituloPantalla titulo="ALTA DE RESERVAS" />
        <Grid templateColumns="repeat(3, 1fr)" gap={1} ml={1} mt={1} mr={1}>
          <CuadroPasos>
            <Pasos texto="1" />
            <FormControl>
              <FormLabel size="xs">Tipo de reserva</FormLabel>
              <RadioGroup onChange={setValue} value={value}>
                <Stack direction="column">
                  <Radio value="1">Reserva diaria</Radio>
                  <Radio value="2">Reserva por rango</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </CuadroPasos>
          <CuadroPasos>
            <Pasos texto="2" />
            <FormControl>
              <FormLabel>Actividad que se va a realizar</FormLabel>
              <Input></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Aula</FormLabel>
              <Select placeholder="Seleccione un aula">
                <option value="aula1">Aula 1</option>
                <option value="aula2">Aula 2</option>
                <option value="aula3">Aula 3</option>
                <option value="aula4">Aula 4</option>
                <option value="aula5">Aula 5</option>
                <option value="aula6">Aula 6</option>
                <option value="aula7">Aula 7</option>
              </Select>
            </FormControl>
          </CuadroPasos>
          <CuadroPasos>
            <Pasos texto="3" />
            <FormControl>
              <FormLabel>Desde</FormLabel>
              <Input type="date"></Input>
            </FormControl>
          </CuadroPasos>
          <CuadroPasos>
            <Pasos texto="4" />
            <FormControl>
              <FormLabel>Hasta</FormLabel>
              <Input type="date"></Input>
            </FormControl>
          </CuadroPasos>
          <CuadroPasos>
            <Pasos texto="5" />

            <FormControl>
              <FormLabel>Hora asignada</FormLabel>
              <Input type="time"></Input>
              <Button w="100%" mt={2} colorScheme="green" size="xs">
                Asignar horario
              </Button>
            </FormControl>
          </CuadroPasos>
          <CuadroPasos>
            <Pasos texto="6" />
          </CuadroPasos>
        </Grid>
      </Layout>
    </>
  );
};
export default Altadereservas;
