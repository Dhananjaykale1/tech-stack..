import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }
      
      setUser(session.user);
      setLoading(false);
    };

    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        navigate("/auth");
      }
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({ title: "Logged out successfully" });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <header className="max-w-7xl mx-auto mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold gradient-text mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {user?.email}</p>
        </div>
        <Button onClick={handleLogout} variant="outline">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Total Tasks</h3>
          <p className="text-4xl font-bold gradient-text">0</p>
        </div>
        
        <div className="glass-card p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">In Progress</h3>
          <p className="text-4xl font-bold gradient-text">0</p>
        </div>
        
        <div className="glass-card p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Completed</h3>
          <p className="text-4xl font-bold gradient-text">0</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8">
        <div className="glass-card p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Your Tasks</h2>
          <p className="text-muted-foreground">Task management features coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
