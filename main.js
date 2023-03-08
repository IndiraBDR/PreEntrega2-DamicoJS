



let edad = Number(prompt("Ingrese Edad"));

if (edad >= 18) {
    
   
 
    let sexo = prompt("Ingrese Sexo");
 
     if (sexo.toLowerCase() === "femenino"){ 
 
       alert("Bienvenida, ya estas registrada");
   
        let entrada= prompt("Desea buscar cursos");
     
        if (entrada.toLowerCase() === "si") {
          class Curso {
            constructor(datos) {
              this.nombre = datos.nombreProducto;
              this.precio = datos.precioProducto;
              this.cantidad = datos.cantidadProducto;
            }

            PrecioConIVA() {
              return this.precio * 1.21;
            }
          }

          const producto1 = new Curso({
            nombreProducto: "Desarrollo Personal",
            precioProducto: 2000,
            cantidadProducto: 5,
          });

          const producto2 = new Curso({
            nombreProducto: "Ingresos Extra",
            precioProducto: 1000,
            cantidadProducto: 5,
          });

          const producto3 = new Curso({
            nombreProducto: "Finanzas Personales",
            precioProducto: 1500,
            cantidadProducto: 5,
          });

          const cursos = [producto1, producto2, producto3];

          let opcion;
          do {
            opcion = Number(
              prompt(
                "Eliga opción para filtrar:\n 1.Buscar curso por nombre \n 2.Filtrar cursos por precio \n 3.Salir "
              )
            );

            switch (opcion) {
              case 1:
                const nombreBuscado = prompt(
                  "Ingrese el nombre del curso a buscar"
                );
                const cursoEncontrado = cursos.find(
                  (item) =>
                    item.nombre.toLowerCase() === nombreBuscado.toLowerCase()
                );

                if (cursoEncontrado) {
                  alert(
                    `El curso ${
                      cursoEncontrado.nombre
                    } cuesta ${cursoEncontrado.PrecioConIVA()} con IVA incluido`
                  );
                } else {
                  alert("No se encontró ningún curso con ese nombre");
                }
                break;

              case 2:
                const precioBuscado = Number(
                  prompt("Ingrese el precio máximo deseado")
                );

                const cursosFiltradosPorPrecio = cursos.filter(
                  (item) => item.precio <= precioBuscado
                );

                if (cursosFiltradosPorPrecio.length > 0) {
                  alert(
                    `Los cursos encontrados son \n${cursosFiltradosPorPrecio
                      .map((item) => item.nombre)
                      .join("\n")}`
                  );
                } else {
                  alert("No se encontraron cursos en ese rango");
                }

                break;
              case 3:
                alert("Hasta luego!");
                break;
              default:
                alert("Opción no reconocida");
                break;
            }
          } while (opcion !== 3);
        } else {
          alert("Perfecto que tengas Buen Dias");
        }
 
       
    } else { 
         alert("Lo sentimos no puedes registrarte al curso, es solo para mujeres");
    }
 
 
} else {
     
     alert("Lo sentimos no cumlples con la edad necesaria");
 
 }



   


