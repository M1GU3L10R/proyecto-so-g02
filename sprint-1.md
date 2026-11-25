# Sprint 1 · Montaje

[Volver al inicio](./){: .volver}

## Video (máximo 3 minutos)

Video: pendiente de grabar y subir a YouTube.

<!--
Cuando tengan el video, borren la línea de arriba y pegan aquí el código de Insertar de YouTube:
<iframe width="560" height="315" src="https://www.youtube.com/embed/ID_DEL_VIDEO"
 title="Sprint 1" frameborder="0" allowfullscreen></iframe>
-->

## Referencia, adaptación y evidencias

1. **Referencia del docente:** <mark>COMPLETAR</mark> (guías de la clase que usaron)
2. **Lo que investigamos y adaptamos:** <mark>COMPLETAR</mark>
3. **Evidencias:** los cinco puntos de abajo

---

## 1. VM gráfica (g02-grafica)

**Qué hicimos:** <mark>COMPLETAR</mark> (particionado manual con `/`, swap y `/home`; dos navegadores y dos editores; una frase por partición con la razón de su tamaño)

**Avance hasta ahora**

![ISO de Linux Mint 22.3 y VirtualBox en el escritorio](img/s1-iso-y-virtualbox.png)

ISO descargada: `linuxmint-22.3-cinnamon-64bit.iso`.

![Asistente de VirtualBox con el nombre g02-grafica](img/s1-grafica-nombre-vm.png)

VM creada con el nombre `g02-grafica`.

![Hardware de la VM: 4096 MB de RAM, 2 CPU y 25 GB de disco](img/s1-grafica-hardware.png)

Hardware: 4096 MB de RAM, 2 CPU y 25 GB de disco. Motivo de la RAM: <mark>COMPLETAR</mark>

![Configuración de pantalla: 128 MB de video y VBoxSVGA](img/s1-grafica-pantalla.png)

Pantalla: 128 MB de memoria de video y controlador VBoxSVGA.

**Comandos:**

```
COMPLETAR (lsblk, df -h y cat /etc/fstab, con prompt y date)
```

**Explicación de cada partición:** <mark>COMPLETAR</mark>

---

## 2. VM de consola (g02-consola)

**Qué hicimos:** <mark>COMPLETAR</mark> (disco de 25 GB y 2 CPU; particionado manual con `/`, swap, `/home` y `/var`; make, rsync, curl, git y wget)

**Comandos:**

```
COMPLETAR
```

**Captura:** <mark>COMPLETAR</mark>

**Explicación de cada partición:** <mark>COMPLETAR</mark>

---

## 3. Red

**Qué hicimos:** <mark>COMPLETAR</mark> (adaptador 1 en NAT y adaptador 2 en solo-anfitrión)

**Comandos:**

```
COMPLETAR (ip a en cada VM y ping en los dos sentidos)
```

**Captura:** <mark>COMPLETAR</mark>

---

## 4. SSH

**Qué hicimos:** <mark>COMPLETAR</mark> (entrar por SSH desde g02-grafica a g02-consola)

**Comandos:**

```
COMPLETAR
```

**Captura:** <mark>COMPLETAR</mark>

---

## 5. Instantáneas

**Qué hicimos:** <mark>COMPLETAR</mark> (una por VM, llamada `instalacion-limpia`, con la VM apagada)

**Captura:** <mark>COMPLETAR</mark>

---

## Errores y soluciones

<mark>COMPLETAR</mark> (error, causa probable, solución aplicada y fuente con título, enlace y fecha de consulta)
