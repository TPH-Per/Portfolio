export default {
  common: {
    loading: '読み込み中...',
    save: '保存',
    cancel: 'キャンセル',
    confirm: '確認',
    delete: '削除',
    edit: '編集',
    add: '追加',
    back: '戻る',
    next: '次へ',
    previous: '前へ',
    search: '検索',
  },
  navigation: {
    about: '私について',
    projects: 'プロジェクト',
    favorites: 'お気に入り',
    targets: '目標',
  },
  about: {
    title: '私について',
    summary:
      'HUITにて情報技術を専攻する学生です。AI製品の開発に情熱を注いでおり、高い適応能力と新しい技術への学習意欲が強みです。バックエンド/AIエンジニアとして、実践的なプロジェクトに参加し、AIモデルの研究開発に貢献できる機会を求めています。',
    education: '学歴',
    experience: '職歴',
    skills: 'スキル',
    certificates: '資格',
    webTechs: 'ウェブ技術',
    otherTechs: 'その他',
    verified: '検証済み',
    viewCertificate: '証明書を表示',
    close: '閉じる',
    courseDetails: 'コース詳細',
    skillsCovered: '対象スキル',
    complete: '完了',
    learningProgress: '学習進捗',
  },
  projects: {
    title: '私のプロジェクト',
    subtitle: '私が作成したプロジェクトをご覧ください',
    technologies: '使用技術：',
    github: 'GitHub',
    demo: 'デモ',
    project1: {
      title: 'HUITイベント管理ウェブサイト',
      subtitle: 'JSP & Spring Boot',
      description:
        'このプロジェクトは、HUITのイベントおよびトレーニングポイント管理システムを構築し、プロセスを合理化することを目的としています。これにより、学生は活動を簡単に追跡し、参加できるようになります。また、イベント管理も簡素化されます。',
    },
    project2: {
      title: '私のポートフォリオ',
      subtitle: 'Vue.js & FastAPI',
      description:
        '採用担当者に自己紹介し、新しい技術を学ぶためにこのウェブサイトを作成しました。FastAPIは、サーバーへのメッセージ送信とメッセージ履歴のクエリのみを担当します。',
    },
  },
  favorites: {
    title: '私のお気に入り',
    subtitle: '私が愛し、情熱を注いでいるもの',
    anime: 'アニメ',
    manga: 'マンガ',
    music: '音楽',
    technology: 'テクノロジー',
    animeWatching: '視聴中のアニメ',
    mangaReading: '読書中のマンガ',
    musicTaste: '音楽の趣味',
    learningTech: '学習中の技術',
    anison: 'アニソン',
    vocaloid: 'ボーカロイド',
  },
  targets: {
    title: '私の目標とゴール',
    subtitle: '情熱と決意で夢を追いかける',
    achievementTimeline: '達成タイムライン',
    inProgress: '進行中',
    completed: '完了',
    planning: '計画中',
    target: '目標',
    jlptN2Title: 'JLPT N2',
    jlptN2Description: 'キャリアアップのために日本語能力試験N2レベルを習得する',
    ielts7Title: 'IELTS 7.0',
    ielts7Description: '国際的な機会のためにIELTSバンド7.0を達成する',
    gojp: '日本で働く',
    gojpDescription: '日本で働くために、日本語の能力と文化理解を向上させる必要があります。',
    // Target details
  },

  timeline: {
    graduation: {
      title: '優秀な成績で卒業 - 情報技術学士',
      description:
        '情報技術学士号を優秀な成績で取得し、優れた学業成績と実践的なスキルを獲得しました',
    },
    milestone1: {
      title: 'JLPT N2試験',
      description: '日本語能力試験N2を受験し、認定を取得する',
    },
    milestone2: {
      title: 'IELTS試験',
      description: '国際的な認知のために目標バンドスコア7.0を達成する',
    },
    milestone3: {
      title: '初のAIプロジェクト',
      description:
        'IoT統合を含む初のディープラーニングプロジェクトを完成させ、本番環境にデプロイする',
    },
    milestone4: {
      title: 'コンピュータービジョンアプリ',
      description:
        '実際のユースケースでコンピュータービジョンアプリケーションを本番環境にデプロイする',
    },
  },
  education: {
    degree1: '学士号（コンピューターサイエンス）',
    school1: 'ホーチミン市工業商業大学 (HUIT)',
    details1: {
      item1: '専攻：ソフトウェア工学',
      item2: 'GPA: 3.4/4.0',
      item3:
        '関連科目：IoT、ウェブプログラミング (ASP.NET)、ビッグデータ、オープンソース開発 (PHP)、NoSQL (MongoDB)、クラウドコンピューティング (Azure)、RDBMS (SQL Server & MySQL)',
    },
  },
  experience: [
    {
      period: '2025年8月 - 現在',
      position: 'フルスタック開発者',
      company: '果物輸出会社......',
      type: 'インターンシップ',
      icon: 'mdi-code-tags',
      iconColor: 'primary',
      chipColor: 'success',
      details: [
        '輸出入会社の業務要件を満たすためのソフトウェアエコシステムを開発。',
        '紹介ウェブサイトと製品管理にVue.jsを使用。',
        '内部管理システムにASP.NET、SQL Server、WinFormsを使用。',
        'Dockerでパッケージ化し、Azureサービスに展開。',
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
      period: '2025年7月 - 現在',
      position: 'デジタルヒューマン（仮想教務アドバイザー）研究開発メンバー',
      company: 'HUIT - 講師：グエン・クオック・スー',
      type: '研究メンバー',
      icon: 'mdi-school-outline',
      iconColor: 'info',
      chipColor: 'info',
      details: [
        'HUITの科目データとトレーニングプログラムの学習成果に関するウェブサイトを開発。',
        '学生に学業やキャリアについて助言するためのLLM（RAG）モデルを構築。',
        'LLMモデルに追加のパラメータを提供するために、デジタルヒューマン用の統合IoTを開発。',
        'FastAPIを使用してデジタルヒューマン用のAPIを構築し、モデル用にMongoDBベクターデータベースを使用。',
        'Azureにサービスを展開。',
        'モデル用のMongoDBベクターデータベース。',
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

  favoritesDetails: {
    music: {
      jujutsu: '呪術廻戦 第2期',
      bocchi: 'ぼっち・ざ・ろっく！',
      hatsune_miku: '初音ミク',
      more_than_words: {
        title: 'More Than Words',
        artist: '羊文学',
      },
      seiza_ni_naretara: {
        title: '星座になれたら',
        artist: '結束バンド',
      },
      shoujo_rei: {
        title: '少女レイ',
        artist: 'みきとP',
      },
      flos: {
        title: 'フロス',
        artist: 'R Sound Design',
      },
    },
    anime: {
      takopi: {
        title: 'タコピーの原罪',
        description: '幸せをもたらそうとする宇宙人が、地球の厳しい現実に直面する切ない物語。',
      },
      hibike: {
        title: '響け！ユーフォニアム',
        description: '黄前久美子と北宇治高校吹奏楽部が全国大会を目指す旅を追う。',
      },
      codegeass: {
        title: 'コードギアス 反逆のルルーシュ',
        description:
          'ルルーシュ・ヴィ・ブリタニアがギアスという力を手に入れ、神聖ブリタニア帝国に対する反乱を率いる。',
      },
      kon: {
        title: 'けいおん！',
        description: '軽音楽部の少女たちの、愛らしく笑いに満ちた学園生活。',
      },
    },
    manga: {
      chainsaw: {
        title: 'チェンソーマン',
        description: '借金を抱えた若者デンジが、チェンソーの悪魔の心臓を持つデビルハンターになる。',
      },
      lookback: {
        title: 'ルックバック',
        description: '創造性、友情、そして人生の異なる道について描いた感動的なワンショット。',
      },
      goodbye: {
        title: 'さよなら絵梨',
        description: '亡くなる母についての映画を作る少年を通して、現実とフィクションの境界を探る。',
      },
    },
    tech: {
      ml: {
        name: '機械学習',
        description: 'ニューラルネットワーク、深層学習アルゴリズム、AIアプリケーションを探求する。',
      },
      cloud: {
        name: 'クラウドコンピューティング',
        description: 'AWS、Azure、Dockerなどのコンテナ化技術を学ぶ。',
      },
      blockchain: {
        name: 'ブロックチェーン',
        description: '暗号通貨、スマートコントラクト、分散型アプリケーションを理解する。',
      },
      devops: {
        name: 'DevOps',
        description: 'CI/CDパイプライン、Infrastructure as Code、自動化を実装する。',
      },
      cybersecurity: {
        name: 'サイバーセキュリティ',
        description: '倫理的ハッキング、侵入テスト、セキュリティフレームワークを学ぶ。',
      },
      quantum: {
        name: '量子コンピューティング',
        description: '量子アルゴリズム、量子回路、量子プログラミングを探求する。',
      },
    },
  },
}
