import { Button } from "@/components/ui/button";
import { Star, Quote, TrendingUp, Award, Users } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "CEO, TechCorp",
      company: "TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=400&fit=crop&crop=face",
      content: "Global Trend transformed our digital presence completely. Their strategic approach led to a 400% increase in online revenue within 8 months. The team's expertise and dedication are unmatched.",
      rating: 5,
      results: {
        metric: "Revenue Growth",
        value: "+400%",
        period: "8 months"
      },
      featured: true
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Founder, StartupBoost",
      company: "FinTech Startup",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      content: "From 0 to 100K users in just 6 months! Global Trend's growth marketing strategies are phenomenal. They understood our vision and executed flawlessly.",
      rating: 5,
      results: {
        metric: "User Growth",
        value: "100K+",
        period: "6 months"
      }
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Marketing Director, RetailMax",
      company: "E-commerce Platform",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      content: "The omnichannel strategy Global Trend developed for us was game-changing. Our e-commerce sales increased by 350% and customer engagement reached new heights.",
      rating: 5,
      results: {
        metric: "Sales Increase",
        value: "+350%",
        period: "12 months"
      }
    },
    {
      id: 4,
      name: "Dr. Robert Kim",
      title: "CEO, HealthCare Network",
      company: "Healthcare Services",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      content: "Patient engagement improved dramatically with their digital strategy. Online appointments increased by 300% and our brand recognition soared.",
      rating: 5,
      results: {
        metric: "Engagement",
        value: "+180%",
        period: "10 months"
      }
    },
    {
      id: 5,
      name: "Lisa Thompson",
      title: "VP Marketing, GlobalSaaS",
      company: "SaaS Platform",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      content: "Their international expansion strategy helped us enter 15 new markets successfully. Revenue grew by 250% globally with their localized campaigns.",
      rating: 5,
      results: {
        metric: "Global Revenue",
        value: "+250%",
        period: "18 months"
      }
    },
    {
      id: 6,
      name: "James Wilson",
      title: "Owner, ManufacturingPro",
      company: "Industrial Manufacturing",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      content: "B2B lead generation was our biggest challenge. Global Trend's strategy increased our qualified leads by 320% and positioned us as industry leaders.",
      rating: 5,
      results: {
        metric: "Lead Generation",
        value: "+320%",
        period: "9 months"
      }
    }
  ];

  const stats = [
    {
      icon: Star,
      value: "4.9/5",
      label: "Client Satisfaction",
      description: "Average rating across all projects"
    },
    {
      icon: TrendingUp,
      value: "280%",
      label: "Average Growth",
      description: "Typical improvement in key metrics"
    },
    {
      icon: Award,
      value: "98%",
      label: "Success Rate",
      description: "Projects exceeding target goals"
    },
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      description: "Brands we've transformed"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-accent fill-accent' : 'text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-glass rounded-full px-4 py-2 border border-white/10 mb-6">
            <Quote className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">Client Success Stories</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-display mb-6">
            <span className="text-foreground">What Our</span>
            <br />
            <span className="bg-gradient-electric bg-clip-text text-transparent">Clients Say</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the businesses we've helped achieve remarkable growth and success.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 shadow-glass">
                  <Icon className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold font-display text-primary mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16 animate-scale-in">
          <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-8 lg:p-12 shadow-glass hover:shadow-glow-electric transition-all duration-500">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  {renderStars(testimonials[0].rating)}
                  <span className="ml-2 text-sm text-muted-foreground">Featured Review</span>
                </div>
                <Quote className="w-12 h-12 text-accent/30 mb-4" />
                <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed font-medium mb-6">
                  "{testimonials[0].content}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[0].image} 
                    alt={testimonials[0].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent/20"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonials[0].name}</div>
                    <div className="text-accent text-sm">{testimonials[0].title}</div>
                    <div className="text-muted-foreground text-sm">{testimonials[0].company}</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="bg-gradient-electric rounded-xl p-6 text-primary-foreground">
                  <div className="text-3xl font-bold font-display mb-2">
                    {testimonials[0].results.value}
                  </div>
                  <div className="text-sm opacity-90 mb-1">{testimonials[0].results.metric}</div>
                  <div className="text-xs opacity-70">in {testimonials[0].results.period}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(1).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 shadow-glass hover:shadow-glow-cyber animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-2 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-accent text-xs">{testimonial.title}</div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-lg font-bold font-display text-secondary">
                    {testimonial.results.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.results.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-slide-up">
          <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-8 lg:p-12 shadow-glass">
            <h3 className="text-2xl lg:text-3xl font-bold font-display text-foreground mb-4">
              Ready to Join Our <span className="bg-gradient-cyber bg-clip-text text-transparent">Success Stories</span>?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create your testimonial next. Schedule a consultation and discover how we can transform your business.
            </p>
            <Button variant="hero" size="lg" className="group">
              Start Your Success Story
              <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;