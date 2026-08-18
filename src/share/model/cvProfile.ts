export type CvLanguage = "vi" | "en";

export type CvContact = {
  label: string;
  value: string;
};

export type CvExperience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export type CvProject = {
  name: string;
  description: string;
  stack: string[];
};

export type CvProfile = {
  fullName: string;
  title: string;
  location: string;
  birthDate: string;
  gender: string;
  objective: string;
  labels: {
    languageLabel: string;
    languageOptions: Record<CvLanguage, string>;
    eyebrow: string;
    quickInfo: string;
    location: string;
    birthDate: string;
    gender: string;
    contact: string;
    skills: string;
    education: string;
    strengthsEyebrow: string;
    strengths: string;
    experienceEyebrow: string;
    experience: string;
    projectsEyebrow: string;
    projects: string;
    certificates: string;
    references: string;
  };
  contacts: CvContact[];
  strengths: string[];
  skillGroups: {
    title: string;
    skills: string[];
  }[];
  experiences: CvExperience[];
  projects: CvProject[];
  education: {
    school: string;
    major: string;
    period: string;
    gpa: string;
  };
  certificates: string[];
  references: string[];
};

export const cvProfiles: Record<CvLanguage, CvProfile> = {
  vi: {
    fullName: "Vũ Bá Công",
    title: "Senior Developer / Dev Lead",
    location: "Hải Dương - Hà Nội",
    birthDate: "27/09/1995",
    gender: "Nam",
    objective:
      "Senior Developer tập trung vào thiết kế hệ thống, tối ưu hiệu năng, xử lý bảo mật và tích hợp các nền tảng doanh nghiệp quy mô lớn.",
    labels: {
      languageLabel: "Ngôn ngữ",
      languageOptions: {
        vi: "Tiếng Việt",
        en: "Tiếng Anh"
      },
      eyebrow: "Hồ sơ chuyên nghiệp",
      quickInfo: "Thông tin nhanh",
      location: "Địa điểm",
      birthDate: "Ngày sinh",
      gender: "Giới tính",
      contact: "Liên hệ",
      skills: "Kỹ năng",
      education: "Học vấn",
      strengthsEyebrow: "Năng lực cốt lõi",
      strengths: "Giá trị nổi bật",
      experienceEyebrow: "Kinh nghiệm",
      experience: "Kinh nghiệm làm việc",
      projectsEyebrow: "Dự án",
      projects: "Dự án tiêu biểu",
      certificates: "Chứng chỉ",
      references: "Người tham chiếu"
    },
    contacts: [
      {
        label: "Điện thoại",
        value: "0364799142"
      },
      {
        label: "Email",
        value: "vubacong1995@gmail.com"
      },
      {
        label: "Địa điểm",
        value: "Hải Dương - Hà Nội"
      },
      {
        label: "Website",
        value: "Không dùng website cá nhân"
      }
    ],
    strengths: [
      "Dẫn dắt team phát triển sản phẩm nội bộ và nền tảng doanh nghiệp",
      "Xử lý hiệu năng, bảo mật, refactor code và tích hợp liên hệ thống",
      "Kinh nghiệm full-stack với .NET, Next.js, Angular, database và DevOps",
      "Tiếp cận nhanh ngôn ngữ, framework và bài toán mới theo nhu cầu dự án"
    ],
    skillGroups: [
      {
        title: "Backend",
        skills: [".NET", ".NET Core", "C#", "VB", "Python", "Node.js"]
      },
      {
        title: "Frontend",
        skills: ["Next.js", "Angular", "React", "TypeScript", "JavaScript", "jQuery"]
      },
      {
        title: "Database",
        skills: ["SQL Server", "MySQL", "MongoDB", "Elasticsearch"]
      },
      {
        title: "Nền tảng",
        skills: ["Kubernetes", "Docker", "CI/CD", "IIS", "Nginx", "Security"]
      }
    ],
    experiences: [
      {
        company: "FPT IS",
        role: "Dev Lead",
        period: "10/2020 - hiện tại",
        highlights: [
          "Xây dựng hệ thống SaaS đánh giá KPI cho cơ quan nhà nước, doanh nghiệp và các tổ chức.",
          "Nghiên cứu triển khai AI model báo cáo động, tích hợp giải pháp tự động sinh báo cáo với các hệ thống.",
          "Dẫn dắt phát triển các hệ thống EPO, DMS, Insight SSO, hồ sơ năng lực thầu và chatbot nội bộ.",
          "Tối ưu code, xử lý lỗ hổng bảo mật, cải thiện hiệu năng và tích hợp các service lớn.",
          "Làm việc với microservice, platform, CI/CD, AI, Big Data, MongoDB và các service chạy đồng thời."
        ]
      },
      {
        company: "MISA",
        role: "Developer",
        period: "06/2018 - 09/2020",
        highlights: [
          "Phát triển các module trong hệ sinh thái amis.vn như HRM, AMIS Core, profile, document và TMS.",
          "Tham gia AMIS Platform 3.0, xử lý base client và API kết nối giữa các hệ thống."
        ]
      },
      {
        company: "VCN Corp Việt Nam",
        role: "Developer",
        period: "05/2017 - 06/2018",
        highlights: [
          "Xây dựng và bảo trì web bằng C# ASP.NET, SQL và PHP.",
          "Phụ trách các website thương mại, nội dung và SEO."
        ]
      },
      {
        company: "Pitado Việt Nam - Zitga",
        role: "Unity Developer",
        period: "02/2017 - 05/2017",
        highlights: [
          "Phát triển game Stickman Legend bằng C# Unity.",
          "Thiết kế giao diện, xử lý tính năng gameplay và tiếp cận công nghệ mới."
        ]
      },
      {
        company: "Minh Phúc Telecom",
        role: ".NET Developer",
        period: "12/2016 - 02/2017",
        highlights: [
          "Xây dựng website MVC và tool nội bộ quản lý nhân sự.",
          "Đề xuất giải pháp kỹ thuật cho các module nội bộ."
        ]
      }
    ],
    projects: [
      {
        name: "EPO",
        description:
          "Hệ thống quản lý mua hàng xuất nhập khẩu, tích hợp nhiều nguồn dữ liệu và service doanh nghiệp.",
        stack: ["Microservice", "Platform", "CI/CD", "AI", "Big Data"]
      },
      {
        name: "Insight SSO",
        description:
          "Cổng đăng nhập, hệ thống ghi log và mail service với Identity Server và MongoDB.",
        stack: ["Identity Server", "MongoDB", "Concurrent Service"]
      },
      {
        name: "DMS",
        description:
          "Hệ thống quản lý văn bản pháp chế, xử lý OCR, scan và print trong quy trình tài liệu.",
        stack: ["Microservice", "OCR", "Document Workflow"]
      }
    ],
    education: {
      school: "Đại học Sư phạm Kỹ thuật Hưng Yên",
      major: "Kỹ sư phần mềm",
      period: "09/2013 - 06/2017",
      gpa: "3.6/4"
    },
    certificates: [
      "AI Creative",
      "Unity Metaquest 2",
      "MySQL",
      "Angular",
      "SQL Server",
      "FPT Software",
      "Kỹ sư phần mềm"
    ],
    references: [
      "FPT IS - acc nhân viên congvb3@fpt.com",
      "MISA - Anh Hiếu Phạm",
      "VCN Corp",
      "Minh Phúc Telecom",
      "Zitga Pitado"
    ]
  },
  en: {
    fullName: "Vu Ba Cong",
    title: "Senior Developer / Dev Lead",
    location: "Hai Duong - Hanoi",
    birthDate: "September 27, 1995",
    gender: "Male",
    objective:
      "Senior Developer focused on system design, performance optimization, security remediation, and integration of large-scale enterprise platforms.",
    labels: {
      languageLabel: "Language",
      languageOptions: {
        vi: "Vietnamese",
        en: "English"
      },
      eyebrow: "Professional CV",
      quickInfo: "Quick information",
      location: "Location",
      birthDate: "Date of birth",
      gender: "Gender",
      contact: "Contact",
      skills: "Skills",
      education: "Education",
      strengthsEyebrow: "Core strengths",
      strengths: "Key strengths",
      experienceEyebrow: "Experience",
      experience: "Work experience",
      projectsEyebrow: "Projects",
      projects: "Featured projects",
      certificates: "Certificates",
      references: "References"
    },
    contacts: [
      {
        label: "Phone",
        value: "0364799142"
      },
      {
        label: "Email",
        value: "vubacong1995@gmail.com"
      },
      {
        label: "Location",
        value: "Hai Duong - Hanoi"
      },
      {
        label: "Website",
        value: "No personal website in use"
      }
    ],
    strengths: [
      "Leads teams building internal products and enterprise platforms",
      "Handles performance tuning, security remediation, code refactoring, and cross-system integration",
      "Full-stack experience with .NET, Next.js, Angular, databases, and DevOps",
      "Quickly adapts to new languages, frameworks, and project requirements"
    ],
    skillGroups: [
      {
        title: "Backend",
        skills: [".NET", ".NET Core", "C#", "VB", "Python", "Node.js"]
      },
      {
        title: "Frontend",
        skills: ["Next.js", "Angular", "React", "TypeScript", "JavaScript", "jQuery"]
      },
      {
        title: "Database",
        skills: ["SQL Server", "MySQL", "MongoDB", "Elasticsearch"]
      },
      {
        title: "Platform",
        skills: ["Kubernetes", "Docker", "CI/CD", "IIS", "Nginx", "Security"]
      }
    ],
    experiences: [
      {
        company: "FPT IS",
        role: "Dev Lead",
        period: "10/2020 - Present",
        highlights: [
          "Built SaaS KPI evaluation systems for government agencies, enterprises, and organizations.",
          "Researched and implemented AI-driven dynamic reporting models for automated report generation across systems.",
          "Led development of EPO, DMS, Insight SSO, bidding capability profile systems, and internal chatbots.",
          "Optimized code, resolved security vulnerabilities, improved performance, and integrated large services.",
          "Worked with microservices, platform engineering, CI/CD, AI, Big Data, MongoDB, and concurrent services."
        ]
      },
      {
        company: "MISA",
        role: "Developer",
        period: "06/2018 - 09/2020",
        highlights: [
          "Developed modules in the amis.vn ecosystem, including HRM, AMIS Core, profile, document, and TMS.",
          "Contributed to AMIS Platform 3.0, handling base client work and APIs connecting multiple systems."
        ]
      },
      {
        company: "VCN Corp Vietnam",
        role: "Developer",
        period: "05/2017 - 06/2018",
        highlights: [
          "Built and maintained websites using C# ASP.NET, SQL, and PHP.",
          "Handled commerce, content, and SEO-oriented websites."
        ]
      },
      {
        company: "Pitado Vietnam - Zitga",
        role: "Unity Developer",
        period: "02/2017 - 05/2017",
        highlights: [
          "Developed Stickman Legend with C# and Unity.",
          "Designed user interfaces, implemented gameplay features, and adopted new technologies."
        ]
      },
      {
        company: "Minh Phuc Telecom",
        role: ".NET Developer",
        period: "12/2016 - 02/2017",
        highlights: [
          "Built MVC websites and internal HR management tools.",
          "Proposed technical solutions for internal modules."
        ]
      }
    ],
    projects: [
      {
        name: "EPO",
        description:
          "An import-export procurement management system integrating multiple data sources and enterprise services.",
        stack: ["Microservice", "Platform", "CI/CD", "AI", "Big Data"]
      },
      {
        name: "Insight SSO",
        description:
          "A sign-in portal with logging and mail services built around Identity Server and MongoDB.",
        stack: ["Identity Server", "MongoDB", "Concurrent Service"]
      },
      {
        name: "DMS",
        description:
          "A legal document management system supporting OCR, scanning, and printing workflows.",
        stack: ["Microservice", "OCR", "Document Workflow"]
      }
    ],
    education: {
      school: "Hung Yen University of Technology and Education",
      major: "Software Engineering",
      period: "09/2013 - 06/2017",
      gpa: "3.6/4"
    },
    certificates: [
      "AI Creative",
      "Unity Metaquest 2",
      "MySQL",
      "Angular",
      "SQL Server",
      "FPT Software",
      "Software Engineering"
    ],
    references: [
      "FPT IS - employee account congvb3@fpt.com",
      "MISA - Mr. Hieu Pham",
      "VCN Corp",
      "Minh Phuc Telecom",
      "Zitga Pitado"
    ]
  }
};
