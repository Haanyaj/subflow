export const StructuredData = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          name: "SubFlow",
          applicationCategory: "FinanceApplication",
          operatingSystem: "iOS, Android",
          description:
            "Application de suivi des abonnements et dépenses mensuelles pour garder le contrôle de votre budget.",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
          },
          screenshot: [
            "/assets/images/screenshots/dashboard.png",
            "/assets/images/screenshots/statistics.png",
            "/assets/images/screenshots/budgets.png",
          ],
        }),
      }}
    />
  );
};
