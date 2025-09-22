# 🛒 Examen de JavaScript Frontend - Carrito de Compras

## 📝 Introducción

**Tiempo:** 1 hora y 30 minutos  
**Objetivo:** Desarrollar funcionalidades básicas de un carrito de compras utilizando JavaScript, DOM, eventos, localStorage, JSON y fetch.

## 📋 Temas evaluados
- **Manipulación del DOM** - Crear elementos dinámicamente
- **Eventos** - Manejar clicks y formularios  
- **Arrays** - Filtrar, mapear y reducir datos
- **LocalStorage** - Guardar y recuperar datos
- **JSON** - Parsear y manipular datos
- **Fetch** - Cargar datos desde archivo JSON

## 📂 Archivos proporcionados

- **index.html:** Página principal (ya funcional)
- **carrito.html:** Página del carrito (ya funcional)
- **data/productos.json:** 8 productos para cargar
- **js/productos.js:** Archivo con TODOs a completar
- **js/carrito.js:** Archivo con TODOs a completar

## 🎯 Tareas a realizar (90 minutos)

### PARTE 1: Productos (45 minutos)

**1.1 Cargar productos con fetch (10 puntos)**
- Completar función `cargarProductos()` 
- Usar fetch para leer `productos.json`
- Mostrar productos en el grid

**1.2 Mostrar productos en el DOM (15 puntos)**
- Completar función `mostrarProductos()`
- Crear tarjetas HTML para cada producto
- Mostrar nombre, precio e imagen

**1.3 Funcionalidad de carrito (20 puntos)**
- Completar función `agregarAlCarrito()`
- Guardar productos en localStorage como JSON
- Actualizar contador del carrito

### PARTE 2: Carrito (45 minutos)

**2.1 Cargar carrito desde localStorage (15 puntos)**
- Completar función `cargarCarrito()`
- Recuperar datos del localStorage
- Parsear JSON y mostrar productos

**2.2 Gestionar cantidades (15 puntos)**
- Completar función `cambiarCantidad()`
- Botones +/- para modificar cantidades
- Actualizar localStorage

**2.3 Calcular totales (15 puntos)**
- Completar función `actualizarResumenCompra()`
- Calcular subtotal usando reduce()
- Mostrar total en la interfaz

## 📊 Criterios de evaluación y puntajes detallados

### PARTE 1: Página de Productos (45 puntos)

#### 1.1 Función `cargarProductos()` - 10 puntos
| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **Uso de fetch()** | 3 pts | Implementa fetch('data/productos.json') correctamente |
| **Manejo de promesas** | 3 pts | Usa .then()/.catch() o async/await adecuadamente |
| **Conversión a JSON** | 2 pts | Aplica .json() o response.json() |
| **Llamada a mostrarProductos()** | 2 pts | Ejecuta función para mostrar productos |

**Niveles de evaluación:**
- ✅ **Excelente (9-10 pts):** Función completa, sin errores, maneja excepciones
- ✅ **Bueno (7-8 pts):** Función funciona pero falta manejo de errores
- ✅ **Regular (5-6 pts):** Función parcialmente implementada
- ❌ **Deficiente (0-4 pts):** No implementa fetch o no funciona

#### 1.2 Función `mostrarProductos()` - 15 puntos
| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **Limpieza del DOM** | 2 pts | Limpia contenido anterior del grid |
| **Uso de createElement/innerHTML** | 5 pts | Crea elementos HTML dinámicamente |
| **Mostrar datos del producto** | 4 pts | Imagen, nombre y precio visibles |
| **Botones funcionales** | 4 pts | onclick="agregarAlCarrito(id)" funciona |

**Niveles de evaluación:**
- ✅ **Excelente (13-15 pts):** Todos los productos se muestran correctamente
- ✅ **Bueno (10-12 pts):** Productos se muestran pero falta algún dato
- ✅ **Regular (7-9 pts):** Muestra productos básicos sin formato
- ❌ **Deficiente (0-6 pts):** No muestra productos o genera errores

#### 1.3 Función `agregarAlCarrito()` - 20 puntos
| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **Uso de find()** | 3 pts | Busca producto por ID correctamente |
| **Lógica de existencia** | 4 pts | Verifica si producto ya está en carrito |
| **Manejo de cantidades** | 4 pts | Incrementa cantidad o agrega nuevo |
| **localStorage con JSON** | 5 pts | Guarda/lee datos con stringify/parse |
| **Actualizar contador** | 4 pts | Llama a actualizarContadorCarrito() |

**Niveles de evaluación:**
- ✅ **Excelente (18-20 pts):** Funcionalidad completa, maneja todos los casos
- ✅ **Bueno (14-17 pts):** Funciona pero no maneja duplicados
- ✅ **Regular (10-13 pts):** Agrega productos pero no persiste datos
- ❌ **Deficiente (0-9 pts):** No funciona o genera errores

### PARTE 2: Página del Carrito (55 puntos)

#### 2.1 Función `cargarCarrito()` - 15 puntos
| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **localStorage.getItem()** | 3 pts | Obtiene datos del localStorage |
| **JSON.parse()** | 4 pts | Convierte string a array correctamente |
| **Manejo de datos vacíos** | 3 pts | Inicializa array vacío si no hay datos |
| **Llamadas de actualización** | 5 pts | Ejecuta mostrarProductos() y actualizarResumen() |

#### 2.2 Función `mostrarProductosCarrito()` - 15 puntos
| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **Limpieza del DOM** | 2 pts | Limpia lista anterior |
| **Manejo de carrito vacío** | 3 pts | Muestra mensaje cuando no hay productos |
| **Creación de elementos** | 5 pts | Genera HTML para cada producto |
| **Botones con onclick** | 5 pts | Botones +/- y eliminar funcionan |

#### 2.3 Función `cambiarCantidad()` - 15 puntos
| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **Validación de índice** | 3 pts | Verifica que el índice sea válido |
| **Cálculo de nueva cantidad** | 3 pts | Suma/resta cantidad correctamente |
| **Manejo de cantidad <= 0** | 3 pts | Elimina producto si cantidad es 0 |
| **Actualización localStorage** | 3 pts | Guarda cambios en localStorage |
| **Actualización interfaz** | 3 pts | Refresca vista del carrito |

#### 2.4 Función `actualizarResumenCompra()` - 10 puntos
| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| **reduce() para subtotal** | 4 pts | Calcula precio total con reduce() |
| **reduce() para contar items** | 3 pts | Cuenta total de productos |
| **Actualización del DOM** | 3 pts | Muestra totales en la interfaz |

### Resumen por Categorías

#### JavaScript Básico (40 puntos)
- **Fetch API (10 pts):** Implementación correcta de fetch()
- **Manipulación DOM (15 pts):** createElement, appendChild, innerHTML
- **Eventos (15 pts):** onclick handlers y event listeners

#### Manejo de Datos (35 puntos)
- **Arrays (15 pts):** find(), reduce(), forEach(), splice()
- **JSON (10 pts):** parse() y stringify() correctos
- **localStorage (10 pts):** setItem() y getItem() funcionando

#### Funcionalidades (25 puntos)
- **Persistencia de datos (10 pts):** Carrito se mantiene entre páginas
- **Interactividad (10 pts):** Botones modifican datos correctamente
- **Cálculos (5 pts):** Matemáticas correctas en totales

## ✅ Funcionalidades mínimas requeridas

1. ✅ Cargar 8 productos desde JSON con fetch
2. ✅ Mostrar productos en grid con imagen, nombre y precio
3. ✅ Botón "Agregar al carrito" que funcione
4. ✅ Contador de productos en header del carrito
5. ✅ Página carrito que muestre productos guardados
6. ✅ Botones +/- para cambiar cantidades
7. ✅ Cálculo automático de subtotal y total

## 🚨 Restricciones de tiempo

- **No implementar:** Sistema de filtros complejo
- **No implementar:** Formulario de checkout
- **No implementar:** Validaciones avanzadas
- **No implementar:** Animaciones complejas

## 💡 Consejos importantes

1. **Lee todos los TODOs** antes de empezar
2. **Completa las funciones en orden** sugerido
3. **Usa console.log()** para debuggear
4. **Testea cada función** antes de continuar
5. **El HTML y CSS ya están listos** - enfócate en JS

## 🔧 Tecnologías permitidas

- **JavaScript ES6+** únicamente
- **Métodos de arrays:** map, filter, reduce, forEach
- **APIs nativas:** fetch, localStorage, JSON
- **DOM:** querySelector, createElement, appendChild

## 📚 Recursos permitidos

- Documentación MDN de JavaScript
- Consultas de sintaxis específica en internet
- **NO está permitido:** Usar librerías o utilizar IAs de completado completo

## ✅ Funcionalidades que se evaluarán

### Checklist de verificación:
- [ ] Productos se cargan desde JSON usando fetch()
- [ ] Productos se muestran en grid con imagen, nombre y precio
- [ ] Botón "Agregar al carrito" funciona correctamente
- [ ] Contador del carrito se actualiza automáticamente
- [ ] Carrito muestra productos agregados desde localStorage
- [ ] Botones +/- modifican cantidades correctamente
- [ ] Se pueden eliminar productos del carrito
- [ ] Totales se calculan correctamente usando reduce()
- [ ] Datos persisten entre páginas usando localStorage
- [ ] No hay errores en la consola del navegador

## ⚠️ Aspectos importantes a considerar

### Métodos obligatorios que debes usar:
- **fetch()** - Para cargar productos.json
- **find()** - Para buscar productos por ID
- **reduce()** - Para calcular totales y contar items
- **JSON.parse()** y **JSON.stringify()** - Para localStorage
- **createElement()** o **innerHTML** - Para crear elementos del DOM

### Errores que debes evitar:
- No manejar casos cuando localStorage está vacío
- No actualizar la interfaz después de modificar datos
- No usar los métodos de arrays requeridos
- Dejar errores de JavaScript en la consola
- No persistir datos entre páginas

## ⏱️ Distribución de tiempo sugerida

- **15 min:** Revisar código y planificar
- **30 min:** Completar funciones de productos  
- **30 min:** Completar funciones de carrito
- **15 min:** Testing y correcciones finales

## 💡 Consejos finales para el examen

1. **Lee todos los comentarios TODO** antes de empezar a programar
2. **Usa console.log()** frecuentemente para debuggear tus funciones
3. **Prueba cada función** individualmente antes de continuar
4. **Verifica localStorage** en las DevTools del navegador
5. **El HTML y CSS ya están completos** - enfócate solo en JavaScript
6. **Sigue el orden sugerido** de las funciones para evitar dependencias
7. **Consulta la documentación MDN** si necesitas sintaxis específica

¡Buena suerte con tu examen! 🍀

