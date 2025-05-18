import { useLanguage, type LanguageCode } from "@/components/ThemeProvider";

export type TranslationKey = 
  // Homepage
  | 'app.name'
  | 'app.subtitle'
  | 'app.cta'
  | 'app.beta'
  | 'nav.home'
  | 'nav.about'
  | 'nav.services'
  | 'nav.contact'
  | 'nav.getStarted'
  | 'nav.learnMore'
  | 'nav.submit'
  | 'nav.dashboard'
  | 'nav.admin'
  | 'nav.login'
  | 'nav.signup'
  | 'nav.logout'
  | 'stats.complaints'
  | 'stats.response'
  | 'stats.agencies'
  | 'stats.satisfaction'
  | 'how.title'
  | 'how.description'
  | 'how.submit'
  | 'how.track'
  | 'how.wait'
  | 'how.resolved'
  | 'how.submit.desc'
  | 'how.track.desc'
  | 'how.wait.desc'
  | 'how.resolved.desc'
  | 'features.title'
  | 'features.subtitle'
  | 'features.desc'
  | 'features.tracking'
  | 'features.tracking.desc'
  | 'features.communication'
  | 'features.communication.desc'
  | 'features.insights'
  | 'features.insights.desc'
  | 'features.cta'
  | 'categories.title'
  | 'categories.desc'
  | 'categories.report'
  | 'testimonials.title'
  | 'testimonials.desc'
  | 'app.download'
  | 'app.download.desc'
  | 'app.appstore'
  | 'app.googleplay'
  | 'analytics.title'
  | 'analytics.desc'
  | 'analytics.data'
  | 'analytics.data.desc'
  | 'analytics.response'
  | 'analytics.response.desc'
  | 'analytics.feedback'
  | 'analytics.feedback.desc'
  | 'cta.title'
  | 'cta.desc'
  | 'cta.submit'
  | 'cta.dashboard'
  | 'footer.rights'

  | 'dialog.title'
| 'dialog.description'
| 'tabs.profile'
| 'tabs.submissions'
| 'account.details'
| 'account.joinDate'
| 'account.status'
| 'status.verified'
| 'account.totalSubmissions'
  // Admin sections
  | 'admin.complaints'
  | 'admin.citizens'
  | 'admin.preferences'
  | 'admin.account'
  | 'admin.search'
  | 'admin.filter'
  | 'admin.category'
  | 'admin.status'
  | 'admin.title'
  | 'admin.actions'
  | 'admin.viewDetails'
  | 'admin.complaintDetails'
  | 'admin.reviewRespond'
  | 'admin.description'
  | 'admin.location'
  | 'admin.submissionDate'
  | 'admin.lastUpdated'
  | 'admin.previousResponse'
  | 'admin.sendResponse'
  | 'admin.responsePrompt'
  | 'admin.cancel'
  | 'admin.send'
  | 'language'
  | 'theme.light'
  | 'theme.dark'
  | 'theme.system'
  // Authentication
  | 'auth.loginTitle'
  | 'auth.loginDesc'
  | 'auth.email'
  | 'auth.password'
  | 'auth.forgot'
  | 'auth.loggingIn'
  | 'auth.noAccount'
  | 'auth.createAccount'
  | 'auth.signupTitle'
  | 'auth.signupDesc'
  | 'auth.name'
  | 'auth.fullName'
  | 'auth.passwordReq'
  | 'auth.creating'
  | 'auth.haveAccount'
  | 'auth.success'
  | 'auth.welcomeBack'
  | 'auth.failed'
  | 'auth.invalidCredentials'
  | 'auth.accountCreated'
  | 'auth.welcomeNew'
  | 'auth.forgotPassword'
  | 'auth.forgotPasswordDesc'
  | 'auth.resetPassword'
  | 'auth.sending'
  | 'auth.resetEmailSent'
  | 'auth.resetInstructions'
  | 'auth.checkEmail'
  | 'auth.backToLogin'
  | 'auth.testCredentials'
  | 'auth.user'
  | 'auth.admin'
  // About Page
  | 'about.title'
  | 'about.subtitle'
  | 'about.mission.title'
  | 'about.mission.description'
  | 'about.vision.title'
  | 'about.vision.description'
  | 'about.team.title'
  | 'about.team.ceo'
  | 'about.team.cto'
  | 'about.team.coo'
  | 'about.team.member1'
  | 'about.team.member2'
  | 'about.team.member3'
  | 'about.story.title'
  | 'about.story.p1'
  | 'about.story.p2'
  | 'about.story.p3'
  | 'about.values.title'
  | 'about.values.transparency'
  | 'about.values.transparency.desc'
  | 'about.values.innovation'
  | 'about.values.innovation.desc'
  | 'about.values.integrity'
  | 'about.values.integrity.desc'
  // Services Page
  | 'services.title'
  | 'services.subtitle'
  | 'services.complaint.title'
  | 'services.complaint.description'
  | 'services.tracking.title'
  | 'services.tracking.description'
  | 'services.communication.title'
  | 'services.communication.description'
  | 'services.analytics.title'
  | 'services.analytics.description'
  | 'services.notifications.title'
  | 'services.notifications.description'
  | 'services.reporting.title'
  | 'services.reporting.description'
  | 'services.learn'
  | 'services.plans.title'
  | 'services.plans.basic.title'
  | 'services.plans.basic.description'
  | 'services.plans.basic.feature1'
  | 'services.plans.basic.feature2'
  | 'services.plans.basic.feature3'
  | 'services.plans.standard.title'
  | 'services.plans.standard.description'
  | 'services.plans.standard.feature1'
  | 'services.plans.standard.feature2'
  | 'services.plans.standard.feature3'
  | 'services.plans.standard.feature4'
  | 'services.plans.premium.title'
  | 'services.plans.premium.description'
  | 'services.plans.premium.feature1'
  | 'services.plans.premium.feature2'
  | 'services.plans.premium.feature3'
  | 'services.plans.premium.feature4'
  | 'services.plans.premium.feature5'
  | 'services.plans.get'
  | 'services.plans.popular'
  | 'services.cta.title'
  | 'services.cta.description'
  | 'services.cta.button'
  // Contact Page
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.info.title'
  | 'contact.email'
  | 'contact.phone'
  | 'contact.address'
  | 'contact.hours.title'
  | 'contact.hours.weekdays'
  | 'contact.hours.saturday'
  | 'contact.hours.sunday'
  | 'contact.hours.closed'
  | 'contact.form.title'
  | 'contact.form.name'
  | 'contact.form.namePlaceholder'
  | 'contact.form.email'
  | 'contact.form.emailPlaceholder'
  | 'contact.form.subject'
  | 'contact.form.subjectPlaceholder'
  | 'contact.form.message'
  | 'contact.form.messagePlaceholder'
  | 'contact.form.send'
  | 'contact.form.sending'
  | 'contact.location'
  | 'contact.faq.title'
  | 'contact.faq.q1'
  | 'contact.faq.a1'
  | 'contact.faq.q2'
  | 'contact.faq.a2'
  | 'contact.faq.q3'
  | 'contact.faq.a3'
  | 'contact.faq.q4'
  | 'contact.faq.a4'
  | 'contact.success.title'
  | 'contact.success.message'
  // Learn More Page
  | 'learnMore.title'
  | 'learnMore.subtitle'
  | 'learnMore.overview.title'
  | 'learnMore.overview.p1'
  | 'learnMore.overview.p2'
  | 'learnMore.overview.getStarted'
  | 'learnMore.overview.services'
  | 'learnMore.howItWorks.title'
  | 'learnMore.howItWorks.step1.title'
  | 'learnMore.howItWorks.step1.description'
  | 'learnMore.howItWorks.step1.point1'
  | 'learnMore.howItWorks.step1.point2'
  | 'learnMore.howItWorks.step1.point3'
  | 'learnMore.howItWorks.step2.title'
  | 'learnMore.howItWorks.step2.description'
  | 'learnMore.howItWorks.step2.point1'
  | 'learnMore.howItWorks.step2.point2'
  | 'learnMore.howItWorks.step2.point3'
  | 'learnMore.howItWorks.step3.title'
  | 'learnMore.howItWorks.step3.description'
  | 'learnMore.howItWorks.step3.point1'
  | 'learnMore.howItWorks.step3.point2'
  | 'learnMore.howItWorks.step3.point3'
  | 'learnMore.benefits.title'
  | 'learnMore.benefits.benefit1.title'
  | 'learnMore.benefits.benefit1.description'
  | 'learnMore.benefits.benefit2.title'
  | 'learnMore.benefits.benefit2.description'
  | 'learnMore.benefits.benefit3.title'
  | 'learnMore.benefits.benefit3.description'
  | 'learnMore.cta.title'
  | 'learnMore.cta.description'
  | 'learnMore.cta.signup'
  | 'learnMore.cta.contact'
  // Dashboard
  | 'dashboard.welcome'
  | 'dashboard.summary'
  | 'dashboard.complaints'
  | 'dashboard.resolved'
  | 'dashboard.pending'
  | 'dashboard.rejected'
  | 'dashboard.recent'
  | 'dashboard.viewAll'
  | 'dashboard.status'
  | 'dashboard.category'
  | 'dashboard.date'
  | 'dashboard.noComplaints'
  | 'dashboard.submit'
  | 'dashboard.activity'
  | 'dashboard.notifications'
  | 'dashboard.seeAll'
  | 'dashboard.complaintDetails'
  | 'dashboard.close'
  | 'dashboard.viewOfficialResponse'
  | 'dashboard.toggleSidebar'
  // Additional missing keys
  | 'hero.heading'
  | 'hero.subheading'
  | 'how.improve'
  | 'how.improve.desc'
  | 'features.accessibility'
  | 'features.accessibility.desc'
  | 'features.transparency'
  | 'features.transparency.desc'
  | 'testimonials.more'
  | 'analytics.improvement'
  | 'analytics.improvement.desc'
  | 'footer.about'
  | 'footer.privacy'
  | 'footer.terms'
  | 'footer.help'
  | 'citizens.title'
  | 'citizens.subtitle'
  | 'citizens.searchPlaceholder'
  | 'citizens.table.id'
  | 'citizens.table.name'
  | 'citizens.table.email'
  | 'citizens.table.submissions'
  | 'citizens.table.status'
  | 'citizens.table.joinDate'
  | 'citizens.table.actions'
  | 'citizens.noResults'
  | 'actions.viewDetails'
  | 'actions.edit'
  | 'actions.delete'
  | 'actions.view'
  | 'actions.submit'
  | 'actions.update'
  | 'actions.cancel';

export const translations: Record<LanguageCode, Record<TranslationKey, string>> = {
  en: {
    'app.name': 'CiviConnect',
    'app.subtitle': 'Making your voice heard in public service delivery',
    'app.cta': 'Submit a Complaint',
    'app.beta': 'Beta Release',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    'nav.learnMore': 'Learn More',
    'nav.submit': 'Submit Complaint',
    'nav.dashboard': 'Dashboard',
    'nav.admin': 'Admin',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    'nav.logout': 'Logout',
    'stats.complaints': 'Complaints Resolved',
    'stats.response': 'Avg. Response Time',
    'stats.agencies': 'Government Agencies',
    'stats.satisfaction': 'Citizen Satisfaction',
    'how.title': 'How It Works',
    'how.description': 'Our platform streamlines the process of submitting and resolving civic complaints through a simple, transparent workflow.',
    'how.submit': 'Submit',
    'how.track': 'Track',
    'how.wait': 'Wait',
    'how.resolved': 'Resolved',
    'how.submit.desc': 'File your complaint or feedback through our easy-to-use form with relevant details.',
    'how.track.desc': 'Monitor the status of your submission through our real-time tracking system.',
    'how.wait.desc': 'Receive updates as your complaint is processed by the relevant government agency.',
    'how.resolved.desc': 'Get notified when your issue is resolved and provide feedback on the resolution.',
    'features.title': 'Empower citizens and improve public services',
    'features.subtitle': 'Powerful Features',
    'features.desc': 'Our platform helps bridge the gap between citizens and government agencies, making public service delivery more efficient and responsive.',
    'features.tracking': 'Real-time tracking',
    'features.tracking.desc': 'Monitor the status of your complaints with live updates',
    'features.communication': 'Direct communication',
    'features.communication.desc': 'Communicate directly with government officials handling your case',
    'features.insights': 'Data-driven insights',
    'features.insights.desc': 'Help government agencies identify and address systemic issues',
    'features.cta': 'Get Started',
    'categories.title': 'Report Issues By Category',
    'categories.desc': 'Our platform handles a wide range of public service issues, categorized for efficient routing and resolution.',
    'categories.report': 'Report an issue',
    'testimonials.title': 'What Citizens Are Saying',
    'testimonials.desc': 'Hear from citizens who have used our platform to resolve their issues with public services.',
    'app.download': 'Get the Mobile App',
    'app.download.desc': 'Report issues on the go and receive notifications directly to your phone.',
    'app.appstore': 'App Store',
    'app.googleplay': 'Google Play',
    'analytics.title': 'Improving Services Through Data',
    'analytics.desc': 'We analyze complaint data to help government agencies identify patterns and improve services.',
    'analytics.data': 'Data Analytics',
    'analytics.data.desc': 'Our platform aggregates complaint data to help agencies identify common issues and allocate resources effectively.',
    'analytics.response': 'Response Time',
    'analytics.response.desc': 'We measure and report on response times, helping agencies improve their service delivery standards.',
    'analytics.feedback': 'Citizen Feedback',
    'analytics.feedback.desc': 'Citizen feedback on resolved complaints helps agencies continually improve their services.',
    'cta.title': 'Ready to make your voice heard?',
    'cta.desc': 'Join thousands of citizens who are actively improving our community through feedback and engagement.',
    'cta.submit': 'Submit a Complaint',
    'cta.dashboard': 'View Dashboard',
    'footer.rights': 'All rights reserved.',
    'admin.complaints': 'Complaints Management',
    'admin.citizens': 'Citizens',
    'admin.preferences': 'Preferences',
    'admin.account': 'Account',
    'admin.search': 'Search complaints...',
    'admin.filter': 'Filter',
    'admin.category': 'Category',
    'admin.status': 'Status',
    'admin.title': 'Title',
    'admin.actions': 'Actions',
    'admin.viewDetails': 'View Details',
    'admin.complaintDetails': 'Complaint Details',
    'admin.reviewRespond': 'Review and respond to this complaint',
    'admin.description': 'Description',
    'admin.location': 'Location',
    'admin.submissionDate': 'Submission Date',
    'admin.lastUpdated': 'Last Updated',
    'admin.previousResponse': 'Previous Response',
    'admin.sendResponse': 'Send Response',
    'admin.responsePrompt': 'Type your response to the citizen here...',
    'admin.cancel': 'Cancel',
    'admin.send': 'Send Response',
    'language': 'Language',
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.system': 'System',

    'dialog.title': 'Dialog',
  'dialog.description': 'Please confirm your action',
  'tabs.profile': 'Profile',
  'tabs.submissions': 'Submissions',
  'account.details': 'Account Details',
  'account.joinDate': 'Join Date',
  'account.status': 'Status',
  'status.verified': 'Verified',
  'account.totalSubmissions': 'Total Submissions',
    // Auth translations
    'auth.loginTitle': 'Welcome back',
    'auth.loginDesc': 'Enter your credentials to access your account',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.forgot': 'Forgot password?',
    'auth.loggingIn': 'Logging in...',
    'auth.noAccount': 'Don\'t have an account?',
    'auth.createAccount': 'Create an account',
    'auth.signupTitle': 'Create an account',
    'auth.signupDesc': 'Enter your information to get started',
    'auth.name': 'Name',
    'auth.fullName': 'Full name',
    'auth.passwordReq': 'Password must be at least 8 characters long',
    'auth.creating': 'Creating account...',
    'auth.haveAccount': 'Already have an account?',
    'auth.success': 'Login successful',
    'auth.welcomeBack': 'Welcome back to CiviConnect',
    'auth.failed': 'Login failed',
    'auth.invalidCredentials': 'Invalid email or password',
    'auth.accountCreated': 'Account created',
    'auth.welcomeNew': 'Welcome to CiviConnect',
    'auth.forgotPassword': 'Forgot Password',
    'auth.forgotPasswordDesc': 'Enter your email and we will send you a password reset link',
    'auth.resetPassword': 'Reset Password',
    'auth.sending': 'Sending...',
    'auth.resetEmailSent': 'Reset email sent',
    'auth.resetInstructions': 'Check your inbox for password reset instructions',
    'auth.checkEmail': 'We\'ve sent a password reset link to your email address',
    'auth.backToLogin': 'Back to login',
    'auth.testCredentials': 'Test credentials',
    'auth.user': 'User',
    'auth.admin': 'Admin',
    // About page translations
    'about.title': 'About CiviConnect',
    'about.subtitle': 'Working together to improve public service delivery through citizen engagement',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'CiviConnect is dedicated to empowering citizens and improving public services by providing an efficient platform for submitting and resolving complaints. We aim to create a transparent and responsive system that bridges the gap between citizens and government agencies.',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'We envision a society where every citizen has a voice in the delivery of public services, and where government agencies are responsive, accountable, and citizen-focused. Through technology and innovation, we aim to transform the relationship between citizens and government.',
    'about.team.title': 'Our Team',
    'about.team.ceo': 'Chief Executive Officer',
    'about.team.cto': 'Chief Technology Officer',
    'about.team.coo': 'Chief Operations Officer',
    'about.team.member1': 'With over 15 years of experience in public administration, John leads our team with a passion for civic engagement and government transparency.',
    'about.team.member2': 'Jane brings 12 years of software development expertise, specializing in creating user-friendly platforms that connect citizens with government services.',
    'about.team.member3': 'Robert has spent 10 years working with local and national government agencies, and understands the operational challenges of public service delivery.',
    'about.story.title': 'Our Story',
    'about.story.p1': 'CiviConnect was founded in 2020 in response to the growing need for better communication between citizens and public service providers. Our founders recognized the challenges citizens faced when trying to report issues and get timely resolutions.',
    'about.story.p2': 'Starting with a small pilot program in partnership with the local municipal government, we demonstrated that a digital platform could significantly improve response times and citizen satisfaction. Since then, we have expanded to work with multiple government agencies and have processed over 50,000 citizen complaints.',
    'about.story.p3': 'Today, CiviConnect is recognized as a leading platform for civic engagement and public service improvement, with a focus on making government more responsive, transparent, and citizen-centered.',
    'about.values.title': 'Our Values',
    'about.values.transparency': 'Transparency',
    'about.values.transparency.desc': 'We believe in complete openness about how complaints are processed and resolved.',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.desc': 'We continuously improve our platform to better serve citizens and government agencies.',
    'about.values.integrity': 'Integrity',
    'about.values.integrity.desc': 'We maintain the highest standards of honesty and ethical conduct in all our operations.',
    // Services page translations
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive solutions for citizens and government agencies',
    'services.complaint.title': 'Complaint Submission',
    'services.complaint.description': 'Our user-friendly platform makes it easy for citizens to submit detailed complaints about public services.',
    'services.tracking.title': 'Real-time Tracking',
    'services.tracking.description': 'Track the status of your complaint in real-time with updates at every stage of the resolution process.',
    'services.communication.title': 'Direct Communication',
    'services.communication.description': 'Communicate directly with government officials handling your case through our secure messaging system.',
    'services.analytics.title': 'Data Analytics',
    'services.analytics.description': 'Access powerful analytics tools that help government agencies identify patterns and improve service delivery.',
    'services.notifications.title': 'Automated Notifications',
    'services.notifications.description': 'Receive automatic updates about your complaint via email, SMS, or push notifications.',
    'services.reporting.title': 'Comprehensive Reporting',
    'services.reporting.description': 'Generate detailed reports on complaint resolution, response times, and citizen satisfaction.',
    'services.learn': 'Learn More',
    'services.plans.title': 'Service Plans',
    'services.plans.basic.title': 'Basic',
    'services.plans.basic.description': 'Essential features for individual citizens',
    'services.plans.basic.feature1': 'Submit up to 5 complaints per month',
    'services.plans.basic.feature2': 'Basic tracking and notifications',
    'services.plans.basic.feature3': 'Email support',
    'services.plans.standard.title': 'Standard',
    'services.plans.standard.description': 'Advanced features for active citizens',
    'services.plans.standard.feature1': 'Unlimited complaint submissions',
    'services.plans.standard.feature2': 'Advanced tracking and analytics',
    'services.plans.standard.feature3': 'Priority support',
    'services.plans.standard.feature4': 'Mobile app access',
    'services.plans.premium.title': 'Premium',
    'services.plans.premium.description': 'Comprehensive features for government agencies',
    'services.plans.premium.feature1': 'Customized complaint forms',
    'services.plans.premium.feature2': 'Advanced analytics dashboard',
    'services.plans.premium.feature3': 'API integration',
    'services.plans.premium.feature4': 'Dedicated support team',
    'services.plans.premium.feature5': 'Custom reporting',
    'services.plans.get': 'Get Plan',
    'services.plans.popular': 'Most Popular',
    'services.cta.title': 'Need a custom solution?',
    'services.cta.description': 'We offer tailored services for municipalities, government agencies, and other organizations. Contact us to discuss your specific requirements.',
    'services.cta.button': 'Contact Us',
    // Contact page translations
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We\'re here to help with any questions or inquiries',
    'contact.info.title': 'Get In Touch',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.hours.title': 'Office Hours',
    'contact.hours.weekdays': 'Monday - Friday',
    'contact.hours.saturday': 'Saturday',
    'contact.hours.sunday': 'Sunday',
    'contact.hours.closed': 'Closed',
    'contact.form.title': 'Send Us a Message',
    'contact.form.name': 'Name',
    'contact.form.namePlaceholder': 'Your full name',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'your.email@example.com',
    'contact.form.subject': 'Subject',
    'contact.form.subjectPlaceholder': 'How can we help you?',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Please provide details about your inquiry...',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.location': 'Our Location',
    'contact.faq.title': 'Frequently Asked Questions',
    'contact.faq.q1': 'How quickly will I receive a response to my complaint?',
    'contact.faq.a1': 'Most complaints are acknowledged within 24 hours, and we aim to provide a substantive response within 5 business days.',
    'contact.faq.q2': 'Can I submit a complaint anonymously?',
    'contact.faq.a2': 'Yes, you can choose to submit complaints anonymously, although this may limit our ability to provide you with updates.',
    'contact.faq.q3': 'Do you offer services in languages other than English?',
    'contact.faq.a3': 'Yes, our platform is available in English and Kinyarwanda, with plans to add more languages in the future.',
    'contact.faq.q4': 'How do I check the status of my submitted complaint?',
    'contact.faq.a4': 'You can log in to your dashboard to view real-time updates on all your submitted complaints.',
    'contact.success.title': 'Message Sent',
    'contact.success.message': 'Thank you for your message. We will get back to you soon.',
    // Learn More page translations
    'learnMore.title': 'Learn More About CiviConnect',
    'learnMore.subtitle': 'Discover how our platform is transforming citizen engagement and public service delivery',
    'learnMore.overview.title': 'Platform Overview',
    'learnMore.overview.p1': 'CiviConnect is a cutting-edge platform designed to bridge the gap between citizens and government agencies. Our system streamlines the process of submitting, tracking, and resolving public service complaints, making government more responsive and accountable to citizens\' needs.',
    'learnMore.overview.p2': 'With features like real-time tracking, direct communication with officials, and powerful analytics tools, CiviConnect is revolutionizing how citizens interact with government services and how agencies respond to community needs.',
    'learnMore.overview.getStarted': 'Get Started',
    'learnMore.overview.services': 'View Services',
    'learnMore.howItWorks.title': 'How It Works',
    'learnMore.howItWorks.step1.title': 'Submit Your Complaint',
    'learnMore.howItWorks.step1.description': 'Use our simple submission form to provide details about your issue with public services. Include location, photos, and any relevant information to help officials understand and address your concern.',
    'learnMore.howItWorks.step1.point1': 'Select the appropriate category for your complaint',
    'learnMore.howItWorks.step1.point2': 'Provide detailed information about the issue',
    'learnMore.howItWorks.step1.point3': 'Upload supporting evidence like photos or documents',
    'learnMore.howItWorks.step2.title': 'Complaint Processing',
    'learnMore.howItWorks.step2.description': 'Once submitted, your complaint is automatically routed to the appropriate government agency. An official is assigned to your case, and you receive confirmation that your complaint is being processed.',
    'learnMore.howItWorks.step2.point1': 'Automated routing to the relevant department',
    'learnMore.howItWorks.step2.point2': 'Case number assignment for easy tracking',
    'learnMore.howItWorks.step2.point3': 'Initial assessment and prioritization',
    'learnMore.howItWorks.step3.title': 'Resolution and Feedback',
    'learnMore.howItWorks.step3.description': 'Track the progress of your complaint in real-time. Communicate directly with officials working on your case. Once resolved, provide feedback on the solution and the process.',
    'learnMore.howItWorks.step3.point1': 'Real-time status updates throughout the process',
    'learnMore.howItWorks.step3.point2': 'Direct messaging with case handlers',
    'learnMore.howItWorks.step3.point3': 'Feedback mechanism for continuous improvement',
    'learnMore.benefits.title': 'Key Benefits',
    'learnMore.benefits.benefit1.title': 'For Citizens',
    'learnMore.benefits.benefit1.description': 'Easy complaint submission, transparent tracking, faster resolutions, and direct communication with government officials.',
    'learnMore.benefits.benefit2.title': 'For Government',
    'learnMore.benefits.benefit2.description': 'Streamlined complaint management, data-driven insights, improved resource allocation, and increased citizen satisfaction.',
    'learnMore.benefits.benefit3.title': 'For Communities',
    'learnMore.benefits.benefit3.description': 'Better public services, more responsive government, data-driven improvements, and stronger civic engagement.',
    'learnMore.cta.title': 'Ready to experience better public services?',
    'learnMore.cta.description': 'Join thousands of citizens who are using CiviConnect to make their voices heard and improve public services in their communities.',
    'learnMore.cta.signup': 'Sign Up Now',
    'learnMore.cta.contact': 'Contact Us',
    // Dashboard translations
    'dashboard.welcome': 'Welcome to your Dashboard',
    'dashboard.summary': 'Summary of your complaints',
    'dashboard.complaints': 'Total Complaints',
    'dashboard.resolved': 'Resolved',
    'dashboard.pending': 'Pending',
    'dashboard.rejected': 'Rejected',
    'dashboard.recent': 'Recent Complaints',
    'dashboard.viewAll': 'View All',
    'dashboard.status': 'Status',
    'dashboard.category': 'Category',
    'dashboard.date': 'Date',
    'dashboard.noComplaints': 'You have no complaints yet',
    'dashboard.submit': 'Submit a complaint',
    'dashboard.activity': 'Recent Activity',
    'dashboard.notifications': 'Notifications',
    'dashboard.seeAll': 'See All',
    'dashboard.complaintDetails': 'Complaint Details',
    'dashboard.close': 'Close',
    'dashboard.viewOfficialResponse': 'View Official Response',
    'dashboard.toggleSidebar': 'Toggle Sidebar',
    // Additional missing translations
    'hero.heading': 'Submit Feedback on Government Services',
    'hero.subheading': 'CiviConnect helps you submit complaints, track resolutions, and participate in improving government services.',
    'how.improve': 'Support Development',
    'how.improve.desc': 'Your feedback helps improve services and provide better solutions.',
    'features.accessibility': 'Accessibility',
    'features.accessibility.desc': 'You can submit and track complaints using a computer or mobile phone from anywhere.',
    'features.transparency': 'Transparency',
    'features.transparency.desc': 'Track your complaint status transparently and with full visibility.',
    'testimonials.more': 'Read More Testimonials',
    'analytics.improvement': 'Performance Improvement',
    'analytics.improvement.desc': 'We use citizen feedback to improve and update government services.',
    'footer.about': 'About CiviConnect',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.help': 'Help',
    'citizens.title': 'Citizens',
    'citizens.subtitle': 'List of registered citizens and their activities on the platform.',
    'citizens.searchPlaceholder': 'Search by name or email...',
    'citizens.table.id': 'ID',
    'citizens.table.name': 'Name',
    'citizens.table.email': 'Email',
    'citizens.table.submissions': 'Submissions',
    'citizens.table.status': 'Status',
    'citizens.table.joinDate': 'Join Date',
    'citizens.table.actions': 'Actions',
    'citizens.noResults': 'No citizens found.',
    'actions.viewDetails': 'View Details',
    'actions.edit': 'Edit',
    'actions.delete': 'Delete',
    'actions.view': 'View',
    'actions.submit': 'Submit',
    'actions.update': 'Update',
    'actions.cancel': 'Cancel'
  },
  rw: {
    'app.name': 'CiviConnect',
    'app.subtitle': 'Gutuma ijwi ryawe ryumvikana mu gutanga serivisi za leta',
    'app.cta': 'Tanga Ikibazo',
    'app.beta': 'Ikigeragereza',
    'nav.home': 'Ahabanza',
    'nav.about': 'Ibyerekeye',
    'nav.services': 'Serivisi',
    'nav.contact': 'Twandikire',
    'nav.getStarted': 'Tangira Nonaha',
    'nav.learnMore': 'Menya Byinshi',
    'nav.submit': 'Tanga Ikibazo',
    'nav.dashboard': 'Ikibaho',
    'nav.admin': 'Ubuyobozi',
    'nav.login': 'Injira',
    'nav.signup': 'Iyandikishe',
    'nav.logout': 'Sohoka',
    'stats.complaints': 'Ibibazo Byakemuwe',
    'stats.response': 'Igihe cyo Gusubiza',
    'stats.agencies': 'Ibigo bya Leta',
    'stats.satisfaction': 'Kunyurwa kw\'Abaturage',
    'how.title': 'Uko Bikorwa',
    'how.description': 'Iyi sisitemu yorohereza uburyo bwo gutanga no gukemura ibibazo by\'abaturage biciye mu buryo bworoshye kandi bugaragara.',
    'how.submit': 'Tanga',
    'how.track': 'Kurikirana',
    'how.wait': 'Tegereza',
    'how.resolved': 'Byakemutse',
    'how.submit.desc': 'Tanga ikibazo cyawe cyangwa ibitekerezo binyuze mu ifishi yoroshye gukoreshwa hamwe n\'amakuru ajyanye na byo.',
    'how.track.desc': 'Kurikirana aho ikibazo cyawe kigeze binyuze kuri sisitemu yacu ikurikirana mu buryo nyakuri.',
    'how.wait.desc': 'Akira amakuru igihe ikibazo cyawe gitwarwa n\'ikigo cya leta kibijejwe.',
    'how.resolved.desc': 'Kubona itangazo igihe ikibazo cyawe kikemutse kandi utange ibitekerezo ku isubiza.',
    'features.title': 'Guha abaturage ububasha no kunoza serivisi za leta',
    'features.subtitle': 'Ibiranga Sisitemu',
    'features.desc': 'Sisitemu yacu ifasha mu guhuza abaturage n\'ibigo bya leta, bituma gutanga serivisi za leta birushaho kuba byiza kandi bisubiza vuba.',
    'features.tracking': 'Gukurikirana mu buryo nyakuri',
    'features.tracking.desc': 'Kurikirana aho ikibazo cyawe kigeze binyuze ku makuru atangwa mu buryo nyakuri',
    'features.communication': 'Kuvugana mu buryo butaziguye',
    'features.communication.desc': 'Kuvugana mu buryo butaziguye n\'abakozi ba leta bakemura ikibazo cyawe',
    'features.insights': 'Gushingira ku makuru',
    'features.insights.desc': 'Gufasha ibigo bya leta kumenya no gukemura ibibazo bisanzwe',
    'features.cta': 'Tangira',
    'categories.title': 'Tanga Ibibazo Bishingiye ku Byiciro',
    'categories.desc': 'Sisitemu yacu ikemura urwego rw\'ibibazo bya serivisi za leta, bigahurizwa hamwe kugira ngo bikemuke vuba kandi neza.',
    'categories.report': 'Tanga ikibazo',
    'testimonials.title': 'Icyo Abaturage Bavuga',
    'testimonials.desc': 'Umva ibitekerezo by\'abaturage bakoresheje sisitemu yacu mu gukemura ibibazo byabo bijyanye na serivisi za leta.',
    'app.download': 'Bona Porogaramu kuri Telefoni',
    'app.download.desc': 'Tanga ibibazo uri aho uri hose kandi ubone itangazo kuri telefoni yawe.',
    'app.appstore': 'App Store',
    'app.googleplay': 'Google Play',
    'analytics.title': 'Guteza Imbere Serivisi Binyuze ku Makuru',
    'analytics.desc': 'Dusesengura amakuru y\'ibibazo kugira ngo dufashe ibigo bya leta kumenya aho hari inenge no kunoza serivisi.',
    'analytics.data': 'Gusesengura Amakuru',
    'analytics.data.desc': 'Sisitemu yacu ikusanya amakuru y\'ibibazo kugira ngo ifashe ibigo kumenya ibibazo bisanzwe no gutanga ibikenewe mu buryo bukwiye.',
    'analytics.response': 'Igihe cyo Gusubiza',
    'analytics.response.desc': 'Dupima kandi dutanga raporo ku gihe cyo gusubiza, dufasha ibigo guteza imbere uburyo batanga serivisi.',
    'analytics.feedback': 'Ibitekerezo by\'Abaturage',
    'analytics.feedback.desc': 'Ibitekerezo by\'abaturage ku bibazo byakemutse bifasha ibigo gukomeza kunoza serivisi zabo.',
    'cta.title': 'Witeguye gutuma ijwi ryawe ryumvikana?',
    'cta.desc': 'Iyunge n\'ibihumbi by\'abaturage bari guteza imbere umuryango wacu binyuze mu bitekerezo no mu kugira uruhare.',
    'cta.submit': 'Tanga Ikibazo',
    'cta.dashboard': 'Reba Ikibaho',
    'footer.rights': 'Uburenganzira bwose bwihariwe.',
    'admin.complaints': 'Imicungire y\'Ibibazo',
    'admin.citizens': 'Abaturage',
    'admin.preferences': 'Amahitamo',
    'admin.account': 'Konti',
    'admin.search': 'Shakisha ibibazo...',
    'admin.filter': 'Shungura',
    'admin.category': 'Icyiciro',
    'admin.status': 'Uko Bigeze',
    'admin.title': 'Umutwe',
    'admin.actions': 'Ibikorwa',
    'admin.viewDetails': 'Reba Birambuye',
    'admin.complaintDetails': 'Ibisobanuro by\'Ikibazo',
    'admin.reviewRespond': 'Reba kandi usubize iki kibazo',
    'admin.description': 'Igisobanuro',
    'admin.location': 'Aho Biherereye',
    'admin.submissionDate': 'Itariki Byatangiwe',
    'admin.lastUpdated': 'Igihe Byaherutsemo Kuvugururwa',
    'admin.previousResponse': 'Igisubizo Cyabanje',
    'admin.sendResponse': 'Ohereza Igisubizo',
    'admin.responsePrompt': 'Andika igisubizo cyawe hano...',
    'admin.cancel': 'Kureka',
    'admin.send': 'Ohereza Igisubizo',
    'language': 'Ururimi',
    'theme.light': 'Urumuri',
    'theme.dark': 'Umwijima',
    'theme.system': 'Sisitemu',
    'hero.heading': 'Tanga Ibitekerezo ku Mikorere ya Leta',
    'hero.subheading': 'CiviConnect igufasha gutanga ibibazo, gukurikirana ibisubizo, no kugira uruhare mu kunoza serivisi za leta.',
    'how.improve': 'Tera Inkunga Iterambere',
    'how.improve.desc': 'Ibitekerezo byawe bifasha mu kunoza serivisi no gutanga ibisubizo birambye.',
    'features.accessibility': 'Kuboneka hose',
    'features.accessibility.desc': 'Ushobora gutanga no gukurikirana ibibazo ukoresheje mudasobwa cyangwa telefoni igendanwa aho uri hose.',
    'features.transparency': 'Gucyura Amakuru',
    'features.transparency.desc': 'Ukurikirana aho ikibazo cyawe kigeze mu buryo bugaragara kandi buciye mu mucyo.',
    'testimonials.more': 'Soma Ibitekerezo Byinshi',
    'analytics.improvement': 'Imikorere Yatejwe Imbere',
    'analytics.improvement.desc': 'Dukoresha ibitekerezo byatanzwe n\'abaturage mu kunoza no kuvugurura serivisi za leta.',
    'footer.about': 'Ibyerekeye CiviConnect',
    'footer.privacy': 'Amabwiriza y\'Ubuzima bwite',
    'footer.terms': 'Amabwiriza n\'Amategeko',
    'footer.help': 'Ubufasha',
    'citizens.title': 'Abaturage',
    'citizens.subtitle': 'Urutonde rw\'abaturage biyandikishije ku rubuga hamwe n\'ibikorwa byabo.',
    'citizens.searchPlaceholder': 'Shakisha izina cyangwa imeyili...',
    'citizens.table.id': 'ID',
    'citizens.table.name': 'Izina',
    'citizens.table.email': 'Imeyili',
    'citizens.table.submissions': 'Ibibazo Byatanzwe',
    'citizens.table.status': 'Imiterere',
    'citizens.table.joinDate': 'Itariki Yiyandikishirijeho',
    'citizens.table.actions': 'Ibikorwa',
    'citizens.noResults': 'Nta muturage wabonetse.',
    'actions.viewDetails': 'Reba Ibisobanuro',
    'actions.edit': 'Hindura',
    'actions.delete': 'Siba',
    'actions.view': 'Reba',
    'actions.submit': 'Tanga',
    'actions.update': 'Vugurura',
    'actions.cancel': 'Kureka',

    'dialog.title': 'Ikiganiro',
  'dialog.description': 'Nyamuneka shimangira ibikorwa byawe',
  'tabs.profile': 'Profayili',
  'tabs.submissions': 'Ibibazo Byatanzwe',
  'account.details': 'Ibisobanuro bya Konti',
  'account.joinDate': 'Itariki Yiyandikishije',
  'account.status': 'Imiterere',
  'status.verified': 'Yemejwe',
  'account.totalSubmissions': 'Igiteranyo cy\'Ibibazo Byatanzwe',
    // Auth translations
    'auth.loginTitle': 'Murakaza neza',
    'auth.loginDesc': 'Shyiramo amakuru yawe kugira ngo winjire muri konti yawe',
    'auth.email': 'Imeyiri',
    'auth.password': 'Ijambo ryibanga',
    'auth.forgot': 'Wibagiwe ijambo ryibanga?',
    'auth.loggingIn': 'Urimo kwinjira...',
    'auth.noAccount': 'Nta konti ufite?',
    'auth.createAccount': 'Fungura konti',
    'auth.signupTitle': 'Fungura konti',
    'auth.signupDesc': 'Shyiramo amakuru yawe kugira ngo utangire',
    'auth.name': 'Izina',
    'auth.fullName': 'Izina ryuzuye',
    'auth.passwordReq': 'Ijambo ryibanga rigomba kuba byibura inyuguti 8',
    'auth.creating': 'Urimo gufungura konti...',
    'auth.haveAccount': 'Usanzwe ufite konti?',
    'auth.success': 'Kwinjira byagenze neza',
    'auth.welcomeBack': 'Murakaza neza kuri CiviConnect',
    'auth.failed': 'Kwinjira byanze',
    'auth.invalidCredentials': 'Imeyiri cyangwa ijambo ryibanga sibyo',
    'auth.accountCreated': 'Konti yawe yafunguwe',
    'auth.welcomeNew': 'Murakaza neza kuri CiviConnect',
    'auth.forgotPassword': 'Wibagiwe Ijambo Ryibanga',
    'auth.forgotPasswordDesc': 'Shyiramo imeyiri yawe maze tukoherereze uburyo bwo guhindura ijambo ryibanga',
    'auth.resetPassword': 'Hindura Ijambo Ryibanga',
    'auth.sending': 'Kohereza...',
    'auth.resetEmailSent': 'Imeyiri yoherejwe',
    'auth.resetInstructions': 'Reba imeyiri yawe kugira ngo ubone amabwiriza yo guhindura ijambo ryibanga',
    'auth.checkEmail': 'Twohereje link yo guhindura ijambo ryibanga kuri imeyiri yawe',
    'auth.backToLogin': 'Subira ku kwinjira',
    'auth.testCredentials': 'Amakuru yo kugerageza',
    'auth.user': 'Ukoresha',
    'auth.admin': 'Umuyobozi',
    // About page translations
    'about.title': 'Ibyerekeye CiviConnect',
    'about.subtitle': 'Gukorana hamwe mu guteza imbere serivisi za leta binyuze ku ruhare rw\'abaturage',
    'about.mission.title': 'Intego Yacu',
    'about.mission.description': 'CiviConnect yiyemeje guha abaturage ubushobozi no kunoza serivisi za leta binyuze ku rubuga runoze rwo gutanga no gukemura ibibazo. Intego yacu ni ukuremera urubuga rugaragara kandi rusubiza rufasha mu guhuza abaturage n\'ibigo bya leta.',
    'about.vision.title': 'Icyerekezo Cyacu',
    'about.vision.description': 'Dufite icyerekezo cy\'umuryango aho buri muturage afite ijwi mu gutanga serivisi za leta, na ho ibigo bya leta bisubiza, bibazwa, kandi bishyira abaturage ku isonga. Binyuze muri tekinoloji n\'igishya, dufite intego yo guhindura imikoranire y\'abaturage na leta.',
    'about.team.title': 'Ikipe Yacu',
    'about.team.ceo': 'Umuyobozi Mukuru',
    'about.team.cto': 'Umuyobozi wa Tekinoloji',
    'about.team.coo': 'Umuyobozi w\'Ibikorwa',
    'about.team.member1': 'Afite uburambe bw\'imyaka 15 mu buyobozi bwa leta, John ayobora ikipe yacu afite ishyaka ku ruhare rw\'abaturage n\'ihugukirwa rya leta.',
    'about.team.member2': 'Jane azanye uburambe bw\'imyaka 12 mu gukora software, yibanda ku rubuga rworoshye gukoreshwa ruhuza abaturage na serivisi za leta.',
    'about.team.member3': 'Robert yamaze imyaka 10 akorana n\'ibigo bya leta ku rwego rw\'akarere n\'igihugu, kandi yumva imbogamizi z\'ibikorwa mu gutanga serivisi za leta.',
    'about.story.title': 'Inkuru Yacu',
    'about.story.p1': 'CiviConnect yashinzwe mu 2020 mu gihe cy\'ubukene bwikubye kenshi bwo kunoza itumanaho hagati y\'abaturage n\'abatanga serivisi za leta. Abashinze bacu bamenye imbogamizi abaturage bahura nazo mu gihe bagerageza gutanga ibibazo no kubona ibisubizo mu gihe gikwiye.',
    'about.story.p2': 'Dutangiye na gahunda ntoya yo kugerageza dufatanyije na leta y\'akarere, twagaragaje ko urubuga rwa interineti rwashoboraga kurushaho kunoza igihe cyo gusubiza n\'ukunyurwa kw\'abaturage. Kuva icyo gihe, twagize amajyambere yo gukorana n\'ibigo bya leta byinshi kandi twaciye imanza zirenga 50,000 z\'abaturage.',
    'about.story.p3': 'Uyu munsi, CiviConnect izwi nk\'urubuga rw\'imbere mu ruhare rw\'abaturage no guteza imbere serivisi za leta, yibanda ku gutuma leta isubiza, igaragara, kandi ishyira abaturage ku isonga.',
    'about.values.title': 'Indangagaciro Zacu',
    'about.values.transparency': 'Ihugukirwa',
    'about.values.transparency.desc': 'Twizera kureba neza uburyo ibibazo bitangwa kandi bikemurwa.',
    'about.values.innovation': 'Igishya',
    'about.values.innovation.desc': 'Duhora dutera imbere platform yacu ngo dukorere neza abaturage n\'ibigo bya leta.',
    'about.values.integrity': 'Ubudahemuka',
    'about.values.integrity.desc': 'Tuzigama ibipimo byo hejuru mu budahemuka n\'imyitwarire myiza mu bikorwa byacu byose.',
    // Services page translations
    'services.title': 'Serivisi Zacu',
    'services.subtitle': 'Ibisubizo byuzuye ku baturage n\'ibigo bya leta',
    'services.complaint.title': 'Gutanga Ikibazo',
    'services.complaint.description': 'Urubuga rwacu rwiza gutanga mu buryo bworoshye ku baturage gutanga ibibazo birambuye ku birebana na serivisi za leta.',
    'services.tracking.title': 'Gukurikirana mu Buryo Nyakuri',
    'services.tracking.description': 'Kurikirana aho ikibazo cyawe kigeze mu buryo nyakuri binyuze ku makuru atangwa mu rwego rwose rwo gukemura.',
    'services.communication.title': 'Kuvugana mu Buryo Butaziguye',
    'services.communication.description': 'Kuvugana mu buryo butaziguye n\'abayobozi ba leta bakemura ikibazo cyawe binyuze mu buryo bwo kohereza ubutumwa bwizewe.',
    'services.analytics.title': 'Gusesengura Amakuru',
    'services.analytics.description': 'Kubona ibikoresho bikomeye byo gusesengura bifasha ibigo bya leta kumenya aho hari inenge no guteza imbere serivisi zabo.',
    'services.notifications.title': 'Itangazo Ryikora',
    'services.notifications.description': 'Kubona mu buryo bwikora amakuru y\'ibibazo binyuze kuri imeyili, SMS, cyangwa kumenyesha.',
    'services.reporting.title': 'Raporo Yuzuye',
    'services.reporting.description': 'Gukora raporo irambuye ku gukemura ibibazo, igihe cyo gusubiza, n\'ukunyurwa kw\'abaturage.',
    'services.learn': 'Menya Byinshi',
    'services.plans.title': 'Serivisi Zihari',
    'services.plans.basic.title': 'Ibanze',
    'services.plans.basic.description': 'Ibiranga by\'ingenzi ku baturage ku giti cyabo',
    'services.plans.basic.feature1': 'Tanga kugeza ku bibazo 5 ku kwezi',
    'services.plans.basic.feature2': 'Gukurikirana n\'itangazo bisanzwe',
    'services.plans.basic.feature3': 'Gufasha kuri imeyili',
    'services.plans.standard.title': 'Isanzwe',
    'services.plans.standard.description': 'Ibiranga by\'imbere ku baturage bagira uruhare',
    'services.plans.standard.feature1': 'Gutanga ibibazo bitagira umupaka',
    'services.plans.standard.feature2': 'Gukurikirana no gusesengura by\'imbere',
    'services.plans.standard.feature3': 'Ubufasha bw\'ibanze',
    'services.plans.standard.feature4': 'Kubona porogaramu yo kuri telefone',
    'services.plans.premium.title': 'Premium',
    'services.plans.premium.description': 'Ibiranga byuzuye ku bigo bya leta',
    'services.plans.premium.feature1': 'Inyandiko zo gutanga ibibazo zagenwe',
    'services.plans.premium.feature2': 'Ikibaho gisesengura cy\'imbere',
    'services.plans.premium.feature3': 'Guhuza API',
    'services.plans.premium.feature4': 'Ikipe y\'abafasha yagenwe',
    'services.plans.premium.feature5': 'Raporo zagenwe',
    'services.plans.get': 'Fata Serivisi',
    'services.plans.popular': 'Izwi Cyane',
    'services.cta.title': 'Ukeneye igisubizo cyagenwe?',
    'services.cta.description': 'Dutanga serivisi zihariye ku bigo by\'imijyi, ibigo bya leta, n\'izindi miryango. Twandikire kugira ngo duganire ku byo ukeneye byihariye.',
    'services.cta.button': 'Twandikire',
    // Contact page translations
    'contact.title': 'Twandikire',
    'contact.subtitle': 'Turi hano kukugufasha mu bibazo byose cyangwa ibyo ushaka',
    'contact.info.title': 'Twegere',
    'contact.email': 'Imeyili',
    'contact.phone': 'Telefone',
    'contact.address': 'Aderesi',
    'contact.hours.title': 'Amasaha y\'Akazi',
    'contact.hours.weekdays': 'Kuwa Mbere - Kuwa Gatanu',
    'contact.hours.saturday': 'Kuwa Gatandatu',
    'contact.hours.sunday': 'Ku Cyumweru',
    'contact.hours.closed': 'Birafunze',
    'contact.form.title': 'Twoherereze Ubutumwa',
    'contact.form.name': 'Izina',
    'contact.form.namePlaceholder': 'Izina ryawe ryuzuye',
    'contact.form.email': 'Imeyili',
    'contact.form.emailPlaceholder': 'imeyili.yawe@example.com',
    'contact.form.subject': 'Ikigenderewe',
    'contact.form.subjectPlaceholder': 'Tukugufasha ate?',
    'contact.form.message': 'Ubutumwa',
    'contact.form.messagePlaceholder': 'Nyamuneka tanga ibisobanuro ku byo ushaka...',
    'contact.form.send': 'Ohereza Ubutumwa',
    'contact.form.sending': 'Kohereza...',
    'contact.location': 'Aho Dukorera',
    'contact.faq.title': 'Ibibazo Bikunze Kubazwa',
    'contact.faq.q1': 'Ni mu gihe kingana gute nabona igisubizo ku kibazo cyanjye?',
    'contact.faq.a1': 'Ibibazo byinshi byemerwa mu masaha 24, kandi tugamije gutanga igisubizo mu minsi 5 y\'akazi.',
    'contact.faq.q2': 'Nshobora gutanga ikibazo ntamenyekanye?',
    'contact.faq.a2': 'Yego, ushobora guhitamo gutanga ibibazo utamenyekanye, nubwo ibi bishobora kugabanya ubushobozi bwacu bwo kuguha amakuru y\'aho bigeze.',
    'contact.faq.q3': 'Mutanga serivisi mu zindi ndimi uretse Icyongereza?',
    'contact.faq.a3': 'Yego, urubuga rwacu ruraboneka mu Cyongereza n\'Ikinyarwanda, tugamije kongera izindi ndimi mu gihe kizaza.',
    'contact.faq.q4': 'Nagenzura nte aho ikibazo cyanjye natanze kigeze?',
    'contact.faq.a4': 'Ushobora kwinjira mu kibaho cyawe kugira ngo urebe amakuru avuguruye y\'ibibazo byawe byose watanze.',
    'contact.success.title': 'Ubutumwa Bwatanzwe',
    'contact.success.message': 'Murakoze ku butumwa bwanyu. Tuzasubiza vuba.',
    // Learn More page translations
    'learnMore.title': 'Menya Byinshi Kuri CiviConnect',
    'learnMore.subtitle': 'Menya uko urubuga rwacu rutera imbere uruhare rw\'abaturage no gutanga serivisi za leta',
    'learnMore.overview.title': 'Incamake y\'Urubuga',
    'learnMore.overview.p1': 'CiviConnect ni urubuga rw\'imbere rwateguriwe guhuza abaturage n\'ibigo bya leta. Sisitemu yacu yorohereza uburyo bwo gutanga, gukurikirana, no gukemura ibibazo bya serivisi za leta, bituma leta isubiza kandi ibazwa ibyifuzo by\'abaturage.',
    'learnMore.overview.p2': 'Binyuze ku biranga nko gukurikirana mu buryo nyakuri, kuvugana mu buryo butaziguye n\'abayobozi, n\'ibikoresho bikomeye byo gusesengura, CiviConnect ihindura uko abaturage bavugana na serivisi za leta n\'uko ibigo bisubiza ibyifuzo by\'abaturarwanda.',
    'learnMore.overview.getStarted': 'Tangira Nonaha',
    'learnMore.overview.services': 'Reba Serivisi',
    'learnMore.howItWorks.title': 'Uko Bikorwa',
    'learnMore.howItWorks.step1.title': 'Tanga Ikibazo Cyawe',
    'learnMore.howItWorks.step1.description': 'Koresha ifishi yacu yoroshye yo gutanga kugira ngo utange ibisobanuro ku kibazo cyawe kijyanye na serivisi za leta. Shyiramo aho biherereye, amafoto, n\'andi makuru yose afasha abayobozi kugira ngo basobanukirwe kandi bakemure ikibazo cyawe.',
    'learnMore.howItWorks.step1.point1': 'Hitamo icyiciro gikwiye ku kibazo cyawe',
    'learnMore.howItWorks.step1.point2': 'Tanga amakuru arambuye ku kibazo',
    'learnMore.howItWorks.step1.point3': 'Tanga ibimenyetso bifasha nk\'amafoto n\'inyandiko',
    'learnMore.howItWorks.step2.title': 'Gucunga Ikibazo',
    'learnMore.howItWorks.step2.description': 'Igihe gitanzwe, ikibazo cyawe kiyoborwa mu buryo bwikora ku kigo cya leta gikwiye. Umukozi wa leta ahawe ikibazo cyawe, kandi ubona igisubiizo ko ikibazo cyawe kiri gucungwa.',
    'learnMore.howItWorks.step2.point1': 'Kuyobora mu buryo bwikora ku ishami rya leta rikwiye',
    'learnMore.howItWorks.step2.point2': 'Gutanga inomero y\'ikibazo kugira ngo birashye gukurikirana',
    'learnMore.howItWorks.step2.point3': 'Isuzuma rya mbere n\'ibintu by\'ingenzi',
    'learnMore.howItWorks.step3.title': 'Igisubizo n\'ibitekerezo',
    'learnMore.howItWorks.step3.description': 'Kurikirana aho ikibazo cyawe kigeze mu buryo nyakuri. Vugana mu buryo butaziguye n\'abakozi bakora ku kibazo cyawe. Igihe kikemutse, tanga ibitekerezo ku gisubizo n\'uburyo.',
    'learnMore.howItWorks.step3.point1': 'Kuvugurura aho bigeze mu gihe nyirizina mu buryo bwose',
    'learnMore.howItWorks.step3.point2': 'Kohereza ubutumwa butaziguye ku bakemura ikibazo',
    'learnMore.howItWorks.step3.point3': 'Uburyo bwo gutanga ibitekerezo kugira ngo birusheho gutera imbere',
    'learnMore.benefits.title': 'Inyungu z\'Ingenzi',
    'learnMore.benefits.benefit1.title': 'Ku Baturage',
    'learnMore.benefits.benefit1.description': 'Gutanga ibibazo mu buryo bworoshye, gukurikirana mu buryo bugaragara, igisubizo kitarenze igihe, no kuvugana mu buryo butaziguye n\'abayobozi ba leta.',
    'learnMore.benefits.benefit2.title': 'Kuri Leta',
    'learnMore.benefits.benefit2.description': 'Gucunga ibibazo mu buryo bworoshye, gusobanukirwa bishingiye ku makuru, kunoza igabana ry\'ibikoresho, no kongera ukunyurwa kw\'abaturage.',
    'learnMore.benefits.benefit3.title': 'Ku Miryango',
    'learnMore.benefits.benefit3.description': 'Serivisi za leta zirushaho kuba nziza, leta irushaho gusubiza, guteza imbere bishingiye ku makuru, n\'imibereho y\'abenegihugu ikomeye.',
    'learnMore.cta.title': 'Witeguye kunesha serivisi za leta ziza?',
    'learnMore.cta.description': 'Yuzuzanya n\'ibihumbi by\'abaturage bakoresha CiviConnect kugira ngo batume amajwi yabo yumvikana kandi banoza serivisi za leta mu miryango yabo.',
    'learnMore.cta.signup': 'Iyandikishe Ubu',
    'learnMore.cta.contact': 'Twandikire',
    // Dashboard translations
    'dashboard.welcome': 'Murakaza neza ku Kibaho cyawe',
    'dashboard.summary': 'Incamake y\'ibibazo byawe',
    'dashboard.complaints': 'Ibibazo byose',
    'dashboard.resolved': 'Byakemutse',
    'dashboard.pending': 'Bitegereje',
    'dashboard.rejected': 'Byanzwe',
    'dashboard.recent': 'Ibibazo Bishya',
    'dashboard.viewAll': 'Reba Byose',
    'dashboard.status': 'Imiterere',
    'dashboard.category': 'Icyiciro',
    'dashboard.date': 'Itariki',
    'dashboard.noComplaints': 'Nta bibazo ufite',
    'dashboard.submit': 'Tanga ikibazo',
    'dashboard.activity': 'Ibikorwa Bishya',
    'dashboard.notifications': 'Amatangazo',
    'dashboard.seeAll': 'Reba Byose',
    'dashboard.complaintDetails': 'Ibisobanuro by\'Ikibazo',
    'dashboard.close': 'Funga',
    'dashboard.viewOfficialResponse': 'Reba Igisubizo cya Leta',
    'dashboard.toggleSidebar': 'Guhitamo Imbogamizi'
  }
};

// Create a translation utility function
export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };
  
  return { t };
};