import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { Banner } from 'fumadocs-ui/components/banner';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { LogInIcon, UserIcon, Linkedin, Twitter, Facebook, Github, Instagram, Youtube, Globe, Video, User } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Banner id="cybersecurity-tools"
        variant="rainbow"
        rainbowColors={[
          '#39b298',
          '#39b298',
          'transparent',
          '#39b298',
          'transparent',
          '#39b298',
          'transparent',
        ]}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2">
          <span>🚀 Nuevas herramientas online y gratuitas de Ciberseguridad</span>
          <a
            href="https://divisioncero.com/herramientas"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline hover:text-white/80 transition-colors"
          >
            Dale un vistazo 👀 →
          </a>
        </div>
      </Banner>
      <DocsLayout
        tree={source.pageTree}
        nav={baseOptions.nav}
        links={[
        {
          type: 'icon',
          url: 'https://github.com/PetterVargas/divisioncero-docs?utm_source=docs.divisioncero.com/docs/kudo',
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
          text: 'Login',
          url: 'http://divisioncero.com/auth/sign-in?utm_source=docs.divisioncero.com/docs/kudo',
          secondary: true,
        },
        {
          icon: <UserIcon />,
          text: 'Regístrate',
          url: 'http://divisioncero.com/auth/sign-up?utm_source=docs.divisioncero.com/docs/kudo',
          secondary: true,
        },
      ]}
    >
      {children}
      <footer className="border-t bg-fd-card py-12 text-fd-secondary-foreground">
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            {/* Company Info Column - Left Side */}
            <div className="col-span-12 md:col-span-4">
              <p className="text-sm mb-6">
                <b>Ciberseguridad</b> creada por y para <b>LatAm</b>, aprendamos y aseguremos juntos. Creado por entusiastas de Ciberseguridad para CISO, CSO, CTO, CIO, SOC, CSIRT, SecOps, DevSecOps, DPO, CPO y mucho más...
              </p>
              <p className="text-xs">
                © Copyright 2025 DivisionCero
              </p>
              {/* Social Media Icons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://linkedin.com/company/divisioncero?utm_source=docs.divisioncero.com/docs/kudo" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} className="text-fd-secondary-foreground hover:text-primary" />
                </a>
                <a href="https://x.com/divisioncero?utm_source=docs.divisioncero.com/docs/kudo" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <Twitter size={20} className="text-fd-secondary-foreground hover:text-primary" />
                </a>
                <a href="https://facebook.com/divisioncerocom?utm_source=docs.divisioncero.com/docs/kudo" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <Facebook size={20} className="text-fd-secondary-foreground hover:text-primary" />
                </a>
                <a href="https://github.com/PetterVargas?utm_source=docs.divisioncero.com/docs/kudo" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <Github size={20} className="text-fd-secondary-foreground hover:text-primary" />
                </a>
                <a href="https://instagram.com/divisioncero?utm_source=docs.divisioncero.com/docs/kudo" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} className="text-fd-secondary-foreground hover:text-primary" />
                </a>
                <a href="https://youtube.com/@divisioncero?utm_source=docs.divisioncero.com/docs/kudo" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <Youtube size={20} className="text-fd-secondary-foreground hover:text-primary" />
                </a>
                <a href="https://tiktok.com/@divisioncero?utm_source=docs.divisioncero.com/docs/kudo" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <Video size={20} className="text-fd-secondary-foreground hover:text-primary" />
                </a>
                <a href="https://divisioncero.com?utm_source=docs.divisioncero.com/docs/kudo" aria-label="Website" target="_blank" rel="noopener noreferrer">
                  <Globe size={20} className="text-fd-secondary-foreground hover:text-primary" />
                </a>
                <a href="https://petervargas.com?utm_source=docs.divisioncero.com/docs/kudo" aria-label="Author's Website - Peter Vargas" target="_blank" rel="noopener noreferrer">
                  <User size={20} className="text-fd-secondary-foreground hover:text-primary" />
                </a>
              </div>
            </div>
            
            {/* Spacer - Empty Column */}
            <div className="hidden md:block md:col-span-2"></div>
            
            {/* Navigation Columns - Right Side */}
            <div className="col-span-12 md:col-span-6 ml-auto grid grid-cols-3 gap-4">
              {/* About Column */}
              <div className="flex flex-col gap-y-2.5">
                <h3 className="font-medium mb-4">Acerca de</h3>
                <ul className="space-y-2">
                  <li><a href="/docs/kudo" className="text-sm hover:underline">Kudo</a></li>
                  <li><a href="https://divisioncero.com/herramientas?utm_source=docs.divisioncero.com/docs/kudo" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">Herramientas</a></li>
                  <li><a href="/blog" className="text-sm hover:underline">Blog</a></li>
                </ul>
              </div>

              {/* Product Column */}
              <div className="flex flex-col gap-y-2.5">
                <h3 className="font-medium mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="https://divisioncero.com/cursos?utm_source=docs.divisioncero.com/docs/kudo" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">CyberAcademy</a></li>
                  <li><a href="https://divisioncero.com/ciberseguridad-empresarial?utm_source=docs.divisioncero.com/docs/kudo" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">Cibersecurity Empresarial</a></li>
                  <li><a href="/" className="text-sm hover:underline">Documentación</a></li>
                </ul>
              </div>

              {/* Legal Column */}
              <div className="flex flex-col gap-y-2.5">
                <h3 className="font-medium mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="https://divisioncero.com/terms-of-service?utm_source=docs.divisioncero.com/docs/kudo" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">Términos de Servicio</a></li>
                  <li><a href="https://divisioncero.com/privacy-policy?utm_source=docs.divisioncero.com/docs/kudo" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">Política de Privacidad</a></li>
                  <li><a href="https://divisioncero.com/cookie-policy?utm_source=docs.divisioncero.com/docs/kudo" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">Política de Cookies</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </DocsLayout>
    </>
  );
}
