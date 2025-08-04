# 📚 Sistema de Documentos en Clases

## 🎯 Descripción

El sistema de clases ahora incluye soporte para documentos con contenido HTML o Markdown que se pueden mostrar de tres maneras diferentes: en un popup modal, como un elemento expandible, o directamente en la página. Esto permite al profesor crear documentación detallada de cada clase directamente en el sistema.

## ✨ Características

- **Soporte para Markdown y HTML**: Los documentos pueden escribirse en Markdown o HTML
- **Tres opciones de visualización**:
  - **Modal**: Popup responsivo que se adapta a diferentes tamaños de pantalla
  - **Expandible**: Elemento `<details><summary>` que se puede expandir/contraer
  - **Inline**: Contenido mostrado directamente en la página
- **Navegación intuitiva**: El modal se puede cerrar con el botón X, haciendo clic fuera o con la tecla Escape
- **Estilos consistentes**: Usa los mismos estilos que el sistema de blogs
- **Icono distintivo**: Los documentos tienen un icono 📄 para identificarlos fácilmente

## 📝 Cómo Crear un Documento

### 1. Estructura del Material

```typescript
{
  name: '📚 Documentación de la Clase - Conceptos Básicos',
  type: 'document',
  fileType: 'document',
  icon: 'document',
  format: 'markdown', // 'markdown' o 'html'
  showContent: 'modal', // 'modal', 'details', o 'inline'
  content: `
# Título del Documento

## Subtítulo

Este es el contenido del documento en **Markdown**.

### Lista de elementos:
- Elemento 1
- Elemento 2
- Elemento 3

> **Nota importante**: Esta es una cita destacada.

\`\`\`javascript
// Ejemplo de código
function ejemplo() {
  console.log('Hola mundo');
}
\`\`\`
  `
}
```

### 2. Ejemplo con HTML

```typescript
{
  name: '📋 Guía Práctica - Primeros Pasos',
  type: 'document',
  fileType: 'document',
  icon: 'document',
  format: 'html',
  showContent: 'details', // Se mostrará como elemento expandible
  content: `
<h2>Guía Práctica: Primeros Pasos</h2>

<p>Esta guía te ayudará a comenzar con el estudio de manera práctica.</p>

<h3>🎯 Objetivos de Aprendizaje</h3>
<ul>
  <li>Comprender los conceptos fundamentales</li>
  <li>Identificar diferentes tipos</li>
  <li>Reconocer casos de uso reales</li>
</ul>

<div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
  <h4>Actividad 1: Investigación</h4>
  <p>Investiga sobre 3 empresas que usen esta tecnología.</p>
</div>
  `
}
```

## 🎨 Propiedades del Documento

| Propiedad | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| `name` | string | Nombre del documento | ✅ |
| `type` | string | Debe ser `'document'` | ✅ |
| `fileType` | string | Debe ser `'document'` | ✅ |
| `icon` | string | Icono del documento (opcional) | ❌ |
| `format` | string | `'markdown'` o `'html'` | ✅ |
| `showContent` | string | `'modal'`, `'details'`, o `'inline'` (opcional, por defecto: `'modal'`) | ❌ |
| `content` | string | Contenido del documento | ✅ |

## 📖 Sintaxis Markdown Soportada

### Títulos
```markdown
# Título Principal
## Subtítulo
### Sub-subtítulo
```

### Texto
```markdown
**Texto en negrita**
*Texto en cursiva*
`código en línea`
```

### Listas
```markdown
- Lista con viñetas
- Otro elemento

1. Lista numerada
2. Segundo elemento
```

### Citas
```markdown
> Esta es una cita destacada
```

### Código
```markdown
```javascript
// Bloque de código
function ejemplo() {
  return 'Hola mundo';
}
```
```

### Enlaces
```markdown
[Texto del enlace](https://ejemplo.com)
```

## 🎨 Opciones de Visualización

### 1. Modal (`showContent: 'modal'`)
- **Descripción**: Muestra el contenido en un popup modal
- **Uso**: Ideal para documentos largos o que requieren atención completa
- **Características**:
  - Se puede cerrar con X, clic fuera, o tecla Escape
  - Fondo oscuro que bloquea la interacción
  - Scroll interno si el contenido es muy largo
  - Responsivo para todos los dispositivos

### 2. Expandible (`showContent: 'details'`)
- **Descripción**: Muestra el contenido en un elemento `<details><summary>` expandible
- **Uso**: Perfecto para documentos que el usuario puede querer consultar rápidamente
- **Características**:
  - Se expande/contrae al hacer clic
  - Mantiene el contenido visible en la página
  - No interrumpe el flujo de navegación
  - Ideal para referencias rápidas

### 3. Inline (`showContent: 'inline'`)
- **Descripción**: Muestra el contenido directamente en la página
- **Uso**: Mejor para documentos cortos o que deben estar siempre visibles
- **Características**:
  - Contenido siempre visible
  - No requiere interacción del usuario
  - Se integra naturalmente con el flujo de la página
  - Perfecto para resúmenes o información esencial

## 🎨 Sintaxis HTML Soportada

Puedes usar cualquier elemento HTML válido:

```html
<h1>, <h2>, <h3>, <h4>, <h5>, <h6> - Títulos
<p> - Párrafos
<ul>, <ol>, <li> - Listas
<strong>, <em> - Énfasis
<code>, <pre> - Código
<blockquote> - Citas
<a> - Enlaces
<div> - Contenedores
<span> - Texto en línea
```

### Estilos CSS Inline

Puedes usar estilos CSS inline para personalizar la apariencia:

```html
<div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
  <h4 style="color: #2563eb; margin-top: 0;">Título Personalizado</h4>
  <p style="color: #374151;">Contenido con estilo personalizado</p>
</div>
```

## 🔧 Funcionalidades del Modal

### Navegación
- **Botón X**: Cerrar el modal
- **Clic fuera**: Cerrar el modal
- **Tecla Escape**: Cerrar el modal
- **Botón "Cerrar"**: Cerrar el modal

### Características
- **Responsivo**: Se adapta a móviles, tablets y desktop
- **Scroll**: Contenido scrolleable si es muy largo
- **Overlay**: Fondo oscuro que bloquea la interacción con la página
- **Animación**: Fade in suave al abrir

## 📱 Ejemplos de las Tres Opciones de Visualización

### 1. Documento en Modal
```typescript
{
  name: '📚 Fundamentos de Bases de Datos',
  type: 'document',
  fileType: 'document',
  icon: 'document',
  format: 'markdown',
  showContent: 'modal', // Se abre en un popup modal
  content: `
# Fundamentos de Bases de Datos

## ¿Qué es una Base de Datos?

Una **base de datos** es una colección organizada de información estructurada, típicamente almacenada electrónicamente en un sistema informático.

### Características principales:

- **Persistencia**: Los datos se mantienen incluso cuando el sistema se apaga
- **Consistencia**: Los datos siguen reglas y restricciones definidas
- **Seguridad**: Control de acceso y protección de datos
- **Integridad**: Precisión y confiabilidad de los datos

## Tipos de Bases de Datos

### 1. Bases de Datos Relacionales
- **MySQL**: Muy popular para aplicaciones web
- **PostgreSQL**: Potente y con características avanzadas
- **SQLite**: Ligera, perfecta para aplicaciones móviles

### 2. Bases de Datos No Relacionales (NoSQL)
- **MongoDB**: Documentos JSON
- **Redis**: Almacenamiento en memoria
- **Cassandra**: Distribuida y escalable

## Ventajas de usar Bases de Datos

1. **Eficiencia**: Acceso rápido a la información
2. **Escalabilidad**: Puede crecer con las necesidades
3. **Concurrencia**: Múltiples usuarios pueden acceder simultáneamente
4. **Backup y Recuperación**: Protección contra pérdida de datos

> **Nota importante**: Una base de datos bien diseñada es fundamental para el éxito de cualquier aplicación.

## Próximos temas

En las siguientes clases veremos:
- Arquitectura de DBMS
- Modelo Entidad-Relación
- Normalización
- Consultas SQL básicas

\`\`\`sql
-- Ejemplo de consulta SQL básica
SELECT nombre, edad 
FROM usuarios 
WHERE edad > 18;
\`\`\`
  `
}
```

### 2. Documento Expandible
```typescript
{
  name: '📋 Guía Práctica - Primeros Pasos',
  type: 'document',
  fileType: 'document',
  icon: 'document',
  format: 'html',
  showContent: 'details', // Se muestra como elemento expandible
  content: `
<h2>Guía Práctica: Primeros Pasos</h2>

<p>Esta guía te ayudará a comenzar con el estudio de bases de datos de manera práctica.</p>

<h3>🎯 Objetivos de Aprendizaje</h3>
<ul>
  <li>Comprender los conceptos fundamentales</li>
  <li>Identificar diferentes tipos de bases de datos</li>
  <li>Reconocer casos de uso reales</li>
</ul>

<div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
  <h4>Actividad 1: Investigación</h4>
  <p>Investiga sobre 3 empresas que usen bases de datos y describe:</p>
  <ul>
    <li>¿Qué tipo de base de datos utilizan?</li>
    <li>¿Para qué la utilizan?</li>
    <li>¿Qué ventajas les proporciona?</li>
  </ul>
</div>
  `
}
```

### 3. Documento Inline
```typescript
{
  name: '📖 Resumen de Conceptos Clave',
  type: 'document',
  fileType: 'document',
  icon: 'document',
  format: 'markdown',
  showContent: 'inline', // Se muestra directamente en la página
  content: `
## Resumen de Conceptos Clave

### Base de Datos
- **Definición**: Colección organizada de información estructurada
- **Propósito**: Almacenar, gestionar y recuperar datos de manera eficiente

### DBMS (Database Management System)
- **Función**: Software que gestiona las bases de datos
- **Responsabilidades**:
  - Crear y mantener la base de datos
  - Proporcionar acceso seguro a los datos
  - Garantizar la integridad de los datos

### Tipos de Usuarios
1. **Administradores de BD**: Gestionan el sistema
2. **Diseñadores**: Crean la estructura de la BD
3. **Desarrolladores**: Crean aplicaciones que usan la BD
4. **Usuarios finales**: Consultan y modifican datos

### Ventajas de las Bases de Datos
- ✅ **Eficiencia**: Acceso rápido a la información
- ✅ **Escalabilidad**: Puede crecer con las necesidades
- ✅ **Seguridad**: Control de acceso y protección
- ✅ **Integridad**: Datos precisos y confiables
- ✅ **Concurrencia**: Múltiples usuarios simultáneos

> **Recordatorio**: Una base de datos bien diseñada es fundamental para el éxito de cualquier aplicación.
  `
}
```

## 🚀 Casos de Uso

### 1. Documentación de Clase
- Explicar conceptos teóricos
- Proporcionar ejemplos prácticos
- Incluir ejercicios y actividades

### 2. Guías de Estudio
- Resúmenes de temas
- Listas de verificación
- Recursos adicionales

### 3. Tutoriales
- Instrucciones paso a paso
- Capturas de pantalla
- Ejemplos de código

### 4. Evaluaciones
- Criterios de evaluación
- Rúbricas
- Ejemplos de trabajos

## 💡 Consejos de Uso

### Elección del Formato
1. **Usa Markdown para contenido simple**: Es más fácil de escribir y mantener
2. **Usa HTML para contenido complejo**: Cuando necesites estilos personalizados
3. **Mantén el contenido organizado**: Usa títulos y subtítulos claros
4. **Incluye ejemplos prácticos**: Los estudiantes aprenden mejor con ejemplos
5. **Usa emojis**: Hacen el contenido más atractivo y fácil de navegar

### Elección del Tipo de Visualización
1. **Modal (`showContent: 'modal'`)**: 
   - Para documentos largos y detallados
   - Cuando quieres que el usuario se enfoque completamente en el contenido
   - Para tutoriales paso a paso o documentación extensa

2. **Expandible (`showContent: 'details'`)**:
   - Para referencias rápidas o guías de consulta
   - Cuando el contenido es opcional pero útil
   - Para actividades o ejercicios que el usuario puede revisar según necesite

3. **Inline (`showContent: 'inline'`)**:
   - Para resúmenes o información esencial
   - Cuando el contenido debe estar siempre visible
   - Para conceptos clave que los estudiantes deben recordar constantemente

## 🔄 Actualizaciones

El sistema de documentos se integra perfectamente con el sistema de clases existente y mantiene la consistencia visual y funcional con el resto de la aplicación.

¡Los documentos están listos para usar! 🎉 