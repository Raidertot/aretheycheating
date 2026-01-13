import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";

const Terms = () => {
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
          <FileText className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Terms of Use</h1>
        </div>
        
        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
          <p className="text-foreground font-medium">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and conditions outlined here. If you do not agree with these terms, please do not use our site.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Purpose of This Site</h2>
            <p>
              This website is provided for <strong>informational and educational purposes only</strong>. The behavioral assessment and related content are designed to offer general insights about relationship patterns and communication behaviors.
            </p>
            <p>
              This site does not provide:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Professional counseling or therapy</li>
              <li>Legal advice</li>
              <li>Investigative services</li>
              <li>Access to private accounts or communications</li>
            </ul>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Prohibited Uses</h2>
            <p>
              You agree NOT to use this site for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Any illegal purpose or activity</li>
              <li>Harassment, stalking, or threatening others</li>
              <li>Attempting to access private accounts or data</li>
              <li>Impersonation or misrepresentation</li>
              <li>Any activity that violates the rights of others</li>
            </ul>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">No Guarantees</h2>
            <p>
              The assessment results and information provided on this site are for general guidance only. We make no guarantees regarding:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The accuracy, completeness, or reliability of any results</li>
              <li>The applicability of results to your specific situation</li>
              <li>Any outcomes based on information provided</li>
            </ul>
            <p>
              Results should not be used as the sole basis for making important relationship decisions.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, this website and its operators shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use of or inability to use the site</li>
              <li>Any decisions made based on information from this site</li>
              <li>Any third-party content, products, or services</li>
            </ul>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the site after changes constitutes acceptance of the new terms.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p>
              Questions about these Terms of Use can be directed to our <Link to="/contact" className="text-primary hover:underline">contact page</Link>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Terms;
