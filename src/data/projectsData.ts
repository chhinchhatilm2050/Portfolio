import type { Project } from '../types/project';
import chhatsore from '/src/assets/chhatstore.png';
import library from '/src/assets/library.png';
import legend from '/src/assets/legend.png';
import movie from '/src/assets/movie.png';
import onlineshop from '/src/assets/onlineshop.png';
import zendo from '/src/assets/zendo.png';
import cambodia from '/src/assets/cambodia.png';


export const PROJECTS_DATA: Project[] = [
  // ── 1. Full-Stack E-Commerce Web Application (Featured) ──
  {
    id: 'fullstack-ecommerce',
    category: 'fullstack',
    featured: true,
    timeline: 'Year 2 (2024)',
    role: {
      en: 'Full Stack Developer',
      km: 'អ្នកអភិវឌ្ឍន៍ Full Stack',
    },
    title: {
      en: 'Full-Stack E-Commerce Web Application',
      km: 'កម្មវិធីវែបទិញទំនិញ Full-Stack E-Commerce',
    },
    description: {
      en: 'Complete e-commerce platform built with Vue 3, TypeScript, Node.js, Express, MongoDB, ABA PayWay payment gateway, Cloudinary image pipeline, and JWT security.',
      km: 'ប្រព័ន្ធទិញទំនិញអេឡិចត្រូនិកពេញលេញ បង្កើតជាមួយ Vue 3, TypeScript, Node.js, Express, MongoDB, ការទូទាត់ប្រាក់តាម ABA PayWay និង Cloudinary។',
    },
    fullDescription: {
      en: 'An end-to-end full-stack e-commerce web platform engineered with Vue.js, TypeScript, and Tailwind CSS on the frontend, powered by a robust RESTful API built on Node.js and Express. Features secure payment processing via ABA PayWay integration, Cloudinary image pipeline with Multer, JWT session management, OAuth 2.0 social authentication, MongoDB indexing and aggregation, and automated CI/CD via GitHub Actions.',
      km: 'ប្រព័ន្ធកម្មវិធីវែបទិញទំនិញ Full-Stack ពេញលេញដែលត្រូវបានអភិវឌ្ឍឡើងដោយប្រើ Vue.js, TypeScript និង Tailwind CSS សម្រាប់ Frontend ព្រមទាំង RESTful API រឹងមាំលើ Node.js និង Express។ រួមបញ្ចូលប្រព័ន្ធទូទាត់ប្រាក់តាម ABA PayWay ការបញ្ចូលរូបភាពតាម Cloudinary ប្រព័ន្ធសុវត្ថិភាព JWT & OAuth 2.0 មូលដ្ឋានទិន្នន័យ MongoDB និង GitHub Actions CI/CD។',
    },
    tags: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'ABA PayWay', 'Cloudinary', 'Docker', 'GitHub Actions'],
    image: chhatsore,
    githubUrl: 'https://github.com/chhinchhatilm2050/e-commerce-fullstack',
    liveUrl: 'https://ecommerce-fullstack-demo.vercel.app',
    keyFeatures: {
      en: [
        'Frontend: Responsive UI layouts using Vue.js, TypeScript, and Tailwind CSS for product listings, shopping carts, and checkout dashboards',
        'Backend & APIs: Scalable RESTful APIs built on Node.js and Express.js handling product management, user orders, and ABA PayWay gateway integration',
        'Cloud Storage: Integrated Cloudinary API with Multer middleware for optimized product image processing and storage',
        'Authentication & Security: Secure JWT session flows, OAuth 2.0 social logins, email verification, and OWASP-compliant rate-limiting middleware',
        'Database Management: Optimized MongoDB collections, schemas, aggregation pipelines, and indexing for ultra-fast query retrieval',
        'CI Pipeline: Automated frontend and backend testing and deployment integration using GitHub Actions',
      ],
      km: [
        'Frontend: បង្កើត UI ឆ្លើយតបរហ័សដោយប្រើ Vue.js, TypeScript និង Tailwind CSS សម្រាប់តារាងផលិតផល កន្រ្តកទំនិញ និងផ្ទាំងគ្រប់គ្រង',
        'Backend & APIs: បង្កើត RESTful APIs ជាមួយ Node.js និង Express គ្រប់គ្រងផលិតផល ការបញ្ជាទិញ និងការទូទាត់តាម ABA PayWay',
        'Cloud Storage: ភ្ជាប់ Cloudinary API ជាមួយ Multer middleware សម្រាប់ការផ្ទុកនិងបង្ហោះរូបភាពផលិតផល',
        'Authentication & Security: ប្រព័ន្ធសុវត្ថិភាព JWT, OAuth 2.0, ការផ្ទៀងផ្ទាត់អ៊ីមែល និង OWASP rate-limiting ការពារការវាយប្រហារ',
        'Database Management: រៀបចំ MongoDB schemas, queries, aggregation និង indexing សម្រាប់ទាញយកទិន្នន័យលឿនរហ័ស',
        'CI Pipeline: រៀបចំប្រព័ន្ធស្វ័យប្រវត្តិកម្ម CI/CD សម្រាប់ Frontend និង Backend តាមរយៈ GitHub Actions',
      ],
    },
  },

  // ── 2. Library Management System ──
  {
    id: 'library-management',
    category: 'frontend',
    featured: true,
    timeline: 'Year 2, Semester 1',
    role: {
      en: 'Frontend Developer',
      km: 'អ្នកអភិវឌ្ឍន៍ Frontend',
    },
    title: {
      en: 'Library Management System',
      km: 'ប្រព័ន្ធគ្រប់គ្រងបណ្ណាល័យ (Library Management)',
    },
    description: {
      en: 'Interactive web application for university libraries allowing students to register, log in, browse catalogs, filter categories, and manage book borrowings.',
      km: 'ប្រព័ន្ធគ្រប់គ្រងបណ្ណាល័យសាកលវិទ្យាល័យ ដែលអនុញ្ញាតឱ្យសិស្សចុះឈ្មោះ ចូលប្រើប្រាស់ ស្វែងរកសៀវភៅ ញែកប្រភេទ និងខ្ចីសៀវភៅ។',
    },
    fullDescription: {
      en: 'Developed during Year 2 Semester 1 at SETEC Institute. A comprehensive client-side library management web application built with HTML5, CSS3, Bootstrap 5, and JavaScript. The system enables user account authentication, book catalog management, category filtering, search algorithms, and interactive borrowing/returning book lifecycle with responsive design.',
      km: 'គម្រោងសិក្សាឆ្នាំទី ២ ឆមាសទី ១ នៅវិទ្យាស្ថាន សេដ្ឋិក។ ជាកម្មវិធីគ្រប់គ្រងបណ្ណាល័យដែលបង្កើតដោយ HTML5, CSS3, Bootstrap 5 និង JavaScript។ ប្រព័ន្ធមានមុខងារចុះឈ្មោះ ចូលប្រើ គ្រប់គ្រងបញ្ជីសៀវភៅ ញែកតាមប្រភេទ ស្វែងរក និងដំណើរការខ្ចី-សងសៀវភៅ។',
    },
    tags: ['JavaScript', 'Bootstrap 5', 'HTML5', 'CSS3', 'Local State', 'Responsive UI'],
    image: library,
    githubUrl: 'https://github.com/chhinchhatilm2050/Library-Management',
    liveUrl: 'https://library-management-system-rosy-three.vercel.app',
    keyFeatures: {
      en: [
        'User registration, authentication forms, and client profile state management',
        'Dynamic book catalog with categorized filtering (Tech, Science, Literature, History)',
        'Interactive borrowing and returning workflow with status indicators',
        'Fully responsive layout designed with Bootstrap 5 utility classes and components',
      ],
      km: [
        'ទម្រង់ចុះឈ្មោះ ចូលប្រើប្រាស់ និងការគ្រប់គ្រងគណនីអ្នកប្រើប្រាស់',
        'បញ្ជីសៀវភៅដែលបង្ហាញតាមប្រភេទច្បាស់លាស់ (បច្ចេកវិទ្យា វិទ្យាសាស្ត្រ អក្សរសាស្ត្រ)',
        'ប្រព័ន្ធដំណើរការខ្ចី និងសងសៀវភៅ ជាមួយការបង្ហាញស្ថានភាព',
        'រចនាឡើងយ៉ាងស្រស់ស្អាតលើគ្រប់ទំហំអេក្រង់ដោយប្រើ Bootstrap 5',
      ],
    },
  },

  // ── 3. Explore Cambodia ──
  {
    id: 'explore-cambodia',
    category: 'frontend',
    featured: false,
    timeline: 'Year 1 (SETEC)',
    role: {
      en: 'Web Designer & Developer',
      km: 'អ្នករចនា & អភិវឌ្ឍន៍គេហទំព័រ',
    },
    title: {
      en: 'Explore Cambodia Travel & Culture Portal',
      km: 'គេហទំព័រទេសចរណ៍ និងវប្បធម៌ រុករកកម្ពុជា (Explore Cambodia)',
    },
    description: {
      en: 'Provincial tourism web application showcasing all 25 provinces in Cambodia, highlighting local cuisine, lifestyle, travel destinations, and regional development.',
      km: 'កម្មវិធីវែបទេសចរណ៍ដែលបង្ហាញខេត្ត-ក្រុងទាំង ២៥ នៅកម្ពុជា រួមមានម្ហូបអាហារប្រចាំតំបន់ របៀបរស់នៅ តំបន់ទេសចរណ៍ និងការអភិវឌ្ឍ។',
    },
    fullDescription: {
      en: 'Built during Year 1 at SETEC Institute using HTML5, CSS3, and Bootstrap 5. This web platform takes users on a virtual journey through all 25 provinces of Cambodia. Users can explore famous tourist landmarks, authentic regional dishes, cultural traditions, and socio-economic development across each province with interactive cards and responsive image galleries.',
      km: 'បង្កើតឡើងក្នុងអំឡុងពេលសិក្សាឆ្នាំទី ១ នៅវិទ្យាស្ថាន សេដ្ឋិក ដោយប្រើ HTML5, CSS3 និង Bootstrap 5។ គេហទំព័រនេះនាំអ្នកប្រើប្រាស់ស្វែងយល់ពីខេត្តក្រុងទាំង ២៥ នៃប្រទេសកម្ពុជា រួមមានតំបន់ទេសចរណ៍ល្បីៗ ម្ហូបអាហារប្រចាំតំបន់ វប្បធម៌ប្រពៃណី និងការអភិវឌ្ឍក្នុងតំបន់នីមួយៗ។',
    },
    tags: ['HTML5', 'CSS3', 'Bootstrap 5', 'Responsive Design', 'Cultural Web App'],
    image: cambodia,
    githubUrl: 'https://github.com/chhinchhatilm2050/Product-Map',
    liveUrl: 'https://explore-cambodia-six.vercel.app',
    keyFeatures: {
      en: [
        'Interactive province explorer covering all 25 provinces across Cambodia',
        'Dedicated sections for famous travel destinations, historical temples, and eco-tourism',
        'Regional food and lifestyle discovery cards with rich multimedia',
        'Mobile-friendly responsive grids built with clean semantic Bootstrap 5',
      ],
      km: [
        'ការស្វែងរកព័ត៌មានលម្អិតនៃខេត្ត-ក្រុងទាំង ២៥ នៅទូទាំងប្រទេសកម្ពុជា',
        'ផ្នែកជាក់លាក់សម្រាប់តំបន់ទេសចរណ៍ ប្រាសាទបុរាណ និងទេសចរណ៍ធម្មជាតិ',
        'ការបង្ហាញម្ហូបអាហារឆ្ងាញ់ៗ និងរបៀបរស់នៅប្រចាំតំបន់',
        'រចនាសម្ព័ន្ធទំព័រឆ្លើយតបលើទូរសព្ទដៃយ៉ាងរលូនជាមួយ Bootstrap 5',
      ],
    },
  },

  // ── 4. Online Clothing Shop UI ──
  {
    id: 'online-clothing-shop',
    category: 'frontend',
    featured: false,
    timeline: 'Year 1 (SETEC)',
    role: {
      en: 'Frontend UI Developer',
      km: 'អ្នកអភិវឌ្ឍន៍ Frontend UI',
    },
    title: {
      en: 'TrendWear Online Clothing Store UI',
      km: 'ចំណុចប្រទាក់ហាងលក់សម្លៀកបំពាក់ TrendWear Online Store',
    },
    description: {
      en: 'Modern fashion e-commerce storefront UI featuring apparel product collections, interactive shopping cart drawers, and promotional hero banners.',
      km: 'ចំណុចប្រទាក់ហាងលក់សម្លៀកបំពាក់ទំនើប ដែលបង្ហាញម៉ូដសម្លៀកបំពាក់ទាន់សម័យ កន្រ្តកទំនិញ និងផ្ទាំងផ្សព្វផ្សាយ។',
    },
    fullDescription: {
      en: 'Created during Year 1 at SETEC Institute. A responsive online shopping web interface crafted with semantic HTML5, modern CSS3, and Bootstrap 5. It features structured product catalog grids, price and category filters, product detail modals, an interactive shopping cart overlay, and a clean minimalist checkout flow.',
      km: 'បង្កើតឡើងក្នុងឆ្នាំទី ១ នៅវិទ្យាស្ថាន សេដ្ឋិក។ ជាចំណុចប្រទាក់ហាងលក់សម្លៀកបំពាក់អនឡាញដែលរចនាឡើងជាមួយ HTML5, CSS3 និង Bootstrap 5។ រួមបញ្ចូលតារាងបង្ហាញសម្លៀកបំពាក់ ការញែកតាមតម្លៃនិងទំហំ ផ្ទាំងកន្រ្តកទំនិញ និងទំព័រទូទាត់ប្រាក់។',
    },
    tags: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'E-Commerce UI'],
    image: onlineshop,
    githubUrl: 'https://github.com/chhinchhatilm2050/online-shop',
    liveUrl: 'https://online-shop-steel-one.vercel.app',
    keyFeatures: {
      en: [
        'Clean e-commerce product grids with hover zoom states and quick-view overlays',
        'Category browsing: Men, Women, Accessories, and Seasonal Sales',
        'Interactive shopping cart sidebar with dynamic subtotal calculations in JS',
        'Polished responsive layouts designed for mobile, tablet, and desktop viewports',
      ],
      km: [
        'តារាងបង្ហាញទំនិញស្អាតទាក់ទាញជាមួយចលនា hover zoom ពេលដាក់ Mouse លើ',
        'ការរៀបចំប្រភេទសម្លៀកបំពាក់៖ បុរស នារី គ្រឿងតុបតែង និងទំនិញបញ្ចុះតម្លៃ',
        'កន្រ្តកទំនិញ Slide-out ជាមួយការគណនាតម្លៃសរុបតាម JavaScript',
        'ការបង្ហាញទំព័រត្រូវតាមទំហំអេក្រង់ទូរសព្ទ ថេប្លេត និងកុំព្យូទ័រ',
      ],
    },
  },

  // ── 5. CineVerse Movie Portal ──
  {
    id: 'cineverse-movies',
    category: 'frontend',
    featured: false,
    timeline: 'Year 1 (SETEC)',
    role: {
      en: 'Frontend Web Developer',
      km: 'អ្នកអភិវឌ្ឍន៍ Frontend',
    },
    title: {
      en: 'CineVerse Movie & Cinema Streaming Portal',
      km: 'គេហទំព័រកម្សាន្តភាពយន្ត CineVerse (Cinema & Anime)',
    },
    description: {
      en: 'Entertainment web platform featuring cinema blockbusters, Hollywood hits, Anime collections, and Horror films with animated layouts.',
      km: 'គេហទំព័រកម្សាន្តភាពយន្តដែលបង្ហាញរឿងរោងភាពយន្ត រឿងហូលីវូដ គំនូរជីវចល Anime និងរឿងភ័យរន្ធត់ ជាមួយចលនា Layout ដ៏រលូន។',
    },
    fullDescription: {
      en: 'Developed in Year 1 using HTML5, modern CSS3, and custom CSS animations. CineVerse is a movie streaming discovery platform categorizing films into Cinema releases, Hollywood blockbusters, trending Anime series, and Horror films. Features dynamic movie cards, animated hover effects, trailer modals, and genre filtering.',
      km: 'បង្កើតឡើងក្នុងឆ្នាំទី ១ ដោយប្រើ HTML5, CSS3 និងចលនា CSS Animations ដ៏រស់រវើក។ CineVerse គឺជាគេហទំព័រស្វែងរកភាពយន្តដែលបែងចែកតាមប្រភេទច្បាស់លាស់ដូចជា រឿងរោងភាពយន្ត ភាពយន្តហូលីវូដ រឿង Anime និងរឿងភ័យរន្ធត់ ជាមួយការរចនាបែបងងឹតទាក់ភ្នែក។',
    },
    tags: ['HTML5', 'CSS3 Animations', 'JavaScript', 'Flexbox & Grid', 'UI Layout'],
    image: movie,
    githubUrl: 'https://github.com/chhinchhatilm2050/Movie',
    liveUrl: 'https://chhat-movies.vercel.app',
    keyFeatures: {
      en: [
        'Curated film categories: Cinema premieres, Hollywood, Anime, and Horror hits',
        'Custom CSS hero slider and smooth transition hover effects on movie cards',
        'Interactive trailer modal popup with embedded video playback interface',
        'Dark cinema-inspired UI theme with crimson red accents and glowing badges',
      ],
      km: [
        'ការបែងចែកប្រភេទភាពយន្តច្បាស់លាស់៖ រឿងរោង ភាពយន្តហូលីវូដ Anime និងរឿងខ្មោច/ភ័យរន្ធត់',
        'ចលនា CSS Slider និង hover effects ដ៏ទាក់ទាញលើផ្ទាំងរូបភាពភាពយន្តនីមួយៗ',
        'ផ្ទាំង Modal បង្ហាញវីដេអូខ្លី Trailer និងព័ត៌មានលម្អិតរបស់រឿង',
        'ការរចនាបែបងងឹតស៊ីគ្នានឹងរោងកុន ជាមួយពណ៌ក្រហម Crimson ដ៏ទាក់ភ្នែក',
      ],
    },
  },

  // ── 6. Zando App & Cinema Mobile Clone (UI/UX) ──
  {
    id: 'zando-clone',
    category: 'uiux',
    featured: false,
    timeline: 'Year 2 (MIS Design Semester)',
    role: {
      en: 'UI/UX Designer (Figma)',
      km: 'អ្នករចនា UI/UX (Figma)',
    },
    title: {
      en: 'Zando App Mobile UI Clone (Figma Case Study)',
      km: 'ការរចនា Zando App & Cinema Mobile Clone (គម្រោង UI/UX)',
    },
    description: {
      en: 'Academic UI/UX design case study in Figma cloning and refining mobile interfaces for the popular Zando shopping.',
      km: 'គម្រោងសិក្សា UI/UX ក្នុងកម្មវិធី Figma ដោយ Clone និងកែលម្អចំណុចប្រទាក់កម្មវិធីទូរសព្ទ Zando Shopping ',
    },
    fullDescription: {
      en: 'Created as part of the UI/UX design module in the Year 2 MIS curriculum at SETEC Institute. Built high-fidelity mobile app mockups and wireframes in Figma, analyzing user flows for Cambodia\'s leading retail app Zando and designing a sleek mobile movie ticket booking flow with interactive components and modern UI guidelines.',
      km: 'បង្កើតឡើងជាផ្នែកមួយនៃមុខវិជ្ជា UI/UX ក្នុងកម្មវិធីសិក្សា MIS ឆ្នាំទី ២ នៅវិទ្យាស្ថាន សេដ្ឋិក។ បានរចនាផ្ទាំងគំរូ Mobile App High-fidelity និង Wireframe ក្នុង Figma ដោយវិភាគលើ User Flow នៃកម្មវិធីទិញទំនិញល្បីឈ្មោះ Zando និងការរចនាទំព័រកក់សំបុត្រកុនតាមទូរសព្ទដៃយ៉ាងទាក់ទាញ។',
    },
    tags: ['Figma', 'UI/UX Design', 'Wireframing', 'Mobile App UI', 'Prototyping', 'User Flow'],
    image: zendo,
    githubUrl: 'https://www.figma.com/design/7sRRYyGvoKe1a8BOyVr9Pd/Project-Zando?node-id=5-2&t=KkawpsXnPGu4RbFB-0',
    liveUrl: 'https://www.figma.com/proto/7sRRYyGvoKe1a8BOyVr9Pd/Project-Zando?node-id=5-2&t=vuTpyCf3eFjfI0WX-1',
    keyFeatures: {
      en: [
        'Comprehensive Figma design system with components, color tokens, and typography',
        'Zando mobile commerce clone: Home feed, product cards, category navigation, and checkout',
        'Interactive mobile prototypes showcasing micro-interactions and transitions',
      ],
      km: [
        'ប្រព័ន្ធរចនា (Design System) ក្នុង Figma ជាមួយ components, color tokens និង typography',
        'គំរូរចនា Zando App: ទំព័រដើម បញ្ជីទំនិញ ការរុករកតាមប្រភេទ និងទំព័រទូទាត់ប្រាក់',
        'គំរូសាកល្បង Prototype អន្តរកម្មដែលបង្ហាញចលនានិងការផ្លាស់ប្តូរទំព័រ',
      ],
    },
  },
  {
    id: 'Legend-cinema-clone',
    category: 'uiux',
    featured: false,
    timeline: 'Year 2 (MIS Design Semester)',
    role: {
      en: 'UI/UX Designer (Figma)',
      km: 'អ្នករចនា UI/UX (Figma)',
    },
    title: {
      en: 'Cinema Mobile UI Clone (Figma Case Study)',
      km: 'ការរចនា Cinema Mobile Clone (គម្រោង UI/UX)',
    },
    description: {
      en: 'Academic UI/UX design case study in Figma cloning and refining mobile interfaces for the popular cinema ticket booking flow.',
      km: 'គម្រោងសិក្សា UI/UX ក្នុងកម្មវិធី Figma ដោយ Clone និងកែលម្អចំណុចប្រទាក់កម្មវិធីទូរសព្ទ ប្រព័ន្ធកក់សំបុត្ររោងកុន។',
    },
    fullDescription: {
      en: 'Created as part of the UI/UX design module in the Year 2 MIS curriculum at SETEC Institute. Built high-fidelity mobile app mockups and wireframes in Figma, analyzing user flows for Cambodia\'s leading retail app legend cinema and designing a sleek mobile movie ticket booking flow with interactive components and modern UI guidelines.',
      km: 'បង្កើតឡើងជាផ្នែកមួយនៃមុខវិជ្ជា UI/UX ក្នុងកម្មវិធីសិក្សា MIS ឆ្នាំទី ២ នៅវិទ្យាស្ថាន សេដ្ឋិក។ បានរចនាផ្ទាំងគំរូ Mobile App High-fidelity និង Wireframe ក្នុង Figma ដោយវិភាគលើ User Flow នៃកម្មវិធីកក់សំបុត្រកុនល្បីឈ្មោះ Legend Cinema និងការរចនាទំព័រកក់សំបុត្រកុនតាមទូរសព្ទដៃយ៉ាងទាក់ទាញ។',
    },
    tags: ['Figma', 'UI/UX Design', 'Wireframing', 'Mobile App UI', 'Prototyping', 'User Flow'],
    image: legend,
    githubUrl: 'https://www.figma.com/design/AZHfvqKF9Ut4yirbSj1QUB/chhinchhat?node-id=0-1&t=KFMqXMinVzQufivm-1',
    liveUrl: 'https://www.figma.com/proto/AZHfvqKF9Ut4yirbSj1QUB/chhinchhat?node-id=0-1&t=xqIPFYtCs9W7MR71-1',
    keyFeatures: {
      en: [
        'Comprehensive Figma design system with components, color tokens, and typography',
        'Cinema booking mobile flow: Seat selection layout, showtimes, and booking confirmation',
        'Interactive mobile prototypes showcasing micro-interactions and transitions',
      ],
      km: [
        'ប្រព័ន្ធរចនា (Design System) ក្នុង Figma ជាមួយ components, color tokens និង typography',
        'លំហូររចនាកក់សំបុត្រកុន៖ ការជ្រើសរើសកៅអី ម៉ោងបញ្ចាំង និងការបញ្ជាក់ការកក់',
        'គំរូសាកល្បង Prototype អន្តរកម្មដែលបង្ហាញចលនានិងការផ្លាស់ប្តូរទំព័រ',
      ],
    },
  },
]
