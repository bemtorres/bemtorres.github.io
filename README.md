# Student Documentation System

A simple and easy-to-use web system for students to access and download class materials organized by subject.

## 🚀 Features

- **Simple Interface**: Designed specifically for students
- **Class Organization**: Materials organized by subject
- **Direct Download**: Direct access to PDF, PPT, DOCX files, etc.
- **Responsive**: Works on mobile and desktop devices
- **Static**: No database required, perfect for GitHub Pages

## 📁 Project Structure

```
bemtorres.github.io/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Main layout
│   ├── pages/
│   │   ├── index.astro           # Home page
│   │   └── clases/
│   │       ├── index.astro       # Class list
│   │       └── [id].astro        # Specific class page
│   └── styles/                   # CSS styles
├── public/
│   └── documentos/               # Files folder
│       ├── clase-1/
│       ├── clase-2/
│       └── ...
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🛠️ Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bemtorres/bemtorres.github.io.git
   cd bemtorres.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run in development**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📝 How to Add New Classes

### 1. Add Class Data

Edit the file `src/lib/clases.ts` and add a new entry in the `classes` array:

```javascript
{
  id: 'class-5',
  title: 'New Class',
  description: 'Description of the new class',
  date: '2024-02-12',
  materials: [
    {
      name: 'Class Presentation',
      type: 'content',
      fileType: 'ppt',
      size: '3.2 MB',
      url: '/documentos/clase-5/presentacion.pptx'
    }
  ]
}
```

### 2. Upload Files

Place the class files in the folder `public/documentos/clase-5/`.

## 📂 File Organization

Documents should be organized as follows:

```
public/documentos/
├── clase-1/
│   ├── presentacion-conceptos-basicos.pptx
│   ├── ejercicios-practicos.pdf
│   └── guia-estudio.docx
├── clase-2/
│   ├── teoria-estructuras.pdf
│   └── implementaciones-java.zip
└── ...
```

## 🎨 Customization

### Colors

Colors can be customized by editing `tailwind.config.mjs`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',  // Main color
    600: '#2563eb',
    700: '#1d4ed8',
  }
}
```

### File Types

To add new file types, edit the `getFileIcon` function in `[id].astro`:

```javascript
function getFileIcon(fileType: string) {
  const icons: Record<string, string> = {
    pdf: '📄',
    ppt: '📊',
    docx: '📝',
    zip: '📦',
    sql: '🗄️',
    // Add new types here
    xlsx: '📊',
    txt: '📄'
  };
  return icons[fileType] || '📄';
}
```

## 🚀 Deploy to GitHub Pages

1. **Enable GitHub Pages** in repository settings
2. **Set source** as "GitHub Actions"
3. **Create workflow** (created automatically with Astro)

The site will be available at: `https://bemtorres.github.io/bemtorres.github.io`

## 📱 Technical Features

- **Framework**: Astro
- **Styles**: Tailwind CSS
- **Language**: TypeScript
- **Hosting**: GitHub Pages
- **Performance**: Optimized static site

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is under the MIT License. See the `LICENSE` file for more details.

## 📞 Support

If you have questions or need help, contact the professor or create an issue in the repository. 