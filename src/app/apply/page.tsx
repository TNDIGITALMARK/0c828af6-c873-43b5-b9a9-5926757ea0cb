"use client";

import { Navigation } from "@/components/instantly/navigation";
import { Footer } from "@/components/instantly/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    servicesOffered: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Create the mailto link with form data
      const subject = encodeURIComponent("New Provider Application - Instantly");
      const body = encodeURIComponent(`
New Provider Application Received

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${formData.location}
Services Offered: ${formData.servicesOffered}

Submitted: ${new Date().toLocaleString()}
      `);

      const mailtoLink = `mailto:instantlyceo@gmail.com?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoLink;

      // Show success message after a short delay
      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
      }, 1000);
    } catch (err) {
      setError("There was an error submitting your application. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center px-4 pt-24 pb-12">
          <div className="max-w-lg text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Application Submitted!</h1>
            <p className="text-xl text-muted-foreground">
              Thank you for your interest in becoming an Instantly Provider. We'll review your application and get back to you soon.
            </p>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="/">Return to Home</a>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Apply to Become a Provider
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our growing network of service providers and start earning money on your own schedule. Fill out the form below to get started.
            </p>
          </div>

          {/* Form */}
          <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 md:p-12 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-foreground font-semibold">
                  Full Name <span className="text-primary">*</span>
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="bg-background border-border text-foreground"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-semibold">
                  Email Address <span className="text-primary">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-border text-foreground"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-semibold">
                  Phone Number <span className="text-primary">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-background border-border text-foreground"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="text-foreground font-semibold">
                  Location <span className="text-primary">*</span>
                </Label>
                <Input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="bg-background border-border text-foreground"
                  placeholder="City, State"
                />
              </div>

              {/* Services Offered */}
              <div className="space-y-2">
                <Label htmlFor="servicesOffered" className="text-foreground font-semibold">
                  Services Offered <span className="text-primary">*</span>
                </Label>
                <Textarea
                  id="servicesOffered"
                  name="servicesOffered"
                  value={formData.servicesOffered}
                  onChange={handleChange}
                  required
                  className="bg-background border-border text-foreground min-h-32"
                  placeholder="Please describe the services you would like to offer on Instantly (e.g., delivery, live streaming, home repairs, personal training, etc.)"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 text-destructive text-sm">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6 shadow-red"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to be contacted by Instantly regarding your provider application.
              </p>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-secondary/30 border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">What Happens Next?</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">1.</span>
                <span>We'll review your application within 2-3 business days</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">2.</span>
                <span>Our team will contact you via email or phone to discuss next steps</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">3.</span>
                <span>Complete a brief onboarding process and background check</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">4.</span>
                <span>Start earning money as an Instantly Provider!</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
