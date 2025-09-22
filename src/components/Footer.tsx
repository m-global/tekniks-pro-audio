import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient">TEKNIK</span>
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Professional cables and connectors for audio, video, lighting, and musical instrument applications.
            </p>
            <p className="text-sm text-muted-foreground">
              Quality without compromise.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Audio Cables</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Video Cables</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Lighting Cables</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">XLR Connectors</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">6.3mm Jacks</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">RCA Connectors</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Technical Specs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Installation Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Dealer Network</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Quality Control</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Warranty</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>sales@teknik-cables.com</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Industrial District<br />Tech City, TC 12345</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 TEKNIK. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Quality Standards
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};