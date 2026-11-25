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

   Linux Mint 22.3 «Zena», lanzada el 13 de enero de 2026.

   Enlace: [://linuxmint.com](https://://linuxmint.com)

2. **Hasta cuándo recibe actualizaciones de seguridad**

   Hasta abril de 2029, porque es una versión LTS basada en Ubuntu 24.04.  
   
   Enlace: [://linuxmint.com](https://://linuxmint.com)

3. **Requisitos de hardware y si funciona en VirtualBox**

   Requisitos mínimos: 2 GB de RAM (4 GB recomendados), 20 GB de espacio en disco (100 GB recomendados) y resolución de 1024×768.  
   Funciona en VirtualBox: Sí, funciona en VirtualBox.  

   Enlace: [://linuxmint.com](https://://linuxmint.com)

4. **Si el instalador permite el particionado manual**

   Sí, el instalador permite el particionado manual seleccionando la opción «Más opciones» (en inglés, *Something else*) en el paso de *Tipo de instalación*.  

   Enlace: [linuxmint-installation-guide.readthedocs.io](https://readthedocs.io)

5. **Guía oficial para instalar Docker Engine en esa familia**

   Docker documenta Ubuntu. Mint es derivada de Ubuntu y no figura como plataforma verificada, así que se adapta la guía de Ubuntu.  

   Enlace: [://docker.com](https://://docker.com/)

6. **Imagen base del Dockerfile para esa versión**

   No aplica a la VM gráfica.

---

## Rocky Linux · VM de consola

1. **Versión elegida y fecha de lanzamiento**

   Rocky Linux 10.3 «Red Quartz», lanzada el 16/11/2026.  

   Enlace: [rockylinux.org](https://rockylinux.org)

2. **Hasta cuándo recibe actualizaciones de seguridad**

   Hasta 2035.  
   Fecha exacta: 31 de mayo de 2035 (31/05/2035) (el soporte activo/general finaliza el 31/05/2030). 

   Enlace: [docs.rockylinux.org/10/releases](https://rockylinux.org)

3. **Requisitos de hardware y si funciona en VirtualBox**

   Requiere procesador x86-64-v3.  
   RAM y disco mínimos: 2 GB de RAM (1 GB en instalación mínima de servidor / modo texto) y 10 GB de disco (20 GB recomendados). 

   Funciona en VirtualBox: Sí, funciona en VirtualBox siempre que la CPU física del anfitrión soporte instrucciones x86-64-v3 (AVX, AVX2, BMI1/2, FMA) y el hipervisor las exponga a la máquina virtual.  

   Enlace: [docs.rockylinux.org/10/guides/minimum_hardware_requirements](https://rockylinux.org)


4. **Si el instalador permite el particionado manual**

   Sí, el instalador (Anaconda) permite el particionado manual entrando en *Destino de la instalación* (*Installation Destination*) y seleccionando la opción «Personalizada» (*Custom*).  

   Enlace: [docs.rockylinux.org/10/guides/installation](https://rockylinux.org)


5. **Guía oficial para instalar Docker Engine en esa familia**

    Docker no lista Rocky como plataforma verificada. Se usa la guía de CentOS (familia RHEL) y se documenta como procedimiento alternativo.  

   Enlace: [://docker.com](https://://docker.com/)

6. **Imagen base del Dockerfile para esa versión**

   No aplica (la imagen base del grupo es Debian).

---

## Debian · imagen base del Dockerfile

1. **Versión elegida y fecha de lanzamiento**

   Debian 13.7 «trixie», publicada el 12/09/2026.  

   Enlace: [debian.org](https://debian.org)

2. **Hasta cuándo recibe actualizaciones de seguridad**

   Soporte oficial de seguridad de Debian hasta el 9 de agosto de 2028 (09/08/2028) y soporte extendido (Debian LTS) hasta el 30 de junio de 2030 (30/06/2030).  

   Enlace: [debian.org/releases](https://debian.org)

3. **Requisitos de hardware y si funciona en VirtualBox**

   No aplica, porque es una imagen de contenedor.

4. **Si el instalador permite el particionado manual**

   No aplica, porque es una imagen de contenedor.

5. **Guía oficial para instalar Docker Engine en esa familia**

   Debian cuenta con soporte oficial y documentación directa en Docker Engine (compatible con las arquitecturas `amd64`, `arm64`, `armhf`, `ppc64le` y `s390x` mediante el repositorio `apt` oficial de Docker).  

   Enlace: [://docker.com](https://://docker.com/)


6. **Imagen base del Dockerfile para esa versión**

   Etiqueta a usar: `debian:trixie`, `debian:13.7` o su variante reducida `debian:trixie-slim` / `debian:13.7-slim`. 
    
   Enlace: [://docker.com](https://://docker.com)


