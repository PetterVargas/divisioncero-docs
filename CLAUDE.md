# DivisionCero Documentation Project

Este proyecto contiene la documentación completa de DivisionCero, incluyendo CyberAcademy, Cybersecurity as a Service y Kudo (Libro abierto de Ciberseguridad).

## 🏗️ Tecnologías

- **Framework**: Next.js 15.4.2 con React 19.1.0
- **Documentation**: Fumadocs (UI y MDX)
- **Styling**: Tailwind CSS 4.1.11
- **Content**: MDX con soporte para matemáticas (KaTeX) y diagramas (Mermaid)
- **Package Manager**: pnpm
- **TypeScript**: 5.8.3

## 📁 Estructura del Proyecto

```
divisioncero-docs/
├── app/                          # Next.js App Router
│   ├── (home)/                   # Landing page y páginas principales
│   ├── docs/                     # Layout de documentación
│   ├── api/search/               # API de búsqueda
│   └── layout.tsx               # Layout global
├── content/                      # Contenido MDX
│   ├── blog/                     # Artículos del blog
│   ├── docs/                     # Documentación principal
│   │   ├── cyberacademy/         # Módulos de formación
│   │   ├── ciberseguridad-empresarial/ # Servicios empresariales
│   │   └── kudo/                 # Libro abierto de ciberseguridad
│   │       └── dominios/    # Baselines por dominios de seguridad
│   │       ├── politicas/        # Templates de políticas (85+ documentos)
├── lib/                          # Utilities y configuración
└── source.config.ts             # Configuración de Fumadocs
```

## 🎯 Secciones Principales

### 1. CyberAcademy
- **Propósito**: Formación práctica en ciberseguridad
- **Enfoque**: "Aprende resolviendo problemas"
- **Ubicación**: `/content/docs/cyberacademy/`

### 2. Ciberseguridad Empresarial
- **Propósito**: Servicios de consultoría y automatización
- **Estado**: En desarrollo
- **Ubicación**: `/content/docs/ciberseguridad-empresarial/`

### 3. Kudo - Libro Abierto de Ciberseguridad
- **Propósito**: Framework completo de políticas y procedimientos de seguridad
- **Contenido**: 85+ templates de políticas organizacionales
- **Estructura**: Baselines por dominios de seguridad
- **Ubicación**: `/content/docs/kudo/`

## 🚀 Comandos de Desarrollo

```bash
# Desarrollo local
pnpm run dev

# Build para producción
pnpm run build

# Exportar sitio estático
pnpm run export

# Procesar archivos MDX
pnpm run postinstall
```

## 📝 Convenciones de Contenido

### Frontmatter Estándar
```yaml
---
title: "Título del documento"
description: "Descripción breve"
icon: "Icono" # Opcional
---
```

### Estructura de Políticas (Kudo)
Cada política sigue la estructura:
- **Contexto empresarial**: DivisionCero (empresa SaaS hipotética)
- **Roles definidos**: CEO, CISO, CTO, equipos especializados
- **Versionado**: Semántico (vX.Y.Z)
- **Control de cambios**: Git con Pull Requests

## 🔧 Configuración Técnica

### Source Configuration (`source.config.ts`)
- Soporte para matemáticas con KaTeX
- Procesamiento de MDX con plugins personalizados
- Schemas de frontmatter y metadatos validados con Zod

### Features Habilitadas
- **Búsqueda**: API endpoint en `/api/search/route.ts`
- **Matemáticas**: Renderizado de LaTeX con KaTeX
- **Diagramas**: Mermaid para organigramas y flujos
- **Temas**: Next-themes para modo oscuro/claro
- **Iconos**: Lucide React

## 📋 Workflows Principales

### Para Contenido de Kudo
1. Navegar a `/content/docs/kudo/politicas/`
2. Crear/editar archivos `.mdx`
3. Seguir estructura de políticas establecida
4. Validar con desarrollo local

### Para CyberAcademy
1. Ubicación: `/content/docs/cyberacademy/`
2. Enfoque en contenido práctico y casos de uso reales
3. Seguir convenciones de aprendizaje establecidas

### Para Blog
1. Crear en `/content/blog/`
2. Incluir frontmatter con `author` y `date`
3. Seguir schema definido en `source.config.ts`

## 🎨 Componentes Personalizados

- **Cards**: Para enlaces de navegación
- **Callouts**: Para información destacada
- **Mermaid**: Para diagramas y organigramas
- **Files/Folder**: Para mostrar estructura de archivos
- **Accordions**: Para contenido colapsable

## 🌐 Despliegue

El sitio está configurado para exportación estática:
```bash
pnpm run predeploy  # Build
pnpm run deploy     # Export
```

## 📖 Enlaces Útiles

- **Repositorio**: GitHub (enlace en header del sitio)
- **Framework**: [Fumadocs](https://fumadocs.vercel.app)
- **Next.js**: [Documentación oficial](https://nextjs.org/docs)
- **Kit de Ciberseguridad**: [divisioncero.com](https://divisioncero.com/home/kit-inicial-ciberseguridad)