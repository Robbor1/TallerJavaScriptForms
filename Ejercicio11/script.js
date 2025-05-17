/* 
            Los objetos pueden contener propiedades (valores, ejemplo "nombre"),
            y métodos (funciones, ejemplo "datosPersonales").
        */

        // Declaración de un objeto - las funciones dentro de un objeto se les denomina métodos
        const persona = {
            // Propiedades
            nombre: "Rob", 
            edad: 22, 
            pais: "México",
            getPerson: function() { // Método
                return this.nombre + " tiene " + this.edad + " años.";
            }
        }

        document.getElementById('nombre').innerHTML = "Nombre: " + persona.nombre;
        console.log("Nombre: " + persona.nombre);
        console.log("Edad: " + persona.edad);
        console.log("País: " + persona.pais);
        console.log("Datos: " + persona.getPerson());

        // Otra forma de acceder a los valores de las propiedades de un objetos

        console.log("Alternativa - Nombre: " + persona["nombre"]);
        console.log("Alternativo - Edad: " + persona["edad"]);
        console.log("Alternativo - País: " + persona["pais"]);
        
        //  ------ ------ ------ ------ ------

        // Usando un constructor de Objetos
        // El constructor de objetos nos permite crear objetos conforme las necesidades.
        // En vez de escribirlas al inicio.

        function Persona(nombre, edad, pais) {
            this.nombre = nombre;
            this.edad = edad;
            this.pais = pais;
        }

        let papa = new Persona('Roberto', 50, 'México');
        let amigo = new Persona('Dayana', 20, 'México');
        let hermana = new Persona('Rebeka', 22, 'México');
        
        // Acceder a los valores de los objetos creados
        document.write("Nombre: " + papa.nombre);
        document.write(" " +papa.edad + " años.");
        document.write("<br>");
        document.write("Nombre: " + amigo.nombre);
        document.write(" " + amigo.edad + " años.");
        document.write("<br>");
        document.write("Nombre: " + hermana.nombre);
        document.write(" " + hermana.edad + " años.");