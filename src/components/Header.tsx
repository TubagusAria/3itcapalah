import { BookOpen, Lightbulb, Newspaper, ShoppingBag, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import logo from "figma:asset/5293a57e03dc2a48966d42ab8c059718cd7219ad.png";

export function Header() {
  const navItems = [
    { name: "Kursus", icon: BookOpen, href: "#kursus" },
    { name: "Insight", icon: Lightbulb, href: "#insight" },
    { name: "Berita", icon: Newspaper, href: "#berita" },
    { name: "Shopping", icon: ShoppingBag, href: "#shopping" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="DigitalXperience" className="h-10 w-auto" />
          <h1 className="hidden sm:block">DigitalXperience</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
            >
              <item.icon className="w-4 h-4" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button className="hidden sm:inline-flex">Gabung Sekarang</Button>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors p-2"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </a>
                ))}
                <Button className="mt-4">Gabung Sekarang</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
