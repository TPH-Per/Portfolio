import { ref } from 'vue'

import ieltsLogo from '@/assets/ieltsLogo.png'
import jlptLogo from '@/assets/jlptLogo.png'

export function useCertificatesData() {
  // const { t } = useI18n()

  const certificates = ref([
    {
      // --- PHẦN THAY ĐỔI BẮT ĐẦU ---
      logo: ieltsLogo, // 2. Thêm thuộc tính logo vào đây
      // --- PHẦN THAY ĐỔI KẾT THÚC ---
      title: 'IELTS 5.5 Overall',
      issuer: 'British Council',
      date: '2025-03',
      // description: t('certificates.ielts.description'),
      icon: 'mdi-earth',
      color: 'blue-darken-2',
      verified: true,
      // credentialId: '12345-ABC',
      url: '#', // Thay bằng link thật
      skills: ['Listening: 5.5', 'Reading: 5.5', 'Writing: 6', 'Speaking: 5.5'],
      //rating: 5,
    },
    {
      // --- PHẦN THAY ĐỔI BẮT ĐẦU ---
      logo: jlptLogo, // 2. Thêm thuộc tính logo vào đây
      // --- PHẦN THAY ĐỔI KẾT THÚC ---
      title: 'JLPT N4',
      issuer: 'The Japan Foundation',
      date: '2025-7',
      // description: t('certificates.jlpt.description'),
      icon: 'mdi-ideogram-cjk-variant',
      color: 'red-darken-2',
      verified: true,
      // credentialId: '67890-DEF',
      url: '#', // Thay bằng link thật
      skills: ['読解 (Reading)', '聴解 (Listening)', '言語知識 (Language Knowledge)'],
      // rating: 5,
    },
    // Thêm các chứng chỉ khác ở đây...
  ])

  return { certificates }
}
