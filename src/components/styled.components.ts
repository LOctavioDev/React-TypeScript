import styled from "styled-components";

//LAS PROPIEDADES
interface Props {
  // LA ALTURA QUE LLEGARA A TRAVEZ DEL CLIENTE
  height?: number;
}

//COMPONENTE ENCARGADO DE COLOCAR Y UBICAR ELEMENTOS
export const Flex = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div<Props>`
  height: ${(props) => props.height}vh;
  width: 100%;
  background: red;
`;
