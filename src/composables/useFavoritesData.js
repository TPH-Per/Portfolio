import { computed } from 'vue'
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
      title: t('favoritesDetails.anime.takopi.title'),
      studio: 'OLM',
      image:
        'https://tse4.mm.bing.net/th/id/OIP.MeOUiFsCuoUqoxIBa4vn9QHaKe?rs=1&pid=ImgDetMain&o=7&rm=3',
      rating: '8.1',
      ratingColor: 'orange',
      description: t('favoritesDetails.anime.takopi.description'),
      genres: ['Drama', 'Psychological'],
    },
    {
      id: 2,
      title: t('favoritesDetails.anime.hibike.title'),
      studio: 'Kyoto Animation',
      image:
        'https://tse3.mm.bing.net/th/id/OIP.kwtKR4cOTCHVb4s3wyrgZQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
      rating: '8.9',
      ratingColor: 'green',
      description: t('favoritesDetails.anime.hibike.description'),
      genres: ['Music', 'Drama', 'School'],
    },
    {
      id: 3,
      title: t('favoritesDetails.anime.codegeass.title'),
      studio: 'Sunrise',
      image: 'https://cdn.myanimelist.net/images/anime/5/50331.jpg',
      rating: '9.5',
      ratingColor: 'red',
      description: t('favoritesDetails.anime.codegeass.description'),
      genres: ['Mecha', 'Military', 'Super Power'],
    },
    {
      id: 4,
      title: t('favoritesDetails.anime.kon.title'),
      studio: 'Kyoto Animation',
      image:
        'https://tse4.mm.bing.net/th/id/OIP.HG4ExVwJshoC2EhrnhZa7QHaKe?rs=1&pid=ImgDetMain&o=7&rm=3',
      rating: '8.7',
      ratingColor: 'pink',
      description: t('favoritesDetails.anime.kon.description'),
      genres: ['Music', 'Comedy', 'Slice of Life'],
    },
  ])

  // Manga data với i18n
  const mangaList = computed(() => [
    {
      id: 1,
      title: t('favoritesDetails.manga.chainsaw.title'),
      author: 'Tatsuki Fujimoto',
      image:
        'https://cultivarte.mx/wp-content/uploads/2025/07/Chainsaw-Man-El-Arco-de-Reze-pelicula-estreno-octubre-800x445.jpg',
      description: t('favoritesDetails.manga.chainsaw.description'),
      chapters: '150+',
      status: 'Ongoing',
      statusColor: 'green',
    },
    {
      id: 2,
      title: t('favoritesDetails.manga.lookback.title'),
      author: 'Tatsuki Fujimoto',
      image:
        'https://tse4.mm.bing.net/th/id/OIP.qO5tWXZcL30Fe3go_QO0owHaKl?rs=1&pid=ImgDetMain&o=7&rm=3',
      description: t('favoritesDetails.manga.lookback.description'),
      chapters: '1',
      status: 'Completed',
      statusColor: 'blue',
    },
    {
      id: 3,
      title: t('favoritesDetails.manga.goodbye.title'),
      author: 'Tatsuki Fujimoto',
      image:
        'https://tse3.mm.bing.net/th/id/OIP.EcZcKDGjrKR7FKlYgi_GKgHaKi?rs=1&pid=ImgDetMain&o=7&rm=3',
      description: t('favoritesDetails.manga.goodbye.description'),
      chapters: '1',
      status: 'Completed',
      statusColor: 'blue',
    },
  ])

  // Tech data với i18n
  const techList = computed(() => [
    {
      id: 1,
      name: t('favoritesDetails.tech.ml.name'),
      icon: 'mdi-brain',
      color: '#FF6B6B',
      description: t('favoritesDetails.tech.ml.description'),
      progress: 36,
      tags: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
    },
    {
      id: 2,
      name: t('favoritesDetails.tech.cloud.name'),
      icon: 'mdi-cloud',
      color: '#4ECDC4',
      description: t('favoritesDetails.tech.cloud.description'),
      progress: 36,
      tags: ['AWS', 'Docker', 'Kubernetes'],
    },
    {
      id: 4,
      name: t('favoritesDetails.tech.devops.name'),
      icon: 'mdi-cogs',
      color: '#96CEB4',
      description: t('favoritesDetails.tech.devops.description'),
      progress: 36,
      tags: ['Jenkins', 'Terraform', 'GitLab CI'],
    },
    // {
    //   id: 3,
    //   name: t('favoritesDetails.tech.blockchain.name'),
    //   icon: 'mdi-currency-btc',
    //   color: '#45B7D1',
    //   description: t('favoritesDetails.tech.blockchain.description'),
    //   progress: 36,
    //   tags: ['Solidity', 'Web3.js', 'Ethereum'],
    // },

    // {
    //   id: 5,
    //   name: t('favoritesDetails.tech.cybersecurity.name'),
    //   icon: 'mdi-shield-lock',
    //   color: '#FFEAA7',
    //   description: t('favoritesDetails.tech.cybersecurity.description'),
    //   progress: 36,
    //   tags: ['Kali Linux', 'OWASP', 'Wireshark'],
    // },
    // {
    //   id: 6,
    //   name: t('favoritesDetails.tech.quantum.name'),
    //   icon: 'mdi-atom',
    //   color: '#DDA0DD',
    //   description: t('favoritesDetails.tech.quantum.description'),
    //   progress: 36,
    //   tags: ['Qiskit', 'Cirq', 'Q#'],
    // },
  ])

  // Music data giữ nguyên vì chủ yếu là tên bài hát và nghệ sĩ
  const anisonList = computed(() => [
    {
      id: 1,
      title: t('favoritesDetails.music.more_than_words.title'),
      artist: t('favoritesDetails.music.more_than_words.artist'),
      image: 'https://www.youtube.com/watch?v=kGY6N9DL4Jw&list=RDkGY6N9DL4Jw&start_radio=1',
      anime: t('favoritesDetails.music.jujutsu'),
      url: 'https://www.youtube.com/watch?v=kGY6N9DL4Jw',
    },
    {
      id: 2,
      title: t('favoritesDetails.music.seiza_ni_naretara.title'),
      artist: t('favoritesDetails.music.seiza_ni_naretara.artist'),
      image: 'https://i1.sndcdn.com/artworks-A6564N4285uLmwI1-0l1g4Q-t500x500.jpg',
      anime: t('favoritesDetails.music.bocchi'),
      url: 'https://www.youtube.com/watch?v=wSTbdqo-j74&list=RDwSTbdqo-j74&start_radio=1',
    },
  ])

  const vocaloidList = computed(() => [
    {
      id: 1,
      title: t('favoritesDetails.music.shoujo_rei.title'),
      artist: t('favoritesDetails.music.shoujo_rei.artist'),
      vocaloid: t('favoritesDetails.music.hatsune_miku'),
      vocaloidColor: 'teal',
      image: 'https://i1.sndcdn.com/artworks-000433292150-m81t2i-t500x500.jpg',
      url: 'https://www.youtube.com/watch?v=JW3N-HvU0MA&list=RDJW3N-HvU0MA&start_radio=1',
    },
    {
      id: 2,
      title: t('favoritesDetails.music.flos.title'),
      artist: t('favoritesDetails.music.flos.artist'),
      vocaloid: t('favoritesDetails.music.hatsune_miku'),
      vocaloidColor: 'teal',
      image: 'https://i1.sndcdn.com/artworks-000405021204-p5d2eu-t500x500.jpg',
      url: 'https://www.youtube.com/watch?v=bUbOc97FpUA&list=RDbUbOc97FpUA&start_radio=1',
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
