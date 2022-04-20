### Escuela Colombiana de Ingeniería
### Arquitecturas de Software - ARSW

## Escalamiento en Azure con Maquinas Virtuales, Sacale Sets y Service Plans

## Desarrollado por:

+ José Manuel Gamboa Gómez
+ Zuly Valentina Vargas Ramírez

### Dependencias
* Cree una cuenta gratuita dentro de Azure. Para hacerlo puede guiarse de esta [documentación](https://azure.microsoft.com/es-es/free/students/). Al hacerlo usted contará con $100 USD para gastar durante 12 meses.
Antes de iniciar con el laboratorio, revise la siguiente documentación sobre las [Azure Functions](https://www.c-sharpcorner.com/article/an-overview-of-azure-functions/)

### Parte 0 - Entendiendo el escenario de calidad

Adjunto a este laboratorio usted podrá encontrar una aplicación totalmente desarrollada que tiene como objetivo calcular el enésimo valor de la secuencia de Fibonnaci.

**Escalabilidad**
Cuando un conjunto de usuarios consulta un enésimo número (superior a 1000000) de la secuencia de Fibonacci de forma concurrente y el sistema se encuentra bajo condiciones normales de operación, todas las peticiones deben ser respondidas y el consumo de CPU del sistema no puede superar el 70%.

### Escalabilidad Serverless (Functions)

1. Cree una Function App tal cual como se muestra en las  imagenes.

![](images/part3/part3-function-config.png)

![](images/part3/part3-function-configii.png)

Creación:
Se crea la Function App con las indicaciones dadas:

![Creacion1](images/solucion/creacion1.png)

![Creacion2](images/solucion/creacion2.png)

2. Instale la extensión de **Azure Functions** para Visual Studio Code.

![](images/part3/part3-install-extension.png)

Se busca la extensión y se instala:


![extension](images/solucion/azurevc.jpeg)

3. Despliegue la Function de Fibonacci a Azure usando Visual Studio Code. La primera vez que lo haga se le va a pedir autenticarse, siga las instrucciones.

![](images/part3/part3-deploy-function-1.png)

![](images/part3/part3-deploy-function-2.png)

Se despliega la aplicación haciendo uso de la extensión. Se selecciona la app correspondiente:

![despliegue](images/solucion/funcion.jpeg)

![despliegue](images/solucion/despliegue.jpeg)

4. Dirijase al portal de Azure y pruebe la function.

![](images/part3/part3-test-function.png)

Para solucionar los problemas del despliegue se instaló node y npm. Luego con npm se realizó la instalación de "big-integer" ya que Azure no reconoce este módulo. Una vez realizados estos pasos ubicados en la carpeta donde se encuentra la aplicación, localmente ejecutamos el comando npm install. Finalmente se despliega la aplicación en Azure. Ahora, desde Azure comprobamos que la ejecución se realizó correctamente:

![despliegue](images/solucion/install.jpeg)

![despliegue](images/solucion/Azure.jpeg)


5. Modifique la coleción de POSTMAN con NEWMAN de tal forma que pueda enviar 10 peticiones concurrentes. Verifique los resultados y presente un informe.


![postman](images/solucion/postman1.png)

Recuento de peticiones:

![recuento](images/solucion/rendimiento_SR.jpeg)

![memoria](images/solucion/memoria_SR.jpeg)


6. Cree una nueva Function que resuelva el problema de Fibonacci pero esta vez utilice un enfoque recursivo con memorización. Pruebe la función varias veces, después no haga nada por al menos 5 minutos. Pruebe la función de nuevo con los valores anteriores. ¿Cuál es el comportamiento?.



**Preguntas**

* ¿Qué es un Azure Function?

Azure Function es una solución en la nube de Azure que permite ejecutar y mantener en funcionamiento aplicaciones sin necesidad de configurar la infraestructura necesaria. De igual manera, Azure Function proporciona tantos o tan pocos recursos de cómputo como sea necesario para satisfacer la demanda de la aplicación.

* ¿Qué es serverless?
* ¿Qué es el runtime y que implica seleccionarlo al momento de crear el Function App?
* ¿Por qué es necesario crear un Storage Account de la mano de un Function App?
* ¿Cuáles son los tipos de planes para un Function App?, ¿En qué se diferencias?, mencione ventajas y desventajas de cada uno de ellos.
* ¿Por qué la memoization falla o no funciona de forma correcta?
* ¿Cómo funciona el sistema de facturación de las Function App?
* Informe
