import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <div className="flex items-center gap-3 mb-8">
          <AlertTriangle className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Disclaimer</h1>
        </div>
        
        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
            <h2 className="text-xl font-semibold text-foreground mt-0">Important Notice</h2>
            <p className="mb-0">
              Please read this disclaimer carefully before using our relationship assessment tool or any content on this website.
            </p>
          </div>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">What This Site Does NOT Do</h2>
            <p>
              We want to be absolutely clear about the nature of our service:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>We do NOT hack</strong> into any accounts, devices, or systems</li>
              <li><strong>We do NOT spy on</strong> or monitor any individual</li>
              <li><strong>We do NOT access</strong> private messages, emails, or communications</li>
              <li><strong>We do NOT retrieve</strong> passwords, login credentials, or personal data</li>
              <li><strong>We do NOT provide</strong> surveillance or investigative services</li>
            </ul>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">What This Site Provides</h2>
            <p>
              This website offers:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Relationship-related educational insights</li>
              <li>General information about behavioral patterns in relationships</li>
              <li>A self-assessment tool based on commonly observed relationship dynamics</li>
              <li>Educational content about communication and trust</li>
            </ul>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Interpretation of Language</h2>
            <p>
              Any references on this site to "checking," "analyzing," "reviewing," or similar terms are:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Illustrative and informational only</strong></li>
              <li>Referring to self-reflection and personal observation</li>
              <li>Not implying access to private data or communications</li>
              <li>Based on information you voluntarily provide about your own observations</li>
            </ul>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Not Professional Advice</h2>
            <p>
              The content and assessment on this site are not substitutes for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Professional relationship counseling</li>
              <li>Licensed therapy or mental health services</li>
              <li>Legal advice</li>
              <li>Medical or psychiatric consultation</li>
            </ul>
            <p>
              If you are experiencing relationship difficulties, we encourage you to seek guidance from qualified professionals.
            </p>
          </section>
          
          <section className="space-y-4 p-6 rounded-lg bg-card border border-border">
            <h2 className="text-xl font-semibold text-foreground mt-0">Affiliate Disclosure</h2>
            <p>
              This website may contain affiliate links or partner offers. This means:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We may receive compensation when you engage with third-party offers</li>
              <li>This compensation helps support the operation of this site</li>
              <li>Affiliate relationships do not affect the content of our assessment</li>
              <li>We only partner with services we believe may be valuable to our users</li>
            </ul>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Questions?</h2>
            <p>
              If you have any questions about this disclaimer, please <Link to="/contact" className="text-primary hover:underline">contact us</Link>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Disclaimer;
