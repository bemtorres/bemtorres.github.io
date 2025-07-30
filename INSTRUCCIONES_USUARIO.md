# 🎓 Sistema de Documentación Estudiantil - Instrucciones de Uso

## ✅ Proyecto Completado

He desarrollado completamente el sistema de documentación estudiantil según tus especificaciones. El proyecto está listo para usar y desplegar.

## 🚀 Cómo Usar el Sistema

### Para Estudiantes:

1. **Acceder al sitio**: Ve a la página principal
2. **Ver clases disponibles**: Haz clic en "Ver Clases Disponibles"
3. **Seleccionar clase**: Elige la clase que necesitas
4. **Descargar materiales**: Haz clic en "Descargar" en cualquier archivo

### Para el Profesor (Administrador):

#### Agregar Nueva Clase:

1. **Crear carpeta de documentos**:
   ```
   public/documentos/clase-5/
   ```

2. **Subir archivos** a esa carpeta

3. **Editar datos de la clase** en `src/pages/clases/[id].astro`:
   ```javascript
   {
     id: 'clase-5',
     titulo: 'Nueva Clase',
     descripcion: 'Descripción de la nueva clase',
     fecha: '2024-02-12',
     materiales: [
       {
         nombre: 'Presentación de la Clase',
         tipo: 'ppt',
         tamaño: '3.2 MB',
         url: '/documentos/clase-5/presentacion.pptx'
       }
     ]
   }
   ```

4. **Actualizar lista** en `src/pages/clases/index.astro`

## 🛠️ Comandos Importantes

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar producción
npm run preview
```

## 📁 Estructura Creada

```
bemtorres.github.io/
├── src/
│   ├── layouts/Layout.astro          # Diseño principal
│   ├── pages/
│   │   ├── index.astro               # Página de inicio
│   │   ├── 404.astro                 # Página de error
│   │   ├── sitemap.xml.ts            # Sitemap para SEO
│   │   └── clases/
│   │       ├── index.astro           # Lista de clases
│   │       └── [id].astro            # Página de clase específica
│   └── env.d.ts                      # Tipos TypeScript
├── public/
│   ├── documentos/                   # Carpeta para archivos
│   │   └── README.md                 # Instrucciones de organización
│   └── robots.txt                    # SEO
├── .github/workflows/deploy.yml      # Despliegue automático
├── astro.config.mjs                  # Configuración Astro
├── tailwind.config.mjs               # Configuración Tailwind
├── package.json                      # Dependencias
└── README.md                         # Documentación completa
```

## 🎨 Características Implementadas

✅ **Interfaz simple y fácil de usar** para estudiantes  
✅ **Organización por clases** con carpetas separadas  
✅ **Sistema de descarga directa** de archivos  
✅ **Diseño responsive** para móviles y escritorio  
✅ **Navegación intuitiva** con breadcrumbs  
✅ **Iconos por tipo de archivo** (PDF, PPT, DOCX, etc.)  
✅ **SEO optimizado** con sitemap y robots.txt  
✅ **Despliegue automático** en GitHub Pages  
✅ **Página de error 404** personalizada  
✅ **Documentación completa** en README.md  

## 🌐 Despliegue en GitHub Pages

1. **Subir a GitHub**:
   ```bash
   git add .
   git commit -m "Sistema de documentación estudiantil"
   git push origin main
   ```

2. **Habilitar GitHub Pages** en la configuración del repositorio

3. **Configurar fuente** como "GitHub Actions"

4. **El sitio estará disponible** en: `https://bemtorres.github.io/bemtorres.github.io`

## 📱 Tipos de Archivo Soportados

- 📄 **PDF** - Documentos y guías
- 📊 **PPT/PPTX** - Presentaciones
- 📝 **DOC/DOCX** - Documentos de Word
- 📦 **ZIP** - Archivos comprimidos
- 🗄️ **SQL** - Scripts de base de datos
- 📄 **TXT** - Archivos de texto

## 🔧 Personalización

### Cambiar Colores:
Edita `tailwind.config.mjs` en la sección `colors.primary`

### Agregar Tipos de Archivo:
Edita la función `getIconoArchivo` en `src/pages/clases/[id].astro`

## 📞 Soporte

Si necesitas ayuda o tienes preguntas:
- Revisa el `README.md` completo
- Consulta la documentación de Astro
- Contacta al desarrollador

¡El sistema está listo para usar! 🎉 