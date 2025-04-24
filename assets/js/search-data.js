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
            },},{id: "news-i-was-born",
          title: 'I was born.',
          description: "",
          section: "News",},{id: "news-graduated-from-tsinghua-university-and-received-bachelor-s-degree-in-electronics-engineering",
          title: 'Graduated from Tsinghua University and received Bachelor’s degree in Electronics Engineering.',
          description: "",
          section: "News",},{id: "news-enrolled-in-peking-university-to-pursue-doctoral-degree-in-integrated-circuits",
          title: 'Enrolled in Peking University to pursue doctoral degree in Integrated Circuits.',
          description: "",
          section: "News",},{id: "news-one-co-authored-paper-has-been-accepted-by-iedm-2023-collaborated-with-zhiyuan-fu",
          title: 'One co-authored paper has been accepted by IEDM 2023 (collaborated with Zhiyuan Fu)....',
          description: "",
          section: "News",},{id: "news-one-involved-paper-has-been-accepted-in-ieee-ted",
          title: 'One involved paper has been accepted in IEEE TED.',
          description: "",
          section: "News",},{id: "news-one-authored-paper-has-been-accepted-by-iedm-2024",
          title: 'One authored paper has been accepted by IEDM 2024.',
          description: "",
          section: "News",},{id: "news-one-authored-poster-has-been-accepted-by-ccf-storage-conference-2024",
          title: 'One authored poster has been accepted by CCF Storage Conference 2024.',
          description: "",
          section: "News",},{id: "news-a-presentation-has-been-given-at-the-iedm-conference-in-san-fransisco-usa",
          title: 'A presentation has been given at the IEDM conference, in San Fransisco, USA....',
          description: "",
          section: "News",},{id: "news-one-authored-and-two-involved-papers-have-been-accepted-by-edtm-2025",
          title: 'One authored and two involved papers have been accepted by EDTM 2025.',
          description: "",
          section: "News",},{id: "news-one-authored-paper-has-been-accepted-by-silicon-nanoelectronics-workshop-snw-2025",
          title: 'One authored paper has been accepted by Silicon Nanoelectronics Workshop (SNW) 2025.',
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
