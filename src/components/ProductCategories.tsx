import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cable, Plug, Zap, Music } from "lucide-react";
import cableImage from "@/assets/cable-products.jpg";
import connectorsImage from "@/assets/connectors.jpg";

export const ProductCategories = () => {
  const categories = [
    {
      title: "Audio Cables",
      description: "Professional grade audio cables for studio and live applications",
      icon: Music,
      image: cableImage,
      specs: ["OFC Copper", "100m & 300m Reels", "Low Noise", "High Flexibility"]
    },
    {
      title: "Video Cables", 
      description: "High bandwidth video cables for broadcast and professional AV",
      icon: Zap,
      image: cableImage,
      specs: ["75Ω Impedance", "HD/4K Ready", "Low Loss", "Precision Manufactured"]
    },
    {
      title: "Lighting Cables",
      description: "DMX and power cables for professional lighting installations",
      icon: Cable,
      image: cableImage,
      specs: ["DMX512 Standard", "Power Distribution", "Stage Ready", "Weather Resistant"]
    },
    {
      title: "Connectors",
      description: "XLR, 6.3mm Jacks, and RCS connectors for professional applications",
      icon: Plug,
      image: connectorsImage,
      specs: ["XLR Balanced", "6.3mm Mono/Stereo", "RCS Standard", "Gold Plated Contacts"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Product Range</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete cable and connector solutions for professional audio, video, lighting, 
            and musical instrument applications.
          </p>
        </div>

        <div className="grid-technical grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title} 
                className="card-product group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="relative overflow-hidden rounded-t-lg">
                  <div 
                    className="h-48 bg-cover bg-center rounded-t-lg"
                    style={{ backgroundImage: `url(${category.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-3 text-foreground">
                    {category.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {category.specs.map((spec) => (
                      <div key={spec} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                        <span className="text-muted-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full btn-outline-professional group-hover:bg-accent group-hover:text-accent-foreground"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};