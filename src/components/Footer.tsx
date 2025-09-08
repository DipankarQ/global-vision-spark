import { Button } from "@/components/ui/button";
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        "SEO Optimization",
        "Web Design",
        "Digital Marketing",
        "Lead Generation",
        "Analytics",
        "Growth Strategy"
      ]
    },
    {
      title: "Company", 
      links: [
        "About Us",
        "Our Team",
        "Careers",
        "Case Studies",
        "Blog",
        "Contact"
      ]
    },
    {
      title: "Resources",
      links: [
        "Free Tools",
        "Templates",
        "Guides",
        "Webinars",
        "FAQ",
        "Support"
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gradient-hero border-t border-white/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(120,119,198,0.3),transparent)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-electric rounded-xl flex items-center justify-center">
                <Globe className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">Global Trend</div>
                <div className="text-sm text-muted-foreground">Lead The Change</div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We specialize in helping businesses grow through strategic, results-driven digital marketing solutions. 
              Transform your online presence and accelerate your growth with our expert team.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                <span>contact@globaltrend.co.in</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-accent" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
          
          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-accent transition-colors duration-300 relative group"
                    >
                      {link}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Stay ahead of the <span className="bg-gradient-electric bg-clip-text text-transparent">trend</span>
              </h3>
              <p className="text-muted-foreground">
                Get the latest marketing insights and growth strategies delivered to your inbox.
              </p>
            </div>
            
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 backdrop-blur-glass border border-white/10 rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/40"
              />
              <Button variant="hero">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © 2024 Global Trend. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-10 h-10 bg-white/5 backdrop-blur-glass border border-white/10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;