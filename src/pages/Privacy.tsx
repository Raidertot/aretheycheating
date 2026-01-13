import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";

const Privacy = () => {
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
          <Shield className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
        </div>
        
        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
          <p className="text-foreground font-medium">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
            <p>
              We collect limited information to improve your experience on our site. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Anonymous usage data (pages visited, time on site)</li>
              <li>Device and browser information</li>
              <li>Cookies for site functionality and analytics</li>
              <li>Information you voluntarily provide through our contact form</li>
            </ul>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">What We Do NOT Access</h2>
            <p>
              We want to be completely transparent about what we do not do:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We do NOT access, hack, or retrieve private accounts</li>
              <li>We do NOT read private messages or communications</li>
              <li>We do NOT access social media accounts or email</li>
              <li>We do NOT collect passwords or login credentials</li>
            </ul>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">How We Use Your Information</h2>
            <p>
              Any information collected is used solely to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improve site functionality and user experience</li>
              <li>Respond to inquiries submitted through our contact form</li>
              <li>Analyze anonymous usage patterns to improve our content</li>
            </ul>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Third-Party Services</h2>
            <p>
              Our site may use third-party services including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Analytics providers to understand site usage</li>
              <li>Advertising networks that may use cookies</li>
              <li>Affiliate partners whose offers may appear on our site</li>
            </ul>
            <p>
              These third parties have their own privacy policies governing the data they collect.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Data Protection</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. Your privacy and trust are important to us.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please <Link to="/contact" className="text-primary hover:underline">contact us</Link>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
