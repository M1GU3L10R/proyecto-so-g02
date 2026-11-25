# Sprint 0 · Distribuciones y ficha

[Volver al inicio](./){: .volver}

Repositorio público con la carpeta `plan`, el plan de trabajo y la ficha de versión. Este sprint no lleva video.

## Distribuciones elegidas

1. VM gráfica (g02-grafica): Linux Mint 22.3 «Zena»
2. VM de consola (g02-consola): Rocky Linux 10.3 «Red Quartz»
3. Imagen base del Dockerfile: Debian 13.7 «trixie»

## Documentos

1. [Plan de trabajo](plan/plan-de-trabajo.md)
2. [Ficha de versión](plan/ficha-version.md)

## Ficha de verificación

Resumen de las tres distribuciones (detalle completo en la [ficha de versión](plan/ficha-version.md)):

| Campo              | g02-grafica      | g02-consola         | Imagen base Docker |
|--------------------|------------------|---------------------|--------------------|
| Distribución       | Linux Mint       | Rocky Linux         | Debian             |
| Versión exacta     | 22.3 («Zena»)    | 10.3 («Red Quartz») | 13.7 («Trixie»)    |
| Arquitectura       | x86_64 (amd64)   | x86_64 (x86-64-v3)  | amd64 (x86_64)     |
| Familia            | Debian/Ubuntu    | Fedora/RHEL         | Debian             |
| Gestor de paquetes | APT (apt / dpkg) | DNF (dnf / rpm)     | APT (apt / dpkg)   |

## Roles

1. **Miguel Angel Romero:** Coordinación + VMs y red
2. **Faver Andres Ibarguen:** Scripts y procesos + Docker
3. **Luis Felipe Galindo:** Seguridad + sitio y videos

