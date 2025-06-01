export default defineNuxtPlugin(() => {
  const route = useRoute()

  onMounted(() => {
    const fullUrl = `https://oligume.pe${route.fullPath.split('?')[0]}`

    let link = document.querySelector("link[rel='canonical']")
    if (link) {
      link.setAttribute("href", fullUrl)
    } else {
      link = document.createElement("link")
      link.setAttribute("rel", "canonical")
      link.setAttribute("href", fullUrl)
      document.head.appendChild(link)
    }
  })
})
