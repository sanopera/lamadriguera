const productos = [
    {
      id: 1,
      title: "Remera unisex GRYFFINDOR 07",
      price: 2300,
      pictureUrl: "../producto1.jpeg",
      descripcion: "Remera de Algodon con motivo de Harry Potter",
      categoria: "Harry Potter"
    },
    {
      id: 2,
      title: "Remera unisex BLACKSUIT SPIDERMAN",
      price: 2300,
      pictureUrl: "../producto2.jpeg",
      descripcion: "Algo",
      categoria: "Marvel"
    },
    {
      id: 3,
      title: "Funko Pop Spiderman 593",
      price: 7000,
      pictureUrl: "../producto3.jpeg",
      descripcion: "Algo",
      categoria: "Funko"
    }
  ];
  
  export const getFetch = new Promise((resolve, reject) => {
    let condicion = true;
      condicion ? setTimeout(()=>{ resolve(productos) }, 2000) : reject('error')
  })
