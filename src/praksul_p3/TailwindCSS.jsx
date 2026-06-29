import Spacing from "../components/Spacing";
import Typography from "../components/Typography";
import BorderRadius from "../components/BorderRadius";
import BackgroundColors from "../components/BackgroundColors";
import FlexboxGrid from "../components/FlexboxGrid";
import ShadowEffects from "../components/ShadowEffects";

export default function TailwindCSS() {
  return (
        
    <div>
      <h1 className="border m-4">Belajar Tailwind CSS 4</h1>
      <button className="bg-blue-500 text-white
                        px-4 py-2 mx-4 rounded
                        shadow-lg">Click Me</button>
                        <Spacing />
                        <Typography/>
                        <BorderRadius/>
                        <BackgroundColors/>
                        <FlexboxGrid/>
                        <ShadowEffects/>
            
    </div>
    
  )

  
}