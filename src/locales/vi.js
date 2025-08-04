export default {
  common: {
    loading: 'Đang tải...',
    save: 'Lưu',
    cancel: 'Hủy',
    confirm: 'Xác nhận',
    delete: 'Xóa',
    edit: 'Chỉnh sửa',
    add: 'Thêm',
    back: 'Quay lại',
    next: 'Tiếp theo',
    previous: 'Trước đó',
    search: 'Tìm kiếm',
  },
  navigation: {
    about: 'Về tôi',
    projects: 'Dự án',
    favorites: 'Sở thích',
    targets: 'Mục tiêu',
  },
  about: {
    title: 'Về tôi',
    summary:
      'Sinh viên CNTT (HUIT) với đam mê xây dựng các sản phẩm AI. Có khả năng thích ứng nhanh và luôn sẵn sàng học hỏi công nghệ mới. Tìm kiếm cơ hội phát triển trong vai trò Backend/AI Engineer, mong muốn được làm việc với các dự án thực tế và tham gia vào quá trình nghiên cứu AI.',
    education: 'Học vấn',
    experience: 'Kinh nghiệm',
    skills: 'Kỹ năng',
    certificates: 'Chứng chỉ',
    webTechs: 'Công nghệ Web',
    otherTechs: 'khác',
    verified: 'Đã xác thực',
    viewCertificate: 'Xem chứng chỉ',
    close: 'Đóng',
    courseDetails: 'Chi tiết khóa học',
    skillsCovered: 'Kỹ năng được đề cập',
    complete: 'Hoàn thành',
    learningProgress: 'Tiến độ học tập',
  },
  projects: {
    title: 'DỰ ÁN CỦA TÔI',
    subtitle: 'Khám phá những dự án tôi đã thực hiện',
    technologies: 'Công nghệ sử dụng:',
    github: 'GitHub',
    demo: 'Demo',
    project1: {
      title: 'Website Quản lý Sự kiện HUIT',
      subtitle: 'JSP & Spring Boot',
      description:
        'Dự án này nhằm mục đích tinh gọn quy trình, xây dựng hệ thống quản lý sự kiện và điểm rèn luyện cho HUIT, giúp sinh viên dễ dàng theo dõi và tham gia các hoạt động. Đồng thời giúp quản lý sự kiện dễ dàng hơn.',
    },
    project2: {
      title: 'My portfolio',
      subtitle: 'Vuejs & FastAPI',
      description:
        'Nhằm phục vụ mục đích giới thiệu bản thân cho nhà tuyển dụng cũng như học hỏi công nghệ mới. Website này ra đời. Trong đó FastAPI chỉ đảm nhiệm trong việc gửi tin nhắn đến server và truy vấn lịch sử tin nhắn.',
    },
  },
  favorites: {
    title: 'SỞ THÍCH CỦA TÔI',
    subtitle: 'Những thứ tôi yêu thích và đam mê',
    anime: 'Anime',
    manga: 'Manga',
    music: 'Âm nhạc',
    technology: 'Công nghệ',
    animeWatching: 'Anime đang xem',
    mangaReading: 'Manga đang đọc',
    musicTaste: 'Sở thích âm nhạc',
    learningTech: 'Công nghệ đang học',
    anison: 'Anison',
    vocaloid: 'Vocaloid',
  },
  targets: {
    title: 'Mục tiêu & Kế hoạch',
    subtitle: 'Theo đuổi ước mơ với đam mê và quyết tâm',
    achievementTimeline: 'Timeline thành tựu',
    inProgress: 'Đang thực hiện',
    completed: 'Hoàn thành',
    planning: 'Lên kế hoạch',
    target: 'Mục tiêu',
    jlptN2Title: 'JLPT N2',
    jlptN2Description: 'Thành thạo năng lực tiếng Nhật cấp độ N2 để thăng tiến trong sự nghiệp',
    ielts7Title: 'IELTS 7.0',
    ielts7Description: 'Đạt chứng chỉ IELTS 7.0 để có cơ hội quốc tế',
    gojp: 'Làm việc tại Nhật Bản',
    gojpDescription:
      'Hiện tại với mục tiêu được làm việc tại Nhật Bản, tôi đang tập trung vào việc nâng cao kỹ năng tiếng Nhật và hiểu biết văn hóa để chuẩn bị cho công việc tại đây.',
  },
  education: {
    degree1: 'Cử nhân Khoa học Máy tính',
    school1: 'Đại học Công Thương TPHCM (HUIT)',
    details1: {
      item1: 'Chuyên ngành: Kỹ thuật Phần mềm (2023-2026)',
      item2: 'GPA: 3.4/4.0',
      item3:
        'Đã va chạm qua các môn học: IOT, Lập trình WEB (asp.net), Big data, Lập trình mã nguồn mở (PHP), noSQL(mongoDB), Điện toán đám mây (Azure) và RDBMS (SQL server và MySQL)',
    },
  },
  experience: [
    {
      period: '2025-8 - Hiện Tại',
      position: 'Fullstack Developer',
      company: 'Công ty Xuất Khẩu Trái cây .......',
      type: 'Thực tập',
      icon: 'mdi-code-tags',
      iconColor: 'primary',
      chipColor: 'success',
      details: [
        'Phát triển hệ sinh thái phần mềm đáp ứng nghiệp vụ của Công Ty xuất nhập khẩu.',
        'Sử dụng Vue.js cho trang web giới thiệu và quản lý sản phẩm.',
        'Sử dụng asp.net, sql server và winforms cho hệ thống quản lý nội bộ.',
        'Đóng gói bằng docker và triển khai lên dịch vụ Azure.',
      ],
      technologies: [
        { name: 'Vue.js', color: 'green', icon: 'mdi-vuejs' },
        { name: 'Asp.net', color: 'yellow-darken-2', icon: 'mdi-dot-net' },
        { name: 'Winform', color: 'indigo', icon: 'mdi-microsoft-windows' },
        { name: 'SQL server', color: 'indigo', icon: 'mdi-microsoft-sql-server' },
        { name: 'Azure', color: 'orange', icon: 'mdi-microsoft-azure' },
      ],
    },
    {
      period: '2025-7 - Hiện Tại',
      position: 'Thành viên Nghiên cứu và Phát triển Digital Human (Giáo Vụ Ảo)',
      company: 'HUIT - Giảng Viên: Nguyễn Quốc Sử',
      type: 'Thành viên Nghiên Cứu',
      icon: 'mdi-school-outline',
      iconColor: 'info',
      chipColor: 'info',
      details: [
        'Phát triển websites về dữ liệu các môn học và chuẩn đầu ra các chương trình đào tạo HUIT.',
        'Xây dựng mô hình LLM (RAG) để tư vấn sinh viên về học vụ và hướng nghiệp.',
        'Phát triển IOT tích hợp cho Digital Human giúp cung cấp thêm tham số cho mô hình LLM.',
        'Sử dụng FastAPI để xây dựng API cho Digital Human MongoDB vector Database cho mô hình.',
        'Triển khai dịch vụ lên Azure.',
        ' MongoDB vector Database cho mô hình.',
      ],
      technologies: [
        { name: 'Vue.js', color: 'blue', icon: 'mdi-vuejs' },
        { name: 'Asp.net', color: 'yellow-darken-2', icon: 'mdi-dot-net' },
        { name: 'FastAPI', color: 'purple', icon: 'mdi-language-python' },
        { name: 'Azure', color: 'purple', icon: 'mdi-microsoft-azure' },
        { name: 'MongoDB', color: 'purple', icon: 'mdi-mongodb' },
      ],
    },
  ],
  timeline: {
    graduation: {
      title: 'Tốt nghiệp loại Giỏi - Cử nhân Công nghệ Thông tin',
      description:
        'Hoàn thành chương trình Cử nhân Công nghệ Thông tin với bằng tốt nghiệp loại Giỏi, đạt thành tích học tập xuất sắc và kỹ năng thực tiễn tốt',
    },
    milestone1: {
      title: 'Thi JLPT N2',
      description: 'Tham gia kỳ thi Năng lực Tiếng Nhật N2',
    },
    milestone2: {
      title: 'Thi IELTS',
      description: 'Đạt mục tiêu band điểm 7.0',
    },
    milestone3: {
      title: 'Dự án AI đầu tiên',
      description: 'Hoàn thành dự án Deep Learning đầu tiên kết hợp với IoT',
    },
    milestone4: {
      title: 'Ứng dụng Computer Vision',
      description: 'Triển khai ứng dụng computer vision lên production',
    },
  },
  certificates: {
    Ielts: {
      title: 'Ielts 5.5',
      description: 'Speaking: 5.5, Listening: 5.5, Reading: 5.5, Writing: 6',
      details: {
        item1: 'Các mẫu component nâng cao và composition',
        item2: 'Quản lý trạng thái với Pinia',
        item3: 'Kỹ thuật tối ưu hóa hiệu suất',
        item4: 'Kiểm thử ứng dụng Vue',
      },
    },
    js: {
      title: 'Chứng chỉ JavaScript ES6+',
      description:
        'Các tính năng JavaScript hiện đại và khái niệm lập trình bao gồm async/await, modules và các phương thức mảng nâng cao.',
      details: {
        item1: 'Cú pháp và tính năng JavaScript hiện đại',
        item2: 'Các mẫu lập trình bất đồng bộ',
        item3: 'Hệ thống module và imports/exports',
        item4: 'Khái niệm lập trình hàm',
      },
    },
    rwd: {
      title: 'Thiết kế Web Đáp ứng',
      description:
        'HTML, CSS và các nguyên tắc thiết kế đáp ứng để tạo ra các ứng dụng web ưu tiên thiết bị di động và dễ tiếp cận.',
      details: {
        item1: 'HTML ngữ nghĩa và khả năng truy cập',
        item2: 'Bố cục CSS nâng cao với Flexbox và Grid',
        item3: 'Các mẫu thiết kế đáp ứng',
        item4: 'CSS animations và transitions',
      },
    },
    git: {
      title: 'Kiểm soát phiên bản Git',
      description:
        'Kiểm soát phiên bản và quy trình làm việc cộng tác bằng Git và GitHub để phát triển nhóm.',
      details: {
        item1: 'Các khái niệm và lệnh Git cơ bản',
        item2: 'Chiến lược phân nhánh và hợp nhất',
        item3: 'Quy trình làm việc cộng tác',
        item4: 'GitHub Actions và CI/CD',
      },
    },
    node: {
      title: 'Phát triển Backend Node.js',
      description:
        'Phát triển JavaScript phía máy chủ với Node.js, Express.js và tích hợp cơ sở dữ liệu.',
      details: {
        item1: 'Các khái niệm và module cơ bản của Node.js',
        item2: 'Xây dựng REST APIs với Express.js',
        item3: 'Tích hợp cơ sở dữ liệu với MongoDB',
        item4: 'Xác thực và bảo mật',
      },
    },
    aws: {
      title: 'AWS Cloud Practitioner',
      description:
        'Các khái niệm cơ bản về điện toán đám mây và tổng quan về các dịch vụ AWS cho lập trình viên và chuyên gia CNTT.',
      details: {
        item1: 'Khái niệm và lợi ích của điện toán đám mây',
        item2: 'Tổng quan về các dịch vụ cốt lõi của AWS',
        item3: 'Bảo mật và tuân thủ trong AWS',
        item4: 'Các mô hình định giá và hỗ trợ',
      },
    },
  },

  favoritesDetails: {
    music: {
      jujutsu: 'Chú thuật hồi chiến Mùa 2',
      bocchi: 'Bocchi the Rock!',
      hatsune_miku: 'Hatsune Miku',
      more_than_words: {
        title: 'More Than Words',
        artist: 'Hitsujibungaku',
      },
      seiza_ni_naretara: {
        title: 'Nếu tớ có thể trở thành một chòm sao',
        artist: 'Kessoku Band',
      },
      shoujo_rei: {
        title: 'Shoujo Rei',
        artist: 'Mikito-P',
      },
      flos: {
        title: 'Flos',
        artist: 'R Sound Design',
      },
    },
    anime: {
      takopi: {
        title: 'Nguyên tội của Takopi',
        description:
          'Câu chuyện đau lòng về một người ngoài hành tinh cố gắng mang lại hạnh phúc nhưng lại đối mặt với thực tại phũ phàng của Trái Đất.',
      },
      hibike: {
        title: 'Vang lên! Euphonium',
        description:
          'Theo chân Kumiko Oumae và hành trình của dàn nhạc trường Kitauji hướng tới giải quốc gia.',
      },
      codegeass: {
        title: 'Code Geass: Lelouch of the Rebellion',
        description:
          'Lelouch vi Britannia nhận được sức mạnh Geass và lãnh đạo một cuộc nổi dậy chống lại Đế quốc Britannia Thần thánh.',
      },
      kon: {
        title: 'K-On!',
        description:
          'Cuộc sống học đường đáng yêu và đầy ắp tiếng cười của các cô gái trong câu lạc bộ nhạc nhẹ.',
      },
    },
    manga: {
      chainsaw: {
        title: 'Chainsaw man',
        description:
          'Denji, một chàng trai trẻ mắc nợ, trở thành Thợ Săn Quỷ với trái tim của một con quỷ cưa.',
      },
      lookback: {
        title: 'Look Back',
        description:
          'Một one-shot đầy cảm xúc về sự sáng tạo, tình bạn và những con đường khác nhau trong cuộc sống.',
      },
      goodbye: {
        title: 'Tạm biệt, Eri',
        description:
          'Khám phá ranh giới giữa thực và ảo qua lăng kính của một cậu bé làm phim về người mẹ sắp mất.',
      },
    },
    tech: {
      ml: {
        name: 'Học máy',
        description: 'Khám phá mạng nơ-ron, các thuật toán học sâu và ứng dụng AI.',
      },
      cloud: {
        name: 'Điện toán đám mây',
        description: 'Tìm hiểu về AWS, Azure và các công nghệ container hóa như Docker.',
      },
      blockchain: {
        name: 'Blockchain',
        description: 'Tìm hiểu về tiền điện tử, hợp đồng thông minh và các ứng dụng phi tập trung.',
      },
      devops: {
        name: 'DevOps',
        description: 'Triển khai các đường ống CI/CD, cơ sở hạ tầng dưới dạng mã và tự động hóa.',
      },
      cybersecurity: {
        name: 'An ninh mạng',
        description: 'Tìm hiểu về ethical hacking, kiểm thử xâm nhập và các framework bảo mật.',
      },
      quantum: {
        name: 'Điện toán lượng tử',
        description: 'Khám phá các thuật toán lượng tử, mạch lượng tử và lập trình lượng tử.',
      },
    },
  },
}
