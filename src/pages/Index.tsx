import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StyleMatch from "@/components/StyleMatch";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <StyleMatch />
      <Footer />
    </div>
  );
};

export default Index;
