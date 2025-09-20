export type Language = 'vi' | 'en';

export interface ProjectField {
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
  detail: string;
}

export interface JoinSection {
  title: string;
  description: string;
  button: string;
}

export interface Translations {
  nav: {
    home: string;
    projects: string;
    values: string;
    join: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    quote: string;
    exploreBtn: string;
    joinBtn: string;
  };
  stats: {
    opensource: string;
    cost: string;
    potential: string;
    commitment: string;
  };
  projects: {
    title: string;
    subtitle: string;
    fields: {
      web: ProjectField;
      mobile: ProjectField;
      ai: ProjectField;
      blockchain: ProjectField;
      iot: ProjectField;
      devtools: ProjectField;
    };
  };
  values: {
    title: string;
    subtitle: string;
    quote: string;
    passion: ValueItem;
    excellence: ValueItem;
    community: ValueItem;
    opensource: ValueItem;
  };
  join: {
    title: string;
    subtitle: string;
    developers: JoinSection;
    community: JoinSection;
    contact: string;
    disclaimer: string;
    tagline: string;
  };
  footer: {
    description: string;
    tagline: string;
  };
}

export const translations: Record<Language, Translations> = {
  vi: {
    nav: {
      home: "Trang chủ",
      projects: "Dự án",
      values: "Giá trị",
      join: "Tham gia"
    },
    hero: {
      title: "DEVELOPERS IN BLACK",
      subtitle: "Tổ chức mã nguồn mở của những kỹ sư đam mê",
      description: "\"Dù không biết tên loài hoa nhưng người ta vẫn biết loài hoa đó đẹp đến nhường nào.\"",
      quote: "Code with purpose, build with passion",
      exploreBtn: "Khám phá dự án",
      joinBtn: "Tham gia cộng đồng"
    },
    stats: {
      opensource: "Mã nguồn mở",
      cost: "Chi phí sử dụng",
      potential: "Tiềm năng phát triển",
      commitment: "Cam kết hỗ trợ"
    },
    projects: {
      title: "Dự án của chúng tôi",
      subtitle: "Những sản phẩm được xây dựng với tình yêu và sự tận tâm",
      fields: {
        web: {
          title: "Web Development",
          description: "Ứng dụng web hiện đại với React, Next.js và công nghệ tiên tiến"
        },
        mobile: {
          title: "Mobile Apps",
          description: "Ứng dụng di động cross-platform với React Native và Flutter"
        },
        ai: {
          title: "AI & Machine Learning",
          description: "Giải pháp AI thông minh cho các vấn đề thực tế"
        },
        blockchain: {
          title: "Blockchain",
          description: "Smart contracts và DApps trên các nền tảng blockchain"
        },
        iot: {
          title: "IoT Solutions",
          description: "Kết nối và tự động hóa thiết bị thông minh"
        },
        devtools: {
          title: "Developer Tools",
          description: "Công cụ và thư viện giúp developers làm việc hiệu quả hơn"
        }
      }
    },
    values: {
      title: "Giá trị cốt lõi",
      subtitle: "Những nguyên tắc định hướng mọi hành động của chúng tôi",
      quote: "Chúng tôi tin rằng công nghệ nên phục vụ nhân loại, không phải ngược lại. Mỗi dòng code chúng tôi viết đều hướng tới một tương lai tốt đẹp hơn cho tất cả mọi người.",
      passion: {
        title: "Đam mê",
        description: "Chúng tôi code vì yêu thích, không vì tiền bạc",
        detail: "Passion là động lực chính của chúng tôi. Khi bạn làm việc vì đam mê, chất lượng sẽ tự nhiên theo sau."
      },
      excellence: {
        title: "Xuất sắc",
        description: "Luôn cố gắng tạo ra những sản phẩm tốt nhất có thể",
        detail: "Chúng tôi không chấp nhận 'tạm được'. Mỗi dự án đều được thực hiện với tiêu chuẩn cao nhất."
      },
      community: {
        title: "Cộng đồng",
        description: "Xây dựng và hỗ trợ cộng đồng developer Việt Nam",
        detail: "Sức mạnh của cộng đồng là vô hạn. Chúng tôi tin rằng chia sẻ kiến thức sẽ làm cho tất cả mọi người mạnh mẽ hơn."
      },
      opensource: {
        title: "Mã nguồn mở",
        description: "Minh bạch, cởi mở và có thể truy cập được bởi tất cả mọi người",
        detail: "Mã nguồn mở không chỉ là cách chia sẻ code, mà là triết lý về sự minh bạch và hợp tác."
      }
    },
    join: {
      title: "Tham gia cùng chúng tôi",
      subtitle: "Có nhiều cách để bạn có thể đóng góp và trở thành một phần của Developers in Black",
      developers: {
        title: "Developers",
        description: "Có kỹ năng lập trình và muốn đóng góp cho các dự án mã nguồn mở? Hãy tham gia GitHub của chúng tôi.",
        button: "Xem GitHub Organization"
      },
      community: {
        title: "Community", 
        description: "Không biết lập trình nhưng muốn học hỏi và đóng góp ý tưởng? Cộng đồng luôn chào đón bạn.",
        button: "Tham gia Discord"
      },
      contact: "",
      disclaimer: "* Chúng tôi không thu phí, không bán khóa học, không quảng cáo. Chỉ chia sẻ kiến thức và passion với công nghệ.",
      tagline: "Built by the community, for the community"
    },
    footer: {
      description: "Một tổ chức mã nguồn mở được vận hành bởi tình yêu với công nghệ và mong muốn tạo ra một thế giới tốt đẹp hơn.",
      tagline: "Made with ❤️ by the community, for the community. All projects are 100% open source and free forever."
    }
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects", 
      values: "Values",
      join: "Join"
    },
    hero: {
      title: "DEVELOPERS IN BLACK",
      subtitle: "Open source organization of passionate engineers",
      description: "\"Even without knowing the name of a flower, people still know how beautiful it is.\"",
      quote: "Code with purpose, build with passion",
      exploreBtn: "Explore Projects",
      joinBtn: "Join Community"
    },
    stats: {
      opensource: "Open Source",
      cost: "Cost to Use",
      potential: "Growth Potential", 
      commitment: "Support Commitment"
    },
    projects: {
      title: "Our Projects",
      subtitle: "Products built with love and dedication",
      fields: {
        web: {
          title: "Web Development",
          description: "Modern web applications with React, Next.js and cutting-edge technologies"
        },
        mobile: {
          title: "Mobile Apps", 
          description: "Cross-platform mobile applications with React Native and Flutter"
        },
        ai: {
          title: "AI & Machine Learning",
          description: "Intelligent AI solutions for real-world problems"
        },
        blockchain: {
          title: "Blockchain",
          description: "Smart contracts and DApps on various blockchain platforms"
        },
        iot: {
          title: "IoT Solutions",
          description: "Connect and automate smart devices"
        },
        devtools: {
          title: "Developer Tools",
          description: "Tools and libraries to help developers work more efficiently"
        }
      }
    },
    values: {
      title: "Core Values",
      subtitle: "The principles that guide everything we do",
      quote: "We believe technology should serve humanity, not the other way around. Every line of code we write aims for a better future for everyone.",
      passion: {
        title: "Passion",
        description: "We code for love, not for money",
        detail: "Passion is our main driving force. When you work for passion, quality naturally follows."
      },
      excellence: {
        title: "Excellence", 
        description: "Always strive to create the best possible products",
        detail: "We don't accept 'good enough'. Every project is executed to the highest standards."
      },
      community: {
        title: "Community",
        description: "Building and supporting the Vietnamese developer community",
        detail: "The power of community is limitless. We believe sharing knowledge makes everyone stronger."
      },
      opensource: {
        title: "Open Source",
        description: "Transparent, open and accessible to everyone",
        detail: "Open source is not just about sharing code, but a philosophy of transparency and collaboration."
      }
    },
    join: {
      title: "Join Us",
      subtitle: "There are many ways you can contribute and become part of Developers in Black",
      developers: {
        title: "Developers",
        description: "Have programming skills and want to contribute to open source projects? Join our GitHub.",
        button: "View GitHub Organization"
      },
      community: {
        title: "Community",
        description: "Don't know programming but want to learn and contribute ideas? The community always welcomes you.",
        button: "Join Discord"
      },
      contact: "",
      disclaimer: "* We don't charge fees, don't sell courses, don't advertise. Just sharing knowledge and passion for technology.",
      tagline: "Built by the community, for the community"
    },
    footer: {
      description: "An open source organization driven by love for technology and the desire to create a better world.",
      tagline: "Made with ❤️ by the community, for the community. All projects are 100% open source and free forever."
    }
  }
};