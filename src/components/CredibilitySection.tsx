import { BookOpen, Users, Lock } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Research-Informed",
    description: "Based on common behavioral and communication patterns referenced in relationship psychology research.",
  },
  {
    icon: Users,
    title: "Pattern Recognition",
    description: "Identifies clusters of behaviors that relationship experts associate with relationship concerns.",
  },
  {
    icon: Lock,
    title: "Completely Private",
    description: "Your responses are never stored or shared. This assessment runs entirely on your device.",
  },
];

const CredibilitySection = () => {
  return (
    <section className="px-6 py-16">
      <div className="max-w-lg mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground">
            A Thoughtful Approach
          </h2>
          <p className="text-muted-foreground">
            This isn't about accusations—it's about understanding patterns.
          </p>
        </div>
        
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center space-y-3"
            >
              <div className="inline-flex w-14 h-14 rounded-full bg-accent items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="p-4 rounded-lg bg-accent/50 border border-border">
          <p className="text-sm text-muted-foreground text-center">
            <strong className="text-foreground">Important:</strong> Results are informational and intended to encourage self-reflection—they do not constitute proof of infidelity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
