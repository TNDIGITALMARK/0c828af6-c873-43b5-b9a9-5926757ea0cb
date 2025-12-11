import { Navigation } from "@/components/instantly/navigation";
import { Footer } from "@/components/instantly/footer";
import { FeatureCard } from "@/components/instantly/feature-card";
import { Button } from "@/components/ui/button";
import { Video, Truck, Briefcase, DollarSign, ArrowRight, Users, Star, TrendingUp, Zap, Shield, Clock, MapPin, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/generated/community-hero.png"
            alt="Community using Instantly app"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-black text-foreground leading-tight">
              Live. Stream. Deliver.{" "}
              <span className="text-primary">Connect.</span>
            </h1>

            <p className="text-xl md:text-2xl text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join thousands of creators and providers on the platform that combines live streaming entertainment, instant local delivery, and community services in one powerful app.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
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

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary/20 mb-3">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <p className="text-4xl md:text-5xl font-black text-primary text-center">50K+</p>
              <p className="text-sm md:text-base text-center text-muted-foreground font-medium">Active Users</p>
            </div>

            <div className="text-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary/20 mb-3">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <p className="text-4xl md:text-5xl font-black text-primary text-center">4.8</p>
              <p className="text-sm md:text-base text-center text-muted-foreground font-medium">App Rating</p>
            </div>

            <div className="text-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary/20 mb-3">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <p className="text-4xl md:text-5xl font-black text-primary text-center">200K+</p>
              <p className="text-sm md:text-base text-center text-muted-foreground font-medium">Deliveries Made</p>
            </div>

            <div className="text-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary/20 mb-3">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <p className="text-4xl md:text-5xl font-black text-primary text-center">24/7</p>
              <p className="text-sm md:text-base text-center text-muted-foreground font-medium">Always Available</p>
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
            <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
              Instantly brings together entertainment, convenience, and opportunity in a seamless experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Live Streaming Feature */}
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/generated/live-streaming-hero.png"
                  alt="Live streaming feature"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
              </div>
              <div className="relative p-6 space-y-4 -mt-12">
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/20 backdrop-blur-sm">
                  <Video className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Live Streaming</h3>
                <p className="text-muted-foreground">
                  Watch engaging live content from local creators, interact in real-time, and discover entertainment that connects you with your community.
                </p>
              </div>
            </div>

            {/* Local Delivery Feature */}
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/generated/delivery-service.png"
                  alt="Local delivery service"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
              </div>
              <div className="relative p-6 space-y-4 -mt-12">
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/20 backdrop-blur-sm">
                  <Truck className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Local Delivery</h3>
                <p className="text-muted-foreground">
                  Order food, groceries, and essentials from local businesses with real-time tracking and creator-powered delivery experiences.
                </p>
              </div>
            </div>

            {/* Services Marketplace Feature */}
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/generated/services-marketplace.png"
                  alt="Services marketplace"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
              </div>
              <div className="relative p-6 space-y-4 -mt-12">
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/20 backdrop-blur-sm">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Services Marketplace</h3>
                <p className="text-muted-foreground">
                  Book trusted local services from verified providers, from home repairs to personal training, all within the Instantly ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How Instantly Works
            </h2>
            <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
              Getting started is easy. Download, discover, and connect with your community in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="text-center space-y-4">
              <div className="relative mx-auto w-32 h-32 mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
                <div className="relative flex items-center justify-center w-full h-full bg-card border-4 border-primary rounded-full shadow-red">
                  <span className="text-5xl font-black text-primary text-center">1</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground text-center">Download the App</h3>
              <p className="text-center text-muted-foreground">
                Get Instantly for free on iOS or Android. Sign up in seconds and create your profile.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4">
              <div className="relative mx-auto w-32 h-32 mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="relative flex items-center justify-center w-full h-full bg-card border-4 border-primary rounded-full shadow-red">
                  <span className="text-5xl font-black text-primary text-center">2</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground text-center">Explore & Discover</h3>
              <p className="text-center text-muted-foreground">
                Browse live streams, local services, and delivery options tailored to your location and interests.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4">
              <div className="relative mx-auto w-32 h-32 mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                <div className="relative flex items-center justify-center w-full h-full bg-card border-4 border-primary rounded-full shadow-red">
                  <span className="text-5xl font-black text-primary text-center">3</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground text-center">Connect & Enjoy</h3>
              <p className="text-center text-muted-foreground">
                Engage with creators, order what you need, and become part of a thriving local community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Instantly Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/40 via-secondary/20 to-transparent">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Instantly?
            </h2>
            <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
              We're more than just an app—we're a community-driven platform built for creators, customers, and providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4 hover:border-primary/50 transition-all hover:shadow-md">
              <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/20">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Trusted & Secure</h3>
              <p className="text-muted-foreground">
                All providers are verified, and every transaction is protected with industry-leading security measures.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4 hover:border-primary/50 transition-all hover:shadow-md">
              <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/20">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Fast & Reliable</h3>
              <p className="text-muted-foreground">
                Real-time tracking, instant notifications, and lightning-fast delivery ensure you get what you need, when you need it.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4 hover:border-primary/50 transition-all hover:shadow-md">
              <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/20">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Hyper-Local</h3>
              <p className="text-muted-foreground">
                Connect with creators and services in your neighborhood, supporting local businesses and building community.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4 hover:border-primary/50 transition-all hover:shadow-md">
              <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/20">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Community First</h3>
              <p className="text-muted-foreground">
                Built by creators, for creators. We prioritize authentic connections and meaningful interactions.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4 hover:border-primary/50 transition-all hover:shadow-md">
              <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/20">
                <DollarSign className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Fair Pricing</h3>
              <p className="text-muted-foreground">
                Transparent pricing with no hidden fees. Providers keep more of what they earn, and customers pay fair rates.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4 hover:border-primary/50 transition-all hover:shadow-md">
              <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/20">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Always Evolving</h3>
              <p className="text-muted-foreground">
                Regular updates with new features based on community feedback. We're constantly improving your experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Community Says
            </h2>
            <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
              Real stories from real users who've transformed their experience with Instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-card border border-border rounded-xl p-8 space-y-6 hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed">
                "Instantly has completely changed how I interact with my local community. The live streaming feature is incredible, and I love supporting local creators!"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">MJ</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Maria Johnson</p>
                  <p className="text-sm text-muted-foreground">Active User</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-card border border-border rounded-xl p-8 space-y-6 hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed">
                "As a delivery provider, Instantly has given me the flexibility to work on my own schedule while earning great money. The platform is easy to use and the support is fantastic."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">DT</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">David Thompson</p>
                  <p className="text-sm text-muted-foreground">Delivery Provider</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-card border border-border rounded-xl p-8 space-y-6 hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed">
                "The convenience of having streaming, delivery, and services all in one app is unmatched. Instantly saves me time and keeps me connected to what's happening locally."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">SC</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Sarah Chen</p>
                  <p className="text-sm text-muted-foreground">Power User</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Recruitment Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/generated/provider-success.png"
            alt="Successful Instantly provider"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-background/95 to-background/90" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/90 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-4">
                  <DollarSign className="w-10 h-10 text-primary" />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Earn Money as an Instantly Provider
                </h2>

                <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
                  Join our growing network of service providers and start earning on your own schedule. Whether you offer delivery services, live streaming, or professional skills, Instantly connects you with customers who need your expertise.
                </p>

                <div className="bg-secondary/50 border border-border rounded-lg p-6 max-w-md mx-auto text-center">
                  <p className="text-sm text-center text-muted-foreground mb-2">Average Monthly Earnings</p>
                  <p className="text-4xl font-bold text-primary text-center">$2,847</p>
                </div>

                <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-6 py-4 max-w-2xl mx-auto">
                  "I've tripled my income since joining Instantly as a provider. The platform makes it easy to connect with customers and grow my business."
                </blockquote>

                <div className="pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 py-6 shadow-red"
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
          <p className="text-xl text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download the Instantly app today and experience the future of live streaming, delivery, and community services.
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
