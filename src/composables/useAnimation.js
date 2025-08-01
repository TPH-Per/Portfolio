import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation(threshold = 0.1) {
  let observer = null

  const observeElements = (selector, animationClass) => {
    const elements = document.querySelectorAll(selector)

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass)
          }
        })
      },
      { threshold },
    )

    elements.forEach((el) => observer.observe(el))
  }

  onMounted(() => {
    observeElements('.timeline-item', 'animate-in')
    observeElements('.target-card', 'animate-in')
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    observeElements,
  }
}

export function useParallax() {
  const handleScroll = () => {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll('.parallax')

    parallaxElements.forEach((element) => {
      const speed = element.dataset.speed || 0.5
      const yPos = -(scrolled * speed)
      element.style.transform = `translateY(${yPos}px)`
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    handleScroll,
  }
}
