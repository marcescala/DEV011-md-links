# marcescala-md-links
## Descripción
marcescala-md-links es una librería de Node.js que te permite encontrar y validar enlaces en archivos Markdown. Puedes usarla para obtener información detallada sobre los enlaces, como su estado (activo o roto) y la cantidad total de enlaces.

## Instalación
Para instalar la librería, ejecuta el siguiente comando en tu terminal:


npm install marcescala-md-links

## Uso
Después de instalar la librería, puedes utilizar los siguientes comandos:


md-links <ruta del archivo>

Este comando te mostrará todos los enlaces encontrados en el archivo especificado.

### *Validar enlaces*

md-links <ruta del archivo> --validate

Con esta opción, la librería verificará el estado de cada enlace, indicando si está activo o roto.

### *Estadísticas de enlaces*

md-links <ruta del archivo> --stats

Este comando te mostrará estadísticas básicas de los enlaces, como la cantidad total y la cantidad de enlaces únicos.

### *Validar y obtener estadísticas*

md-links <ruta del archivo> --validate --stats

Con esta combinación de opciones, obtendrás información completa sobre los enlaces, incluyendo su estado y estadísticas.

## Ejemplos

Para obtener todos los enlaces de un archivo:

md-links ruta/al/archivo.md


Para validar los enlaces de un archivo:

md-links ruta/al/archivo.md --validate


Para obtener estadísticas de enlaces:

md-links ruta/al/archivo.md --stats


Para validar enlaces y obtener estadísticas:

md-links ruta/al/archivo.md --validate --stats


## Contribuir

Si quieres contribuir a la mejora de esta librería, ¡eres bienvenido! Puedes abrir problemas (issues) o enviar solicitudes de extracción (pull requests) en el repositorio de GitHub.

