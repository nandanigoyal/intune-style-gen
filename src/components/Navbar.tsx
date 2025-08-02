import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full bg-brand-brown px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-brand-cream text-2xl font-bold">
          InTune
        </div>
        
        <div className="flex items-center space-x-8">
          <a href="#" className="text-brand-cream hover:text-brand-warm transition-colors">
            Home
          </a>
          <a href="#" className="text-brand-cream hover:text-brand-warm transition-colors">
            Features
          </a>
          <a href="#" className="text-brand-cream hover:text-brand-warm transition-colors">
            How It Works
          </a>
          <a href="#" className="text-brand-cream hover:text-brand-warm transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;