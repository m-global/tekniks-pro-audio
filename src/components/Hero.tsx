import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cables.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">TEKNIK</span>
              <br />
              Professional Cables
            </h1>
          </div>
          
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Premium Audio, Video, Lighting and Musical Instrument Cables & Connectors. 
              Professional quality without the premium price.
            </p>
          </div>

          <div className="animate-fade-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="btn-hero text-lg px-8 py-6">
              View Products
            </Button>
            <Button variant="outline" size="lg" className="btn-outline-professional text-lg px-8 py-6">
              Technical Specs
            </Button>
          </div>

          <div className="animate-fade-up mt-12 grid grid-cols-2 md:grid-cols-4 gap-8" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">OFC</div>
              <div className="text-sm text-muted-foreground">Oxygen Free Copper</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-technical mb-2">100m</div>
              <div className="text-sm text-muted-foreground">Standard Reels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-quality mb-2">QC</div>
              <div className="text-sm text-muted-foreground">Quality Control</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">Pro</div>
              <div className="text-sm text-muted-foreground">Professional Grade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};