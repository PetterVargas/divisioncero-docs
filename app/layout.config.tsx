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
          viewBox="0 0 790 790"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo"
        >
          <path
            className="dark:fill-white"
            transform="translate(746,1)"
            d="m0 0 13 2 9 4 6 4 8 9 5 11 1 10v591l-1 17-4 10-8 10-8 5-21 7-69 19-212 58-59 16-5 1h-14l-45-12-62-17-117-32-62-17-58-16-16-5-8-4-8-7-6-10-2-6-1-7-1-233v-97l1-233 1-46 4-11 6-8 7-6 10-5 3-1h12l28 7 44 12 73 20 149 41 47 13 11 2 50-14 47-13 225-62zm-39 92-35 9-65 18-166 46-35 10-14 2-31-8-229-63-47-13h-3l-1 177v336l8 3 47 13 132 37 107 30 17 5 8-1 128-35 135-37 37-10 8-3 1-515z"
            fill="currentColor"
          />
          <path
            className="dark:fill-white"
            transform="translate(149,219)"
            d="m0 0h490l14 7 9 9 6 12 2 15v15l-1 20-1 1h-470v221l12 3 119 33 50 14 17 4 13-4 68-19 119-33 69-19 4 1v57l-3 10-6 9-5 5-7 5-27 8-214 60-9 2h-9l-122-34-82-23-42-12-10-6-7-8-6-12-2-11v-291l2-10 7-14 7-7 10-6z"
            fill="#4DAE84"
          />
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
      url: 'https://divisioncero.com/cursos?utm_source=docs.divisioncero.com/docs/kudo',
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
          url: 'https://divisioncero.com/opensource?utm_source=docs.divisioncero.com/docs/kudo',
        },
        {
          icon: <WrenchIcon />,
          text: 'Herramientas',
          description: 'Ayuda en Ciberseguridad',
          url: 'https://divisioncero.com/herramientas?utm_source=docs.divisioncero.com/docs/kudo',
        },
        {
          icon: <BookIcon />,
          text: 'Releases',
          description: 'Actualizaciones sobre la plataforma',
          url: 'https://divisioncero.com/releases?utm_source=docs.divisioncero.com/docs/kudo',
        },
      ],
    },
    {
      type: 'icon',
      url: 'https://github.com/PetterVargas/divisioncero-docs',
      text: 'Github',
      icon: (
        <svg role="img" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
      external: true,
    },
    {
      icon: <LogInIcon />,
      text: <span className="block md:inline">Login</span>,
      url: 'http://divisioncero.com/auth/sign-in?utm_source=docs.divisioncero.com/docs/kudo',
      secondary: true,
    },
    {
      icon: <UserIcon />,
      text: <span className="bg-fd-primary hover:bg-fd-primary/90 dark:bg-fd-primary/80 dark:hover:bg-fd-primary text-fd-primary-foreground rounded-md px-3 py-1 font-bold block md:inline-block">Regístrate</span>,
      url: 'http://divisioncero.com/auth/sign-up?utm_source=docs.divisioncero.com/docs/kudo',
      secondary: true,
    },
  ],
};
