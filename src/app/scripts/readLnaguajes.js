const fs = require('fs');
const path = require('path');

// Carpeta donde están los archivos de idiomas
const languagesDir = path.join(__dirname, '../data/languajes');

// Archivo languages.json en src/assets/
const outputDir = path.join(__dirname, '../../assets');
const outputPath = path.join(outputDir, 'languages.json');

// Verificar si la carpeta 'assets' existe, si no, crearla
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`Carpeta ${outputDir} creada.`);
}

// Leer los archivos de la carpeta y extraer los nombres de los idiomas
const languages = fs.readdirSync(languagesDir)
  .filter(file => file.endsWith('.language.ts'))
  .map(file => file.replace('.language.ts', ''));

// Guardar la lista de lenguajes en un archivo JSON
fs.writeFileSync(outputPath, JSON.stringify({ languages }, null, 2));

console.log('Archivo languages.json generado con éxito:', languages);
