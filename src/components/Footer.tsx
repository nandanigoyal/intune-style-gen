import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-brown text-brand-cream">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* InTune Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">InTune</h3>
            <p className="text-brand-warm">
              Your vibe is the key to your perfect co-living match. In sync, In vibe, In tune.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-brand-brown-light rounded-lg flex items-center justify-center">
                <Github className="w-5 h-5 text-brand-brown" />
              </div>
              <div className="w-10 h-10 bg-brand-brown-light rounded-lg flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-brand-brown" />
              </div>
              <div className="w-10 h-10 bg-brand-brown-light rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-brand-brown" />
              </div>
            </div>
          </div>

          {/* Product Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-2 text-brand-warm">
              <li><a href="#" className="hover:text-brand-cream transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-brand-warm">
              <li><a href="#" className="hover:text-brand-cream transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">GDPR</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-brand-warm">
              <li><a href="#" className="hover:text-brand-cream transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">Community</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-brown-light mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-warm">© 2024 InTune. All rights reserved.</p>
          <p className="text-brand-warm mt-4 md:mt-0">
            Built for SheBuilds Hackathon by Team Naruto ❤️ 🔥
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;