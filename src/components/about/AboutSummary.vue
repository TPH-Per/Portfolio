<script setup>
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const summaryText = computed(() => t('about.summary'))
const displayedSummary = ref('')

const typewriterEffect = () => {
  let index = 0
  const text = summaryText.value
  const interval = setInterval(() => {
    if (index < text.length) {
      displayedSummary.value += text[index]
      index++
    } else {
      clearInterval(interval)
    }
  }, 30)
}

onMounted(() => {
  setTimeout(typewriterEffect, 1000)
})
</script>
