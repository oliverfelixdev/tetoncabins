const cards = document.querySelectorAll(".card")
cards.forEach(card => {
    const cardXPos = card.getBoundingClientRect().left
    const cardYPos = card.getBoundingClientRect().top
    const width = card.getBoundingClientRect().width
    const height = card.getBoundingClientRect().height

    TweenLite.set(card, {
        transformPerspective: 900,
        transformOrigin: 'center center -10'
    })

    function onMouseMove(e) {
        const elRelativeXPos = e.pageX - cardXPos
        const elRelativeYPos = e.pageY - cardYPos
        const xPos = ((elRelativeXPos / width) - 0.5) * 2
        const yPos = ((elRelativeYPos / height) - 0.5) * 2
        const rotationXValue = 25 * yPos
        const rotationYValue = -25 * xPos

        TweenLite.to(card, 1, {
            rotationY: rotationYValue,
            rotationX: rotationXValue,
            ease: Expo.easeOut,
        })
    }

    card.addEventListener('mousemove', onMouseMove)
})