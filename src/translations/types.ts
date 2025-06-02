
export type TranslationKey = 
  // Navbar
  | 'services' 
  | 'about' 
  | 'testimonials' 
  | 'contact'
  | 'contactButton'
  
  // Hero
  | 'heroTitle'
  | 'heroSubtitle'
  | 'confidentialityNote'
  | 'requestValuation'
  | 'ourServices'
  | 'specialOffer'
  
  // Services section
  | 'servicesTitle'
  | 'servicesSubtitle'
  | 'businessValuation'
  | 'businessValuationDesc'
  | 'financialDueDiligence'
  | 'financialDueDiligenceDesc'
  | 'financialAnalysis'
  | 'financialAnalysisDesc'
  | 'strategicAdvisory'
  | 'strategicAdvisoryDesc'
  
  // About section
  | 'whyChooseUs'
  | 'aboutUsDescription'
  | 'experienceAndTrust'
  | 'experienceAndTrustDesc'
  | 'customizedApproach'
  | 'customizedApproachDesc'
  | 'confidentiality'
  | 'confidentialityDesc'
  | 'ourMethodology'
  | 'methodologyDescription'
  | 'fundamentalAnalysis'
  | 'fundamentalAnalysisDesc'
  | 'multipleValuation'
  | 'multipleValuationDesc'
  | 'discountedCashFlow'
  | 'discountedCashFlowDesc'
  | 'qualitativeAnalysis'
  | 'qualitativeAnalysisDesc'
  | 'successionPlanning'
  | 'successionPlanningDesc'
  
  // Testimonials section
  | 'testimonialsTitle'
  | 'testimonialsSubtitle'
  
  // Contact section
  | 'contactTitle'
  | 'contactSubtitle'
  | 'contactInfo'
  | 'phone'
  | 'email'
  | 'address'
  | 'requestInfoTitle'
  | 'nameLabel'
  | 'companyLabel'
  | 'emailLabel'
  | 'phoneLabel'
  | 'messageLabel'
  | 'submitButton'
  | 'submittingButton'
  | 'privacyNotice'
  | 'formSuccessTitle'
  | 'formSuccessDesc'
  | 'formErrorTitle'
  | 'formErrorDesc'
  | 'backToHome'
  // Form placeholders and validation messages
  | 'namePlaceholder'
  | 'nameRequired'
  | 'companyPlaceholder'
  | 'companyRequired'
  | 'emailPlaceholder'
  | 'emailRequired'
  | 'emailInvalid'
  | 'phonePlaceholder'
  | 'messagePlaceholder'
  | 'messageRequired'
  | 'submitLoading'
  
  // Footer
  | 'companyDescription'
  | 'servicesFooter'
  | 'quickLinks'
  | 'home'
  | 'privacyPolicy'
  | 'termsOfService'
  | 'cookies'
  | 'allRightsReserved';

export type Translations = {
  [key in TranslationKey]: string;
};
