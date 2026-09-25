import { MotionConfig } from "framer-motion";
import BloomLanding from "./components/BloomLanding";
import AccessibilityEnhancer from "./components/AccessibilityEnhancer";
import { LanguageProvider } from "./i18n/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      {/* Honour the OS "reduce motion" setting for every framer-motion animation */}
      <MotionConfig reducedMotion="user">
        <AccessibilityEnhancer />
        <BloomLanding />
      </MotionConfig>
    </LanguageProvider>
  );
}

export default App;
