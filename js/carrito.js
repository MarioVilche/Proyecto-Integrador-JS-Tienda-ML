// ========================================
// EXAMEN DE JAVASCRIPT - CARRITO DE COMPRAS SIMPLIFICADO
// PÁGINA DEL CARRITO
// ========================================

// INSTRUCCIONES PARA EL ESTUDIANTE:
// 1. Completa las funciones marcadas con "TODO"
// 2. Lee los comentarios cuidadosamente para entender qué hacer
// 3. Puedes usar console.log() para debuggear
// 4. El HTML y CSS ya están listos - enfócate solo en JavaScript

// ==========================================
// VARIABLES GLOBALES
// ==========================================

// TODO: Estas variables ya están declaradas para ayudarte
let carrito = []; // Array para guardar productos del carrito

// TODO: Referencias a elementos del DOM que necesitarás usar
const listaCarrito = document.getElementById('cartItems');
const seccionVacia = document.getElementById('emptyCart');
const seccionResumen = document.getElementById('summarySection');
const subtotalElemento = document.getElementById('subtotalPrice');
const totalElemento = document.getElementById('totalPrice');
const contadorItems = document.getElementById('itemCount');

// ==========================================
// FUNCIÓN 1: CARGAR CARRITO DESDE LOCALSTORAGE (15 PUNTOS)
// ==========================================

/**
 * TODO: Completa esta función para cargar el carrito desde localStorage
 * 
 * PASOS A SEGUIR:
 * 1. Obtén los datos del carrito desde localStorage con la clave 'carrito'
 * 2. Si hay datos, conviértelos de JSON a array
 * 3. Si no hay datos, usa un array vacío
 * 4. Guarda el resultado en la variable global 'carrito'
 * 5. Llama a mostrarProductosCarrito() para mostrar los productos
 * 6. Llama a actualizarResumenCompra() para calcular totales
 * 
 * PUNTOS EVALUADOS:
 * - Uso correcto de localStorage.getItem() (3 pts)
 * - Manejo correcto de JSON.parse() (4 pts)
 * - Manejo de caso cuando no hay datos (3 pts)
 * - Llamadas a funciones de actualización (5 pts)
 */
function cargarCarrito() {
    try {
        // TODO: Escribe tu código aquí
        // Ejemplo: const datosGuardados = localStorage.getItem('carrito');
        
        
        console.log('Carrito cargado:', carrito);
        
        // TODO: Llamar funciones para actualizar la interfaz
        
    } catch (error) {
        console.error('Error al cargar carrito:', error);
        carrito = [];
    }
}

// ==========================================
// FUNCIÓN 2: MOSTRAR PRODUCTOS DEL CARRITO (15 PUNTOS)
// ==========================================

/**
 * TODO: Completa esta función para mostrar los productos en el carrito
 * 
 * PASOS A SEGUIR:
 * 1. Limpia el contenido anterior de listaCarrito
 * 2. Si el carrito está vacío, muestra la sección vacía
 * 3. Si hay productos, recorre el array carrito
 * 4. Para cada producto, crea un elemento HTML con la información
 * 5. Agrega botones para cambiar cantidad y eliminar
 * 
 * ESTRUCTURA HTML DE CADA PRODUCTO:
 * <div class="cart-item">
 *   <img src="URL" alt="NOMBRE">
 *   <div class="item-info">
 *     <h3>NOMBRE</h3>
 *     <p>Precio: $PRECIO</p>
 *     <div class="quantity-controls">
 *       <button onclick="cambiarCantidad(INDICE, -1)">-</button>
 *       <span>CANTIDAD</span>
 *       <button onclick="cambiarCantidad(INDICE, 1)">+</button>
 *     </div>
 *   </div>
 *   <button onclick="eliminarDelCarrito(INDICE)">Eliminar</button>
 * </div>
 * 
 * PUNTOS EVALUADOS:
 * - Limpieza del contenido anterior (2 pts)
 * - Manejo correcto de carrito vacío (3 pts)
 * - Creación correcta de elementos HTML (5 pts)
 * - Botones con onclick funcionando (5 pts)
 */
function mostrarProductosCarrito() {
    // TODO: Paso 1: Limpiar contenido anterior
    
    
    // TODO: Paso 2: Verificar si el carrito está vacío
    if (carrito.length === 0) {
        // Mostrar mensaje de carrito vacío
        seccionVacia.style.display = 'block';
        seccionResumen.style.display = 'none';
        return;
    }
    
    // TODO: Paso 3: Si hay productos, ocultar mensaje vacío
    seccionVacia.style.display = 'none';
    seccionResumen.style.display = 'block';
    
    // TODO: Paso 4: Recorrer productos y crear elementos
    carrito.forEach((producto, indice) => {
        // TODO: Crear elemento para cada producto
        
        
    });
}

// ==========================================
// FUNCIÓN 3: CAMBIAR CANTIDAD DE PRODUCTOS (15 PUNTOS)
// ==========================================

/**
 * TODO: Completa esta función para cambiar la cantidad de un producto
 * 
 * PASOS A SEGUIR:
 * 1. Verifica que el índice sea válido
 * 2. Calcula la nueva cantidad
 * 3. Si la nueva cantidad es 0 o menor, elimina el producto
 * 4. Si no, actualiza la cantidad en el carrito
 * 5. Guarda el carrito actualizado en localStorage
 * 6. Actualiza la interfaz
 * 
 * PARÁMETROS:
 * - indice: posición del producto en el array carrito
 * - cambio: +1 para aumentar, -1 para disminuir
 * 
 * PUNTOS EVALUADOS:
 * - Validación de índice (3 pts)
 * - Cálculo correcto de nueva cantidad (3 pts)
 * - Manejo de cantidad <= 0 (3 pts)
 * - Actualización en localStorage (3 pts)
 * - Llamadas de actualización de interfaz (3 pts)
 */
function cambiarCantidad(indice, cambio) {
    // TODO: Escribe tu código aquí
    
    // Paso 1: Verificar índice válido
    
    
    // Paso 2: Calcular nueva cantidad
    
    
    // Paso 3: Manejar cantidad <= 0
    
    
    // Paso 4: Actualizar cantidad
    
    
    // Paso 5: Guardar en localStorage
    
    
    // Paso 6: Actualizar interfaz
    
}

// ==========================================
// FUNCIÓN 4: CALCULAR Y MOSTRAR TOTALES (15 PUNTOS)
// ==========================================

/**
 * TODO: Completa esta función para calcular el resumen de compra
 * 
 * PASOS A SEGUIR:
 * 1. Calcula el subtotal usando reduce() (precio × cantidad de cada producto)
 * 2. Cuenta el total de items usando reduce() (suma de todas las cantidades)
 * 3. Para este examen, el total es igual al subtotal (sin envío ni impuestos)
 * 4. Actualiza los elementos del DOM con los valores calculados
 * 
 * PUNTOS EVALUADOS:
 * - Uso correcto de reduce() para subtotal (5 pts)
 * - Uso correcto de reduce() para contar items (5 pts)
 * - Cálculo correcto del total (2 pts)
 * - Actualización correcta del DOM (3 pts)
 */
function actualizarResumenCompra() {
    // TODO: Paso 1: Calcular subtotal con reduce()
    // const subtotal = carrito.reduce((total, producto) => {
    //     return total + (producto.precio * producto.cantidad);
    // }, 0);
    
    
    // TODO: Paso 2: Contar total de items con reduce()
    
    
    // TODO: Paso 3: Para este examen simplificado, total = subtotal
    
    
    // TODO: Paso 4: Actualizar elementos del DOM
    // contadorItems.textContent = totalItems;
    // subtotalElemento.textContent = formatearPrecio(subtotal);
    // totalElemento.textContent = formatearPrecio(total);
    
}

// ==========================================
// FUNCIÓN 5: ELIMINAR PRODUCTO DEL CARRITO (10 PUNTOS)
// ==========================================

/**
 * TODO: Completa esta función para eliminar un producto del carrito
 * 
 * PASOS A SEGUIR:
 * 1. Verifica que el índice sea válido
 * 2. Elimina el producto del array usando splice()
 * 3. Guarda el carrito actualizado en localStorage
 * 4. Actualiza la interfaz
 * 
 * PUNTOS EVALUADOS:
 * - Validación de índice (2 pts)
 * - Uso correcto de splice() (3 pts)
 * - Actualización de localStorage (2 pts)
 * - Actualización de interfaz (3 pts)
 */
function eliminarDelCarrito(indice) {
    // TODO: Escribe tu código aquí
    
    // Paso 1: Verificar índice válido
    
    
    // Paso 2: Eliminar con splice()
    
    
    // Paso 3: Guardar en localStorage
    
    
    // Paso 4: Actualizar interfaz
    
    
    alert('Producto eliminado del carrito');
}

// ==========================================
// FUNCIÓN 6: VACIAR CARRITO COMPLETO (5 PUNTOS)
// ==========================================

/**
 * TODO: Completa esta función para vaciar todo el carrito
 * 
 * PASOS A SEGUIR:
 * 1. Confirma la acción con el usuario
 * 2. Vacía el array carrito
 * 3. Elimina los datos de localStorage
 * 4. Actualiza la interfaz
 */
function vaciarCarrito() {
    // TODO: Escribe tu código aquí
    if (confirm('¿Estás seguro de vaciar todo el carrito?')) {
        // TODO: Vaciar array y localStorage
        
        
        // TODO: Actualizar interfaz
        
        
        alert('Carrito vaciado');
    }
}

// ==========================================
// FUNCIÓN DE FORMATEO (YA ESTÁ LISTA - NO TOCAR)
// ==========================================

/**
 * Función para formatear precios en pesos colombianos
 * ESTA FUNCIÓN YA ESTÁ COMPLETA - PUEDES USARLA DIRECTAMENTE
 */
function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(precio);
}

// ==========================================
// INICIALIZACIÓN (YA ESTÁ LISTA - NO TOCAR)
// ==========================================

/**
 * Esta función se ejecuta cuando se carga la página
 * YA ESTÁ COMPLETA - NO TOCAR
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Cargando página del carrito...');
    
    // Cargar carrito al inicio
    cargarCarrito();
    
    // Event listener para botón de vaciar carrito
    const botonVaciar = document.getElementById('clearCartBtn');
    if (botonVaciar) {
        botonVaciar.addEventListener('click', vaciarCarrito);
    }
    
    console.log('Página del carrito cargada');
});

// ==========================================
// NOTAS IMPORTANTES PARA EL ESTUDIANTE
// ==========================================

/*
CONSEJOS PARA COMPLETAR EL EXAMEN:

1. ORDEN RECOMENDADO:
   - Primero completa cargarCarrito()
   - Luego mostrarProductosCarrito()
   - Después actualizarResumenCompra()
   - Luego cambiarCantidad()
   - Finalmente eliminarDelCarrito()

2. ARRAY CARRITO:
   Cada producto tiene esta estructura:
   {
     id: 1,
     nombre: "iPhone 14",
     precio: 899900,
     cantidad: 2,
     imagen: "https://..."
   }

3. MÉTODOS DE ARRAYS IMPORTANTES:
   - reduce() - para sumar precios y cantidades
   - splice() - para eliminar elementos
   - forEach() - para recorrer productos

4. LOCALSTORAGE:
   - Clave: 'carrito'
   - Valor: JSON string del array carrito
   - Siempre usar JSON.parse() al leer
   - Siempre usar JSON.stringify() al guardar

5. ELEMENTOS DEL DOM IMPORTANTES:
   - cartItems: contenedor de productos
   - emptyCart: mensaje cuando está vacío
   - summarySection: sección de totales
   - subtotalPrice: mostrar subtotal
   - totalPrice: mostrar total
   - itemCount: contador de items

6. FUNCIONES DE UTILIDAD:
   - formatearPrecio(numero) - formatea precios
   - Ya están las referencias del DOM declaradas

¡RECUERDA PROBAR CADA FUNCIÓN ANTES DE CONTINUAR!
*/