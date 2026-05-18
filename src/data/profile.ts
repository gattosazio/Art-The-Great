type NavItem = {
  label: string;
  href: string;
};

type WorkLink = {
  label: string;
  href: string;
};

type WorkImage = {
  src: string;
  alt: string;
};

type WorkItem = {
  type: string;
  title: string;
  description: string;
  image: WorkImage;
  link: WorkLink;
};

type ContactItem = {
  type: "email" | "github" | "linkedin" | "instagram";
  label: string;
  value: string;
  href: string;
};

type Profile = {
  name: string;
  role: string;
  navItems: NavItem[];
  intro: {
    title: string;
    description: string;
  };
  portrait: {
    src: string;
    alt: string;
  };
  about: {
    education: string[];
    hobbies: string[];
  };
  works: WorkItem[];
  contacts: ContactItem[];
};

export const profile: Profile = {
  name: "Arturo The Great",
  role: "Backend Developer",
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Works", href: "#works" },
    { label: "Contact", href: "#contact" }
  ],
  intro: {
    title: "Hi! I'm Art Sumondong.",
    description:
      "I build simple and useful digital work. This space shares who I am, what I do, and a few projects I care about."
  },
  portrait: {
    src: "/image.png",
    alt: "Portrait placeholder for Arturo"
  },
  about: {
    education: [
      "Bachelor of Science in Computer Applications major in Internet-of-Things",
      "Mindanao State University - Iligan Institute of Technology",
      "Summa Cum Laude, 2026"
    ],
    hobbies: ["Playing guitar", "Gaming", "Photography"]
  },
  works: [
    {
      type: "Project",
      title: "Ocean Notes",
      description: "A clean note-taking app focused on calm reading and fast writing.",
      image: {
        src: "/wp4515537-shoreline-wallpapers.jpg",
        alt: "Ocean Notes preview"
      },
      link: {
        label: "View project",
        href: "https://github.com/yourname/ocean-notes"
      }
    },
    {
      type: "Case study",
      title: "Blue Harbor",
      description: "A portfolio case study for a modern travel brand with light motion.",
      image: {
        src: "/wp4515537-shoreline-wallpapers.jpg",
        alt: "Blue Harbor preview"
      },
      link: {
        label: "View project",
        href: "https://github.com/yourname/blue-harbor"
      }
    },
    {
      type: "Feature",
      title: "WaveBoard",
      description: "A simple dashboard concept built around quick updates and clear actions.",
      image: {
        src: "/wp4515537-shoreline-wallpapers.jpg",
        alt: "WaveBoard preview"
      },
      link: {
        label: "View project",
        href: "https://github.com/yourname/waveboard"
      }
    },
    {
      type: "Project",
      title: "SeaFrame",
      description: "A landing page system with polished sections and maintainable content blocks.",
      image: {
        src: "/wp4515537-shoreline-wallpapers.jpg",
        alt: "SeaFrame preview"
      },
      link: {
        label: "View project",
        href: "https://github.com/yourname/seaframe"
      }
    },
    {
      type: "App",
      title: "Current Flow",
      description: "A task tracker concept with a calm interface and focused work states.",
      image: {
        src: "/wp4515537-shoreline-wallpapers.jpg",
        alt: "Current Flow preview"
      },
      link: {
        label: "View project",
        href: "https://github.com/yourname/current-flow"
      }
    },
    {
      type: "UI Build",
      title: "Tide Studio",
      description: "A minimal creative studio site with balanced typography and soft contrast.",
      image: {
        src: "/wp4515537-shoreline-wallpapers.jpg",
        alt: "Tide Studio preview"
      },
      link: {
        label: "View project",
        href: "https://github.com/yourname/tide-studio"
      }
    },
    {
      type: "Web App",
      title: "Harbor Desk",
      description: "An admin workspace concept designed for clarity, speed, and visual calm.",
      image: {
        src: "/wp4515537-shoreline-wallpapers.jpg",
        alt: "Harbor Desk preview"
      },
      link: {
        label: "View project",
        href: "https://github.com/yourname/harbor-desk"
      }
    },
    {
      type: "Prototype",
      title: "Mist Journal",
      description: "A quiet journaling interface with soft hierarchy and responsive reading flow.",
      image: {
        src: "/wp4515537-shoreline-wallpapers.jpg",
        alt: "Mist Journal preview"
      },
      link: {
        label: "View project",
        href: "https://github.com/yourname/mist-journal"
      }
    },
    {
      type: "Concept",
      title: "Salt Grid",
      description: "A card-based showcase exploring modular layouts and elegant interactions.",
      image: {
        src: "/wp4515537-shoreline-wallpapers.jpg",
        alt: "Salt Grid preview"
      },
      link: {
        label: "View project",
        href: "https://github.com/yourname/salt-grid"
      }
    },
    {
      type: "Showcase",
      title: "Luna Shore",
      description: "A polished project gallery built to highlight visuals and short narratives.",
      image: {
        src: "/wp4515537-shoreline-wallpapers.jpg",
        alt: "Luna Shore preview"
      },
      link: {
        label: "View project",
        href: "https://github.com/yourname/luna-shore"
      }
    }
  ],
  contacts: [
    {
      type: "email",
      label: "Email",
      value: "artsumondong7@email.com",
      href: "mailto:artsumondong7@email.com"
    },
    {
      type: "github",
      label: "GitHub",
      value: "github.com/gattosazio",
      href: "https://github.com/gattosazio"
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/art-sumondong-83419640b/",
      href: "https://www.linkedin.com/in/art-sumondong-83419640b/"
    },
    {
      type: "instagram",
      label: "Instagram",
      value: "instagram.com/rt_kenttt/",
      href: "https://www.instagram.com/rt_kenttt/"
    }
  ]
};
