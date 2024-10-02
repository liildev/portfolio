export const allProjects = (isOS: boolean) => [
  {
    year: "2024",
    projects: [
      {
        title: "Let'sTrip (App)",
        url: isOS
          ? "https://apps.apple.com/uz/app/letstrip/id6502595522"
          : "https://play.google.com/store/apps/details?id=com.coreteam.letstrip",
        active: true,
      },
      {
        title: "Let'sTrip (Web)",
        url: "https://letstrip.uz",
        active: true,
      },
      {
        title: "ServiceAgent",
        active: false,
      },
      {
        title: "Agrota Market",
        active: false,
      },
      {
        title: "USSDQuick",
        url: isOS
          ? "https://apps.apple.com/uz/app/ussdquick/id6463426114"
          : "https://play.google.com/store/apps/details?id=com.coreteam.ussdQuick",
        active: true,
      },
    ],
  },
  {
    year: "2023",
    projects: [
      {
        title: "Student App",
        url: "https://go.najottalim.uz/",
        active: true,
      },
      {
        title: "Najot Ta'lim",
        url: "https://najottalim.uz/",
        active: true,
      },
      {
        title: "Avto Box",
        url: "https://www.avto-box.uz/",
        active: false,
      },
      {
        title: "Education Box",
        url: "https://educationbox.uz/",
        active: true,
      },
    ],
  },
  {
    year: "2022",
    projects: [
      {
        title: "Apple Store",
        url: "https://apple-clone-app.vercel.app/",
        active: true,
      },
      {
        title: "Lyriks",
        url: "https://lyriks-music.firebaseapp.com/",
        active: true,
      },
      {
        title: "Metaverse",
        url: "https://metaverses-app.vercel.app/",
        active: true,
      },
      {
        title: "Admins",
        url: "https://adminis-app.vercel.app/",
        active: true,
      },
      {
        title: "Hoo Bank",
        url: "https://project-hoobank-app.netlify.app/",
        active: true,
      },
    ],
  },
];

export const featuredProjects = [
  {
    year: "2023",
    projects: [
      {
        title: "Resend",
        description: "New email API for developers",
        url: "https://resend.com",
        active: true,
        icon: "resend",
        stats: "14k+ users",
      },
    ],
  },
  {
    year: "2022",
    projects: [
      {
        title: "React Email",
        description: "Next generation of writing emails",
        url: "https://react.email",
        active: true,
        icon: "email",
        stats: "8k+ stars",
      },
      {
        title: "WorkOS",
        url: "https://workos.com",
        active: true,
      },
    ],
  },
  {
    year: "2021",
    projects: [
      {
        title: "Awesome Developer Experience",
        url: "https://github.com/workos-inc/awesome-developer-experience",
        active: true,
      },
      {
        title: "ByteTalk",
        url: "https://bytetalkpodcast.com",
        active: true,
      },
      {
        title: "Dracula UI",
        url: "https://draculatheme.com/ui",
      },
    ],
  },
  {
    year: "2020",
    projects: [
      {
        title: "14 Habits",
        description: "Book about productivity",
        url: "https://14habits.com",
      },
      {
        title: "Dracula PRO",
        description: "Premium dark color scheme",
        url: "https://draculatheme.com/pro",
        stats: "$308k+ sales",
        icon: "dracula-pro",
        active: true,
      },
    ],
  },
];
