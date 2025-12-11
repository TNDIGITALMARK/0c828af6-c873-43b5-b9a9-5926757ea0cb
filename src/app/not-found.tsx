import { Navigation } from "@/components/instantly/navigation";
import { Footer } from "@/components/instantly/footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-lg space-y-6">
          <h1 className="text-9xl font-black text-primary">404</h1>
          <h2 className="text-4xl font-bold text-foreground">Page Not Found</h2>
          <p className="text-xl text-center text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
