/* global empelado, fecha_de_nacimiento */

///* 
// * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
// * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
// */
///* 
// * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
// * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
// */
//
//
///* 
// * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
// * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
// */


let empleados=[];
let empleado={};
let indiceEmpleadoSeleccionado;
fetch("modulos/empleados/empleados.json")
        .then(
        response=>{
            return response.json();
        })
        .then(
                function (jsondata){
                    empleados=jsondata;
                   loadTable(1);
                }
        );
export function loadTable(estatus){
    let cuerpo="";
    empleados.forEach(function(empleado){
     
if(estatus==0 && empleado.estatus==0){
        let registro=
       '<tr onclick="moduloEmpleado.seleccionarEmpleado('+ empleados.indexOf(empleado) +'); ">'+
                '<td>'+empleado.persona.id+'</td>'+
                '<td>'+empleado.persona.nombre+'</td>'+
                '<td>'+empleado.persona.apellido_materno+'</td>'+
                '<td>'+empleado.persona.apellido_paterno+'</td>'+
                '<td>'+empleado.persona.telefono+'</td>'+
                '<td>'+empleado.persona.emial+'</td>'+
                '<td>'+empleado.persona.genero+'</td>'+
                '<td>'+empleado.persona.fecha_de_nacimiento+'</td>'+
                 '<td>'+empleado.persona.rfc+'</td>'+
                 '<td>'+empleado.persona.curp+'</td>'+
                  '<td>'+empleado.persona.estado+'</td>'+
                  '<td>'+empleado.persona.ciudad+'</td>'+
                   '<td>'+empleado.persona.colonia+'</td>'+
                    '<td>'+empleado.persona.cp+'</td>'+
                    '<td>'+empleado.persona.domicilio+'</td>'+
                    '<td>'+empleado.puesto+'</td>'+
                     '<td>'+empleado.salario+'</td>'+
                     '<td>'+empleado.fecha_de_ingreso+'</td>'+
                     '<td>'+empleado.sucursal.id_sucursal+'</td>';  
//                     '<td>'+empleado.sucursal.nombre_sucursal+'</td>'+
//                     '<td>'+empleado.usuario.tipoUsuario+'</td>';
               cuerpo+=registro;
    }
    else if(estatus==1 && empleado.estatus==1){
        let registro=
       '<tr onclick="moduloEmpleado.seleccionarEmpleado('+ empleados.indexOf(empleado) +'); ">'+
                '<td>'+empleado.persona.id+'</td>'+
                '<td>'+empleado.persona.nombre+'</td>'+
                  '<td>'+empleado.persona.apellido_materno+'</td>'+
                '<td>'+empleado.persona.apellido_paterno+'</td>'+
                '<td>'+empleado.persona.telefono+'</td>'+
                '<td>'+empleado.persona.emial+'</td>'+
                '<td>'+empleado.persona.genero+'</td>'+
                '<td>'+empleado.persona.fecha_de_nacimiento+'</td>'+
                 '<td>'+empleado.persona.rfc+'</td>'+
                 '<td>'+empleado.persona.curp+'</td>'+
                  '<td>'+empleado.persona.estado+'</td>'+
                  '<td>'+empleado.persona.ciudad+'</td>'+
                   '<td>'+empleado.persona.colonia+'</td>'+
                    '<td>'+empleado.persona.cp+'</td>'+
                    '<td>'+empleado.persona.domicilio+'</td>'+
                    '<td>'+empleado.puesto+'</td>'+
                     '<td>'+empleado.salario+'</td>'+
                     '<td>'+empleado.fecha_de_ingreso+'</td>'+
//                     '<td>'+empleado.sucursal.id_sucursal+'</td>'+
//                     '<td>'+empleado.sucursal.nombre_sucursal+'</td>'+
                     '<td>'+empleado.usuario.tipoUsuario+'</td>';
               cuerpo+=registro;
    }
     });
    document.getElementById("tblProductos").innerHTML=cuerpo;
 }

function mostrarGenero(genero){
    switch(genero){
        case 1: return "Femenino";
        case 2: return "Masculino";
        case 3: return "No binario";
        default: return "No definido";
    }
}

export function addEmpleado() {
    let fecha, annio, mes, dia; 
    let salarioBruto = document.getElementById("txtsalario").value;
    let puesto = document.getElementById("txtpuesto").value;
    let codigoPostal = document.getElementById("txtcodigo_postal").value;
    let curp = document.getElementById("txtcurp").value;
    let rfc = document.getElementById("txtrfc").value;
    let colonia = document.getElementById("txtcolonia").value;
    let domicilio = document.getElementById("txtdomicilio").value;
    let estado = document.getElementById("txtestado").value;
    let nombre = document.getElementById("txtnombre").value;
   let apellidoMaterno = document.getElementById("txtapellido_materno").value;
    let apellidoPaterno = document.getElementById("txtapellido_paterno").value;
    let fechaNacimiento = document.getElementById("txtfecha_nacimiento").value;
    let telefono = document.getElementById("txttelefono").value;
    let emial = document.getElementById("txtemail").value;
    let genero = document.getElementById("txtgenero").value;

    fecha = new Date();
    annio = fecha.getFullYear(); 
    
    if ((fecha.getMonth() + 1) < 10)
        mes = "0" + (fecha.getMonth() + 1);
    else
        mes = "" + (fecha.getMonth() + 1);

    if ((fecha.getDate()) < 10) // Corregido de 'getDay()' a 'getDate()'
        dia = "0" + (fecha.getDate());
    else
        dia = "" + (fecha.getDate());

    let fecha_registro = annio + "-" + mes + "-" + dia;
    let codigoEmpleado = nombre.charAt(0) + apellidoPaterno.charAt(0) + apellidoMaterno.charAt(0) + annio + mes + dia;
    let empleado = {
        puesto: puesto,
        salario: salarioBruto,
        fecha_de_ingreso: fecha_registro,
        estatus: 1,
        usuario: {
            contrasena: codigoEmpleado, // Corregido 'contraceña' a 'contrasena'
            nombreUsuario: codigoEmpleado
        },
        persona: {
            id: codigoEmpleado,
            nombre: nombre,
            genero: genero,
            fecha_de_nacimiento: fechaNacimiento,
            rfc: rfc,
            curp: curp,
            estado: estado,
            colonia: colonia,
            cp: codigoPostal,
            domicilio: domicilio,
            apellido_materno: apellidoMaterno,
            apellido_paterno: apellidoPaterno,
            telefono: telefono,
            email: emial // Corregido 'emial' a 'email'
        }
    };
    empleados.push(empleado);

    // Llama a la función loadTable para actualizar la tabla
    loadTable(1);
}

export function seleccionarEmpleado(indice){
    document.getElementById("txtnombre").value= empleados[indice].persona.nombre;
    document.getElementById("txtapellido_materno").value= empleados[indice].persona.apellido_paterno;
    document.getElementById("txtapellido_paterno").value= empleados[indice].persona.apellido_materno;
    document.getElementById("txtgenero").value= empleados[indice].persona.genero;
    document.getElementById("txtfecha_nacimiento").value= empleados[indice].persona.fecha_de_nacimiento;
    document.getElementById("txtcurp").value= empleados[indice].persona.curp;
    document.getElementById("txtrfc").value= empleados[indice].persona.rfc;
    document.getElementById("txtdomicilio").value= empleados[indice].persona.domicilio;
    document.getElementById("txtcodigo_postal").value= empleados[indice].persona.cp;
    document.getElementById("txtestado").value= empleados[indice].persona.estado;
    document.getElementById("txttelefono").value= empleados[indice].persona.telefono;
    document.getElementById("txtemail").value= empleados[indice].persona.emial;
    document.getElementById("txtpuesto").value= empleados[indice].puesto;
    document.getElementById("txtcolonia").value= empleados[indice].persona.colonia;
    document.getElementById("txtsalario").value= empleados[indice].salario;

    indiceEmpleadoSeleccionado= indice;
}

export function deleteEmpleado() {
    empleados[indiceEmpleadoSeleccionado].estatus = 0;
    loadTable();
    loadTable(1);

}

export function validarEstatus(estatus){
    let checkbox= document.getElementById('chkestatus');
    if(checkbox.checked)
        loadTable(0);
    else
        loadTable(1);
}

export function modificarEmpleado() {
    let codigoEmpleado, salario, codigoPostal, curp, rfc, colonia, estado, nombre, apellidoMaterno, apellidoPaterno, fechaNacimiento, telefono, email, genero;

    salario = parseFloat(document.getElementById("txtsalario").value);
    codigoPostal = document.getElementById("txtcodigo_postal").value;
    curp = document.getElementById("txtcurp").value;
    rfc = document.getElementById("txtrfc").value;
    colonia = document.getElementById("txtcolonia").value;
    estado = document.getElementById("txtestado").value;
    nombre = document.getElementById("txtnombre").value;
    apellidoMaterno = document.getElementById("txtapellido_materno").value;
    apellidoPaterno = document.getElementById("txtapellido_paterno").value;
    fechaNacimiento = document.getElementById("txtfecha_nacimiento").value;
    telefono = document.getElementById("txttelefono").value;
    email = document.getElementById("txtemail").value;
    genero = document.getElementById("txtgenero").value;
let fechar;
//    let fechar = empleados[indiceEmpleadoSeleccionado].empleado.fechaIngreso;
//    let ap = apellidoMaterno.charAt(0);
//    let app = apellidoPaterno.charAt(0);
//    let nom = nombre.charAt(0);
//    let annio = fechar.substring(0, 4);
//    let mes = fechar.substring(5, 7);
//    let dia = fechar.substring(8, 10);
//    codigoEmpleado = nom + app + ap + annio + mes + dia;

    let empleado = {
        puesto: empleados[indiceEmpleadoSeleccionado].puesto,
        salario: salario,
        fecha_de_ingreso: fechar,
        estatus: empleados[indiceEmpleadoSeleccionado].estatus,
        usuario: {
            contrasena: codigoEmpleado,
            tipoUsuario: empleados[indiceEmpleadoSeleccionado].usuario.tipoUsuario,
            nombreUsuario: codigoEmpleado
        },
        persona: {
            id: empleados[indiceEmpleadoSeleccionado].persona.id,
            nombre: nombre,
            genero: genero,
            fecha_de_nacimiento: fechaNacimiento,
            rfc: rfc,
            curp: curp,
            estado: estado,
            colonia: colonia,
            cp: codigoPostal,
            domicilio: empleados[indiceEmpleadoSeleccionado].persona.domicilio,
            apellido_materno: apellidoMaterno,
            apellido_paterno: apellidoPaterno,
            telefono: telefono,
            email: email,
            estatus: empleados[indiceEmpleadoSeleccionado].persona.estatus
        }
    };

    // Update the employee in your array
    empleados[indiceEmpleadoSeleccionado] = empleado;

    // Call the loadTable function to update the table
    loadTable(1);
}



export function revisarSeleccion() {
    let checkbox = document.getElementById("chkStatus");
    if (checkbox.checked) {
        loadTable(0);
    } else {
        loadTable(1);
    }

}

export function buscarEmpleado(estatus) {
//    let datoBusqueda = document.getElementById("txtdatabusqueda").value.toLowerCase();
    let cuerpo = "";
let datoBusqueda;
    empleados.forEach(function (empleado) {
        let nombre = empleado.persona.nombre.toLowerCase();
        let apellidop = empleado.persona.apellido_paterno.toLowerCase();
        let apellidom = empleado.persona.apellido_materno.toLowerCase();

        if ((nombre.includes(datoBusqueda) || apellidop.includes(datoBusqueda) || apellidom.includes(datoBusqueda)) &&
            ((estatus === 1 && empleado.estatus === 1) || (estatus === 0 && empleado.estatus === 0))) {

            let registro =
                '<tr onclick="moduloEmpleado.seleccionarEmpleado(' + empleados.indexOf(empleado) + '); ">' +
                '<td>' + empleado.persona.id + '</td>' +
                '<td>' + empleado.persona.nombre + '</td>' +
                '<td>' + empleado.persona.apellido_materno + '</td>' +
                '<td>' + empleado.persona.apellido_paterno + '</td>' +
                '<td>' + empleado.persona.telefono + '</td>' +
                '<td>' + empleado.persona.emial + '</td>' +
                '<td>' + empleado.persona.genero + '</td>' +
                '<td>' + empleado.persona.fecha_de_nacimiento + '</td>' +
                '<td>' + empleado.persona.rfc + '</td>' +
                '<td>' + empleado.persona.curp + '</td>' +
                '<td>' + empleado.persona.estado + '</td>' +
                '<td>' + empleado.persona.ciudad + '</td>' +
                '<td>' + empleado.persona.colonia + '</td>' +
                '<td>' + empleado.persona.cp + '</td>' +
                '<td>' + empleado.persona.domicilio + '</td>' +
                '<td>' + empleado.puesto + '</td>' +
                '<td>' + empleado.salario + '</td>' +
                '<td>' + empleado.fecha_de_ingreso + '</td>' +
                '<td>' + empleado.sucursal.id_sucursal + '</td>' +
                '<td>' + empleado.usuario.tipoUsuario + '</td>';

            cuerpo += registro;
        }
    });

    document.getElementById("tblProductos").innerHTML = cuerpo;
}

//export function Buscar() {
//    let datoBusqueda = document.getElementById("campoBusqueda").value;
//    let resultados = [];
//
//    empleados.forEach(function(empleado) {
//        if (
//            empleado.persona.nombre.includes(datoBusqueda) ||
//            empleado.persona.apellido_paterno.includes(datoBusqueda) ||
//            empleado.persona.apellido_materno.includes(datoBusqueda) ||
//            empleado.persona.telefono.includes(datoBusqueda) ||
//            empleado.persona.emial.includes(datoBusqueda) ||
//            empleado.persona.genero.includes(datoBusqueda) ||
//            empleado.persona.fecha_de_nacimiento.includes(datoBusqueda) ||
//            empleado.persona.rfc.includes(datoBusqueda) ||
//            empleado.persona.curp.includes(datoBusqueda) ||
//            empleado.persona.estado.includes(datoBusqueda) ||
//            empleado.persona.ciudad.includes(datoBusqueda) ||
//            empleado.persona.colonia.includes(datoBusqueda) ||
//            empleado.persona.cp.includes(datoBusqueda) ||
//            empleado.domicilio.includes(datoBusqueda) ||
//            empleado.puesto.includes(datoBusqueda) ||
//            empleado.fecha_de_ingreso.includes(datoBusqueda) ||
//            empleado.id_sucursal.includes(datoBusqueda) ||
//            empleado.tipoUsuario.n_usuario.includes(datoBusqueda) ||
//        ) {
//            resultados.push(empleado);
//        }
//    });
//
//    let cuerpo = ""; // Inicializar la variable fuera del bucle
//    resultados.forEach(function(empleado) {
//        let registro =
//           '<tr onclick="moduloEmpleado.seleccionarEmpleado(' + empleados.indexOf(empleado) + '); ">' +
//                '<td>' + empleado.persona.id + '</td>' +
//                '<td>' + empleado.persona.nombre + '</td>' +
//                '<td>' + empleado.persona.apellido_materno + '</td>' +
//                '<td>' + empleado.persona.apellido_paterno + '</td>' +
//                '<td>' + empleado.persona.telefono + '</td>' +
//                '<td>' + empleado.persona.emial + '</td>' +
//                '<td>' + empleado.persona.genero + '</td>' +
//                '<td>' + empleado.persona.fecha_de_nacimiento + '</td>' +
//                '<td>' + empleado.persona.rfc + '</td>' +
//                '<td>' + empleado.persona.curp + '</td>' +
//                '<td>' + empleado.persona.estado + '</td>' +
//                '<td>' + empleado.persona.ciudad + '</td>' +
//                '<td>' + empleado.persona.colonia + '</td>' +
//                '<td>' + empleado.persona.cp + '</td>' +
//                '<td>' + empleado.persona.domicilio + '</td>' +
//                '<td>' + empleado.puesto + '</td>' +
//                '<td>' + empleado.salario + '</td>' +
//                '<td>' + empleado.fecha_de_ingreso + '</td>' +
//                '<td>' + empleado.sucursal.id_sucursal + '</td>' +
//                '<td>' + empleado.usuario.tipoUsuario + '</td>';
//
//            '</tr>';
//        cuerpo += registro;
//    });
//    document.getElementById("tblProductos").innerHTML=cuerpo;
//}
