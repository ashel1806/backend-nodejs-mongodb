---
title: 'Conceptos básicos'
slug: '/mongodb-basics'
sidebar_position: 2
---

## Documentos

MongoDB almacena los datos en documentos BSON (Binary JSON) que siguen el formato JSON. Cada documento es una unidad individual que contiene un conjunto de campos con sus respectivos valores. Los documentos se agrupan en colecciones, que son conjuntos lógicos de documentos relacionados.

```json
{
  "_id": ObjectId("615b01be86e36a7af996e3a5"),
  "nombre": "Juan",
  "edad": 30,
  "ciudad": "Barcelona",
  "intereses": ["programación", "viajes", "fotografía"]
}
```

En este caso, `_id` es un campo especial que actúa como identificador único para el documento.

### Flexibilidad del esquema

Una de las ventajas clave de MongoDB es su esquema flexible. A diferencia de las bases de datos relacionales, en las que se requiere un esquema predefinido y rígido, MongoDB permite que los documentos dentro de una colección tengan estructuras diferentes. Esto significa que no todos los documentos en una colección necesitan tener los mismos campos.

La flexibilidad del esquema en MongoDB permite una fácil evolución y adaptación de la base de datos a medida que los requisitos cambian con el tiempo. Los documentos pueden ser modificados y enriquecidos sin requerir alteraciones costosas en el esquema de la base de datos.

### Operaciones CRUD

MongoDB proporciona una variedad de operaciones para interactuar con los documentos almacenados:

- **Inserción**: Se pueden insertar nuevos documentos en una colección utilizando el comando `insertOne` o `insertMany`, según se inserte un solo documento o múltiples documentos a la vez.

- **Consulta**: La operación de consulta se realiza utilizando el comando `find`, que permite buscar documentos que cumplan ciertos criterios. Es posible especificar filtros y condiciones de búsqueda para obtener los resultados deseados.

- **Actualización**: MongoDB proporciona varias operaciones de actualización, como `updateOne` y `updateMany`, para modificar documentos existentes. Se pueden actualizar campos específicos, agregar nuevos campos o incluso reemplazar todo el documento.

- **Eliminación**: La eliminación de documentos se realiza utilizando el comando `deleteOne` o `deleteMany`, según se elimine un documento o varios documentos que cumplan ciertos criterios.

Estas operaciones básicas ofrecen una amplia gama de posibilidades para manipular y trabajar con documentos en MongoDB.

## Tipos de datos

### Tipos de datos básicos

MongoDB ofrece una variedad de tipos de datos básicos para representar información en tus documentos:

- **Cadenas de texto**: Utilizadas para almacenar valores alfanuméricos, como nombres, direcciones o descripciones. Se representan como cadenas de caracteres UTF-8 y pueden tener una longitud máxima de 16 MB.

- **Números**: MongoDB admite varios tipos numéricos, incluyendo enteros de 32 bits (int), enteros de 64 bits (long), números de punto flotante de 64 bits (double), y números de punto flotante de precisión decimal (decimal).

- **Booleanos**: Representan los valores lógicos de verdadero (true) o falso (false). Son útiles para evaluar condiciones o expresar estados binarios.

- **Fechas**: Los valores de fecha y hora se almacenan como objetos Date en MongoDB. Estos objetos permiten representar y manipular fechas y horarios de forma eficiente.

- **Arreglos**: Los arreglos en MongoDB contienen una secuencia ordenada de elementos. Pueden contener valores de diferentes tipos, como cadenas de texto, números o incluso otros documentos BSON. Los arreglos son útiles para representar listas o colecciones de elementos relacionados.

- **Documentos anidados**: Los documentos en MongoDB pueden anidarse unos dentro de otros, lo que permite una estructura de datos jerárquica. Puedes representar objetos complejos con múltiples niveles de anidamiento y relaciones entre ellos.

### Tipos de datos adicionales

Además de los tipos de datos básicos, MongoDB ofrece otros tipos de datos adicionales que brindan funcionalidades específicas:

- **ObjectId**: Es un tipo especial de identificador único de 12 bytes generado por MongoDB. Se utiliza como valor predeterminado para el campo _id en cada documento. Los ObjectId son útiles para garantizar la unicidad de los documentos y facilitar la indexación y búsqueda eficiente.

- **BinData**: Permite almacenar datos binarios, como imágenes o archivos, dentro de un documento BSON. Puedes especificar el subtipo de BinData para indicar el formato o contenido específico del dato binario.

- **Null**: Representa la ausencia de valor. Puedes utilizar el valor null en un campo para indicar que no hay un valor válido presente.

- **Regex**: MongoDB admite expresiones regulares (Regex) como tipo de dato. Puedes utilizar expresiones regulares para realizar consultas avanzadas y filtrar datos basados en patrones de texto específicos.

### Tipos de datos geo-espaciales

MongoDB también ofrece tipos de datos especializados para almacenar y consultar información geoespacial. Estos tipos de datos incluyen:

- **GeoPoint**: Permite representar puntos en un plano bidimensional utilizando coordenadas geográficas (latitud y longitud).

- **GeoJSON**: Proporciona una estructura de datos estándar para representar objetos geoespaciales complejos, como polígonos, líneas o colecciones de puntos.

- **Índices geoespaciales**: MongoDB ofrece índices especiales para mejorar la eficiencia de las consultas geoespaciales, permitiendo búsquedas rápidas y cercanas basadas en la ubicación.

## Identificadores únicos

MongoDB utiliza identificadores únicos para garantizar la unicidad de cada documento almacenado. Estos identificadores, conocidos como ObjectIds, son generados automáticamente por MongoDB y se utilizan como valores predeterminados para el campo `_id` en cada documento.

Un ObjectId es un identificador único de 12 bytes (24 caracteres hexadecimales) generado por MongoDB. Está compuesto por diferentes componentes que garantizan su unicidad:

- **Timestamp**: Los primeros 4 bytes del ObjectId representan la marca de tiempo en segundos desde la época Unix. Esto permite que los ObjectIds se generen en orden cronológico y facilita la indexación y el ordenamiento de los documentos por tiempo de creación.

- **ID de la máquina**: Los siguientes 3 bytes identifican de manera única la máquina o nodo que genera el ObjectId. Esto ayuda a evitar colisiones entre identificadores generados por diferentes instancias de MongoDB en un clúster o entorno distribuido.

- **ID del proceso**: Los siguientes 2 bytes representan el identificador del proceso que genera el ObjectId. Esto garantiza que los identificadores sean únicos incluso si múltiples procesos están generando documentos simultáneamente.

- **Contador**: Los últimos 3 bytes del ObjectId son un contador que se incrementa para cada ObjectId generado en un mismo milisegundo. Esto resuelve las colisiones que podrían ocurrir si se generan múltiples identificadores en el mismo instante.

Cuando insertas un nuevo documento en una colección de MongoDB sin especificar un valor para el campo `_id`, MongoDB generará automáticamente un ObjectId único y lo asignará al documento. Este proceso es transparente y no requiere intervención manual.

Puedes utilizar ObjectIds para realizar búsquedas y consultas precisas sobre documentos específicos. Además, MongoDB proporciona operaciones para generar ObjectIds personalizados si necesitas generar identificadores con requisitos específicos.
