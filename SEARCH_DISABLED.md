# Búsqueda Desactivada Temporalmente

## Motivo

La búsqueda fue desactivada temporalmente debido a que el índice de búsqueda estático generado excedía el límite de 25 MB de Cloudflare Pages.

**Error original:**
```
Error: Pages only supports files up to 25 MiB in size
api/search is 25.1 MiB in size
```

## Cambios Realizados

### 1. API de búsqueda desactivada
- **Archivo:** `app/api/search/route.ts` → renombrado a `route.ts.disabled`
- Para reactivar: renombrar de vuelta a `route.ts`

### 2. Búsqueda en UI desactivada

#### En `app/layout.tsx`:
```tsx
// ANTES (con búsqueda):
<RootProvider
  search={{
    options: {
      type: 'static',
    },
  }}
>

// AHORA (sin búsqueda):
<RootProvider>
```

#### En `app/docs/layout.tsx`:
```tsx
// ANTES:
<DocsLayout
  tree={source.pageTree}
  nav={baseOptions.nav}

// AHORA (con búsqueda desactivada):
<DocsLayout
  tree={source.pageTree}
  nav={{
    ...baseOptions.nav,
    enableSearch: false, // Desactivar búsqueda temporalmente
  }}
```

## Opciones para Reactivar la Búsqueda

### Opción 1: Implementar Algolia (Recomendada)

Algolia es la solución recomendada para sitios con mucho contenido (151 archivos MDX).

**Pasos:**
1. Crear cuenta gratuita en [Algolia](https://www.algolia.com/)
2. Instalar dependencias:
   ```bash
   pnpm add algoliasearch fumadocs-core
   ```
3. Configurar en `app/layout.tsx`:
   ```tsx
   import { SearchProvider } from 'fumadocs-core/search/client';

   <RootProvider
     search={{
       options: {
         type: 'algolia',
         appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
         apiKey: process.env.NEXT_PUBLIC_ALGOLIA_API_KEY!,
         indexName: 'divisioncero-docs',
       },
     }}
   >
   ```
4. Configurar indexación automática con GitHub Actions

**Recursos:**
- [Fumadocs Algolia Docs](https://fumadocs.dev/docs/headless/search/algolia)
- [Algolia Dashboard](https://www.algolia.com/dashboard)

### Opción 2: Implementar Orama Cloud

Similar a Algolia, pero con tier gratuito diferente.

**Recursos:**
- [Fumadocs Orama Docs](https://fumadocs.dev/docs/headless/search/orama)
- [Orama Cloud](https://orama.com/)

### Opción 3: Split del Índice por Secciones

Crear múltiples endpoints de búsqueda más pequeños:
- `/api/search/cyberacademy`
- `/api/search/kudo`
- `/api/search/ciberseguridad-empresarial`

**Ventajas:** No requiere servicios externos
**Desventajas:** Más complejo de mantener, búsqueda fragmentada

### Opción 4: Optimizar el Índice Estático

Reducir el contenido indexado limitando a:
- Solo títulos y descripciones
- Primeros 200-300 caracteres de cada página
- Excluir secciones específicas

**Limitación:** La búsqueda será menos precisa

## Reactivación Rápida (Para Testing Local)

1. Renombrar archivo:
   ```bash
   mv app/api/search/route.ts.disabled app/api/search/route.ts
   ```

2. Revertir cambios en `app/layout.tsx`:
   ```tsx
   <RootProvider
     search={{
       options: {
         type: 'static',
       },
     }}
   >
   ```

3. Revertir cambios en `app/docs/layout.tsx`:
   ```tsx
   <DocsLayout
     tree={source.pageTree}
     nav={baseOptions.nav}
     // Remover enableSearch: false
   ```

4. Build local:
   ```bash
   pnpm run build
   ```

⚠️ **Nota:** Esto funcionará localmente pero seguirá fallando en Cloudflare Pages.

## Estado Actual

✅ **Despliegue funcional** sin búsqueda
❌ **Búsqueda desactivada** temporalmente
🔄 **Próximo paso:** Implementar Algolia o Orama Cloud

---

**Fecha de desactivación:** 2025-10-13
**Rama:** `feature/fix-25-mb`
