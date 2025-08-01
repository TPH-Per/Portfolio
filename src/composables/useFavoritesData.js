import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useFavoritesData() {
  const { t } = useI18n()

  const categories = computed(() => [
    { id: 'anime', name: t('favorites.anime'), icon: 'mdi-television-play' },
    { id: 'manga', name: t('favorites.manga'), icon: 'mdi-book-open-page-variant' },
    { id: 'music', name: t('favorites.music'), icon: 'mdi-music-note' },
    { id: 'tech', name: t('favorites.technology'), icon: 'mdi-code-tags' },
  ])

  // Anime data với i18n
  const animeList = computed(() => [
    {
      id: 1,
      title: 'Takopi no Genzai',
      studio: 'OLM',
      image: 'https://cdn.myanimelist.net/images/anime/1826/123984.jpg',
      rating: '8.1',
      ratingColor: 'orange',
      description: t(
        'favorites.anime1.description',
        'Câu chuyện đau lòng về một người ngoài hành tinh cố gắng mang lại hạnh phúc nhưng lại đối mặt với thực tại phũ phàng.',
      ),
      genres: ['Drama', 'Psychological'],
    },
    {
      id: 2,
      title: 'Hibike! Euphonium',
      studio: 'Kyoto Animation',
      image: 'https://cdn.myanimelist.net/images/anime/12/75561.jpg',
      rating: '8.9',
      ratingColor: 'green',
      description: t(
        'favorites.anime2.description',
        'Theo chân Kumiko Oumae và hành trình của dàn nhạc trường Kitauji hướng tới giải quốc gia.',
      ),
      genres: ['Music', 'Drama', 'School'],
    },
    {
      id: 3,
      title: 'Code Geass',
      studio: 'Sunrise',
      image: 'https://cdn.myanimelist.net/images/anime/5/50331.jpg',
      rating: '9.5',
      ratingColor: 'red',
      description: t(
        'favorites.anime3.description',
        'Lelouch vi Britannia nhận được sức mạnh Geass và lãnh đạo một cuộc nổi dậy chống lại Đế quốc Britannia.',
      ),
      genres: ['Mecha', 'Military', 'Super Power'],
    },
    {
      id: 4,
      title: 'K-On!',
      studio: 'Kyoto Animation',
      image: 'https://cdn.myanimelist.net/images/anime/10/76121.jpg',
      rating: '8.7',
      ratingColor: 'pink',
      description: t(
        'favorites.anime4.description',
        'Cuộc sống học đường đáng yêu và đầy ắp tiếng cười của các cô gái trong câu lạc bộ nhạc nhẹ.',
      ),
      genres: ['Music', 'Comedy', 'Slice of Life'],
    },
  ])

  // Manga data với i18n
  const mangaList = computed(() => [
    {
      id: 1,
      title: 'Chainsaw Man',
      author: 'Tatsuki Fujimoto',
      image: 'https://cdn.myanimelist.net/images/manga/3/212343.jpg',
      description: t(
        'favorites.manga1.description',
        'Denji, một chàng trai trẻ mắc nợ, trở thành Thợ Săn Quỷ với trái tim của một con quỷ cưa.',
      ),
      chapters: '150+',
      status: 'Ongoing',
      statusColor: 'green',
    },
    {
      id: 2,
      title: 'Look Back',
      author: 'Tatsuki Fujimoto',
      image: 'https://cdn.myanimelist.net/images/manga/1/256336.jpg',
      description: t(
        'favorites.manga2.description',
        'Một one-shot đầy cảm xúc về sự sáng tạo, tình bạn và những con đường khác nhau trong cuộc sống.',
      ),
      chapters: '1',
      status: 'Completed',
      statusColor: 'blue',
    },
    {
      id: 3,
      title: 'Goodbye, Eri',
      author: 'Tatsuki Fujimoto',
      image: 'https://cdn.myanimelist.net/images/manga/2/267770.jpg',
      description: t(
        'favorites.manga3.description',
        'Khám phá ranh giới giữa thực và ảo qua lăng kính của một cậu bé làm phim về người mẹ sắp mất.',
      ),
      chapters: '1',
      status: 'Completed',
      statusColor: 'blue',
    },
  ])

  // Tech data với i18n
  const techList = computed(() => [
    {
      id: 1,
      name: t('favorites.tech1.name', 'Machine Learning'),
      icon: 'mdi-brain',
      color: '#FF6B6B',
      description: t(
        'favorites.tech1.description',
        'Exploring neural networks, deep learning algorithms, and AI applications.',
      ),
      progress: 75,
      tags: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
    },
    {
      id: 2,
      name: t('favorites.tech2.name', 'Cloud Computing'),
      icon: 'mdi-cloud',
      color: '#4ECDC4',
      description: t(
        'favorites.tech2.description',
        'Learning AWS, Azure, and containerization technologies like Docker.',
      ),
      progress: 60,
      tags: ['AWS', 'Docker', 'Kubernetes'],
    },
    {
      id: 3,
      name: t('favorites.tech3.name', 'Blockchain'),
      icon: 'mdi-currency-btc',
      color: '#45B7D1',
      description: t(
        'favorites.tech3.description',
        'Understanding cryptocurrency, smart contracts, and decentralized applications.',
      ),
      progress: 45,
      tags: ['Solidity', 'Web3.js', 'Ethereum'],
    },
    {
      id: 4,
      name: t('favorites.tech4.name', 'DevOps'),
      icon: 'mdi-cogs',
      color: '#96CEB4',
      description: t(
        'favorites.tech4.description',
        'Implementing CI/CD pipelines, infrastructure as code, and automation.',
      ),
      progress: 70,
      tags: ['Jenkins', 'Terraform', 'GitLab CI'],
    },
    {
      id: 5,
      name: t('favorites.tech5.name', 'Cybersecurity'),
      icon: 'mdi-shield-lock',
      color: '#FFEAA7',
      description: t(
        'favorites.tech5.description',
        'Learning ethical hacking, penetration testing, and security frameworks.',
      ),
      progress: 55,
      tags: ['Kali Linux', 'OWASP', 'Wireshark'],
    },
    {
      id: 6,
      name: t('favorites.tech6.name', 'Quantum Computing'),
      icon: 'mdi-atom',
      color: '#DDA0DD',
      description: t(
        'favorites.tech6.description',
        'Exploring quantum algorithms, quantum circuits, and quantum programming.',
      ),
      progress: 30,
      tags: ['Qiskit', 'Cirq', 'Q#'],
    },
  ])

  // Music data giữ nguyên vì chủ yếu là tên bài hát và nghệ sĩ
  const anisonList = ref([
    {
      id: 1,
      title: 'More Than Words',
      artist: 'Hitsujibungaku',
      image: 'https://i1.sndcdn.com/artworks-96yS3458x2c2SUwP-d1gBEQ-t500x500.jpg',
      anime: 'Jujutsu Kaisen S2',
    },
    {
      id: 2,
      title: 'Seiza ni Naretara',
      artist: 'Kessoku Band',
      image: 'https://i1.sndcdn.com/artworks-A6564N4285uLmwI1-0l1g4Q-t500x500.jpg',
      anime: 'Bocchi the Rock!',
    },
  ])

  const vocaloidList = ref([
    {
      id: 1,
      title: 'Shoujo Rei',
      artist: 'Mikito-P',
      vocaloid: 'Hatsune Miku',
      vocaloidColor: 'teal',
      image: 'https://i1.sndcdn.com/artworks-000433292150-m81t2i-t500x500.jpg',
    },
    {
      id: 2,
      title: 'Flos',
      artist: 'R Sound Design',
      vocaloid: 'Hatsune Miku',
      vocaloidColor: 'teal',
      image: 'https://i1.sndcdn.com/artworks-000405021204-p5d2eu-t500x500.jpg',
    },
  ])

  return {
    categories,
    animeList,
    mangaList,
    anisonList,
    vocaloidList,
    techList,
  }
}
