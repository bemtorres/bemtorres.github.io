# 📄 Formatos de Visualización de Contenido (showContent)

El sistema soporta 3 formatos diferentes para mostrar contenido de documentos:

## 🎯 Formato 1: Modal (`showContent: 'modal'`)

**Características:**
- Se abre en una ventana modal
- Ideal para documentos largos
- No interrumpe el flujo de la página
- Mantiene el layout de columnas

**Ejemplo de uso:**
```typescript
{
  name: 'Documento con Modal',
  type: 'document',
  showContent: 'modal',
  content: '# Título\n\nContenido del documento...',
  format: 'markdown'
}
```

## 📋 Formato 2: Expandible (`showContent: 'details'`)

**Características:**
- Se muestra como un elemento expandible
- El contenido se despliega al hacer clic
- Se muestra en formato de filas (título seguido del contenido)
- Ocupa todo el ancho disponible

**Ejemplo de uso:**
```typescript
{
  name: 'Documento Expandible',
  type: 'document',
  showContent: 'details',
  content: '# Conceptos\n\n## Subtítulo\n\nContenido...',
  format: 'markdown'
}
```

## 📄 Formato 3: Inline (`showContent: 'inline'`)

**Características:**
- Se muestra directamente en la página
- No requiere interacción para ver el contenido
- Se muestra en formato de filas (título seguido del contenido)
- Ocupa todo el ancho disponible

**Ejemplo de uso:**
```typescript
{
  name: 'Documento Inline',
  type: 'document',
  showContent: 'inline',
  content: '# SQL Básico\n\n## Comandos\n\n```sql\nSELECT * FROM tabla;\n```',
  format: 'markdown'
}
```

## 🔧 Configuración

### Propiedades requeridas:
- `type: 'document'` - Debe ser tipo documento
- `showContent` - Uno de: `'modal'`, `'details'`, `'inline'`
- `content` - El contenido del documento
- `format` - `'markdown'` o `'html'`

### Propiedades opcionales:
- `name` - Título del documento
- `description` - Descripción adicional

## 📝 Notas Importantes

1. **Formato de filas**: Los formatos `details` e `inline` siempre se muestran en formato de filas, independientemente de la vista de columnas seleccionada.

2. **Ancho completo**: Los documentos con `details` e `inline` ocupan todo el ancho disponible.

3. **Markdown**: Se soporta contenido Markdown que se renderiza automáticamente.

4. **HTML**: También se puede usar contenido HTML directo.

## 🎨 Estilos

Los documentos se renderizan con estilos consistentes:
- Títulos con jerarquía visual clara
- Código con resaltado de sintaxis
- Listas y tablas formateadas
- Enlaces y elementos interactivos estilizados

## 💡 Casos de Uso

- **Modal**: Para documentos largos o que requieren atención especial
- **Details**: Para contenido que puede ser opcional o complementario
- **Inline**: Para contenido esencial que debe estar siempre visible 