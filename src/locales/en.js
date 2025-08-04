export default {
  common: {
    loading: 'Loading...',
    save: 'Save',
    cancel: 'Cancel',
    confirm: 'Confirm',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    search: 'Search',
    close: 'Close',
    viewMore: 'View More',
    learnMore: 'Learn More',
  },

  navigation: {
    about: 'About Me',
    projects: 'Projects',
    favorites: 'Favorites',
    targets: 'Targets',
  },

  about: {
    title: 'About Me',
    summary:
      'Computer science student (HUIT) with a passion for building AI products. Highly adaptable and quick to learn new technologies. Seeking a Backend/AI Engineer position to contribute to real-world projects and participate in the research and development of AI models.',
    education: 'Education',
    experience: 'Experience',
    skills: 'Skills',
    certificates: 'Certificates',
    webTechs: 'website Technologies',
    otherTechs: 'others',
    verified: 'Verified',
    viewCertificate: 'View Certificate',
    close: 'Close',
    courseDetails: 'Course Details',
    skillsCovered: 'Skills Covered',
    complete: 'Complete',
    learningProgress: 'Learning Progress',
  },

  education: {
    degree1: 'Bachelor of Computer Science',
    school1: 'Ho Chi Minh City University of Industry and Trade (HUIT)',
    details1: {
      item1: 'Major: Software Engineering',
      item2: 'GPA: 3.4/4.0',
      item3:
        'Relevant coursework: IoT, Web Programming (ASP.NET), Big Data, Open Source Development (PHP), NoSQL (MongoDB), Cloud Computing (Azure), and RDBMS (SQL Server & MySQL)',
    },
  },

  experience: [
    {
      period: 'Aug 2025 - Present',
      position: 'Fullstack Developer',
      company: 'Fruit Export Company .......',
      type: 'Internship',
      icon: 'mdi-code-tags',
      iconColor: 'primary',
      chipColor: 'success',
      details: [
        'Develop a software ecosystem to meet the business needs of an import-export company.',
        'Use Vue.js for the introductory website and product management.',
        'Use ASP.NET, SQL Server, and WinForms for the internal management system.',
        'Package with Docker and deploy to Azure services.',
      ],
      technologies: [
        { name: 'Vue.js', color: 'green', icon: 'mdi-vuejs' },
        { name: 'Asp.net', color: 'yellow-darken-2', icon: 'mdi-dot-net' },
        { name: 'Winform', color: 'indigo', icon: 'mdi-microsoft-windows' },
        { name: 'SQL server', color: 'indigo', icon: 'mdi-database' },
        { name: 'Azure', color: 'orange', icon: 'mdi-microsoft-azure' },
      ],
    },
    {
      period: 'Jul 2025 - Present',
      position: 'Research & Development Member for Digital Human (Virtual Academic Advisor)',
      company: 'HUIT - Lecturer: Nguyen Quoc Su',
      type: 'Research Member',
      icon: 'mdi-school-outline',
      iconColor: 'info',
      chipColor: 'info',
      details: [
        "Develop websites for HUIT's course data and training program learning outcomes.",
        'Build an LLM (RAG) model to advise students on academic affairs and career orientation.',
        'Develop integrated IoT for the Digital Human to provide additional parameters for the LLM model.',
        'Use FastAPI to build the API for the Digital Human and MongoDB Vector Database for the model.',
        'Deploy services to Azure.',
        'MongoDB Vector Database for the model.',
      ],
      technologies: [
        { name: 'Vue.js', color: 'blue', icon: 'mdi-vuejs' },
        { name: 'Asp.net', color: 'yellow-darken-2', icon: 'mdi-dot-net' },
        { name: 'FastAPI', color: 'purple', icon: 'mdi-language-python' },
        { name: 'Azure', color: 'purple', icon: 'mdi-microsoft-azure' },
        { name: 'MongoDB', color: 'purple', icon: 'mdi-leaf' },
      ],
    },
  ],

  projects: {
    title: 'MY PROJECTS',
    subtitle: 'Explore the projects I have created',
    technologies: 'Technologies used:',
    github: 'GitHub',
    demo: 'Demo',
    project1: {
      title: 'HUIT Event Management Website',
      subtitle: 'JSP & Spring Boot',
      description:
        'This project aims to streamline processes by building an event and training point management system for HUIT, making it easier for students to track and participate in activities. It also simplifies event management.',
    },
    project2: {
      title: 'My Portfolio',
      subtitle: 'Vue.js & FastAPI',
      description:
        'This website was created to introduce myself to recruiters and to learn new technologies. FastAPI is only responsible for sending messages to the server and querying message history.',
    },
  },

  favorites: {
    title: 'MY FAVORITES',
    subtitle: 'Things I love and am passionate about',
    anime: 'Anime',
    manga: 'Manga',
    music: 'Music',
    technology: 'Technology',
    animeWatching: 'Currently Watching',
    mangaReading: 'Currently Reading',
    musicTaste: 'Music Taste',
    learningTech: 'Learning Technology',
    anison: 'Anison',
    vocaloid: 'Vocaloid',
    // Anime descriptions
    anime1: {
      description:
        'A heartbreaking story about an alien trying to bring happiness but facing harsh reality.',
    },
    anime2: {
      description:
        "Following Kumiko Oumae and the Kitauji High School Concert Band's journey to nationals.",
    },
    anime3: {
      description:
        'Lelouch vi Britannia gains the power of Geass and leads a rebellion against the Britannian Empire.',
    },
    anime4: {
      description: 'The lovely and laughter-filled school life of girls in the light music club.',
    },
    // Manga descriptions
    manga1: {
      description:
        'Denji, a young man in debt, becomes a Devil Hunter with the heart of a chainsaw devil.',
    },
    manga2: {
      description:
        'An emotional one-shot about creativity, friendship, and different paths in life.',
    },
    manga3: {
      description:
        'Exploring the boundary between reality and fiction through the lens of a boy making a film about his dying mother.',
    },
    // Tech descriptions
    tech1: {
      name: 'Machine Learning',
      description: 'Exploring neural networks, deep learning algorithms, and AI applications.',
    },
    tech2: {
      name: 'Cloud Computing',
      description: 'Learning AWS, Azure, and containerization technologies like Docker.',
    },
    tech3: {
      name: 'Blockchain',
      description: 'Understanding cryptocurrency, smart contracts, and decentralized applications.',
    },
    tech4: {
      name: 'DevOps',
      description: 'Implementing CI/CD pipelines, infrastructure as code, and automation.',
    },
    tech5: {
      name: 'Cybersecurity',
      description: 'Learning ethical hacking, penetration testing, and security frameworks.',
    },
    tech6: {
      name: 'Quantum Computing',
      description: 'Exploring quantum algorithms, quantum circuits, and quantum programming.',
    },
  },

  targets: {
    title: 'My next targets',
    subtitle: 'Chasing dreams with passion and determination',
    achievementTimeline: 'Achievement Timeline',
    inProgress: 'In Progress',
    completed: 'Completed',
    planning: 'Planning',
    target: 'Target',
    viewDetails: 'View Details',
    progressOverview: 'Progress Overview',
    // Target details
    jlptN2Title: 'JLPT N2 Certification',
    jlptN2Description:
      'Master Japanese language proficiency at N2 level for career advancement and cultural understanding',
    ielts7Title: 'IELTS 7.0 Achievement',
    ielts7Description:
      'Achieve IELTS band 7.0 for international opportunities and academic excellence',
    gojp: 'I am planning to work in Japan',
    gojpDescription:
      'In order to work in Japan, I need to improve my Japanese language skills and cultural understanding',
    // Target details
    details: {
      targetDate: 'Target Date',
      category: 'Category',
      priority: 'Priority',
      resources: 'Resources',
    },
  },

  timeline: {
    graduation: {
      title: 'Graduated with Honors - Bachelor of Information Technology',
      description:
        "Successfully completed Bachelor's degree in Information Technology with First Class Honors, achieving excellent academic performance and practical skills",
    },
    milestone1: {
      title: 'JLPT N2 Exam',
      description: 'Take the Japanese Language Proficiency Test N2 and achieve certification',
    },
    milestone2: {
      title: 'IELTS Test',
      description: 'Achieve target band score of 7.0 for international recognition',
    },
    milestone3: {
      title: 'First AI Project',
      description:
        'Complete first Deep Learning project with IoT integration and deploy to production',
    },
    milestone4: {
      title: 'Computer Vision App',
      description: 'Deploy computer vision application to production with real-world use case',
    },
  },

  certificates: {
    vue: {
      title: 'Vue.js Developer Certification',
      description:
        'Advanced Vue.js concepts and best practices including Composition API, Pinia state management, and performance optimization.',
      details: {
        item1: 'Advanced component patterns and composition',
        item2: 'State management with Pinia',
        item3: 'Performance optimization techniques',
        item4: 'Testing Vue applications',
      },
    },
    js: {
      title: 'JavaScript ES6+ Certification',
      description:
        'Modern JavaScript features and programming concepts including async/await, modules, and advanced array methods.',
      details: {
        item1: 'Modern JavaScript syntax and features',
        item2: 'Asynchronous programming patterns',
        item3: 'Module system and imports/exports',
        item4: 'Functional programming concepts',
      },
    },
    rwd: {
      title: 'Responsive Web Design',
      description:
        'HTML, CSS, and responsive design principles for creating mobile-first, accessible web applications.',
      details: {
        item1: 'Semantic HTML and accessibility',
        item2: 'Advanced CSS layouts with Flexbox and Grid',
        item3: 'Responsive design patterns',
        item4: 'CSS animations and transitions',
      },
    },
    git: {
      title: 'Git Version Control',
      description:
        'Version control and collaboration workflows using Git and GitHub for team development.',
      details: {
        item1: 'Git fundamentals and commands',
        item2: 'Branching and merging strategies',
        item3: 'Collaborative workflows',
        item4: 'GitHub Actions and CI/CD',
      },
    },
    node: {
      title: 'Node.js Backend Development',
      description:
        'Server-side JavaScript development with Node.js, Express.js, and database integration.',
      details: {
        item1: 'Node.js fundamentals and modules',
        item2: 'Building REST APIs with Express.js',
        item3: 'Database integration with MongoDB',
        item4: 'Authentication and security',
      },
    },
    aws: {
      title: 'AWS Cloud Practitioner',
      description:
        'Cloud computing fundamentals and AWS services overview for developers and IT professionals.',
      details: {
        item1: 'Cloud computing concepts and benefits',
        item2: 'AWS core services overview',
        item3: 'Security and compliance in AWS',
        item4: 'Pricing and support models',
      },
    },
  },

  favoritesDetails: {
    music: {
      jujutsu: 'Jujutsu Kaisen S2',
      bocchi: 'Bocchi the Rock!',
      hatsune_miku: 'Hatsune Miku',
      more_than_words: {
        title: 'More Than Words',
        artist: 'Hitsujibungaku',
      },
      seiza_ni_naretara: {
        title: 'If I Could Be a Constellation',
        artist: 'Kessoku Band',
      },
      shoujo_rei: {
        title: 'Ghost Girl',
        artist: 'Mikito-P',
      },
      flos: {
        title: 'Flos',
        artist: 'R Sound Design',
      },
    },
    anime: {
      takopi: {
        title: "Takopi's Original Sin",
        description:
          'A heartbreaking story about an alien trying to bring happiness but facing the harsh reality of Earth.',
      },
      hibike: {
        title: 'Sound! Euphonium',
        description:
          'Follows Kumiko Oumae and the journey of the Kitauji High School concert band as they aim for the nationals.',
      },
      codegeass: {
        title: 'Code Geass: Lelouch of the Rebellion',
        description:
          'Lelouch vi Britannia obtains the power of Geass and leads a rebellion against the Holy Britannian Empire.',
      },
      kon: {
        title: 'K-On!',
        description:
          'The adorable and laughter-filled school life of the girls in the light music club.',
      },
    },
    manga: {
      chainsaw: {
        title: 'Chainsaw Man',
        description:
          'Denji, a young man in debt, becomes a Devil Hunter with the heart of a chainsaw devil.',
      },
      lookback: {
        title: 'Look Back',
        description:
          'An emotional one-shot about creativity, friendship, and the different paths life can take.',
      },
      goodbye: {
        title: 'Goodbye, Eri',
        description:
          'Explores the boundary between reality and fiction through the lens of a boy making a film about his dying mother.',
      },
    },
    tech: {
      ml: {
        name: 'Machine Learning',
        description: 'Exploring neural networks, deep learning algorithms, and AI applications.',
      },
      cloud: {
        name: 'Cloud Computing',
        description: 'Learning AWS, Azure, and containerization technologies like Docker.',
      },
      blockchain: {
        name: 'Blockchain',
        description:
          'Understanding cryptocurrency, smart contracts, and decentralized applications.',
      },
      devops: {
        name: 'DevOps',
        description: 'Implementing CI/CD pipelines, infrastructure as code, and automation.',
      },
      cybersecurity: {
        name: 'Cybersecurity',
        description: 'Learning ethical hacking, penetration testing, and security frameworks.',
      },
      quantum: {
        name: 'Quantum Computing',
        description: 'Exploring quantum algorithms, quantum circuits, and quantum programming.',
      },
    },
  },
}
