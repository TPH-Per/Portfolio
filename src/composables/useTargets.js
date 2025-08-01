import { ref, computed } from 'vue'

export function useTargets() {
  const targets = ref([
    {
      id: 1,
      title: 'JLPT N2',
      description: 'Master Japanese language proficiency at N2 level for career advancement',
      progress: 75,
      status: 'In Progress',
      color: 'red',
      gradient: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
      icon: 'mdi-translate',
      details: [
        { label: 'Kanji', value: '80% completed', icon: 'mdi-ideogram-cjk' },
        { label: 'Grammar', value: '70% completed', icon: 'mdi-book-open-variant' },
        { label: 'Listening', value: '75% completed', icon: 'mdi-ear-hearing' },
        { label: 'Reading', value: '78% completed', icon: 'mdi-book-open-page-variant' },
      ],
    },
    {
      id: 2,
      title: 'IELTS 7.0',
      description: 'Achieve IELTS band 7.0 for international opportunities',
      progress: 60,
      status: 'In Progress',
      color: 'blue',
      gradient: 'linear-gradient(135deg, #4dabf7, #74c0fc)',
      icon: 'mdi-earth',
      details: [
        { label: 'Speaking', value: '6.5 current', icon: 'mdi-account-voice' },
        { label: 'Writing', value: '6.0 current', icon: 'mdi-pencil' },
        { label: 'Reading', value: '7.5 current', icon: 'mdi-book-open' },
        { label: 'Listening', value: '7.0 current', icon: 'mdi-headphones' },
      ],
    },
    {
      id: 3,
      title: 'AI/ML Projects',
      description: 'Develop projects integrating Deep Learning, IoT, and Computer Vision',
      progress: 45,
      status: 'Planning',
      color: 'purple',
      gradient: 'linear-gradient(135deg, #845ec2, #b39bc8)',
      icon: 'mdi-robot',
      details: [
        { label: 'Deep Learning', value: 'TensorFlow, PyTorch', icon: 'mdi-brain' },
        { label: 'Computer Vision', value: 'OpenCV, YOLO', icon: 'mdi-eye' },
        { label: 'IoT Integration', value: 'Raspberry Pi, Arduino', icon: 'mdi-wifi' },
        { label: 'Cloud Deploy', value: 'AWS, GCP planning', icon: 'mdi-cloud' },
      ],
    },
  ])

  const overallProgress = computed(() => {
    const total = targets.value.reduce((sum, target) => sum + target.progress, 0)
    return total / targets.value.length
  })

  const addTarget = (target) => {
    targets.value.push({
      id: Date.now(),
      ...target,
    })
  }

  const updateTargetProgress = (id, progress) => {
    const target = targets.value.find((t) => t.id === id)
    if (target) {
      target.progress = progress
    }
  }

  const removeTarget = (id) => {
    const index = targets.value.findIndex((t) => t.id === id)
    if (index > -1) {
      targets.value.splice(index, 1)
    }
  }

  return {
    targets,
    overallProgress,
    addTarget,
    updateTargetProgress,
    removeTarget,
  }
}
