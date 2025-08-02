import { Download, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GeneratedResultsProps {
  generatedImage: string | null;
  isGenerating: boolean;
}

const GeneratedResults = ({ generatedImage, isGenerating }: GeneratedResultsProps) => {
  if (isGenerating) {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Generated Result</h3>
        <div className="bg-muted rounded-lg p-8 text-center">
          <div className="animate-spin w-8 h-8 border-2 border-brand-brown border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground">Generating your styled room...</p>
          <p className="text-sm text-muted-foreground mt-2">This may take a few moments</p>
        </div>
      </div>
    );
  }

  if (!generatedImage) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Generated Result</h3>
      <div className="bg-card rounded-lg overflow-hidden shadow-lg">
        <img
          src={generatedImage}
          alt="Generated styled room"
          className="w-full h-64 object-cover"
        />
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">AI Generated Design</span>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="warm" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedResults;