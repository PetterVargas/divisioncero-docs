import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
import { Linkedin, Twitter, Facebook, Github, Instagram, Youtube, Globe, Video, User } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeLayout 
        {...baseOptions}
        className="flex-grow"
      >
        {children}
      </HomeLayout>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
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
              <a href="https://linkedin.com/company/divisioncero" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} className="text-fd-secondary-foreground hover:text-primary" />
              </a>
              <a href="https://x.com/divisioncero" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} className="text-fd-secondary-foreground hover:text-primary" />
              </a>
              <a href="https://facebook.com/divisioncerocom" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} className="text-fd-secondary-foreground hover:text-primary" />
              </a>
              <a href="https://github.com/PetterVargas" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Github size={20} className="text-fd-secondary-foreground hover:text-primary" />
              </a>
              <a href="https://instagram.com/divisioncero" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} className="text-fd-secondary-foreground hover:text-primary" />
              </a>
              <a href="https://youtube.com/@divisioncero" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <Youtube size={20} className="text-fd-secondary-foreground hover:text-primary" />
              </a>
              <a href="https://tiktok.com/@divisioncero" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                <Video size={20} className="text-fd-secondary-foreground hover:text-primary" />
              </a>
              <a href="https://divisioncero.com" aria-label="Website" target="_blank" rel="noopener noreferrer">
                <Globe size={20} className="text-fd-secondary-foreground hover:text-primary" />
              </a>
              <a href="https://petervargas.com" aria-label="Author's Website - Peter Vargas" target="_blank" rel="noopener noreferrer">
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
              <h3 className="font-medium mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="https://docs.divisioncero.com/docs/kudo" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">Kudo</a></li>
                <li><a href="https://divisioncero.com/tools" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">Tools</a></li>
                <li><a href="/blog" className="text-sm hover:underline">Blog</a></li>
              </ul>
            </div>

            {/* Product Column */}
            <div className="flex flex-col gap-y-2.5">
              <h3 className="font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="https://divisioncero.com/courses" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">CyberAcademy</a></li>
                <li><a href="https://divisioncero.com/ciberseguridad-empresarial" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">Cibersecurity Empresarial</a></li>
                <li><a href="https://docs.divisioncero.com/" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">Documentación</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col gap-y-2.5">
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="https://divisioncero.com/terms-of-service" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">Términos de Servicio</a></li>
                <li><a href="https://divisioncero.com/privacy-policy" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">Política de Privacidad</a></li>
                <li><a href="https://divisioncero.com/cookie-policy" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">Política de Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}