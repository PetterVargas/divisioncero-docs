import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon, FileTextIcon, UserIcon, LogInIcon, GraduationCapIcon, WrenchIcon, PackageIcon, NewspaperIcon } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo"
        >
          <circle cx={12} cy={12} r={12} fill="currentColor" />
        </svg>
        DivisionCero
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      icon: <GraduationCapIcon />,
      text: 'CyberAcademy',
      url: '/docs/cyberacademy',
      secondary: false,
    },
    {
      icon: <PackageIcon />,
      text: 'Ciberseguridad Empresarial',
      url: '/docs/ciberseguridad-empresarial',
      secondary: false,
    },
    {
      icon: <GraduationCapIcon />,
      text: 'Cursos',
      url: 'https://divisioncero.com/courses',
      secondary: false,
    },
    {
      icon: <BookIcon />,
      text: 'Kudo',
      url: '/docs/kudo',
      secondary: false,
    },
    {
      icon: <NewspaperIcon />,
      text: 'Blog',
      url: '/blog',
      secondary: false,
    },
    {
      type: 'menu',
      text: 'Recursos',
      items: [
        {
          icon: <FileTextIcon />,
          text: 'Open Sources',
          description: 'Proyectos y contribuciones abiertos',
          url: 'https://divisioncero.com/opensource',
        },
        {
          icon: <WrenchIcon />,
          text: 'Tools',
          description: 'Ayuda en Ciberseguridad',
          url: 'https://divisioncero.com/tools',
        },
        {
          icon: <BookIcon />,
          text: 'Releases',
          description: 'Actualizaciones sobre la plataforma',
          url: 'https://divisioncero.com/releases',
        },
      ],
    },
    {
      icon: <LogInIcon />,
      text: <span className="block md:inline">Login</span>,
      url: 'http://divisioncero.com/auth/sign-in',
      secondary: true,
    },
    {
      icon: <UserIcon />,
      text: <span className="bg-fd-primary hover:bg-fd-primary/90 dark:bg-fd-primary/80 dark:hover:bg-fd-primary text-white dark:text-white rounded-md px-3 py-1 font-bold block md:inline-block">Regístrate</span>,
      url: 'http://divisioncero.com/auth/sign-up',
      secondary: true,
    },
  ],
};
