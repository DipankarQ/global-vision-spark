import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Award, Globe2, Star, Quote, ArrowRight } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Brands Transformed",
      color: "primary"
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "Average Growth Rate",
      color: "secondary"
    },
    {
      icon: Award,
      number: "50+",
      label: "Industry Awards",
      color: "accent"
    },
    {
      icon: Globe2,
      number: "25+",
      label: "Countries Served",
      color: "primary"
    }
  ];

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Growth Marketing Director",
      expertise: "Digital Strategy & Analytics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Sarah Kim",
      role: "Creative Director",
      expertise: "Brand Design & UX",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Marcus Johnson",
      role: "SEO Specialist",
      expertise: "Technical SEO & Content",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary';
      case 'secondary':
        return 'text-secondary';
      case 'accent':
        return 'text-accent';
      default:
        return 'text-primary';
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-glass rounded-full px-4 py-2 border border-white/10 mb-6">
            <Award className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">About Global Trend</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-display mb-6">
            <span className="bg-gradient-electric bg-clip-text text-transparent">Leading The</span>
            <br />
            <span className="text-foreground">Digital Revolution</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate digital marketing experts who believe in the power of data-driven strategies 
            to transform businesses and accelerate growth in the digital landscape.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 shadow-glass hover:shadow-glow-electric">
                  <div className="w-16 h-16 bg-gradient-electric rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className={`text-3xl lg:text-4xl font-bold font-display mb-2 ${getColorClasses(stat.color)}`}>
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm lg:text-base">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-up">
            <h3 className="text-3xl lg:text-4xl font-bold font-display mb-6">
              Our <span className="bg-gradient-cyber bg-clip-text text-transparent">Mission</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              To empower businesses with cutting-edge digital marketing strategies that drive measurable results. 
              We believe every brand has the potential to lead their industry with the right approach and execution.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Data-Driven Strategies</h4>
                  <p className="text-muted-foreground text-sm">Every decision backed by comprehensive analytics and market research.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Innovation First</h4>
                  <p className="text-muted-foreground text-sm">Staying ahead of trends with cutting-edge tools and techniques.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Measurable Results</h4>
                  <p className="text-muted-foreground text-sm">Transparent reporting with clear ROI and performance metrics.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-8 shadow-glass">
              <div className="text-center">
                <Quote className="w-12 h-12 text-accent mx-auto mb-6" />
                <blockquote className="text-lg lg:text-xl text-foreground mb-6 font-medium">
                  "Our approach combines creative innovation with analytical precision to deliver 
                  marketing solutions that don't just meet expectations—they exceed them."
                </blockquote>
                <div className="text-muted-foreground">
                  <div className="font-semibold">Global Trend Team</div>
                  <div className="text-sm">Digital Marketing Experts</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12 animate-slide-up">
          <h3 className="text-3xl lg:text-4xl font-bold font-display mb-4">
            Meet Our <span className="bg-gradient-electric bg-clip-text text-transparent">Expert Team</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our diverse team brings together years of experience in digital marketing, creative design, and growth strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 shadow-glass hover:shadow-glow-cyber">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-accent/20 group-hover:border-accent/60 transition-colors duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-electric opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{member.name}</h4>
                <p className="text-accent font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.expertise}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-slide-up">
          <Button variant="hero" size="lg" className="group">
            Join Our Success Stories
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;