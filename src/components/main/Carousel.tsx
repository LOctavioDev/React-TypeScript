import { useEffect } from "react";
import { Container } from "../styled.components";


interface Movie {
  name: string,
  description: string,
  
}

const Carousel = () => {
  const getData = async () => {
    const url = import.meta.env.VITE_BASE_URL;
    const items = await fetch(url);
    const response = items.json();
    console.log(response);
  };

  useEffect(() => {
    getData();
    console.log("Iniciando...");
  }, []);
  return (
    <>
      <Container height={50}>Contenedor</Container>
    </>
  );
};

export default Carousel;
