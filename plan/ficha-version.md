# Ficha de versión · Grupo 02

[Volver a Sprint 0](../sprint-0.html){: .volver}
[Volver al inicio](../){: .volver}

Ficha de verificación de las tres distribuciones del proyecto. Fecha de consulta de las fuentes: 17/11/2026. Verificado por: Faver Andres Ibarguen y Luis Felipe Galindo.

## Resumen

| Campo              | g02-grafica      | g02-consola         | Imagen base Docker |
|--------------------|------------------|---------------------|--------------------|
| Distribución       | Linux Mint       | Rocky Linux         | Debian             |
| Versión exacta     | 22.3 («Zena»)    | 10.3 («Red Quartz») | 13.7 («Trixie»)    |
| Arquitectura       | x86_64 (amd64)   | x86_64 (x86-64-v3)  | amd64 (x86_64)     |
| Familia            | Debian/Ubuntu    | Fedora/RHEL         | Debian             |
| Gestor de paquetes | APT (apt / dpkg) | DNF (dnf / rpm)     | APT (apt / dpkg)   |

## Linux Mint · VM gráfica

1. **Versión elegida y fecha de lanzamiento**

   Linux Mint 22.3 «Zena», lanzada en enero de 2026. Día exacto: <mark>COMPLETAR</mark>

   Enlace: <mark>COMPLETAR</mark>

2. **Hasta cuándo recibe actualizaciones de seguridad**

   Hasta abril de 2029, porque es una versión LTS basada en Ubuntu 24.04.

   Enlace: [linuxmint.com/rel_zena_whatsnew.php](https://linuxmint.com/rel_zena_whatsnew.php)

3. **Requisitos de hardware y si funciona en VirtualBox**

   Requisitos mínimos: <mark>COMPLETAR</mark>. Funciona en VirtualBox: <mark>COMPLETAR</mark>

   Enlace: <mark>COMPLETAR</mark>

4. **Si el instalador permite el particionado manual**

   <mark>COMPLETAR</mark> (Sí o No, y cómo se llama la opción).

   Enlace: <mark>COMPLETAR</mark>

5. **Guía oficial para instalar Docker Engine en esa familia**

   Docker documenta Ubuntu. Mint es derivada de Ubuntu y no figura como plataforma verificada, así que se adapta la guía de Ubuntu.

   Enlace: [docs.docker.com/engine/install/ubuntu](https://docs.docker.com/engine/install/ubuntu/)

6. **Imagen base del Dockerfile para esa versión**

   No aplica a la VM gráfica.

## Rocky Linux · VM de consola

1. **Versión elegida y fecha de lanzamiento**

   Rocky Linux 10.3 «Red Quartz», lanzada el 16/11/2026.

   Enlace: [rockylinux.org](https://rockylinux.org/news/rocky-linux-10-3-ga-release)

2. **Hasta cuándo recibe actualizaciones de seguridad**

   Hasta 2035. Fecha exacta: <mark>COMPLETAR</mark>

   Enlace: [docs.rockylinux.org/10/releases](https://docs.rockylinux.org/10/releases/)

3. **Requisitos de hardware y si funciona en VirtualBox**

   Requiere procesador x86-64-v3. RAM y disco mínimos: <mark>COMPLETAR</mark>. Funciona en VirtualBox: <mark>COMPLETAR</mark>

   Enlace: [notas de la versión 10.3](https://docs.rockylinux.org/release_notes/10_3/)

4. **Si el instalador permite el particionado manual**

   <mark>COMPLETAR</mark> (opción «Personalizada»: confirmar en la documentación).

   Enlace: <mark>COMPLETAR</mark>

5. **Guía oficial para instalar Docker Engine en esa familia**

   Docker no lista Rocky como plataforma verificada. Se usa la guía de CentOS (familia RHEL) y se documenta como procedimiento alternativo.

   Enlace: [docs.docker.com/engine/install/centos](https://docs.docker.com/engine/install/centos/)

6. **Imagen base del Dockerfile para esa versión**

   No aplica (la imagen base del grupo es Debian).

## Debian · imagen base del Dockerfile

1. **Versión elegida y fecha de lanzamiento**

   Debian 13.7 «trixie», publicada el 12/09/2026.

   Enlace: [debian.org](https://www.debian.org/News/2026/20260912.en.html)

2. **Hasta cuándo recibe actualizaciones de seguridad**

   <mark>COMPLETAR</mark>

   Enlace: [debian.org/releases](https://www.debian.org/releases/)

3. **Requisitos de hardware y si funciona en VirtualBox**

   No aplica, porque es una imagen de contenedor.

4. **Si el instalador permite el particionado manual**

   No aplica, porque es una imagen de contenedor.

5. **Guía oficial para instalar Docker Engine en esa familia**

   <mark>COMPLETAR</mark> (Debian aparece en la lista oficial de Docker).

   Enlace: [docs.docker.com/engine/install/debian](https://docs.docker.com/engine/install/debian/)

6. **Imagen base del Dockerfile para esa versión**

   Etiqueta a usar: <mark>COMPLETAR</mark> (por ejemplo `trixie`).

   Enlace: [hub.docker.com/_/debian](https://hub.docker.com/_/debian)


