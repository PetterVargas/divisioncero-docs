import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { docs, blogPosts } from '@/.source';
import { Book, GraduationCap, Settings } from 'lucide-react';
import { createElement } from 'react';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  // Icon configuration for main category tabs only
  icon: (iconName) => {
    const iconMap: Record<string, React.ComponentType> = {
      'GraduationCap': GraduationCap,  // Para CyberAcademy (estudio/educación)
      'Settings': Settings,      // Para Ciberseguridad Empresarial (automatización)
      'Book': Book              // Para Kudo (libro/documentación)
    };
    
    if (iconName && typeof iconName === 'string' && iconName in iconMap) {
      return createElement(iconMap[iconName]);
    }
    return undefined;
  },
});

export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(blogPosts),
});