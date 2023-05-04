# Título del Proyecto

Breve descripción del proyecto y su objetivo.

## Requisitos

- Docker

## Construcción y ejecución del proyecto usando Docker

1. Asegúrate de tener Docker instalado y corriendo en tu máquina.

2. Navega hasta la carpeta del proyecto en la línea de comandos.

3. Construye la imagen de Docker usando el siguiente comando:
```bash
docker build -t IMAGE_TAG_NAME .
```
`IMAGE_TAG_NAME` es el nombre que le quieres poner a la imagen. Puedes usar cualquier nombre que quieras.
4. Ejecuta un contenedor de Docker usando la imagen que acabas de crear:
```bash
docker run -it --rm -p 8080:80 IMAGE_TAG_NAME
```
Reemplaza `IMAGE_TAG_NAME` con el nombre que asignaste a la imagen en el paso anterior.
