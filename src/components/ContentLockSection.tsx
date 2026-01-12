import { Shield, ExternalLink } from "lucide-react";

const ContentLockSection = () => {
  return (
    <section className="px-6 py-12 bg-secondary/50">
      <div className="max-w-lg mx-auto">
        <div className="bg-card rounded-xl shadow-card p-6 space-y-6 border-2 border-dashed border-primary/30">
          {/* Content Locker Placeholder */}
          <div 
            id="content-locker-placeholder"
            className="min-h-[200px] flex flex-col items-center justify-center text-center space-y-4 p-6 bg-muted/50 rounded-lg"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">
                Verification Required
              </h3>
              <p className="text-sm text-muted-foreground max-w-sm">
                Complete a quick verification step to unlock your personalized results and guidance.
              </p>
            </div>
            
            {/* Placeholder area for third-party content locker script */}
            <div 
              id="content-locker-embed"
              className="w-full min-h-[100px] border border-dashed border-border rounded-lg flex items-center justify-center"
            >
              <p className="text-xs text-muted-foreground">
                [Third-party content locker will be embedded here]
              </p>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
              <span>Secure Process</span>
            </div>
            <div className="flex items-center gap-1">
              <ExternalLink className="w-3 h-3" />
              <span>Takes 30 seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentLockSection;
