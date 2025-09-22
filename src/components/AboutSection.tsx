import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Shield } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Years of experience in the cable and connector business with deep technical knowledge."
    },
    {
      icon: Users,
      title: "Wide Dealer Network",
      description: "Extensive network of dealers and users across professional markets and installations."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "High standards with proper QC processes ensuring consistent professional quality."
    },
    {
      icon: CheckCircle,
      title: "OFC Standard",
      description: "All cables feature Oxygen Free Copper (OFC) construction for superior performance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">TEKNIK</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are a company with extensive expertise in the cable and connector business. 
              With our wide range of dealer network and users, we have decided to produce our 
              own cables and connectors for those who require good quality without the high price.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We maintain our quality to high standards with proper Quality Control processes. 
              All our cables are OFC (Oxygen Free Copper) cables standard, ensuring superior 
              performance for professional applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center text-foreground">
                <CheckCircle className="h-5 w-5 text-quality mr-3" />
                <span>OFC Copper Standard</span>
              </div>
              <div className="flex items-center text-foreground">
                <CheckCircle className="h-5 w-5 text-quality mr-3" />
                <span>Professional QC</span>
              </div>
              <div className="flex items-center text-foreground">
                <CheckCircle className="h-5 w-5 text-quality mr-3" />
                <span>Competitive Pricing</span>
              </div>
              <div className="flex items-center text-foreground">
                <CheckCircle className="h-5 w-5 text-quality mr-3" />
                <span>Wide Dealer Network</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid-technical grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title} 
                  className="card-professional animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};