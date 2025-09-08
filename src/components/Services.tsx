import { Button } from "@/components/ui/button";
import { Search, Palette, BarChart3, Megaphone, Target, Rocket, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your search rankings with data-driven SEO strategies that drive organic traffic and increase visibility.",
      features: ["Keyword Research", "Technical SEO", "Content Strategy", "Link Building"],
      color: "primary"
    },
    {
      icon: Palette,
      title: "Creative Web Design",
      description: "Stunning, conversion-focused websites that captivate your audience and drive business growth.",
      features: ["UI/UX Design", "Responsive Development", "Brand Identity", "User Experience"],
      color: "secondary"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Make informed decisions with comprehensive analytics and performance tracking that reveals what works.",
      features: ["Performance Tracking", "User Behavior", "ROI Analysis", "Custom Reports"],
      color: "accent"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Comprehensive marketing campaigns across all digital channels to maximize your reach and impact.",
      features: ["Social Media", "PPC Advertising", "Email Marketing", "Content Creation"],
      color: "primary"
    },
    {
      icon: Target,
      title: "Lead Generation",
      description: "Strategic lead generation campaigns that identify and convert high-quality prospects into customers.",
      features: ["Lead Scoring", "Nurture Campaigns", "Conversion Optimization", "CRM Integration"],
      color: "secondary"
    },
    {
      icon: Rocket,
      title: "Growth Strategy",
      description: "Scalable growth strategies that accelerate your business expansion and market dominance.",
      features: ["Market Analysis", "Growth Hacking", "Scaling Solutions", "Strategic Planning"],
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          icon: 'bg-gradient-electric text-primary-foreground',
          glow: 'shadow-glow-electric hover:shadow-glow-electric'
        };
      case 'secondary':
        return {
          icon: 'bg-gradient-cyber text-secondary-foreground',
          glow: 'shadow-glow-cyber hover:shadow-glow-cyber'
        };
      case 'accent':
        return {
          icon: 'bg-accent text-accent-foreground',
          glow: 'shadow-glow-cyber hover:shadow-glow-cyber'
        };
      default:
        return {
          icon: 'bg-primary text-primary-foreground',
          glow: 'shadow-glow-electric hover:shadow-glow-electric'
        };
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.3),transparent)] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-glass rounded-full px-4 py-2 border border-white/10 mb-6">
            <Target className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-electric bg-clip-text text-transparent">Growth Marketing</span>
            <br />
            <span className="text-foreground">Solutions</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            How our expert team helps your business scale with innovative digital marketing strategies 
            that deliver measurable results and sustainable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <div
                key={service.title}
                className={`group bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 ${colors.glow} hover:scale-105 animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="ghost" className="group/btn w-full justify-between hover:text-accent">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-8 lg:p-12 shadow-glass">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to <span className="bg-gradient-electric bg-clip-text text-transparent">Transform</span> Your Business?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our proven strategies can accelerate your growth and help you dominate your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;