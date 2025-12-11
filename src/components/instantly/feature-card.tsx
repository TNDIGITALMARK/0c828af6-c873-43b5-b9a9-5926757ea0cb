import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-red group">
      <CardContent className="p-8 text-center">
        <div className="mx-auto w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-4 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
