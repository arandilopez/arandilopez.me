export const headingAnchors = () => {
    if (!document.body.classList.contains('post'))
        return
    document.querySelectorAll('.article h2[id], .article h3[id]').forEach((header) => {
        let anchorLink = document.createElement('a')
        anchorLink.innerText = '#'
        anchorLink.href = `#${header.id}`
        anchorLink.classList.add('heading-anchor')
        header.appendChild(anchorLink)
    })
}
