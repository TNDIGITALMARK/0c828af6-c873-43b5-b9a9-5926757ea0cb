import { Navigation } from "@/components/instantly/navigation";
import { Footer } from "@/components/instantly/footer";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Award, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6">
            Empowering Communities Through{" "}
            <span className="text-primary">Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl text-center text-muted-foreground">
            Instantly is revolutionizing how people connect, earn, and access services in their local communities.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Instantly was born from a simple vision: to create a platform that seamlessly integrates entertainment, commerce, and community services into one powerful ecosystem.
                </p>
                <p>
                  We recognized that people were juggling multiple apps for streaming content, ordering deliveries, and finding local services. Our founders asked: "Why can't this all exist in one place?"
                </p>
                <p>
                  Today, Instantly serves thousands of users and providers, creating economic opportunities while fostering genuine community connections. We're building more than an app—we're building a movement that empowers individuals to monetize their skills and access what they need, when they need it.
                </p>
              </div>
            </div>
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Our Impact
              </h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-black text-primary mb-2">50,000+</div>
                  <div className="text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-primary mb-2">5,000+</div>
                  <div className="text-muted-foreground">Verified Providers</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-primary mb-2">1M+</div>
                  <div className="text-muted-foreground">Transactions Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
              We're driven by a commitment to empower communities and create economic opportunities for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Community First</h3>
              <p className="text-muted-foreground text-sm">
                We prioritize the needs and success of our community members in every decision we make.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Growth & Opportunity</h3>
              <p className="text-muted-foreground text-sm">
                We create pathways for individuals to grow their skills, income, and business potential.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Excellence</h3>
              <p className="text-muted-foreground text-sm">
                We maintain the highest standards of quality, safety, and service in everything we deliver.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Authenticity</h3>
              <p className="text-muted-foreground text-sm">
                We foster genuine connections and authentic experiences between creators and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Building the Future Together
            </h2>
            <p className="text-xl text-center text-muted-foreground leading-relaxed">
              Our vision is to create a world where anyone can turn their passion into income, where communities are stronger and more connected, and where accessing essential services is as easy as a tap on your phone.
            </p>
            <p className="text-xl text-center text-muted-foreground leading-relaxed">
              We're just getting started. Join us on this journey to transform how communities interact, transact, and thrive together.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 md:p-12 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Join the Movement?
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-8">
              Whether you're looking to discover amazing content, order local services, or become a provider yourself, Instantly has a place for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 py-6 shadow-red w-full sm:w-auto"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.createcommunity.instantlyofficial&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Download App
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6 w-full sm:w-auto"
              >
                <Link href="/apply" className="flex items-center gap-2">
                  Become a Provider
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
