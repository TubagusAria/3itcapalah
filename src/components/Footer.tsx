import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="mb-4">3ITC DigitalXperience</h3>
            <p className="text-muted-foreground mb-4">
              Platform teknologi dan pembelajaran digital terpadu yang membantu tech professionals berkembang dan menguasai skill masa depan.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <a href="#kursus" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kursus
                </a>
              </li>
              <li>
                <a href="#insight" className="text-muted-foreground hover:text-foreground transition-colors">
                  Insight
                </a>
              </li>
              <li>
                <a href="#berita" className="text-muted-foreground hover:text-foreground transition-colors">
                  Berita
                </a>
              </li>
              <li>
                <a href="#shopping" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shopping
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Jl. Pendidikan No. 123, Jakarta Selatan 12345</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@organisasikami.id</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Dapatkan update tech news, kursus terbaru, dan promo eksklusif.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Email Anda" type="email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              © 2025 3ITC DigitalXperience. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
