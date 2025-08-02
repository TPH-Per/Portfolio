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
      image: 'https://cdn.myanimelist.net/images/anime/1826/123984.jpg',
      rating: '8.1',
      ratingColor: 'orange',
      description: t('favoritesDetails.anime.takopi.description'),
      genres: ['Drama', 'Psychological'],
    },
    {
      id: 2,
      title: t('favoritesDetails.anime.hibike.title'),
      studio: 'Kyoto Animation',
      image: 'https://cdn.myanimelist.net/images/anime/12/75561.jpg',
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
      image: 'https://cdn.myanimelist.net/images/anime/10/76121.jpg',
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
      image: 'https://cdn.myanimelist.net/images/manga/3/212343.jpg',
      description: t('favoritesDetails.manga.chainsaw.description'),
      chapters: '150+',
      status: 'Ongoing',
      statusColor: 'green',
    },
    {
      id: 2,
      title: t('favoritesDetails.manga.lookback.title'),
      author: 'Tatsuki Fujimoto',
      image: 'https://cdn.myanimelist.net/images/manga/1/256336.jpg',
      description: t('favoritesDetails.manga.lookback.description'),
      chapters: '1',
      status: 'Completed',
      statusColor: 'blue',
    },
    {
      id: 3,
      title: t('favoritesDetails.manga.goodbye.title'),
      author: 'Tatsuki Fujimoto',
      image: 'https://cdn.myanimelist.net/images/manga/2/267770.jpg',
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
      progress: 75,
      tags: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
    },
    {
      id: 2,
      name: t('favoritesDetails.tech.cloud.name'),
      icon: 'mdi-cloud',
      color: '#4ECDC4',
      description: t('favoritesDetails.tech.cloud.description'),
      progress: 60,
      tags: ['AWS', 'Docker', 'Kubernetes'],
    },
    {
      id: 3,
      name: t('favoritesDetails.tech.blockchain.name'),
      icon: 'mdi-currency-btc',
      color: '#45B7D1',
      description: t('favoritesDetails.tech.blockchain.description'),
      progress: 45,
      tags: ['Solidity', 'Web3.js', 'Ethereum'],
    },
    {
      id: 4,
      name: t('favoritesDetails.tech.devops.name'),
      icon: 'mdi-cogs',
      color: '#96CEB4',
      description: t('favoritesDetails.tech.devops.description'),
      progress: 70,
      tags: ['Jenkins', 'Terraform', 'GitLab CI'],
    },
    {
      id: 5,
      name: t('favoritesDetails.tech.cybersecurity.name'),
      icon: 'mdi-shield-lock',
      color: '#FFEAA7',
      description: t('favoritesDetails.tech.cybersecurity.description'),
      progress: 55,
      tags: ['Kali Linux', 'OWASP', 'Wireshark'],
    },
    {
      id: 6,
      name: t('favoritesDetails.tech.quantum.name'),
      icon: 'mdi-atom',
      color: '#DDA0DD',
      description: t('favoritesDetails.tech.quantum.description'),
      progress: 30,
      tags: ['Qiskit', 'Cirq', 'Q#'],
    },
  ])

  // Music data giữ nguyên vì chủ yếu là tên bài hát và nghệ sĩ
  const anisonList = computed(() => [
    {
      id: 1,
      title: t('favoritesDetails.music.more_than_words.title'),
      artist: t('favoritesDetails.music.more_than_words.artist'),
      image: 'https://i1.sndcdn.com/artworks-96yS3458x2c2SUwP-d1gBEQ-t500x500.jpg',
      anime: t('favoritesDetails.music.jujutsu'),
    },
    {
      id: 2,
      title: t('favoritesDetails.music.seiza_ni_naretara.title'),
      artist: t('favoritesDetails.music.seiza_ni_naretara.artist'),
      image: 'https://i1.sndcdn.com/artworks-A6564N4285uLmwI1-0l1g4Q-t500x500.jpg',
      anime: t('favoritesDetails.music.bocchi'),
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
    },
    {
      id: 2,
      title: t('favoritesDetails.music.flos.title'),
      artist: t('favoritesDetails.music.flos.artist'),
      vocaloid: t('favoritesDetails.music.hatsune_miku'),
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
