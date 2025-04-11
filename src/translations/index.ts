
// Define the structure for our translations
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
  
  // Footer
  | 'companyDescription'
  | 'servicesFooter'
  | 'quickLinks'
  | 'home'
  | 'privacyPolicy'
  | 'termsOfService'
  | 'cookies'
  | 'allRightsReserved';

// Spanish translations (default)
export const es = {
  // Navbar
  services: 'Servicios',
  about: 'Nosotros',
  testimonials: 'Testimonios',
  contact: 'Contacto',
  contactButton: 'Contactar',
  
  // Hero
  heroTitle: 'Valoración confidencial para empresas de 3-5M€ de facturación anual',
  heroSubtitle: 'Especialistas en asesorar a propietarios que se acercan a la jubilación o planean la sucesión de su negocio.',
  confidentialityNote: 'Garantizamos 100% de confidencialidad en todo el proceso',
  requestValuation: 'Solicitar valoración',
  ourServices: 'Nuestros servicios',
  specialOffer: 'Ofrecemos la valoración sin coste si contamos con un contrato de exclusividad. Garantizamos la venta de su empresa en menos de 6 meses.',
  
  // Services section
  servicesTitle: 'Nuestros Servicios',
  servicesSubtitle: 'Servicios especializados para empresas con facturación entre 3 y 5 millones de euros, enfocados en procesos de venta por jubilación o sucesión.',
  businessValuation: 'Valoración confidencial',
  businessValuationDesc: 'Análisis exhaustivo del valor de su empresa con total confidencialidad, especialmente para propietarios próximos a la jubilación.',
  financialDueDiligence: 'Due diligence financiera',
  financialDueDiligenceDesc: 'Revisión completa de la situación financiera para preparar su empresa para un proceso de venta exitoso y discreto.',
  financialAnalysis: 'Análisis de sucesión',
  financialAnalysisDesc: 'Evaluación detallada de las opciones de sucesión familiar o venta a terceros, priorizando la confidencialidad total.',
  strategicAdvisory: 'Asesoramiento en venta',
  strategicAdvisoryDesc: 'Consultoría especializada para optimizar el valor de venta de su empresa en un proceso totalmente confidencial.',
  
  // About section
  whyChooseUs: '¿Por qué elegir Valor España?',
  aboutUsDescription: 'En Valor España nos especializamos en empresas con facturación entre 3 y 5 millones de euros, cuyos propietarios están considerando una venta por jubilación o planificación de sucesión. Nuestro proceso garantiza total confidencialidad en cada etapa.',
  experienceAndTrust: 'Experiencia y confianza',
  experienceAndTrustDesc: 'Más de 15 años asesorando empresas familiares en procesos de venta confidenciales por jubilación.',
  customizedApproach: 'Enfoque para PYMES de 3-5M€ de facturación',
  customizedApproachDesc: 'Soluciones específicas para negocios con facturación entre 3 y 5 millones, adaptadas a cada sector y circunstancia.',
  confidentiality: 'Confidencialidad absoluta',
  confidentialityDesc: 'Garantizamos total discreción y estrictos protocolos de confidencialidad en todo el proceso de valoración y asesoramiento.',
  ourMethodology: 'Nuestra metodología',
  methodologyDescription: 'Proceso especializado para empresas en fase de sucesión o venta por jubilación:',
  fundamentalAnalysis: '1. Análisis confidencial',
  fundamentalAnalysisDesc: 'Evaluación discreta de estados financieros e indicadores clave sin alertar al mercado ni empleados.',
  multipleValuation: '2. Valoración por múltiplos',
  multipleValuationDesc: 'Comparativas específicas para empresas de 3-5M€ en procesos de sucesión o venta.',
  discountedCashFlow: '3. Descuento de flujos',
  discountedCashFlowDesc: 'Proyecciones ajustadas a escenarios de transición por jubilación o sucesión familiar.',
  qualitativeAnalysis: '4. Análisis cualitativo',
  qualitativeAnalysisDesc: 'Evaluación de factores intangibles y posicionamiento para potenciales compradores.',
  successionPlanning: '5. Planificación de sucesión',
  successionPlanningDesc: 'Estrategias personalizadas para la transición del negocio, ya sea a familiares o mediante venta a terceros.',
  
  // Testimonials section
  testimonialsTitle: 'Lo que dicen nuestros clientes',
  testimonialsSubtitle: 'Hemos ayudado a numerosos propietarios de empresas a planificar su jubilación mediante procesos confidenciales de valoración y venta.',
  
  // Contact section
  contactTitle: 'Hablemos sobre el valor de su empresa',
  contactSubtitle: 'Complete el formulario y uno de nuestros especialistas en valoración se pondrá en contacto con usted para discutir cómo podemos ayudarle.',
  contactInfo: 'Información de contacto',
  phone: '644116796',
  email: 'info@instituto-valor-espana.com',
  address: 'Terra Alta, Premia de Mar. 08330 Barcelona',
  requestInfoTitle: 'Solicite información',
  nameLabel: 'Nombre',
  companyLabel: 'Empresa',
  emailLabel: 'Email',
  phoneLabel: 'Teléfono',
  messageLabel: 'Mensaje',
  submitButton: 'Enviar mensaje',
  submittingButton: 'Enviando...',
  privacyNotice: 'Al enviar este formulario, acepta nuestra política de privacidad y el tratamiento de sus datos.',
  formSuccessTitle: 'Formulario enviado',
  formSuccessDesc: 'Nos pondremos en contacto contigo pronto.',
  formErrorTitle: 'Error',
  formErrorDesc: 'Ha ocurrido un error al enviar el formulario. Por favor, inténtalo de nuevo.',

  // Footer
  companyDescription: 'Servicio especializado en valoración y venta de empresas con facturación de 3-5M€, enfocado en procesos confidenciales para propietarios próximos a la jubilación.',
  servicesFooter: 'Servicios',
  quickLinks: 'Enlaces rápidos',
  home: 'Inicio',
  privacyPolicy: 'Política de privacidad',
  termsOfService: 'Términos de servicio',
  cookies: 'Cookies',
  allRightsReserved: 'Todos los derechos reservados.'
};

// English translations
export const en = {
  // Navbar
  services: 'Services',
  about: 'About Us',
  testimonials: 'Testimonials',
  contact: 'Contact',
  contactButton: 'Contact Us',
  
  // Hero
  heroTitle: 'Confidential Valuation for 3-5M€ Annual Revenue Companies',
  heroSubtitle: 'Specialists in advising business owners approaching retirement or planning business succession.',
  confidentialityNote: 'We guarantee 100% confidentiality throughout the entire process',
  requestValuation: 'Request Valuation',
  ourServices: 'Our Services',
  specialOffer: 'We offer the valuation at no cost with an exclusivity contract. We guarantee the sale of your company in less than 6 months.',
  
  // Services section
  servicesTitle: 'Our Services',
  servicesSubtitle: 'Specialized services for companies with revenues between 3 and 5 million euros, focused on sale processes due to retirement or succession.',
  businessValuation: 'Confidential Valuation',
  businessValuationDesc: 'Comprehensive analysis of your company\'s value with complete confidentiality, especially for owners approaching retirement.',
  financialDueDiligence: 'Financial Due Diligence',
  financialDueDiligenceDesc: 'Complete review of the financial situation to prepare your company for a successful and discreet sale process.',
  financialAnalysis: 'Succession Analysis',
  financialAnalysisDesc: 'Detailed evaluation of family succession options or third-party sales, prioritizing total confidentiality.',
  strategicAdvisory: 'Sale Advisory',
  strategicAdvisoryDesc: 'Specialized consulting to optimize the sale value of your company in a completely confidential process.',
  
  // About section
  whyChooseUs: 'Why Choose Valor España?',
  aboutUsDescription: 'At Valor España, we specialize in companies with revenues between 3 and 5 million euros, whose owners are considering a sale due to retirement or succession planning. Our process guarantees complete confidentiality at every stage.',
  experienceAndTrust: 'Experience and Trust',
  experienceAndTrustDesc: 'Over 15 years advising family businesses in confidential sale processes due to retirement.',
  customizedApproach: 'Focus on 3-5M€ revenue SMEs',
  customizedApproachDesc: 'Specific solutions for businesses with revenues between 3 and 5 million, adapted to each sector and circumstance.',
  confidentiality: 'Absolute Confidentiality',
  confidentialityDesc: 'We guarantee total discretion and strict confidentiality protocols throughout the valuation and advisory process.',
  ourMethodology: 'Our Methodology',
  methodologyDescription: 'Specialized process for companies in succession phase or sale due to retirement:',
  fundamentalAnalysis: '1. Confidential Analysis',
  fundamentalAnalysisDesc: 'Discreet evaluation of financial statements and key indicators without alerting the market or employees.',
  multipleValuation: '2. Multiple Valuation',
  multipleValuationDesc: 'Specific comparisons for 3-5M€ companies in succession or sale processes.',
  discountedCashFlow: '3. Discounted Cash Flow',
  discountedCashFlowDesc: 'Projections adjusted to transition scenarios due to retirement or family succession.',
  qualitativeAnalysis: '4. Qualitative Analysis',
  qualitativeAnalysisDesc: 'Evaluation of intangible factors and positioning for potential buyers.',
  successionPlanning: '5. Succession Planning',
  successionPlanningDesc: 'Customized strategies for business transition, either to family members or through sale to third parties.',
  
  // Testimonials section
  testimonialsTitle: 'What Our Clients Say',
  testimonialsSubtitle: 'We have helped numerous business owners plan their retirement through confidential valuation and sale processes.',
  
  // Contact section
  contactTitle: 'Let\'s Talk About Your Company\'s Value',
  contactSubtitle: 'Complete the form and one of our valuation specialists will contact you to discuss how we can help.',
  contactInfo: 'Contact Information',
  phone: '644116796',
  email: 'info@instituto-valor-espana.com',
  address: 'Terra Alta, Premia de Mar. 08330 Barcelona',
  requestInfoTitle: 'Request Information',
  nameLabel: 'Name',
  companyLabel: 'Company',
  emailLabel: 'Email',
  phoneLabel: 'Phone',
  messageLabel: 'Message',
  submitButton: 'Send Message',
  submittingButton: 'Sending...',
  privacyNotice: 'By submitting this form, you agree to our privacy policy and the processing of your data.',
  formSuccessTitle: 'Form Submitted',
  formSuccessDesc: 'We will contact you soon.',
  formErrorTitle: 'Error',
  formErrorDesc: 'An error occurred while submitting the form. Please try again.',
  
  // Footer
  companyDescription: 'Specialized service in valuation and sale of companies with revenues of 3-5M€, focused on confidential processes for owners approaching retirement.',
  servicesFooter: 'Services',
  quickLinks: 'Quick Links',
  home: 'Home',
  privacyPolicy: 'Privacy Policy',
  termsOfService: 'Terms of Service',
  cookies: 'Cookies',
  allRightsReserved: 'All rights reserved.'
};

// Catalan translations
export const ca = {
  // Navbar
  services: 'Serveis',
  about: 'Nosaltres',
  testimonials: 'Testimonis',
  contact: 'Contacte',
  contactButton: 'Contactar',
  
  // Hero
  heroTitle: 'Valoració confidencial per a empreses de 3-5M€ de facturació anual',
  heroSubtitle: 'Especialistes en assessorar propietaris que s\'acosten a la jubilació o planegen la successió del seu negoci.',
  confidentialityNote: 'Garantim 100% de confidencialitat en tot el procés',
  requestValuation: 'Sol·licitar valoració',
  ourServices: 'Els nostres serveis',
  specialOffer: 'Oferim la valoració sense cost si comptem amb un contracte d\'exclusivitat. Garantim la venda de la seva empresa en menys de 6 mesos.',
  
  // Services section
  servicesTitle: 'Els nostres serveis',
  servicesSubtitle: 'Serveis especialitzats per a empreses amb facturació entre 3 i 5 milions d\'euros, enfocats en processos de venda per jubilació o successió.',
  businessValuation: 'Valoració confidencial',
  businessValuationDesc: 'Anàlisi exhaustiu del valor de la seva empresa amb total confidencialitat, especialment per a propietaris propers a la jubilació.',
  financialDueDiligence: 'Due diligence financera',
  financialDueDiligenceDesc: 'Revisió completa de la situació financera per preparar la seva empresa per a un procés de venda exitós i discret.',
  financialAnalysis: 'Anàlisi de successió',
  financialAnalysisDesc: 'Avaluació detallada de les opcions de successió familiar o venda a tercers, prioritzant la confidencialitat total.',
  strategicAdvisory: 'Assessorament en venda',
  strategicAdvisoryDesc: 'Consultoria especialitzada per optimitzar el valor de venda de la seva empresa en un procés totalment confidencial.',
  
  // About section
  whyChooseUs: 'Per què escollir Valor España?',
  aboutUsDescription: 'A Valor España ens especialitzem en empreses amb facturació entre 3 i 5 milions d\'euros, els propietaris de les quals estan considerant una venda per jubilació o planificació de successió. El nostre procés garanteix total confidencialitat en cada etapa.',
  experienceAndTrust: 'Experiència i confiança',
  experienceAndTrustDesc: 'Més de 15 anys assessorant empreses familiars en processos de venda confidencials per jubilació.',
  customizedApproach: 'Enfocament per a PIMES de 3-5M€ de facturació',
  customizedApproachDesc: 'Solucions específiques per a negocis amb facturació entre 3 i 5 milions, adaptades a cada sector i circumstància.',
  confidentiality: 'Confidencialitat absoluta',
  confidentialityDesc: 'Garantim total discreció i estrictes protocols de confidencialitat en tot el procés de valoració i assessorament.',
  ourMethodology: 'La nostra metodologia',
  methodologyDescription: 'Procés especialitzat per a empreses en fase de successió o venda per jubilació:',
  fundamentalAnalysis: '1. Anàlisi confidencial',
  fundamentalAnalysisDesc: 'Avaluació discreta d\'estats financers i indicadors clau sense alertar al mercat ni empleats.',
  multipleValuation: '2. Valoració per múltiples',
  multipleValuationDesc: 'Comparatives específiques per a empreses de 3-5M€ en processos de successió o venda.',
  discountedCashFlow: '3. Descompte de fluxos',
  discountedCashFlowDesc: 'Projeccions ajustades a escenaris de transició per jubilació o successió familiar.',
  qualitativeAnalysis: '4. Anàlisi qualitativa',
  qualitativeAnalysisDesc: 'Avaluació de factors intangibles i posicionament per a potencials compradors.',
  successionPlanning: '5. Planificació de successió',
  successionPlanningDesc: 'Estratègies personalitzades per a la transició del negoci, ja sigui a familiars o mitjançant venda a tercers.',
  
  // Testimonials section
  testimonialsTitle: 'El que diuen els nostres clients',
  testimonialsSubtitle: 'Hem ajudat a nombrosos propietaris d\'empreses a planificar la seva jubilació mitjançant processos confidencials de valoració i venda.',
  
  // Contact section
  contactTitle: 'Parlem sobre el valor de la seva empresa',
  contactSubtitle: 'Completi el formulari i un dels nostres especialistes en valoració es posarà en contacte amb vostè per discutir com podem ajudar-lo.',
  contactInfo: 'Informació de contacte',
  phone: '644116796',
  email: 'info@instituto-valor-espana.com',
  address: 'Terra Alta, Premia de Mar. 08330 Barcelona',
  requestInfoTitle: 'Sol·liciti informació',
  nameLabel: 'Nom',
  companyLabel: 'Empresa',
  emailLabel: 'Email',
  phoneLabel: 'Telèfon',
  messageLabel: 'Missatge',
  submitButton: 'Enviar missatge',
  submittingButton: 'Enviant...',
  privacyNotice: 'En enviar aquest formulari, accepta la nostra política de privacitat i el tractament de les seves dades.',
  formSuccessTitle: 'Formulari enviat',
  formSuccessDesc: 'Ens posarem en contacte amb vostè aviat.',
  formErrorTitle: 'Error',
  formErrorDesc: 'S\'ha produït un error en enviar el formulari. Si us plau, intenti-ho de nou.',
  
  // Footer
  companyDescription: 'Servei especialitzat en valoració i venda d\'empreses amb facturació de 3-5M€, enfocat en processos confidencials per a propietaris propers a la jubilació.',
  servicesFooter: 'Serveis',
  quickLinks: 'Enllaços ràpids',
  home: 'Inici',
  privacyPolicy: 'Política de privacitat',
  termsOfService: 'Termes de servei',
  cookies: 'Cookies',
  allRightsReserved: 'Tots els drets reservats.'
};

// Valencian translations
export const val = {
  // Navbar
  services: 'Servicis',
  about: 'Nosaltres',
  testimonials: 'Testimonis',
  contact: 'Contacte',
  contactButton: 'Contactar',
  
  // Hero
  heroTitle: 'Valoració confidencial per a empreses de 3-5M€ de facturació anual',
  heroSubtitle: 'Especialistes en assessorar propietaris que s\'acosten a la jubilació o planegen la successió del seu negoci.',
  confidentialityNote: 'Garantim 100% de confidencialitat en tot el procés',
  requestValuation: 'Sol·licitar valoració',
  ourServices: 'Els nostres servicis',
  specialOffer: 'Oferim la valoració sense cost si comptem amb un contracte d\'exclusivitat. Garantim la venda de la seua empresa en menys de 6 mesos.',
  
  // Services section
  servicesTitle: 'Els nostres servicis',
  servicesSubtitle: 'Servicis especialitzats per a empreses amb facturació entre 3 i 5 milions d\'euros, enfocats en processos de venda per jubilació o successió.',
  businessValuation: 'Valoració confidencial',
  businessValuationDesc: 'Anàlisi exhaustiu del valor de la seua empresa amb total confidencialitat, especialment per a propietaris propers a la jubilació.',
  financialDueDiligence: 'Due diligence financera',
  financialDueDiligenceDesc: 'Revisió completa de la situació financera per a preparar la seua empresa per a un procés de venda exitós i discret.',
  financialAnalysis: 'Anàlisi de successió',
  financialAnalysisDesc: 'Avaluació detallada de les opcions de successió familiar o venda a tercers, prioritzant la confidencialitat total.',
  strategicAdvisory: 'Assessorament en venda',
  strategicAdvisoryDesc: 'Consultoria especialitzada per a optimitzar el valor de venda de la seua empresa en un procés totalment confidencial.',
  
  // About section
  whyChooseUs: 'Per què triar Valor España?',
  aboutUsDescription: 'En Valor España ens especialitzem en empreses amb facturació entre 3 i 5 milions d\'euros, els propietaris de les quals estan considerant una venda per jubilació o planificació de successió. El nostre procés garanteix total confidencialitat en cada etapa.',
  experienceAndTrust: 'Experiència i confiança',
  experienceAndTrustDesc: 'Més de 15 anys assessorant empreses familiars en processos de venda confidencials per jubilació.',
  customizedApproach: 'Enfocament per a PIMES de 3-5M€ de facturació',
  customizedApproachDesc: 'Solucions específiques per a negocis amb facturació entre 3 i 5 milions, adaptades a cada sector i circumstància.',
  confidentiality: 'Confidencialitat absoluta',
  confidentialityDesc: 'Garantim total discreció i estrictes protocols de confidencialitat en tot el procés de valoració i assessorament.',
  ourMethodology: 'La nostra metodologia',
  methodologyDescription: 'Procés especialitzat per a empreses en fase de successió o venda per jubilació:',
  fundamentalAnalysis: '1. Anàlisi confidencial',
  fundamentalAnalysisDesc: 'Avaluació discreta d\'estats financers i indicadors clau sense alertar al mercat ni empleats.',
  multipleValuation: '2. Valoració per múltiples',
  multipleValuationDesc: 'Comparatives específiques per a empreses de 3-5M€ en processos de successió o venda.',
  discountedCashFlow: '3. Descompte de fluxos',
  discountedCashFlowDesc: 'Projeccions ajustades a escenaris de transició per jubilació o successió familiar.',
  qualitativeAnalysis: '4. Anàlisi qualitativa',
  qualitativeAnalysisDesc: 'Avaluació de factors intangibles i posicionament per a potencials compradors.',
  successionPlanning: '5. Planificació de successió',
  successionPlanningDesc: 'Estratègies personalitzades per a la transició del negoci, ja siga a familiars o mitjançant venda a tercers.',
  
  // Testimonials section
  testimonialsTitle: 'El que diuen els nostres clients',
  testimonialsSubtitle: 'Hem ajudat a nombrosos propietaris d\'empreses a planificar la seua jubilació mitjançant processos confidencials de valoració i venda.',
  
  // Contact section
  contactTitle: 'Parlem sobre el valor de la seua empresa',
  contactSubtitle: 'Complete el formulari i un dels nostres especialistes en valoració es posarà en contacte amb vosté per a discutir com podem ajudar-lo.',
  contactInfo: 'Informació de contacte',
  phone: '644116796',
  email: 'info@instituto-valor-espana.com',
  address: 'Terra Alta, Premia de Mar. 08330 Barcelona',
  requestInfoTitle: 'Sol·licite informació',
  nameLabel: 'Nom',
  companyLabel: 'Empresa',
  emailLabel: 'Email',
  phoneLabel: 'Telèfon',
  messageLabel: 'Missatge',
  submitButton: 'Enviar missatge',
  submittingButton: 'Enviant...',
  privacyNotice: 'En enviar aquest formulari, accepta la nostra política de privacitat i el tractament de les seues dades.',
  formSuccessTitle: 'Formulari enviat',
  formSuccessDesc: 'Ens posarem en contacte amb vosté prompte.',
  formErrorTitle: 'Error',
  formErrorDesc: 'S\'ha produït un error en enviar el formulari. Per favor, intente-ho de nou.',
  
  // Footer
  companyDescription: 'Servici especialitzat en valoració i venda d\'empreses amb facturació de 3-5M€, enfocat en processos confidencials per a propietaris propers a la jubilació.',
  servicesFooter: 'Servicis',
  quickLinks: 'Enllaços ràpids',
  home: 'Inici',
  privacyPolicy: 'Política de privadesa',
  termsOfService: 'Termes de servici',
  cookies: 'Cookies',
  allRightsReserved: 'Tots els drets reservats.'
};

// Galician translations
export const gl = {
  // Navbar
  services: 'Servizos',
  about: 'Nós',
  testimonials: 'Testemuños',
  contact: 'Contacto',
  contactButton: 'Contactar',
  
  // Hero
  heroTitle: 'Valoración confidencial para empresas de 3-5M€ de facturación anual',
  heroSubtitle: 'Especialistas en asesorar a propietarios que se achegan á xubilación ou planean a sucesión do seu negocio.',
  confidentialityNote: 'Garantimos 100% de confidencialidade en todo o proceso',
  requestValuation: 'Solicitar valoración',
  ourServices: 'Os nosos servizos',
  specialOffer: 'Ofrecemos a valoración sen custo se contamos cun contrato de exclusividade. Garantimos a venda da súa empresa en menos de 6 meses.',
  
  // Services section
  servicesTitle: 'Os nosos servizos',
  servicesSubtitle: 'Servizos especializados para empresas con facturación entre 3 e 5 millóns de euros, enfocados en procesos de venda por xubilación ou sucesión.',
  businessValuation: 'Valoración confidencial',
  businessValuationDesc: 'Análise exhaustiva do valor da súa empresa con total confidencialidade, especialmente para propietarios próximos á xubilación.',
  financialDueDiligence: 'Due diligence financeira',
  financialDueDiligenceDesc: 'Revisión completa da situación financeira para preparar a súa empresa para un proceso de venda exitoso e discreto.',
  financialAnalysis: 'Análise de sucesión',
  financialAnalysisDesc: 'Avaliación detallada das opcións de sucesión familiar ou venda a terceiros, priorizando a confidencialidade total.',
  strategicAdvisory: 'Asesoramento en venda',
  strategicAdvisoryDesc: 'Consultoría especializada para optimizar o valor de venda da súa empresa nun proceso totalmente confidencial.',
  
  // About section
  whyChooseUs: 'Por que escoller Valor España?',
  aboutUsDescription: 'En Valor España especializámonos en empresas con facturación entre 3 e 5 millóns de euros, cuxos propietarios están a considerar unha venda por xubilación ou planificación de sucesión. O noso proceso garante total confidencialidade en cada etapa.',
  experienceAndTrust: 'Experiencia e confianza',
  experienceAndTrustDesc: 'Máis de 15 anos asesorando empresas familiares en procesos de venda confidenciais por xubilación.',
  customizedApproach: 'Enfoque para PEMES de 3-5M€ de facturación',
  customizedApproachDesc: 'Solucións específicas para negocios con facturación entre 3 e 5 millóns, adaptadas a cada sector e circunstancia.',
  confidentiality: 'Confidencialidade absoluta',
  confidentialityDesc: 'Garantimos total discreción e estritos protocolos de confidencialidade en todo o proceso de valoración e asesoramento.',
  ourMethodology: 'A nosa metodoloxía',
  methodologyDescription: 'Proceso especializado para empresas en fase de sucesión ou venda por xubilación:',
  fundamentalAnalysis: '1. Análise confidencial',
  fundamentalAnalysisDesc: 'Avaliación discreta de estados financeiros e indicadores clave sen alertar ao mercado nin empregados.',
  multipleValuation: '2. Valoración por múltiplos',
  multipleValuationDesc: 'Comparativas específicas para empresas de 3-5M€ en procesos de sucesión ou venda.',
  discountedCashFlow: '3. Desconto de fluxos',
  discountedCashFlowDesc: 'Proxeccións axustadas a escenarios de transición por xubilación ou sucesión familiar.',
  qualitativeAnalysis: '4. Análise cualitativa',
  qualitativeAnalysisDesc: 'Avaliación de factores intanxibles e posicionamento para potenciais compradores.',
  successionPlanning: '5. Planificación de sucesión',
  successionPlanningDesc: 'Estratexias personalizadas para a transición do negocio, xa sexa a familiares ou mediante venda a terceiros.',
  
  // Testimonials section
  testimonialsTitle: 'O que din os nosos clientes',
  testimonialsSubtitle: 'Axudamos a numerosos propietarios de empresas a planificar a súa xubilación mediante procesos confidenciais de valoración e venda.',
  
  // Contact section
  contactTitle: 'Falemos sobre o valor da súa empresa',
  contactSubtitle: 'Complete o formulario e un dos nosos especialistas en valoración poñerase en contacto con vostede para discutir como podemos axudarlle.',
  contactInfo: 'Información de contacto',
  phone: '644116796',
  email: 'info@instituto-valor-espana.com',
  address: 'Terra Alta, Premia de Mar. 08330 Barcelona',
  requestInfoTitle: 'Solicite información',
  nameLabel: 'Nome',
  companyLabel: 'Empresa',
  emailLabel: 'Email',
  phoneLabel: 'Teléfono',
  messageLabel: 'Mensaxe',
  submitButton: 'Enviar mensaxe',
  submittingButton: 'Enviando...',
  privacyNotice: 'Ao enviar este formulario, acepta a nosa política de privacidade e o tratamento dos seus datos.',
  formSuccessTitle: 'Formulario enviado',
  formSuccessDesc: 'Poñerémonos en contacto con vostede pronto.',
  formErrorTitle: 'Erro',
  formErrorDesc: 'Produciuse un erro ao enviar o formulario. Por favor, inténteo de novo.',
  
  // Footer
  companyDescription: 'Servizo especializado en valoración e venda de empresas con facturación de 3-5M€, enfocado en procesos confidenciais para propietarios próximos á xubilación.',
  servicesFooter: 'Servizos',
  quickLinks: 'Ligazóns rápidas',
  home: 'Inicio',
  privacyPolicy: 'Política de privacidade',
  termsOfService: 'Termos de servizo',
  cookies: 'Cookies',
  allRightsReserved: 'Tódolos dereitos reservados.'
};

// Basque translations
export const eu = {
  // Navbar
  services: 'Zerbitzuak',
  about: 'Guri buruz',
  testimonials: 'Testigantzak',
  contact: 'Kontaktua',
  contactButton: 'Kontaktatu',
  
  // Hero
  heroTitle: '3-5M€-ko urteko fakturazioa duten enpresentzako balorazio konfidentziala',
  heroSubtitle: 'Jubilatzera hurbiltzen ari diren edo negozioaren ondorengotza planifikatzen ari diren enpresaburuei aholkuak ematen espezialistak.',
  confidentialityNote: 'Prozesu osoan %100eko konfidentzialtasuna bermatzen dugu',
  requestValuation: 'Balorazioa eskatu',
  ourServices: 'Gure zerbitzuak',
  specialOffer: 'Balorazioa doan eskaintzen dugu esklusibitate-kontratua badugu. Zure enpresaren salmenta 6 hilabete baino gutxiagotan bermatzen dugu.',
  
  // Services section
  servicesTitle: 'Gure zerbitzuak',
  servicesSubtitle: '3 eta 5 milioi euro arteko diru-sarrerak dituzten enpresentzako zerbitzu espezializatuak, erretiroagatik edo ondorengotzagatik salmenta-prozesuetan zentratuta.',
  businessValuation: 'Balorazio konfidentziala',
  businessValuationDesc: 'Zure enpresaren balioaren analisi sakona, konfidentzialtasun osoz, batez ere jubilatzera hurbiltzen ari diren jabeentzat.',
  financialDueDiligence: 'Finantza due diligence',
  financialDueDiligenceDesc: 'Egoera finantzarioaren berrikuspen osoa, zure enpresa salmenta-prozesu arrakastatsu eta diskretu baterako prestatzeko.',
  financialAnalysis: 'Ondorengotza analisia',
  financialAnalysisDesc: 'Familiaren ondorengotza-aukeren edo hirugarrenei egindako salmenten ebaluazio zehatza, konfidentzialtasun osoa lehenetsiz.',
  strategicAdvisory: 'Salmenta aholkularitza',
  strategicAdvisoryDesc: 'Aholkularitza espezializatua zure enpresaren salmenta-balioa prozesu guztiz konfidentzial batean optimizatzeko.',
  
  // About section
  whyChooseUs: 'Zergatik aukeratu Valor España?',
  aboutUsDescription: 'Valor España-n, 3 eta 5 milioi euro arteko diru-sarrerak dituzten enpresetan espezializatuta gaude, eta haien jabeak erretiroagatik edo ondorengotza planifikatzeagatik salmenta bat kontuan hartzen ari dira. Gure prozesuak konfidentzialtasun osoa bermatzen du etapa guztietan.',
  experienceAndTrust: 'Esperientzia eta konfiantza',
  experienceAndTrustDesc: '15 urte baino gehiago familia-enpresei aholkuak ematen, erretiroagatik salmenta-prozesu konfidentzialetan.',
  customizedApproach: '3-5M€-ko fakturazioa duten ETEei arreta',
  customizedApproachDesc: '3 eta 5 milioi arteko diru-sarrerak dituzten negozioentzako soluzio espezifikoak, sektore eta inguruabar bakoitzera egokituta.',
  confidentiality: 'Konfidentzialtasun absolutua',
  confidentialityDesc: 'Diskrezio osoa eta konfidentzialtasun-protokolo zorrotzak bermatzen ditugu balorazio- eta aholkularitza-prozesu osoan.',
  ourMethodology: 'Gure metodologia',
  methodologyDescription: 'Ondorengotza-fasean edo erretiroagatik salmenta duten enpresentzako prozesu espezializatua:',
  fundamentalAnalysis: '1. Analisi konfidentziala',
  fundamentalAnalysisDesc: 'Finantza-egoeren eta funtsezko adierazleen ebaluazio diskretua, merkatua edo langileak ohartarazi gabe.',
  multipleValuation: '2. Balorazio anizkoitza',
  multipleValuationDesc: '3-5M€-ko enpresentzako konparazio espezifikoak, ondorengotza- edo salmenta-prozesuetan.',
  discountedCashFlow: '3. Deskontatutako diru-fluxua',
  discountedCashFlowDesc: 'Erretiroagatik edo familiaren ondorengotzagatik trantsizio-eszenaarioetara egokitutako proiekzioak.',
  qualitativeAnalysis: '4. Analisi kualitatiboa',
  qualitativeAnalysisDesc: 'Faktore ukiezinen eta posizionamendu lehiakorraren ebaluazioa, balizko erosleentzat.',
  successionPlanning: '5. Ondorengotza planifikatzea',
  successionPlanningDesc: 'Negozioaren trantsiziorako estrategia pertsonalizatuak, bai senideentzat, bai hirugarrenei salduz.',
  
  // Testimonials section
  testimonialsTitle: 'Gure bezeroek diotena',
  testimonialsSubtitle: 'Enpresa-jabe askori lagundu diegu erretiroa planifikatzen, balorazio- eta salmenta-prozesu konfidentzialen bidez.',
  
  // Contact section
  contactTitle: 'Hitz egin dezagun zure enpresaren balioari buruz',
  contactSubtitle: 'Bete ezazu formularioa eta gure balorazio-espezialistetako bat zurekin harremanetan jarriko da nola lagundu ahal dizugun eztabaidatzeko.',
  contactInfo: 'Harremanetarako informazioa',
  phone: '644116796',
  email: 'info@instituto-valor-espana.com',
  address: 'Terra Alta, Premia de Mar. 08330 Barcelona',
  requestInfoTitle: 'Eskatu informazioa',
  nameLabel: 'Izena',
  companyLabel: 'Enpresa',
  emailLabel: 'Emaila',
  phoneLabel: 'Telefonoa',
  messageLabel: 'Mezua',
  submitButton: 'Mezua bidali',
  submittingButton: 'Bidaltzen...',
  privacyNotice: 'Formulario hau bidaliz, gure pribatutasun politika eta zure datuen tratamendua onartzen dituzu.',
  formSuccessTitle: 'Formularioa bidali da',
  formSuccessDesc: 'Laster jarriko gara zurekin harremanetan.',
  formErrorTitle: 'Errorea',
  formErrorDesc: 'Errore bat gertatu da formularioa bidaltzean. Mesedez, saiatu berriro.',
  
  // Footer
  companyDescription: '3-5M€-ko fakturazioa duten enpresen balorazioan eta salmentan zerbitzu espezializatua, jubilatzera hurbiltzen ari diren jabeentzako prozesu konfidentzialetan zentratuta.',
  servicesFooter: 'Zerbitzuak',
  quickLinks: 'Esteka azkarrak',
  home: 'Hasiera',
  privacyPolicy: 'Pribatutasun politika',
  termsOfService: 'Zerbitzu baldintzak',
  cookies: 'Cookieak',
  allRightsReserved: 'Eskubide guztiak erreserbatuak.'
};

// Export all translations
export const translations = {
  es,
  en,
  ca,
  val,
  gl,
  eu
};

export type Translations = typeof es;
