import type { Project } from '../types/project'

export const PROJECTS_DATA: Project[] = [
  {
    id: 'nexus-cloud',
    category: 'fullstack',
    featured: true,
    title: {
      en: 'Nexus SaaS Cloud Platform',
      km: 'ប្រព័ន្ធ Nexus SaaS Cloud Platform',
    },
    description: {
      en: 'Enterprise-grade microservices workspace with real-time telemetry, collaborative kanban, and automated CI/CD pipeline triggers.',
      km: 'កម្មវិធីគ្រប់គ្រងការងារខ្នាតសហគ្រាសជាមួយការត្រួតពិនិត្យ Telemetry ផ្ទាល់ ការងារជាក្រុម Kanban និងប្រព័ន្ធ CI/CD ដោយស្វ័យប្រវត្តិ។',
    },
    fullDescription: {
      en: 'Nexus is a high-performance developer cloud workspace designed for high-velocity software engineering teams. Built on Next.js 15, TypeScript, Node.js, and PostgreSQL, it offers distributed task queuing, end-to-end WebSocket telemetry, dynamic team permissions, and real-time activity streaming.',
      km: 'Nexus គឺជាប្រព័ន្ធ Cloud សម្រាប់ក្រុមវិស្វករផ្នែកទន់ដែលត្រូវការល្បឿន និងប្រសិទ្ធភាពខ្ពស់។ បង្កើតឡើងដោយ Next.js 15, TypeScript, Node.js និង PostgreSQL វាផ្តល់នូវប្រព័ន្ធចែកចាយការងារ Telemetry តាម WebSocket ការកំណត់សិទ្ធិក្រុមការងារ និងការតាមដានសកម្មភាពភ្លាមៗ។',
    },
    tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Docker'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/chhin-chhat/nexus-saas-cloud',
    liveUrl: 'https://nexus-cloud-demo.vercel.app',
    timeline: '2024',
    role: {
      en: 'Lead Full Stack Architect',
      km: 'ប្រធានស្ថាបត្យករ Full Stack',
    },
    keyFeatures: {
      en: [
        'Real-time multi-tenant collaborative dashboard with zero-latency WebSockets',
        'Role-Based Access Control (RBAC) powered by JSON Web Tokens and Redis caching',
        'Comprehensive database migration suite with Prisma ORM & PostgreSQL',
        'Docker containerized deployment pipeline with health checks and auto-scaling',
      ],
      km: [
        'ផ្ទាំងគ្រប់គ្រងសហការបែប Multi-tenant ភ្លាមៗដោយគ្មានភាពយឺតយ៉ាវតាម WebSockets',
        'ប្រព័ន្ធគ្រប់គ្រងសិទ្ធិ (RBAC) ដំណើរការដោយ JWT និង Redis Caching',
        'ការគ្រប់គ្រង Database ពេញលេញជាមួយ Prisma ORM និង PostgreSQL',
        'ប្រព័ន្ធ Deploy តាម Docker Container ជាមួយនឹងការត្រួតពិនិត្យសុខភាពប្រព័ន្ធ',
      ],
    },
  },
  {
    id: 'apex-ecommerce',
    category: 'fullstack',
    featured: true,
    title: {
      en: 'Apex Multi-Vendor Marketplace',
      km: 'ផ្សារអេឡិចត្រូនិក Apex Multi-Vendor',
    },
    description: {
      en: 'Modern high-conversion marketplace featuring instantaneous search, secure Stripe payments, and vendor analytics dashboards.',
      km: 'ទីផ្សារឌីជីថលទំនើបដែលមានប្រព័ន្ធស្វែងរករហ័ស ការទូទាត់ប្រាក់ប្រកបដោយសុវត្ថិភាពតាម Stripe និងផ្ទាំងគ្រប់គ្រងសម្រាប់អ្នកលក់។',
    },
    fullDescription: {
      en: 'Apex Marketplace delivers an ultra-smooth retail experience with server-side rendering, instant product filtering via Meilisearch, integrated multi-currency Stripe checkout, and automated inventory sync. Built with React 19, Express, MongoDB, and Tailwind CSS.',
      km: 'Apex Marketplace ផ្តល់នូវបទពិសោធន៍ទិញទំនិញដ៏រលូនជាមួយ Server-side Rendering ការស្វែងរកទំនិញរហ័សតាម Meilisearch ការទូទាត់ពហុរូបិយប័ណ្ណតាម Stripe និងការធ្វើសមកាលកម្មស្តុកទំនិញស្វ័យប្រវត្តិ។',
    },
    tags: ['React 19', 'Express.js', 'MongoDB', 'Stripe API', 'Tailwind CSS', 'Redux Toolkit'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/chhin-chhat/apex-marketplace',
    liveUrl: 'https://apex-marketplace-demo.vercel.app',
    timeline: '2024',
    role: {
      en: 'Full Stack Engineer',
      km: 'វិស្វករ Full Stack',
    },
    keyFeatures: {
      en: [
        'Faceted search with sub-50ms query response times using modern indexing',
        'Stripe webhooks handling checkout sessions, refunds, and merchant payouts',
        'Dynamic vendor dashboards for inventory management and sales forecasts',
        'Optimized responsive layouts with 99+ Google Lighthouse score',
      ],
      km: [
        'ប្រព័ន្ធស្វែងរកទំនិញកម្រិតខ្ពស់ឆ្លើយតបក្រោម 50ms ដោយប្រើ Indexing ទំនើប',
        'Stripe Webhooks គ្រប់គ្រងការទូទាត់ ការសងប្រាក់វិញ និងការទូទាត់ឱ្យអ្នកលក់',
        'ផ្ទាំងគ្រប់គ្រងអ្នកលក់សម្រាប់ការគ្រប់គ្រងស្តុកទំនិញ និងការព្យាករណ៍ការលក់',
        'ការរចនាទំព័រឆ្លើយតបបានល្អឥតខ្ចោះជាមួយពិន្ទុ Google Lighthouse 99+',
      ],
    },
  },
  {
    id: 'pulsefit-mobile',
    category: 'mobile',
    featured: false,
    title: {
      en: 'PulseFit Workout & Health Tracker',
      km: 'កម្មវិធីសុខភាព PulseFit Workout Tracker',
    },
    description: {
      en: 'Cross-platform mobile application for tracking athletic workouts, biometric calorie metrics, and AI workout routines.',
      km: 'កម្មវិធីទូរសព្ទដៃសម្រាប់តាមដានការហាត់ប្រាណ ការគណនាកាឡូរីជីវមាត្រ និងការណែនាំលំហាត់ប្រាណដោយ AI។',
    },
    fullDescription: {
      en: 'PulseFit is a cross-platform mobile app built using React Native and Expo. It features offline-first local SQLite sync, Apple HealthKit & Google Fit sensor integration, customizable workout split builders, and fluid 60fps gesture animations powered by React Native Reanimated.',
      km: 'PulseFit គឺជាកម្មវិធីទូរសព្ទឆ្លងកាត់ប្រព័ន្ធប្រតិបត្តិការដែលបង្កើតដោយ React Native និង Expo។ វាដំណើរការទោះគ្មានអ៊ីនធឺណិត (Offline-first) ភ្ជាប់ជាមួយ Apple HealthKit & Google Fit និងមានចលនា 60fps ដ៏រលូន។',
    },
    tags: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'HealthKit API', 'Reanimated'],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/chhin-chhat/pulsefit-mobile',
    liveUrl: 'https://expo.dev/@chhin-chhat/pulsefit',
    timeline: '2023',
    role: {
      en: 'Mobile App Developer',
      km: 'អ្នកបង្កើតកម្មវិធីទូរសព្ទដៃ',
    },
    keyFeatures: {
      en: [
        'Seamless integration with Apple HealthKit and Google Fit sensor APIs',
        'Offline-first architecture with automatic background synchronization',
        'Interactive SVG visual progress charts and body muscle heatmap',
        'Haptic feedback and 60fps gesture interactions',
      ],
      km: [
        'ការតភ្ជាប់យ៉ាងរលូនជាមួយ Apple HealthKit និង Google Fit APIs',
        'ស្ថាបត្យកម្ម Offline-first ធ្វើសមកាលកម្មទិន្នន័យស្វ័យប្រវត្តិកាលណាមានអ៊ីនធឺណិត',
        'គំនូសតាងវឌ្ឍនភាព SVG អន្តរកម្ម និងផែនទីកម្តៅសាច់ដុំ',
        'ការឆ្លើយតបញ័រ (Haptic) និងចលនាប៉ះបញ្ជា 60fps',
      ],
    },
  },
  {
    id: 'angkor-voyage',
    category: 'mobile',
    featured: false,
    title: {
      en: 'Angkor Voyage Travel Companion',
      km: 'កម្មវិធីទេសចរណ៍ Angkor Voyage',
    },
    description: {
      en: 'Interactive Cambodian cultural travel guide with offline GPS map routing, heritage storytelling, and ticket reservations.',
      km: 'មគ្គុទ្ទេសក៍ទេសចរណ៍វប្បធម៌កម្ពុជាជាមួយផែនទី GPS ក្រៅបណ្តាញ រឿងរ៉ាវបេតិកភណ្ឌ និងការកក់សំបុត្រ។',
    },
    fullDescription: {
      en: 'Angkor Voyage empowers domestic and international tourists to discover historical temples and local hidden culinary gems across Cambodia. Features interactive offline vector maps, multilingual audio guides (Khmer & English), and seamless mobile banking payments.',
      km: 'Angkor Voyage ជួយដល់ភ្ញៀវទេសចរជាតិនិងអន្តរជាតិក្នុងការស្វែងយល់ពីប្រាសាទបុរាណ និងអាហារដ្ឋានឆ្ងាញ់ៗនៅកម្ពុជា។ មានផែនទីវ៉ិចទ័រក្រៅបណ្តាញ មគ្គុទ្ទេសក៍សំឡេងពហុភាសា និងការទូទាត់ប្រាក់តាមធនាគារចល័ត។',
    },
    tags: ['React Native', 'Mapbox GL', 'Node.js', 'Khmer Localization', 'Tailwind Mobile'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/chhin-chhat/angkor-voyage',
    liveUrl: 'https://angkorvoyage.app',
    timeline: '2023',
    role: {
      en: 'Frontend & Mobile Lead',
      km: 'ប្រធានផ្នែក Frontend & Mobile',
    },
    keyFeatures: {
      en: [
        'Custom Mapbox integration with offline vector tile caching for temple ruins',
        'Audio narration streaming in Khmer and English with background playback',
        'Integrated Bakong KHQR mobile payment gateway',
        'Curated cultural itineraries tailored to traveler duration',
      ],
      km: [
        'ភ្ជាប់ជាមួយ Mapbox ជាមួយការរក្សាទុកផែនទីក្រៅបណ្តាញសម្រាប់តំបន់ប្រាសាទ',
        'ការចាក់សំឡេងរៀបរាប់ជាភាសាខ្មែរ និងអង់គ្លេស',
        'ប្រព័ន្ធទូទាត់ប្រាក់តាមបាគង KHQR ដ៏ងាយស្រួល',
        'ការរៀបចំកាលវិភាគដើរលេងតាមបែបវប្បធម៌សមស្របតាមពេលវេលារបស់ភ្ញៀវ',
      ],
    },
  },
  {
    id: 'aetheria-defi',
    category: 'web3',
    featured: true,
    title: {
      en: 'Aetheria DeFi Liquidity Protocol',
      km: 'ពិធីការ Aetheria DeFi Liquidity',
    },
    description: {
      en: 'Decentralized automated market maker (AMM) dashboard with real-time liquidity pools, token swaps, and yield analytics.',
      km: 'ផ្ទាំងគ្រប់គ្រង AMM វិមជ្ឈការជាមួយអាងសន្ទនីយភាព (Liquidity Pools) ការដោះដូរកាក់ និងការវិភាគទិន្នផលភ្លាមៗ។',
    },
    fullDescription: {
      en: 'Aetheria is an intuitive decentralized finance interface built for modern Web3 users. Integrated with Wagmi, Viem, and Ethers.js, it provides seamless wallet connection, slippage protection, candlestick charting using TradingView widgets, and real-time gas optimization algorithms.',
      km: 'Aetheria គឺជាផ្ទាំងកម្មវិធីហិរញ្ញវត្ថុវិមជ្ឈការដែលរចនាឡើងសម្រាប់អ្នកប្រើប្រាស់ Web3 ទំនើប។ ភ្ជាប់ជាមួយ Wagmi, Viem និង Ethers.js វាផ្តល់នូវការតភ្ជាប់កាបូបឌីជីថលសុវត្ថិភាព ការការពារ Slippage និងក្រាហ្វិក TradingView។',
    },
    tags: ['Web3', 'React', 'Wagmi / Viem', 'TypeScript', 'Tailwind CSS', 'Ethers.js'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/chhin-chhat/aetheria-defi-amm',
    liveUrl: 'https://aetheria-defi.vercel.app',
    timeline: '2024',
    role: {
      en: 'Web3 Frontend Engineer',
      km: 'វិស្វករ Web3 Frontend',
    },
    keyFeatures: {
      en: [
        'Multi-wallet support (MetaMask, Coinbase Wallet, WalletConnect v2)',
        'Live candlestick charts with TradingView Lightweight Charts library',
        'Automated slippage tolerance calculator and MEV protection routing',
        'Smart contract event listeners with instant toast notifications',
      ],
      km: [
        'គាំទ្រកាបូបឌីជីថលច្រើនប្រភេទ (MetaMask, Coinbase Wallet, WalletConnect v2)',
        'ក្រាហ្វិកទៀនផ្សារហ៊ុនផ្ទាល់ជាមួយបណ្ណាល័យ TradingView Charts',
        'ការគណនាកម្រិត Slippage និងប្រព័ន្ធការពារ MEV ដោយស្វ័យប្រវត្តិ',
        'ការតាមដានព្រឹត្តិការណ៍ Smart Contract ជាមួយការជូនដំណឹងភ្លាមៗ',
      ],
    },
  },
  {
    id: 'kroma-design-system',
    category: 'design',
    featured: false,
    title: {
      en: 'Kroma Crimson Design System',
      km: 'ប្រព័ន្ធរចនា Kroma Crimson Design System',
    },
    description: {
      en: 'Accessible, dark-first React & Tailwind component library with automated Figma token synchronization and storybook docs.',
      km: 'បណ្ណាល័យសមាសធាតុ React & Tailwind ងាយស្រួលប្រើប្រាស់ គាំទ្ររបៀបងងឹត ជាមួយការធ្វើសមកាលកម្ម Figma Token និងឯកសារ Storybook។',
    },
    fullDescription: {
      en: 'Kroma is an open-source design system engineered for sleek dark-themed dashboards and modern tech landing pages. It includes 45+ accessible primitives built on Radix UI, WCAG AAA compliant contrast levels, customizable CSS token presets, and full keyboard navigation support.',
      km: 'Kroma គឺជាប្រព័ន្ធរចនា Open-source សម្រាប់ផ្ទាំង Dashboard និង Landing page បែបងងឹតទំនើប។ រួមបញ្ចូលសមាសធាតុជាង ៤៥ បង្កើតលើ Radix UI ស្របតាមស្តង់ដារ WCAG AAA និងគាំទ្រការបញ្ជាដោយ Keyboard ពេញលេញ។',
    },
    tags: ['Design System', 'React', 'Radix UI', 'Tailwind CSS', 'Storybook', 'Figma'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/chhin-chhat/kroma-design-system',
    liveUrl: 'https://kroma-ui.vercel.app',
    timeline: '2023',
    role: {
      en: 'UI/UX Engineer & Author',
      km: 'វិស្វករ UI/UX & អ្នកបង្កើត',
    },
    keyFeatures: {
      en: [
        '45+ accessible and tested UI components compliant with WCAG AAA standards',
        'Automated design token extraction from Figma variables via GitHub Actions',
        'Interactive Storybook documentation with live live code editing',
        'Zero runtime CSS overhead built natively with Tailwind CSS',
      ],
      km: [
        'សមាសធាតុ UI ជាង ៤៥ ដែលបានធ្វើតេស្តត្រឹមត្រូវតាមស្តង់ដារ WCAG AAA',
        'ការទាញយក Design Tokens ដោយស្វ័យប្រវត្តិពី Figma តាម GitHub Actions',
        'ឯកសារ Storybook អន្តរកម្មជាមួយការសាកល្បងកែប្រែកូដផ្ទាល់',
        'គ្មានបន្ទុក Runtime CSS ដោយបង្កើតឡើងលើ Tailwind CSS សុទ្ធ',
      ],
    },
  },
]

