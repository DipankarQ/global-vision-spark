import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, TrendingUp, Star } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "TechCorp Digital Transformation",
      category: "Enterprise Solutions",
      description: "Complete digital transformation resulting in 400% increase in online revenue and market expansion.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      results: [
        { metric: "Revenue Growth", value: "+400%" },
        { metric: "Lead Generation", value: "+280%" },
        { metric: "Market Reach", value: "12 Countries" }
      ],
      tags: ["SEO", "Web Design", "Digital Marketing"],
      featured: true
    },
    {
      id: 2,
      title: "StartupBoost Campaign",
      category: "Startup Growth",
      description: "Helped a fintech startup scale from 0 to 100K users in 6 months through strategic growth marketing.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      results: [
        { metric: "User Acquisition", value: "100K+" },
        { metric: "Time to Scale", value: "6 Months" },
        { metric: "Conversion Rate", value: "+45%" }
      ],
      tags: ["Growth Marketing", "Analytics", "User Acquisition"]
    },
    {
      id: 3,
      title: "E-commerce Revolution",
      category: "Retail & E-commerce",
      description: "Transformed traditional retail business into e-commerce powerhouse with omnichannel strategy.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      results: [
        { metric: "Online Sales", value: "+350%" },
        { metric: "Customer Base", value: "+200%" },
        { metric: "ROI", value: "500%" }
      ],
      tags: ["E-commerce", "Omnichannel", "SEO"]
    },
    {
      id: 4,
      title: "Healthcare Digital Presence",
      category: "Healthcare",
      description: "Built comprehensive digital presence for healthcare network, improving patient engagement and appointments.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      results: [
        { metric: "Patient Engagement", value: "+180%" },
        { metric: "Online Appointments", value: "+300%" },
        { metric: "Brand Awareness", value: "+150%" }
      ],
      tags: ["Healthcare Marketing", "Web Design", "Patient Engagement"]
    },
    {
      id: 5,
      title: "Global SaaS Expansion",
      category: "SaaS",
      description: "International expansion strategy for SaaS platform, entering 15 new markets with localized campaigns.",
      image: "https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=600&h=400&fit=crop",
      results: [
        { metric: "Market Expansion", value: "15 Markets" },
        { metric: "Global Revenue", value: "+250%" },
        { metric: "User Growth", value: "+180%" }
      ],
      tags: ["International Marketing", "SaaS Growth", "Localization"]
    },
    {
      id: 6,
      title: "Manufacturing Digital Edge",
      category: "Manufacturing",
      description: "Modernized manufacturing company's digital presence with B2B lead generation and industry thought leadership.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      results: [
        { metric: "B2B Leads", value: "+320%" },
        { metric: "Industry Recognition", value: "Top 10" },
        { metric: "Sales Pipeline", value: "+400%" }
      ],
      tags: ["B2B Marketing", "Manufacturing", "Lead Generation"]
    }
  ];

  const categories = ["All", "Enterprise Solutions", "Startup Growth", "Retail & E-commerce", "Healthcare", "SaaS", "Manufacturing"];

  return (
    <section id="portfolio" className="py-24 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-glass rounded-full px-4 py-2 border border-white/10 mb-6">
            <Star className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">Success Stories</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-display mb-6">
            <span className="text-foreground">Proven</span>
            <br />
            <span className="bg-gradient-electric bg-clip-text text-transparent">Results</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve remarkable growth and digital transformation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "hero" : "glass"}
              size="sm"
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Project */}
        <div className="mb-16 animate-scale-in">
          <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl overflow-hidden shadow-glass hover:shadow-glow-electric transition-all duration-500 hover:scale-[1.02]">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative group overflow-hidden">
                <img 
                  src={projects[0].image} 
                  alt={projects[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-electric/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Featured Project
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-accent text-sm font-medium">{projects[0].category}</span>
                  <h3 className="text-2xl lg:text-3xl font-bold font-display text-foreground mt-2 mb-4">
                    {projects[0].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {projects[0].description}
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-6 mb-6">
                  {projects[0].results.map((result) => (
                    <div key={result.metric} className="text-center">
                      <div className="text-2xl font-bold font-display text-primary mb-1">
                        {result.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].tags.map((tag) => (
                    <span key={tag} className="bg-white/10 text-foreground px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="hero" className="group w-fit">
                  View Case Study
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(1).map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl overflow-hidden shadow-glass hover:shadow-glow-cyber hover:scale-105 transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-cyber/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-accent text-xs font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {project.results.map((result) => (
                    <div key={result.metric} className="text-center">
                      <div className="text-lg font-bold font-display text-secondary mb-1">
                        {result.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-white/10 text-foreground px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="ghost" size="sm" className="group/btn w-full justify-between hover:text-accent">
                  View Details
                  <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-8 lg:p-12 shadow-glass">
            <h3 className="text-2xl lg:text-3xl font-bold font-display text-foreground mb-4">
              Ready to Create Your <span className="bg-gradient-cyber bg-clip-text text-transparent">Success Story</span>?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our portfolio of successful brands. Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                <Calendar className="w-5 h-5" />
                Schedule Strategy Call
              </Button>
              <Button variant="glass" size="lg" className="group">
                <Users className="w-5 h-5" />
                View All Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;