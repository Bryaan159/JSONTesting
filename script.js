var jsonTemplates = {

    "DTE-11":{
        "identificacion": {
            "version": 1,
            "ambiente": "00",
            "tipoDte": "11",
            "numeroControl": "DTE-11-ABC12377-123456789012345",
            "codigoGeneracion": "12345677-1234-1234-1234-123456789012",
            "tipoModelo": 1,
            "tipoOperacion": 1,
            "tipoContingencia": null,
            "motivoContigencia": null,
            "fecEmi": "2023-09-14",
            "horEmi": "14:30:00",
            "tipoMoneda": "USD"
        },
        "emisor": {
            "nit": "06142009131109",
            "nrc": "2291800",
            "nombre": "GRUPO CONSITI: CONSULTORIA Y SOLUCIONES INFORMATICAS S.A DE C.V.",
            "codActividad": "62090",
            "descActividad": "Otras actividades de tecnología de información y servicios de computadora",
            "nombreComercial": null,
            "tipoEstablecimiento": "01",
            "direccion": {
                "departamento": "01",
                "municipio": "01",
                "complemento": "Complemento de la Dirección"
            },
            "telefono": "22453233",
            "correo": "correo@emisor.com",
            "codEstableMH": "0000",
            "codEstable": "0000",
            "codPuntoVentaMH": null,
            "codPuntoVenta": null,
            "tipoItemExpor": 2,
            "recintoFiscal": null,
            "regimen": null
        },
        "receptor": {
            "nombre": "IMPORTADORA ASIATICA DIVERSA, SOCIEDAD ANONIMA DE CAPITAL VARIABLE",
            "tipoDocumento": "36",
            "numDocumento": "06142810211068",
            "nombreComercial": null,
            "codPais": "9320",
            "complemento":"Complemento de la direccion",
            "nombrePais": "Nombre del País Destino",        
            "tipoPersona": 2,
            "descActividad": "Actividad Económica del Receptor",
            "telefono":null,
            "correo": "correo@ejemplo.com"
        },
        "otrosDocumentos": [
            {
                "codDocAsociado": 1,
                "descDocumento": "Identificación del Documento Asociado 1",
                "detalleDocumento": "Descripción del Documento Asociado 1",
                "placaTrans": null,
                "modoTransp": null,
                "numConductor": "Número de Conductor 1",
                "nombreConductor": null
            },
            {
                "codDocAsociado": 2,
                "descDocumento": "Identificación del Documento Asociado 2",
                "detalleDocumento": "Descripción del Documento Asociado 2",
                "placaTrans": null,
                "modoTransp": null,
                "numConductor": null,
                "nombreConductor": null
            }
        ],
        "ventaTercero": {
            "nit": "06142810211068",
            "nombre": "Juan Martinez"
        },
        "cuerpoDocumento": [
            {
                "ventaGravada": 1000.00,
                "tributos": [
                    "C3"
                ],
                "noGravado": 0.00,
                "numItem": 1,
                "cantidad": 1,
                "codigo": null,
                "uniMedida": 59,
                "descripcion": "Producto 1",
                "precioUni": 1000.00,
                "montoDescu": 0.00
            }
        ],
        "resumen": {
            "totalGravada": 1000.00,
            "porcentajeDescuento": 0,
            "totalDescu": 0.00,
            "descuento": 0.00,
            "montoTotalOperacion": 1050.00,      
            "totalNoGravado": 0.00,
            "totalPagar": 1050.00,
            "seguro": 0.00,
            "flete": 50.00,   
            "totalLetras": "mil cincuenta dólares",
            "condicionOperacion": 2,
            "pagos": [
                {
                    "codigo": "05",
                    "montoPago": 1050.00,
                    "referencia":null,
                    "plazo": "01",
                    "periodo": 30
                }
            ],
            "codIncoterms": null,
            "descIncoterms": null,
            "numPagoElectronico": null,
            "observaciones": "Entrega inmediata."
        },
        "apendice": [
            {
                "campo": "Campo1",
                "etiqueta": "Etiqueta1",
                "valor": "Valor1"
            },
            {
                "campo": "Campo2",
                "etiqueta": "Etiqueta2",
                "valor": "Valor2"
            }
        ]
    },
    "DTE-03": {
        "identificacion": {
            "version": 3,
            "ambiente": "00",
            "tipoDte": "03",
            "numeroControl": "DTE-03-ABC12355-123456789012345",
            "codigoGeneracion": "01234555-89AB-CDEF-0123-456789ABCDEF",
            "tipoModelo": 1,
            "tipoOperacion": 1,
            "tipoContingencia": null,
            "motivoContin": null,
            "fecEmi": "2023-10-09",
            "horEmi": "10:34:56",
            "tipoMoneda": "USD"
        },
        "documentoRelacionado": [
            {
                "tipoDocumento": "08",
                "tipoGeneracion": 2,
                "numeroDocumento": "550E8400-E29B-41D4-A716-446655440000",
                "fechaEmision": "2023-08-29"
            }
        ],
        "emisor": {
            "nit": "06142009131109",
            "nrc": "2291800",
            "nombre": "GRUPO CONSITI: CONSULTORIA Y SOLUCIONES INFORMATICAS S.A DE C.V.",
            "codActividad": "62090",
            "descActividad": "Otras actividades de tecnología de información y servicios de computadora",
            "nombreComercial": "CONSITI",
            "tipoEstablecimiento": "01",
            "direccion": {
                "departamento": "01",
                "municipio": "01",
                "complemento": "Colonia Centro"
            },
            "telefono": "22334455",
            "correo": "info@miempresa.com",
            "codEstableMH": null,
            "codEstable": "E001",
            "codPuntoVentaMH": "PV01",
            "codPuntoVenta": null
        },
        "receptor": {
            "nit": "06142810211068",
            "nrc": "3086073",
            "nombre": "IMPORTADORA ASIATICA DIVERSA, SOCIEDAD ANONIMA DE CAPITAL VARIABLE",
            "codActividad": "46900",
            "descActividad": "VENTA AL POR MAYOR DE OTROS PRODUCTOS",
            "nombreComercial": "IMPADI",
            "direccion": {
                "departamento": "01",
                "municipio": "01",
                "complemento": "Complemento de la dirección del Receptor"
            },
            "telefono": "12345678",
            "correo": "kbh260501@gmail.com"
        },
        "otrosDocumentos": [
            {
                "codDocAsociado": 3,
                "descDocumento": null,
                "detalleDocumento": null,
                "medico": {
                    "nombre": "Médico 1",
                    "nit": "56789012345678",
                    "docIdentificacion": "ID12345",
                    "tipoServicio": 3
                }
            },
            {
                "codDocAsociado": 3,
                "descDocumento": null,
                "detalleDocumento": null,
                "medico": {
                    "nombre": "Médico 2",
                    "nit": "45678901234567",
                    "docIdentificacion": "ID56789",
                    "tipoServicio": 6
                }
            }
        ],
        "ventaTercero": null,
        "cuerpoDocumento": [
            {
                "cantidad": 1,
                "codigo": null,
                "codTributo": null,
                "descripcion": "Gtos. Pagados Por Cuenta Ajena",
                "montoDescu": 0,
                "noGravado": 0,
                "numeroDocumento": "550E8400-E29B-41D4-A716-446655440000",
                "numItem": 1,
                "precioUni": 2000,
                "psv": 0,
                "tipoItem": 2,
                "tributos": [
                    "20"
                ],
                "uniMedida": 59,
                "ventaExenta": 0,
                "ventaGravada": 2000,
                "ventaNoSuj": 0
            }
        ],
        "resumen": {
            "totalNoSuj": 0,
            "totalExenta": 0,
            "totalGravada": 2000,
            "subTotalVentas": 2000,
            "descuNoSuj": 0,
            "descuExenta": 0,
            "descuGravada": 0,
            "porcentajeDescuento": 0,
            "totalDescu": 0,
            "tributos": [
                {
                    "codigo": "20",
                    "descripcion": "IVA del 13%",
                    "valor": 260
                }
            ],
            "subTotal": 2000,
            "ivaPerci1": 0,
            "ivaRete1": 0,
            "reteRenta": 0,
            "montoTotalOperacion": 2260,
            "totalNoGravado": 0,
            "totalPagar": 2260,
            "totalLetras": "DOS MIL DOSCIENTOS SESENTA DÓLARES",
            "saldoFavor": 0,
            "condicionOperacion": 1,
            "pagos": [
                {
                    "codigo": "01",
                    "montoPago": 2260,
                    "referencia": "Pago en línea",
                    "plazo": null,
                    "periodo": null
                }
            ],
            "numPagoElectronico": null
        },
        "extension": {
            "nombEntrega": "Entregador",
            "docuEntrega": "ENT12345",
            "nombRecibe": "Receptor",
            "docuRecibe": "REC67890",
            "observaciones": "Observaciones adicionales",
            "placaVehiculo": "ABC123"
        },
        "apendice": [
            {
                "campo": "Mensaje1",
                "etiqueta": "Etiqueta1",
                "valor": "2% de descuento al cancelar antes de la fecha de vencimiento"
            },
            {
                "campo": "Mensaje2",
                "etiqueta": "Etiqueta2",
                "valor": "Fecha de vencimiento 30/09/2023"
            }
        ]
    },
    "DTE-01": {
        "identificacion": {
            "version": 1,
            "ambiente": "00",
            "tipoDte": "01",
            "numeroControl": "DTE-01-00590116-000000000007182",
            "codigoGeneracion": "22C4CC29-280F-4E51-9979-74BAE0D1368C",
            "tipoModelo": 1,
            "tipoOperacion": 1,
            "tipoContingencia": null,
            "motivoContin": null,
            "fecEmi": "2023-10-10",
            "horEmi": "10:29:10",
            "tipoMoneda": "USD"
        },
        "documentoRelacionado": null,
        "emisor": {
            "nit": "06142009131109",
            "nrc": "2291800",
            "nombre": "GRUPO CONSITI: CONSULTORIA Y SOLUCIONES INFORMATICAS S.A DE C.V.",
            "codActividad": "62090",
            "descActividad": "Otras actividades de tecnología de información y servicios de computadora",
            "nombreComercial": "CONSITI",
            "tipoEstablecimiento": "01",
            "direccion": {
                "departamento": "01",
                "municipio": "01",
                "complemento": "Colonia Centro"
            },
            "telefono": "22334455",
            "correo": "info@miempresa.com",
            "codEstableMH": "ABC1",
            "codEstable": "ABC1",
            "codPuntoVentaMH": "2355",
            "codPuntoVenta": "2355"
        },
        "receptor": {
            "tipoDocumento": "36",
            "numDocumento": "036658899",
            "nrc": null,
            "nombre": "IMPORTADORA ASIATICA DIVERSA, SOCIEDAD ANONIMA DE CAPITAL VARIABLE",
            "codActividad": "10004",
            "descActividad": "VENTA AL POR MAYOR DE OTROS PRODUCTOS",
            "direccion": {
                "departamento": "01",
                "municipio": "01",
                "complemento": "Complemento de la dirección del Receptor"
            },
            "telefono": "12345678",
            "correo": "kbh260501@gmail.com"
        },
        "otrosDocumentos": null,
        "ventaTercero": null,
        "cuerpoDocumento": [
            {
                "numItem": 1,
                "tipoItem": 1,
                "numeroDocumento": null,
                "codigo": "ABC123",
                "codTributo": null,
                "descripcion": "Producto 1",
                "uniMedida": 59,
                "precioUni": 0.02,
                "cantidad": 12.0,
                "montoDescu": 0.0,
                "ventaNoSuj": 0.0,
                "ventaExenta": 0.0,
                "ventaGravada": 0.24,
                "tributos": null,
                "psv": 0.0,
                "noGravado": 0,
                "ivaItem": 0.0276
            },
            {
                "numItem": 2,
                "tipoItem": 1,
                "numeroDocumento": null,
                "codigo": "555",
                "codTributo": null,
                "descripcion": "Servicio 1",
                "cantidad": 4.0,
                "uniMedida": 59,
                "precioUni": 0.0899,
                "montoDescu": 0.0,
                "ventaNoSuj": 0.0,
                "ventaExenta": 0.0,
                "ventaGravada": 0.3598,
                "tributos": null,
                "psv": 0.00,
                "noGravado": 0.0,
                "ivaItem": 0.0414
            },
            {
                "numItem": 3,
                "tipoItem": 1,
                "numeroDocumento": null,
                "cantidad": 12.0,
                "codigo": "538",
                "codTributo": null,
                "uniMedida": 59,
                "descripcion": "Producto 3",
                "precioUni": 0.04,
                "montoDescu": 0.0,
                "ventaNoSuj": 0.0,
                "ventaExenta": 0.0,
                "ventaGravada": 0.48,
                "tributos": null,
                "psv": 0.0,
                "noGravado": 0.0,
                "ivaItem": 0.0552
            },
            {
                "numItem": 4,
                "tipoItem": 1,
                "numeroDocumento": null,
                "cantidad": 12.0,
                "codigo": "15346",
                "codTributo": null,
                "uniMedida": 59,
                "descripcion": "Servicio 2",
                "precioUni": 0.0499,
                "montoDescu": 0.0,
                "ventaNoSuj": 0.0,
                "ventaExenta": 0.0,
                "ventaGravada": 0.5994,
                "tributos": null,
                "psv": 0.0,
                "noGravado": 0.0,
                "ivaItem": 0.069
            },
            {
                "numItem": 5,
                "tipoItem": 1,
                "numeroDocumento": null,
                "cantidad": 2.0,
                "codigo": "435314",
                "codTributo": null,
                "uniMedida": 59,
                "descripcion": "Producto 4",
                "precioUni": 2.75,
                "montoDescu": 0.0,
                "ventaNoSuj": 0.0,
                "ventaExenta": 0.0,
                "ventaGravada": 5.4999,
                "tributos": null,
                "psv": 0.0,
                "noGravado": 0.0,
                "ivaItem": 0.6327
            },
            {
                "numItem": 6,
                "tipoItem": 1,
                "numeroDocumento": null,
                "cantidad": 1.0,
                "codigo": "64185",
                "codTributo": null,
                "uniMedida": 59,
                "descripcion": "Servicio 5",
                "precioUni": 6.95,
                "montoDescu": 0.0,
                "ventaNoSuj": 0.0,
                "ventaExenta": 0.0,
                "ventaGravada": 6.95,
                "tributos": null,
                "psv": 0.0,
                "noGravado": 0.0,
                "ivaItem": 0.7996
            },
            {
                "numItem": 7,
                "tipoItem": 1,
                "numeroDocumento": null,
                "cantidad": 4.0,
                "codigo": "23117",
                "codTributo": null,
                "uniMedida": 59,
                "descripcion": "Producto 5",
                "precioUni": 1.8,
                "montoDescu": 0.0,
                "ventaNoSuj": 0.0,
                "ventaExenta": 0.0,
                "ventaGravada": 7.1999,
                "tributos": null,
                "psv": 0.0,
                "noGravado": 0.0,
                "ivaItem": 0.8283
            },
            {
                "numItem": 8,
                "tipoItem": 1,
                "numeroDocumento": null,
                "cantidad": 2.0,
                "codigo": "55603",
                "codTributo": null,
                "uniMedida": 59,
                "descripcion": "Servicio 6",
                "precioUni": 13.5,
                "montoDescu": 0.0,
                "ventaNoSuj": 0.0,
                "ventaExenta": 0.0,
                "ventaGravada": 27.0,
                "tributos": null,
                "psv": 0.0,
                "noGravado": 0.0,
                "ivaItem": 3.1062
            },
            {
                "numItem": 9,
                "tipoItem": 1,
                "numeroDocumento": null,
                "cantidad": 1.0,
                "codigo": "139799",
                "codTributo": null,
                "uniMedida": 59,
                "descripcion": "Producto 6",
                "precioUni": 34.95,
                "montoDescu": 0.0,
                "ventaNoSuj": 0.0,
                "ventaExenta": 0.0,
                "ventaGravada": 34.95,
                "tributos": null,
                "psv": 0.0,
                "noGravado": 0.0,
                "ivaItem": 4.0208
            }
        ],
        "resumen": {
            "totalNoSuj": 0.0,
            "totalExenta": 0.0,
            "totalGravada": 83.28,
            "subTotalVentas": 83.28,
            "descuNoSuj": 0.0,
            "descuExenta": 0.0,
            "descuGravada": 0.0,
            "porcentajeDescuento": 0.0,
            "totalDescu": 0.0,
            "tributos": null,
            "subTotal": 83.28,
            "ivaRete1": 0.0,
            "reteRenta": 0.0,
            "montoTotalOperacion": 83.28,
            "totalNoGravado": 0.0,
            "totalPagar": 83.28,
            "totalLetras": "OCHENTA Y TRES DOLARES 28/100 USD",
            "totalIva": 9.58,
            "saldoFavor": 0.0,
            "condicionOperacion": 1,
            "pagos": null,
            "numPagoElectronico": null
        },
        "extension": null,
        "apendice": [
            {
                "campo": "sucursal",
                "etiqueta": "Sucursal",
                "valor": "EJERCITO"
            },
            {
                "campo": "condicion_operacion",
                "etiqueta": "Condicion de la operacion",
                "valor": "CONTADO"
            },
            {
                "campo": "codigo_interno",
                "etiqueta": "Codigo Interno",
                "valor": "1222307182"
            },
            {
                "campo": "vendedor",
                "etiqueta": "Vendedor",
                "valor": "0000S59"
            },
            {
                "campo": "codigo_cxc",
                "etiqueta": "Codigo CXC",
                "valor": "C00154497"
            }
        ]
    }
    

};

var contador = 0;
function generarJSON(tipoDocumento) {
    var baseJSON;
    switch (tipoDocumento) {
        case "DTE-03":
            baseJSON = jsonTemplates["DTE-03"];
            Swal.fire({
                title: 'Nuevo JSON Generado',
                text: 'El nuevo JSON ha sido generado con éxito.',
                icon: 'success'
            })

            var newJSON = JSON.parse(JSON.stringify(baseJSON));
            var randomControlNumber = Math.floor(Math.random() * 100);
            var randomGenerationCode = Math.floor(Math.random() * 1000);

            var randomGravada = Math.floor(Math.random() * 10000);
            var randomIVA = parseFloat((randomGravada * 1.13).toFixed(2));
            var montoLetras = numeroATexto(parseFloat(randomGravada * 1.13).toFixed(2));

            newJSON.identificacion.numeroControl = "DTE-03-ABC12" + randomControlNumber.toString().padStart(3, '1') + "-123456789012345";
            newJSON.identificacion.codigoGeneracion = "01234" + randomGenerationCode.toString().padStart(3, '0') + "-89AB-CDEF-0123-456789ABCDEF";


            newJSON.resumen.totalGravada = randomGravada;
            newJSON.resumen.subTotalVentas = randomGravada;
            newJSON.resumen.tributos[0].valor = parseFloat((randomGravada * 0.13).toFixed(2));
            newJSON.resumen.subTotal = randomGravada;
            newJSON.resumen.montoTotalOperacion = randomIVA;
            newJSON.resumen.totalPagar = randomIVA;
            newJSON.resumen.totalLetras = montoLetras;
            newJSON.resumen.pagos[0].montoPago = randomIVA;
            newJSON.cuerpoDocumento[0].precioUni = randomGravada;
            newJSON.cuerpoDocumento[0].ventaGravada = randomGravada;

            contador++;
            document.getElementById('contador').textContent = "JSONs generados: " + contador;

            var jsonOutput = JSON.stringify(newJSON, null, 2);
            document.getElementById('jsonOutput').textContent = jsonOutput;

            // Inicializar el botón de copiar al portapapeles
            var clipboard = new ClipboardJS('#copyBtn');
            break;
        case "DTE-01":
            baseJSON = jsonTemplates["DTE-01"];

            Swal.fire({
                title: 'Nuevo JSON Generado',
                text: 'El nuevo JSON ha sido generado con éxito.',
                icon: 'success'
            })

            var newJSON = JSON.parse(JSON.stringify(baseJSON));
            var randomControlNumber = Math.floor(Math.random() * 100);
            var randomGenerationCode = Math.floor(Math.random() * 1000);

            newJSON.identificacion.numeroControl = "DTE-01-00590" + randomControlNumber.toString().padStart(3, '2') + "-123456789012345";
            newJSON.identificacion.codigoGeneracion = "22C4C" + randomGenerationCode.toString().padStart(3, '0') + "-280F-4E51-9979-74BAE0D1368C";

            contador++;
            document.getElementById('contador').textContent = "JSONs generados: " + contador;

            var jsonOutput = JSON.stringify(newJSON, null, 2);
            document.getElementById('jsonOutput').textContent = jsonOutput;

            // Inicializar el botón de copiar al portapapeles
            var clipboard = new ClipboardJS('#copyBtn');

            break;
        case "DTE-11":
            baseJSON = jsonTemplates["DTE-11"];

            Swal.fire({
                title: 'Nuevo JSON Generado',
                text: 'El nuevo JSON ha sido generado con éxito.',
                icon: 'success'
            })

            var newJSON = JSON.parse(JSON.stringify(baseJSON));
            var randomControlNumber = Math.floor(Math.random() * 100);
            var randomGenerationCode = Math.floor(Math.random() * 1000);

            var randomGravada = Math.floor(Math.random() * 10000);
            var montoLetras = numeroATexto(parseFloat(randomGravada).toFixed(0));


            
            

            newJSON.identificacion.numeroControl = "DTE-11-ABC12" + randomControlNumber.toString().padStart(3, '2') + "-123456789012345";
            newJSON.identificacion.codigoGeneracion = "12345" + randomGenerationCode.toString().padStart(3, '0') + "-1234-1234-1234-123456789012";

            newJSON.cuerpoDocumento[0].ventaGravada = randomGravada;
            newJSON.cuerpoDocumento[0].precioUni = randomGravada;

            newJSON.resumen.totalGravada = randomGravada;
            newJSON.resumen.montoTotalOperacion = randomGravada;
            newJSON.resumen.totalPagar = randomGravada;
            newJSON.resumen.totalLetras = montoLetras;
            newJSON.resumen.flete = 0;
            newJSON.resumen.pagos[0].montoPago = randomGravada;
            


            contador++;
            document.getElementById('contador').textContent = "JSONs generados: " + contador;

            var jsonOutput = JSON.stringify(newJSON, null, 2);
            document.getElementById('jsonOutput').textContent = jsonOutput;

            // Inicializar el botón de copiar al portapapeles
            var clipboard = new ClipboardJS('#copyBtn');
        default:
            console.log("No se encontro el tipo de documento");
            break;
    }



}
//Obtiene el DTE que vamos a trabajar
document.getElementById('generateBtn').addEventListener('click', function () {
    var tipoDocumento = document.getElementById('tipoDocumento').value;
    generarJSON(tipoDocumento);
});

function numeroATexto(numero) {
    // Array con las palabras para los números del 0 al 19
    var unidades = ['', 'UN', 'DOS', 'TRES', 'CUATRO', 'CINCO', 'SEIS', 'SIETE', 'OCHO', 'NUEVE', 'DIEZ', 'ONCE', 'DOCE', 'TRECE', 'CATORCE', 'QUINCE', 'DIECISEIS', 'DIECISIETE', 'DIECIOCHO', 'DIECINUEVE'];

    // Array con las palabras para las decenas
    var decenas = ['', '', 'VEINTE', 'TREINTA', 'CUARENTA', 'CINCUENTA', 'SESENTA', 'SETENTA', 'OCHENTA', 'NOVENTA'];

    // Array con las palabras para las centenas
    var centenas = ['', 'CIENTO', 'DOSCIENTOS', 'TRESCIENTOS', 'CUATROCIENTOS', 'QUINIENTOS', 'SEISCIENTOS', 'SETECIENTOS', 'OCHOCIENTOS', 'NOVECIENTOS'];

    var miles = ['', 'MIL', 'DOSMIL', 'TRESMIL', 'CUATROMIL', 'CINCOMIL', 'SEISMIL', 'SIETEMIL', 'OCHOMIL', 'NUEVEMIL'];

    // Función auxiliar para convertir números menores a 1000 en palabras
    function convertirNumeroMenorMil(numero) {
        if (numero < 20) {
            return unidades[numero];
        } else if (numero < 100) {
            return decenas[Math.floor(numero / 10)] + ' ' + unidades[numero % 10];
        } else if (numero < 1000) {
            return centenas[Math.floor(numero / 100)] + ' ' + convertirNumeroMenorMil(numero % 100);
        } else {
            return miles[Math.floor(numero / 1000)] + ' ' + convertirNumeroMenorMil(numero % 1000);
        }
    }

    // Función para convertir la parte decimal en palabras
    function convertirDecimal(numero) {
        var decimal = Math.round(numero * 100);
        if (decimal > 0) {
            return ' CON ' + decimal + '/100';
        } else {
            return '';
        }
    }

    // Función principal para convertir números en palabras
    if (numero === 0) {
        return 'CERO DÓLARES';
    } else if (numero < 1) {
        // Si el número es menor a 1, convertimos los centavos a palabras
        return 'CERO DÓLARES' + convertirDecimal(numero);
    } else {
        return convertirNumeroMenorMil(Math.floor(numero)) + ' DÓLARES' + convertirDecimal(numero - Math.floor(numero));
    }
}
