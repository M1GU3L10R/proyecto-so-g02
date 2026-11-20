# Ficha de verificación de versión – Grupo 02

| Campo              | g02-grafica      | g02-consola         | Imagen base Docker     |
|--------------------|------------------|---------------------|------------------------|
| Distribución       | Linux Mint       | Rocky Linux         | Debian                 |
| Versión exacta     | 22.3 («Zena»)    | 10.3 («Red Quartz») | 13.7 («Trixie»)        |
| Arquitectura       | x86_64 (amd64)   | x86_64 (x86-64-v3)  | amd64 (x86_64)         |
| Familia            | Debian/Ubuntu    | Fedora/RHEL         | Debian                 |
| Gestor de paquetes | APT (apt / dpkg) | DNF (dnf / rpm)     | APT (apt / dpkg)       |
| Fuente oficial     | linuxmint.com	  | rockylinux.org      | debian.org / Docker Hub|  
| Fecha de consulta  | 17/11/2026	      | 17/11/2026	        | 17/11/2026             |

---

# Ficha de versión · Linux Mint (VM gráfica)
1. Versión y fecha de lanzamiento: Linux Mint 22.3, nombre clave Zena, fue lanzada el 13 de enero de 2026. -> Fuente: https://www.linuxmint.com/edition.php?id=326

2. Actualizaciones de seguridad: cuenta con soporte hasta abril de 2029. -> Fuente https://www.linuxmint.com/download_all.php

3. Requisitos de hardware:
- RAM: mínimo 2 GB; recomendado 4 GB.
- Disco: mínimo 20 GB; recomendado 100 GB.
- Resolución: mínimo 1024 × 768.
- VirtualBox: sí funciona como máquina virtual, pero la versión 22.3 presenta problemas conocidos con el kernel HWE 6.14 y algunas versiones de VirtualBox.
 Se recomienda comprobar la compatibilidad del kernel o utilizar el kernel LTS 6.8 si aparecen inconvenientes. 

4. Particionado manual: sí. El instalador permite seleccionar la opción «Something else» (Algo más) para crear, modificar y asignar particiones manualmente.

5. Instalación de Docker Engine: existe documentación oficial para Ubuntu, que es la distribución base de Linux Mint. Sin embargo,
Docker advierte que Linux Mint no tiene soporte oficial directo como distribución derivada. La instalación puede funcionar siguiendo las instrucciones para Ubuntu, pero no está oficialmente garantizada. -> Fuente https://docs.docker.com/engine/install/ubuntu

6. Imagen base Docker: no existe una imagen oficial de Linux Mint 22.3 en Docker Hub. Para contenedores se puede utilizar Ubuntu 24.04 LTS, que corresponde a su base de paquetes. -> FUnete: https://hub.docker.com/_/ubuntu

---

# Ficha de versión · Rocky Linux (VM de consola)
1. Versión y fecha de lanzamiento: Rocky Linux 10.3, nombre clave Red Quartz, fue lanzada el 16 de noviembre de 2026. -> Fuente: https://rockylinux.org/news/rocky-linux-10-3-ga-release

2. Actualizaciones de seguridad: Rocky Linux 10 recibe soporte de seguridad hasta el 31 de mayo de 2035. Es necesario mantenerse en la versión menor más reciente para continuar recibiendo soporte.  -> Fuente: https://docs.rockylinux.org/latest/releases

3. Requisitos de hardware:
   - Procesador compatible con x86-64-v3 (no basta con cualquier procesador x86-64).
   - Memoria RAM y almacenamiento según el entorno de instalación y los servicios que se ejecuten.
   - VirtualBox: sí, siempre que el procesador físico y la configuración de la máquina virtual permitan exponer las instrucciones x86-64-v3. Es importante verificar la compatibilidad de la CPU antes de instalarlo.

4. Particionado manual: sí. El instalador Anaconda permite configurar particiones manualmente, incluyendo particiones estándar, LVM y sistemas de archivos.

5. Instalación de Docker Engine: sí existe documentación oficial para Rocky Linux. Docker proporciona instrucciones específicas para esta distribución. -> Fuente: https://docs.docker.com/engine/install

Enlace: Guía de instalación para distribuciones compatibles con CentOS. También se puede consultar la documentación general de instalación de Docker.
6. Imagen base Docker: existe una imagen oficial de Rocky Linux disponible en Docker Hub. Se puede utilizar como base para crear contenedores. -> Fuente https://hub.docker.com/_/rockylinux

---

# Ficha de versión · Debian (imagen base del Dockerfile)
1. Versión y fecha de lanzamiento: Debian 13.7, nombre clave Trixie, fue publicada el 12 de septiembre de 2026. La versión inicial Debian 13.0 salió el 9 de agosto de 2025. 

2. Actualizaciones de seguridad: el soporte completo está previsto hasta el 9 de agosto de 2028 y el soporte LTS hasta el 30 de junio de 2030. -> Fuente: https://www.debian.org/News/2026/20260912

3. Requisitos de hardware:
   - RAM: mínimo recomendado de 512 MB para realizar la instalación.
   - Disco duro: mínimo recomendado de 4 GB para instalar el sistema.
   - Procesador: compatible con arquitectura amd64.
   - VirtualBox: sí funciona como máquina virtual. Es una buena opción para realizar instalaciones y pruebas de servidores Linux. 

4. Particionado manual: sí. El instalador ofrece la opción «Manual», que permite crear, eliminar, modificar y asignar puntos de montaje a las particiones. También permite configurar LVM, RAID y cifrado. -> Fuente: https://www.debian.org/releases/trixie/amd64/ch06s03.en.html

5. Instalación de Docker Engine: sí existe una guía oficial específica para Debian 13 Trixie. Docker confirma que esta versión es compatible con Docker Engine para arquitectura amd64. -> Fuente: https://docs.docker.com/engine/install/debian

6. Imagen base Docker: sí existe una imagen oficial de Debian en Docker Hub. Se puede utilizar la etiqueta debian:13.7 si está disponible, o debian:trixie para utilizar la versión estable correspondiente. -> Fuente: https://hub.docker.com/_/debian

# Verificado por: Faver Ibargüen, Felipe Galindo | Fecha: 18/11/2026 


