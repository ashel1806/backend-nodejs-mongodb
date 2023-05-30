---
title: 'Configuración'
slug: '/mongodb-setup'
sidebar_position: 3
---

# Configurando nuestro entorno

En esta parte del curso vamos a ver como podemos configurar un entorno para poder realizar algunas operaciones básicas en MongoDB, para ello vamos a usar [Mongo Atlas](https://www.mongodb.com/es/atlas/database) y [MongoDB Compass](https://www.mongodb.com/products/compass).

## Creando un clúster en MongoAtlas

Un clúster es un conjunto de servidores que almacenan tus datos, es decir, nos permite crear una instancia de MongoDB en la nube. En Mongo Atlas puedes crear un clúster de forma gratuita, para ello debes seguir los siguientes pasos:

1. Crea una cuenta en [Mongo Atlas](https://www.mongodb.com/es/atlas/database).

2. Crea un nuevo clúster, para ello debes hacer click en el botón "Build a Cluster".

<p align="center">
  <img src="https://fullstackopen.com/static/eb76cc9c7abe028a28fd91fddac12466/5a190/57.png" />
</p>

3. Elegimos AWS como provider y Sao Paulo como región

<p align="center">
  <img src="./img/modulo07/provider_region.png" />
</p>

Esperamos a que el clúster este listo. Esto puede demorar entre 5-10 minutos.

:::warning Atención!

Solo podemos continuar si nuestro clúster está listo.

:::

4. Una vez creado nuestro clúster, nos dirigimos a la pestaña **Database Access**

<p align="center">
  <img src="https://fullstackopen.com/static/b9787b3e950ae3acdd6e8c24b6c41597/5a190/59.png" />
</p>

5. Creamos un usuario nuevo y le damos permisos de lectura y escritura en nuestra base de datos.

<p align="center">
  <img src="https://fullstackopen.com/static/df119e4306c0102df432e1d9d75ba285/5a190/60.png" />
</p>

6. Nos vamos a la pestaña **Network Access**

<p align="center">
  <img src="https://fullstackopen.com/static/28d10595fa6b7b4bc2c12f70403355e3/5a190/61ea.png" />
</p>

Y permitimos el acceso desde cualquier IP (solo por practicidad).

<p align="center">
  <img src="https://fullstackopen.com/static/6eb9d9ccbbd931b09258a5b6944da209/5a190/62.png" />
</p>

7. Una vez realizados estos pasos ya podremos conectarnos a nuestro clúster

<p align="center">
  <img src="https://fullstackopen.com/static/106727b23b1a23b511fc9a7377fb293c/5a190/63ea.png" />
</p>

8. Damos click a **Connect your application** y copiamos la cadena de conexión.

<p align="center">
  <img src="https://fullstackopen.com/static/a1f4de9016f8c55bb05eedbd1eb7c5c6/5a190/64ea.png" />
</p>


La dirección que obtenemos deber seguir la siguiente estructura:

```
mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
```

Con esta cadena de conexión podremos conectarnos a nuestro clúster desde **cualquier aplicación**.
