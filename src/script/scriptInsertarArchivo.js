
       var misLineas;

       var enviandoBtn = document.querySelector('#enviando');

       function enviar() {
           console.log(' funciona');
           axios.post('http://localhost:3000/code', {
               codigo: 'codigo de ejemplo',
               ArregloLineas: misLineas
           }).then(response => {
               console.log(response);

           }).catch(error => {
               console.log(error);

           })
       }
       enviandoBtn.addEventListener('click', enviar);

       var tipo;
       var analizadorBtn = document.querySelector('#analizador');

       function solicitar() {
           axios.get('http://localhost:3000/recibirDatos').
               then(response => {
                   tipo = response.data.tipo;
                   const token = response.data.token;
                   console.log(token);
                   console.log(response.data.tipo);
                   addElemento(token);
               }).
               catch(error => {
                   console.log(error);
               })
       };

       const createLi = item => {
           const li = document.createElement('li');

           li.appendChild(document.createTextNode(item));

           return li;
       };

       const addElemento = respuesta => {
           if (tipo == "Operador") {
               const ul = document.querySelector('#operador');
               if (respuesta) {
                   ul.appendChild(createLi(respuesta));
               }
           } else if (tipo == "Agrupador") {
               const ul = document.querySelector('#agrupacion');
               if (respuesta) {
                   ul.appendChild(createLi(respuesta));
               }
           } else if (tipo == "Palabra Reservada") {
               const ul = document.querySelector('#palabrasReservadas');
               if (respuesta) {
                   ul.appendChild(createLi(respuesta));
               }
           } else if (tipo == "Identificador") {
               const ul = document.querySelector('#identificador');
               if (respuesta) {
                   ul.appendChild(createLi(respuesta));
               }
           } else if (tipo == "Signo") {
               const ul = document.querySelector('#signo');
               if (respuesta) {
                   ul.appendChild(createLi(respuesta));
               }
           } else if (tipo == "Entero") {
               const ul = document.querySelector('#numeroEntero');
               if (respuesta) {
                   ul.appendChild(createLi(respuesta));
               }
           } else if (tipo == "Error") {
               const ul = document.querySelector('#error');
               if (respuesta) {
                   li.appendChild(createLi(respuesta));
               }
           } else if (tipo == "Float") {
               const ul = document.querySelector('#numeroFlotante');
               if (respuesta) {
                   ul.appendChild(createLi(respuesta));
               }
           } else if (tipo == "Boolean") {
               const ul = document.querySelector('#boolean');
               if (respuesta) {
                   ul.appendChild(createLi(respuesta));
               }
           }

       };

       analizadorBtn.addEventListener('click', solicitar);



       function ocultar() {
           var archivos = document.getElementById('formularioArchivos');
           var boton = document.getElementById('enviando');
           var botonAnalizar = document.getElementById('analizador');
           boton.style.display = 'none';
           archivos.style.display = 'none';
           botonAnalizar.style.display = 'block';
       };


       var tam = 30;
       function leerArchivo(e) {
           var archivo = e.target.files[0];
           if (!archivo) {
               return;
           }
           var i = 0
           var lector = new FileReader();
           lector.onload = function (e) {
               var contenido = e.target.result;
               mostrarContenido(contenido);

               var lines = contenido.split("\n");
               console.log(lines.length)
               misLineas = lines;
               for (var line = 0; line < lines.length; line++) {
                   console.log(lines[line]);
                   console.log(misLineas.length);
               }
           };
           lector.readAsText(archivo);
       };

       function mostrarContenido(contenido) {
           leerArchivo(e);
           var elemento = document.getElementById('contenido-archivo');
           elemento.innerHTML = contenido;
       }
       document.getElementById('formularioArchivos')
           .addEventListener('change', leerArchivo, false);
