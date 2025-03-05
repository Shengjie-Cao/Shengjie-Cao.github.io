// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-one-co-authored-paper-has-been-accepted-by-iedm-2023",
          title: 'One co-authored paper has been accepted by IEDM 2023.',
          description: "",
          section: "News",},{id: "news-one-involvedb-amp-gt-paper-has-been-accepted-in-ieee-ted-2024",
          title: 'One involvedb&amp;amp;gt; paper has been accepted in IEEE TED 2024.',
          description: "",
          section: "News",},{id: "news-one-authoredb-amp-gt-paper-has-been-accepted-by-iedm-2024",
          title: 'One authoredb&amp;amp;gt; paper has been accepted by IEDM 2024.',
          description: "",
          section: "News",},{id: "news-a-presentation-on-comprehensive-performance-re-assessment-of-hafnia-based-cross-point-feram-with-ultra-fast-and-low-power-operation-from-device-array-perspective-has-been-delivered-at-the-iedm-in-san-fransisco-usa",
          title: 'A presentation on ‘Comprehensive Performance Re-assessment of Hafnia-based Cross-point FeRAM with Ultra-fast and...',
          description: "",
          section: "News",},{id: "news-one-authored-and-two-involved-papers-have-been-accepted-by-edtm-2025",
          title: 'One authored and two involved papers have been accepted by EDTM 2025.',
          description: "",
          section: "News",},{id: "projects-multi-functional-storage-system",
          title: 'Multi-functional Storage System',
          description: "Reconfigurable compression and encryption storage system",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ces/";
            },},{id: "projects-srt-program",
          title: 'SRT Program',
          description: "Undergraduate student research training (Advisor - Prof. Xueqing Li; Mentor - Hongtao Zhong)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/srt/";
            },},{id: "projects-hafnia-based-xp-feram",
          title: 'Hafnia-based XP-FeRAM',
          description: "A novel high-speed, high-density and low-power memory design for data-intensive applications based on cross-point architecture (Advisor - Prof. Qianqian Huang; Mentor - Prof.Zhiyuan Fu)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/xp_feram/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%73%6A@%73%74%75.%70%6B%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=MVJEJkQAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://space.bilibili.com/376299941/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
