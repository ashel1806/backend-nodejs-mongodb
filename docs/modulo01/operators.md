---
title: "Operadores"
slug: "/operators"
description: "Aritméticos, Lógicos, a nivel de bit (bitwise), etc"
sidebar_position: 5
---

## Operadores aritméticos

Los operadores aritméticos nos permiten realizar operaciones matemáticas.

```js title="Sintaxis"
operando1 operador operando2
```

| Operador | Descripción | Ejemplo |
| -------- | ----------- | ------- |
| `+` | Suma | `1 + 1` |
| `-` | Resta | `1 - 1` |
| `*` | Multiplicación | `1 * 1` |
| `/` | División | `1 / 1` |
| `%` | Módulo | `1 % 1` |
| `**` | Exponente | `1 ** 1` |

:::danger Cuidado

El operador `+` nos puede causar problemas, ya que también se utiliza para concatenar strings.

```js
1 + 1 // 2
"1" + "1" // "11"
"1" + 1 // "11"
```

Aquí, Javascript lo que hace es convertir ambos operandos a strings, es por ello que concatena ambos valores, en vez de sumarlos.

Algo similar sucede con el operador `-`:

```js
1 - 1 // 0
"2" - 1 // 1
"2" - "1" // 1
```

En este caso, Javascript convierte ambos operandos a números, y realiza la operación.

:::

## Operadores de asignación

Los operadores de asignación nos permiten asignar un valor a una variable.

```js title="Sintaxis"
variable operador valor
```

| Operador | Descripción | Ejemplo |
| -------- | ----------- | ------- |
| `=` | Asignación | `a = 1` |
| `+=` | Suma y asignación | `a += 13`  (a = a + 13) |
| `-=` | Resta y asignación | `a -= 15` (a = a - 15)|
| `*=` | Multiplicación y asignación | `a *= 1` (a = a * 1)|
| `/=` | División y asignación | `a /= 1` (a = a / 1)|
| `%=` | Módulo y asignación | `a %= 1` (a = a % 1)|
| `**=` | Exponente y asignación | `a **= 1` (a = a ** 1)|
| `++` | Incremento | `a++` (a = a + 1) |
| `--` | Decremento | `a--` (a = a - 1)|

## Operadores de comparación

Los operadores de comparación nos permiten comparar dos valores.

```js title="Sintaxis"
operando1 operador operando2
```

| Operador | Descripción | Ejemplo | Resultado |
| -------- | ----------- | ------- | --------- |
| `==` | Igual a | `1 == "1"` | `true` |
| `===` | Igual a y del mismo tipo | `"1" === 1` | `true` |
| `!=` | Diferente a | `1 != "1"` | `false` |
| `!==` | Diferente a o de diferente tipo | `"1" !== 1` | `true` |
| `>` | Mayor que | `1 > 1` | `false` |
| `<` | Menor que | `1 < 1` | `false` |
| `>=` | Mayor o igual que | `1 >= 1` | `true` |
| `<=` | Menor o igual que | `1 <= 1` | `true` |

## Operadores lógicos

Los operadores lógicos nos permiten combinar dos o más expresiones.

```js title="Sintaxis"
expresion1 operador expresion2
```

| Operador | Descripción | Ejemplo | Resultado |
| -------- | ----------- | ------- | --------- |
| `&&` | AND (ambos operandos deben ser verdaderos) | `true && true` | `true` |
| &vert;&vert; | OR (si el operando de la izquierda es falso, devolvera el operando de la derecha)| `false` &vert;&vert; `1` | `1` |
| `!` | NOT (invertimos el operador) | `!true` | `false` |

