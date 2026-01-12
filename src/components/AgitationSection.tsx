import { Smartphone, Clock, HeartCrack, AlertCircle } from "lucide-react";

const concerns = [
  {
    icon: Smartphone,
    text: "Increased phone secrecy—hiding screens, changing passwords",
  },
  {
    icon: Clock,
    text: "Sudden routine changes—unexplained late nights or new \"plans\"",
  },
  {
    icon: HeartCrack,
    text: "Emotional distance or unexplained defensiveness",
  },
  {
    icon: AlertCircle,
    text: "Gut feelings you can't shake off",
  },
];

const AgitationSection = () => {
  return (
    <section className="px-6 py-16 bg-secondary/50">
      <div className="max-w-lg mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground">
            Do any of these sound familiar?
          </h2>
          <p className="text-muted-foreground">
            These are the subtle signs that often go unnoticed—until they can't.
          </p>
        </div>
        
        <div className="space-y-4">
          {concerns.map((concern, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg bg-card shadow-soft"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <concern.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground leading-relaxed pt-1.5">
                {concern.text}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center pt-4">
          <p className="text-lg text-foreground font-medium italic">
            "Individually these may mean nothing—together they often tell a story."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgitationSection;
