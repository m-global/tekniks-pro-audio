import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const SpecificationsSection = () => {
  const cableSpecs = [
    {
      category: "Audio Cables",
      specifications: [
        { label: "Conductor", value: "OFC (Oxygen Free Copper)" },
        { label: "Impedance", value: "75Ω ±3Ω" },
        { label: "Capacitance", value: "≤ 30pF/m" },
        { label: "Reel Length", value: "100m / 300m" },
        { label: "Temperature Range", value: "-20°C to +70°C" },
        { label: "Jacket Material", value: "PVC / PE Available" }
      ]
    },
    {
      category: "Video Cables",
      specifications: [
        { label: "Conductor", value: "OFC Copper" },
        { label: "Impedance", value: "75Ω ±1.5Ω" },
        { label: "Return Loss", value: "> 20dB up to 1GHz" },
        { label: "Attenuation", value: "≤ 5.5dB/100m @ 100MHz" },
        { label: "Reel Length", value: "100m / 300m" },
        { label: "Shielding", value: "Quad Shield" }
      ]
    },
    {
      category: "Lighting Cables",
      specifications: [
        { label: "Conductor", value: "OFC Copper" },
        { label: "Impedance", value: "120Ω ±10%" },
        { label: "Capacitance", value: "≤ 40pF/m" },
        { label: "DMX Standard", value: "DMX512-A Compliant" },
        { label: "Reel Length", value: "100m / 300m" },
        { label: "Jacket", value: "UV Resistant PVC" }
      ]
    }
  ];

  const connectorSpecs = [
    {
      type: "XLR Connectors",
      specs: [
        "3-Pin Male/Female",
        "5-Pin Male/Female Available", 
        "Gold Plated Contacts",
        "Zinc Die-Cast Housing",
        "Professional Locking Mechanism",
        "IEC 61076-2-103 Compliant"
      ]
    },
    {
      type: "6.3mm Jacks",
      specs: [
        "Mono (TS) Configuration",
        "Stereo (TRS) Configuration",
        "Gold Plated Contacts",
        "Nickel Plated Housing",
        "Spring Relief Mechanism",
        "Professional Grade Construction"
      ]
    },
    {
      type: "RCS Connectors",
      specs: [
        "BNC Style Bayonet Lock",
        "75Ω Impedance Matched",
        "Gold Plated Center Pin",
        "Precision Machined Housing",
        "High Frequency Performance",
        "Professional Installation Grade"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Specifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Detailed technical specifications for our professional cable and connector products.
          </p>
        </div>

        <Tabs defaultValue="cables" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="cables" className="text-base">Cables</TabsTrigger>
            <TabsTrigger value="connectors" className="text-base">Connectors</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cables" className="mt-0">
            <div className="grid-technical grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {cableSpecs.map((cable, index) => (
                <Card 
                  key={cable.category}
                  className="card-professional animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-accent">{cable.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {cable.specifications.map((spec) => (
                        <div key={spec.label} className="flex justify-between border-b border-border/30 pb-2">
                          <span className="text-muted-foreground text-sm">{spec.label}</span>
                          <span className="text-foreground text-sm font-medium">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="connectors" className="mt-0">
            <div className="grid-technical grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {connectorSpecs.map((connector, index) => (
                <Card 
                  key={connector.type}
                  className="card-professional animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-technical">{connector.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {connector.specs.map((spec) => (
                        <div key={spec} className="flex items-center">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                          <span className="text-muted-foreground text-sm">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};