import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, TrendingUp, Target } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import floatingElements from "@/assets/floating-elements.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-20 animate-gradient-x"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Floating Elements */}
      <div 
        className="absolute top-20 right-20 w-64 h-64 opacity-30 animate-float"
        style={{
          backgroundImage: `url(${floatingElements})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Glass Morphism Overlay */}
      <div className="absolute inset-0 bg-gradient-glass backdrop-blur-sm" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-glass rounded-full px-4 py-2 border border-white/10 mb-8">
              <Zap className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-sm text-muted-foreground">Lead The Change</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-electric bg-clip-text text-transparent animate-gradient-x">
                Skyrocket
              </span>
              <br />
              <span className="text-foreground">Your Brand</span>
              <br />
              <span className="text-2xl lg:text-3xl text-muted-foreground font-normal">
                with Proven Tactics
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl">
              Boost your brand with data-driven marketing that drives results. 
              Our expert team delivers measurable growth through innovative digital strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Schedule a Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="glass" size="lg" className="group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Brands Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-secondary mb-1">300%</div>
                <div className="text-sm text-muted-foreground">Avg Growth Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Interactive Visual */}
          <div className="relative lg:ml-12 animate-scale-in">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-8 shadow-glass">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-electric rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Growth Analytics</h3>
                    <p className="text-sm text-muted-foreground">Real-time performance tracking</p>
                  </div>
                </div>
                
                {/* Fake Chart */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Website Traffic</span>
                    <span className="text-accent font-semibold">+245%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-electric h-2 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Lead Generation</span>
                    <span className="text-secondary font-semibold">+180%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-cyber h-2 rounded-full w-2/3 animate-pulse"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Conversion Rate</span>
                    <span className="text-primary font-semibold">+320%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-4/5 animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Notification */}
              <div className="absolute -top-4 -right-4 bg-accent/90 backdrop-blur-glass rounded-xl p-4 border border-accent/20 shadow-glow-cyber animate-float">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent-foreground" />
                  <div>
                    <div className="text-sm font-semibold text-accent-foreground">Goal Achieved!</div>
                    <div className="text-xs text-accent-foreground/80">New milestone reached</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;