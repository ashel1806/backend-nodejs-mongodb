---
title: 'NPM'
slug: '/npm'
sidebar_position: 3
---

# NPM (Node Package Manager)

## ¿Qué es NPM?

NPM es el sistema de manejo de paquetes predeterminado para Node.js. Permite a los desarrolladores instalar, actualizar y compartir paquetes de código reutilizable en sus proyectos. NPM también proporciona herramientas para administrar dependencias y versiones de paquetes.

## Verificar la instalación de NPM

Para utilizar NPM, primero debes tener Node.js instalado en tu sistema. Una vez que hayas instalado Node.js, NPM se instalará automáticamente. Puedes verificar la versión de NPM que tienes instalada escribiendo el siguiente comando en tu terminal:

```bash
npm -v
```

## Instalar paquetes

Para instalar un paquete con NPM, simplemente debemos escribir el siguiente comando en la terminal:

```bash
npm install <nombre-del-paquete>
```

Por ejemplo, si quisieramos instalar el paquete express, escribiriamos el siguiente comando:

```
npm install express
```

## Archivo package.json

El archivo `package.json` es un archivo JSON que contiene información sobre tu proyecto, incluyendo los paquetes que has instalado y sus versiones. Puedes crear este archivo manualmente o puedes crearlo automáticamente con el siguiente comando:

```bash
npm init
```

## Actualización de paquetes con NPM

Para actualizar un paquete con NPM, escribe el siguiente comando en tu terminal:

```bash
npm update <nombre-del-paquete>
```

Si quieres actualizar todos los paquetes instalados en tu proyecto, puedes utilizar el siguiente comando:

```bash
npm update
```

:::info Actualización de paquetes de forma manual

Si quieres actualizar un paquete de forma manual, puedes hacerlo editando el archivo `package.json` y cambiando la versión del paquete. Luego, puedes ejecutar el siguiente comando para instalar la nueva versión del paquete:

```bash
npm install
```

:::

## Desinstalación de paquetes con NPM

Para desinstalar un paquete con NPM, escribe el siguiente comando en tu terminal:

```bash
npm uninstall <nombre-del-paquete>
```

## Gestión de dependencias con NPM

NPM hace que sea fácil administrar las dependencias de tu proyecto. Puedes agregar dependencias a tu proyecto utilizando el siguiente comando:

```bash
npm install <nombre-del-paquete> --save
```

:::info Dependencias de desarrollo

El argumento `--save` agrega el paquete a la sección `dependencies` de tu archivo `package.json`. Si quieres agregar un paquete a la sección `devDependencies` (dependiencias de desarrollo), puedes utilizar el argumento `--save-dev`:

```bash
npm install <nombre-del-paquete> --save-dev
```

Cuando hablamos de dependencias de desarrollo nos referimos a paquetes que solo se utilizan durante el desarrollo de tu proyecto, como por ejemplo, paquetes de compilación o paquetes de testing.

:::

Esto agregará el paquete a tu archivo `package.json`, lo que significa que la dependencia se instalará automáticamente cuando alguien clone tu proyecto.

## Paquetes globales vs. locales

NPM te permite instalar paquetes de manera global o local. Los paquetes globales se instalan en tu computadora, mientras que los paquetes locales se instalan en tu proyecto actual. Para instalar un paquete de manera global, utiliza el siguiente comando:

```bash
npm install -g <nombre-del-paquete>
```

Para instalar un paquete de manera local, simplemente omite la bandera `-g`.
