import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Calendar, Globe } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["Mumbai, Maharashtra", "India 400001"],
      color: "primary"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 1234567890", "Mon-Fri, 9AM-6PM IST"],
      color: "secondary"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["contact@globaltrend.co.in", "We reply within 24 hours"],
      color: "accent"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday", "9:00 AM - 6:00 PM IST"],
      color: "primary"
    }
  ];

  const services = [
    "SEO Optimization",
    "Web Design & Development",
    "Digital Marketing",
    "Lead Generation",
    "Analytics & Insights",
    "Growth Strategy",
    "E-commerce Solutions",
    "Other"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-glass rounded-full px-4 py-2 border border-white/10 mb-6">
            <MessageSquare className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm text-muted-foreground">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-display mb-6">
            <span className="text-foreground">Let's Start Your</span>
            <br />
            <span className="bg-gradient-electric bg-clip-text text-transparent">Growth Journey</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Schedule a consultation and discover how our proven strategies can accelerate your growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-8 shadow-glass">
              <h3 className="text-2xl font-bold font-display text-foreground mb-6">
                Send Us a <span className="text-accent">Message</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 backdrop-blur-glass border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 backdrop-blur-glass border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 backdrop-blur-glass border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 backdrop-blur-glass border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 backdrop-blur-glass border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/40 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-background text-foreground">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 backdrop-blur-glass border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/40 transition-colors resize-none"
                    placeholder="Tell us about your project and goals..."
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-scale-in">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.title}
                    className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 shadow-glass group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-electric rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                          {info.title}
                        </h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className={`text-muted-foreground ${idx === 0 ? 'font-medium' : 'text-sm'}`}>
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-foreground">Quick Actions</h4>
              <div className="space-y-3">
                <Button variant="glass" size="lg" className="w-full justify-start group">
                  <Calendar className="w-5 h-5" />
                  Schedule a Strategy Call
                </Button>
                <Button variant="glass" size="lg" className="w-full justify-start group">
                  <Globe className="w-5 h-5" />
                  Request a Free Audit
                </Button>
                <Button variant="glass" size="lg" className="w-full justify-start group">
                  <MessageSquare className="w-5 h-5" />
                  Start Live Chat
                </Button>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-xl p-6 shadow-glass">
              <h4 className="font-bold text-foreground mb-3">Response Time</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">Email Response</span>
                  <span className="text-accent font-medium">Within 2 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">Call Response</span>
                  <span className="text-secondary font-medium">Within 30 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">Proposal Delivery</span>
                  <span className="text-primary font-medium">Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;