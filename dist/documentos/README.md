# Carpeta de Documentos

Esta carpeta contiene todos los archivos de las clases organizados por carpeta.

## Estructura

```
documentos/
├── clase-1/          # Introducción a la Programación
├── clase-2/          # Estructuras de Datos  
├── clase-3/          # Programación Orientada a Objetos
├── clase-4/          # Bases de Datos
└── ...
```

## Tipos de Archivos Soportados

- **PDF** (.pdf) - Documentos, guías, teoría
- **PPT/PPTX** (.ppt, .pptx) - Presentaciones
- **DOC/DOCX** (.doc, .docx) - Documentos de Word
- **ZIP** (.zip) - Archivos comprimidos
- **SQL** (.sql) - Scripts de base de datos
- **TXT** (.txt) - Archivos de texto plano

## Cómo Agregar Archivos

1. Crea una carpeta para la nueva clase (ej: `clase-5/`)
2. Coloca todos los archivos de esa clase en la carpeta
3. Actualiza los datos en `src/pages/clases/[id].astro`
4. Actualiza la lista en `src/pages/clases/index.astro`

## Convenciones de Nomenclatura

- Usa nombres descriptivos en español
- Evita espacios, usa guiones (-) en su lugar
- Ejemplo: `presentacion-conceptos-basicos.pptx` 