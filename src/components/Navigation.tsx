import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-gradient">TEKNIK</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-foreground hover:text-accent transition-colors">
              Products
            </a>
            <a href="#cables" className="text-foreground hover:text-accent transition-colors">
              Cables
            </a>
            <a href="#connectors" className="text-foreground hover:text-accent transition-colors">
              Connectors
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
            <Button className="btn-technical">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              <a href="#products" className="text-foreground hover:text-accent transition-colors py-2">
                Products
              </a>
              <a href="#cables" className="text-foreground hover:text-accent transition-colors py-2">
                Cables
              </a>
              <a href="#connectors" className="text-foreground hover:text-accent transition-colors py-2">
                Connectors
              </a>
              <a href="#about" className="text-foreground hover:text-accent transition-colors py-2">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors py-2">
                Contact
              </a>
              <Button className="btn-technical w-full mt-4">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};