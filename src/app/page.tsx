import { Navigation } from "@/components/instantly/navigation";
import { Footer } from "@/components/instantly/footer";
import { FeatureCard } from "@/components/instantly/feature-card";
import { Button } from "@/components/ui/button";
import { Video, Truck, Briefcase, DollarSign, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-black text-foreground leading-tight">
              Live. Stream. Deliver.{" "}
              <span className="text-primary">Connect.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join thousands of creators and providers on the platform that combines live streaming entertainment, instant local delivery, and community services in one powerful app.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-red w-full sm:w-auto"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.createcommunity.instantlyofficial&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Google Play
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6 w-full sm:w-auto"
              >
                <a
                  href="https://apps.apple.com/us/app/instantly-community/id6747051652"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  App Store
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Everything You Need in One App
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Instantly brings together entertainment, convenience, and opportunity in a seamless experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={Video}
              title="Live Streaming"
              description="Watch engaging live content from local creators, interact in real-time, and discover entertainment that connects you with your community."
            />

            <FeatureCard
              icon={Truck}
              title="Local Delivery"
              description="Order food, groceries, and essentials from local businesses with real-time tracking and creator-powered delivery experiences."
            />

            <FeatureCard
              icon={Briefcase}
              title="Services Marketplace"
              description="Book trusted local services from verified providers, from home repairs to personal training, all within the Instantly ecosystem."
            />
          </div>
        </div>
      </section>

      {/* Provider Recruitment Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-4">
                  <DollarSign className="w-10 h-10 text-primary" />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Earn Money as an Instantly Provider
                </h2>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Join our growing network of service providers and start earning on your own schedule. Whether you offer delivery services, live streaming, or professional skills, Instantly connects you with customers who need your expertise.
                </p>

                <div className="bg-secondary/50 border border-border rounded-lg p-6 max-w-md mx-auto">
                  <p className="text-sm text-muted-foreground mb-2">Average Monthly Earnings</p>
                  <p className="text-4xl font-bold text-primary">$2,847</p>
                </div>

                <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-6 py-4 max-w-2xl mx-auto">
                  "I've tripled my income since joining Instantly as a provider. The platform makes it easy to connect with customers and grow my business."
                </blockquote>

                <div className="pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-red"
                  >
                    <Link href="/apply" className="flex items-center gap-2">
                      Apply to Become a Provider
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download the Instantly app today and experience the future of live streaming, delivery, and community services.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-red w-full sm:w-auto"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.createcommunity.instantlyofficial&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Download for Android
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6 w-full sm:w-auto"
            >
              <a
                href="https://apps.apple.com/us/app/instantly-community/id6747051652"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Download for iOS
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
