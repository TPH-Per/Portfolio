import { ref } from 'vue'

export function useTimeline() {
  const timeline = ref([
    {
      id: 1,
      date: 'July 2025',
      title: 'JLPT N2 Exam',
      description: 'Take the Japanese Language Proficiency Test N2',
      completed: false,
    },
    {
      id: 2,
      date: 'September 2025',
      title: 'IELTS Test',
      description: 'Achieve target band score of 7.0',
      completed: false,
    },
    {
      id: 3,
      date: 'December 2025',
      title: 'First AI Project',
      description: 'Complete first Deep Learning project with IoT integration',
      completed: false,
    },
    {
      id: 4,
      date: 'March 2026',
      title: 'Computer Vision App',
      description: 'Deploy computer vision application to production',
      completed: false,
    },
  ])

  const addMilestone = (milestone) => {
    timeline.value.push({
      id: Date.now(),
      completed: false,
      ...milestone,
    })
  }

  const toggleMilestoneCompletion = (id) => {
    const milestone = timeline.value.find((m) => m.id === id)
    if (milestone) {
      milestone.completed = !milestone.completed
    }
  }

  const removeMilestone = (id) => {
    const index = timeline.value.findIndex((m) => m.id === id)
    if (index > -1) {
      timeline.value.splice(index, 1)
    }
  }

  return {
    timeline,
    addMilestone,
    toggleMilestoneCompletion,
    removeMilestone,
  }
}
