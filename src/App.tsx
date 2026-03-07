import BloomLanding from "./components/BloomLanding";
import AccessibilityEnhancer from "./components/AccessibilityEnhancer";
import { LanguageProvider } from "./i18n/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <AccessibilityEnhancer />
      <BloomLanding />
    </LanguageProvider>
  );
}

export default App;