import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, BarChart3, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Manage Tasks Like a{" "}
            <span className="gradient-text">Pro</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
            Production-grade task management platform with role-based access,
            real-time analytics, and advanced filtering capabilities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button asChild size="lg" className="text-lg">
              <Link to="/auth">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg">
              <Link to="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-lg hover:scale-105 transition-transform">
              <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Task Management</h3>
              <p className="text-muted-foreground">
                Complete CRUD operations with status tracking, priority levels,
                and deadline management
              </p>
            </div>

            <div className="glass-card p-8 rounded-lg hover:scale-105 transition-transform">
              <BarChart3 className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Analytics Dashboard</h3>
              <p className="text-muted-foreground">
                Real-time insights with beautiful charts and task statistics
              </p>
            </div>

            <div className="glass-card p-8 rounded-lg hover:scale-105 transition-transform">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Role-Based Access</h3>
              <p className="text-muted-foreground">
                Secure authentication with admin and user roles for team collaboration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Built with Modern Technologies
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Production-grade stack for scalability and performance
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["React", "TypeScript", "Tailwind CSS", "Supabase"].map((tech) => (
              <div key={tech} className="glass-card p-6 rounded-lg">
                <p className="text-lg font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-lg">
          <Zap className="h-16 w-16 text-primary mx-auto mb-6 animate-glow" />
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of teams managing their tasks efficiently
          </p>
          <Button asChild size="lg" className="text-lg">
            <Link to="/auth">
              Create Free Account <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 TaskFlow. Production-grade task management.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
