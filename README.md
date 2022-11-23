# Ambiente de Ghost
Haciendo uso de Microsoft Azure, se desplegó un servidor en donde se instaló Ghost:<br>
Versión 3.41.1: http://20.102.114.58/ghost <br>

# Integrantes del equipo 

Luis Fernando Santa - l.santa@uniandes.edu.co<br>
Luis Felipe García - lf.garciar1@uniandes.edu.co <br>
Milton Beltrán - mj.beltran37@uniandes.edu.co <br>
Diego Alejandro Ramírez - da.ramirez55@uniandes.edu.co

# Índice general

[Versiones de software requeridas](#versiones-de-software-requeridos-para-la-ejecución-de-los-proyectos)<br>
[Estructura del proyecto](#estructura-del-proyecto)<br>
[Instrucciones para ejecución](#instrucciones-para-ejecución-del-proyecto)<br>
[Descripción de funcionalidades](#funcionalidades)<br>
[Descripción de escenarios de pruebas](#escenarios-de-pruebas) <br>
[Estrategias de pruebas modificadas](#estrategias-de-pruebas-modificadas)

## Versiones de software requeridos para la ejecución de los proyectos

Ghost: 3.41.1<br>
Python: 3.10 <br>
Node: 14.20.1 <br>
npm: 6.14.17 <br>
xpath: ^2.0.1 <br>
Cypress: ^10.10.0 <br>
Google Chrome: 107.0.5304.107 (Build oficial) (64 bits) <br>
Windows: Windows 11 Home Single Language 22H2 64 bits <br>

## Estructura del proyecto
├── cypress <br>
├── estrategias-pruebas

## Instrucciones para ejecución del proyecto
Dado que la ejecución del proyecto completo para la semana 6 requiere múltiples comandos en diferentes carpetas, se creó un script (`script.py`) en Python que ejecuta por el usuario todos los comandos requeridos.

Siga los siguientes pasos para ejecutar el proyecto: <br>
* Clonar el repositorio con el comando: `https://github.com/DiegoAUniandes/pruebas-datos-aleatorios.git`
* Navegar a la raíz del repositorio: `cd pruebas-datos-aleatorios`
* Ejecutar el script de lanzamiento de todas las pruebas del proyecto: `python3 script.py`. Esta ejecución suele tomar algo más de 15 minutos, por favor no cancele el proceso.


## Funcionalidades

| Funcionalidad       | Descripción                                                                                                                                                                       |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Hacer log-in        | Como punto de partida para todas las pruebas E2E de Ghost es importante hacer log-in en el portal de administrador. Esta funcionalidad se encarga de realizar dicho proceso.      |
| Crear un post       | Esta función permite la creación de un post. La invocación de esta múltiples veces permite crear varios posts. Adicionalmente, se parametrizó el nombre y contenido de los posts. |
| Editar un post      | Esta función permite modificar el contenido de un post específico                                                                                                                 |
| Publicar un post    | Esta función publica un post. Es importante mencionar que un post sin publicar queda en estado ‘draft’, mientras que un post publicado queda en estado ‘published’                |
| Borrar un post      | Esta función borra un post. No tiene en cuenta el estado del post a borrar                                                                                                        |
| Crear un tag        | Esta función crea un tag.                                                                                                                                                         |
| Asociar un tag      | Esta función permite asociar un tag dos tipos de recursos diferentes: posts y páginas. A nivel de código son funciones independientes, pero como funcionalidad es la misma.       |
| Crear una página    | Esta función crea una página con un título y contenido que son parametrizables                                                                                                    |
| Publicar una página | Esta función se encarga de publicar una página. Al igual que los posts, las páginas publicadas quedan en estado ‘published’, mientras las no publicadas quedan en estado ‘draft’  |

## Escenarios de pruebas
Cada uno de los siguientes escenarios combina y prueba diferentes funcionalidades de la herramienta Ghost (en la versión mencionada previamente). 
En la descripción de cada escenario se indica el objetivo principal de la prueba y el listado de pasos y/o funcionalidades respectivas.


## Estrategias de pruebas modificadas
Esta semana para las dos estrategias de pruebas se decidió asignar tiempo de los desarrolladores en la construcción y desarrollo del proceso de automatización de VRT.<br>
Este proceso es relevante puesto que a mediano plazo significará un ahorro de tiempo y recursos importante. Adicionalmente será posible detectar cambios y posibles fallas que una persona probablemente no notaría a nivel visual en una UI. <br>
A continuación se encuentran los enlaces a las estrategias de pruebas actualizadas: <br>
[Estrategias de pruebas actualizadas](./estrategias-pruebas/)<br>
