const enableSpellcheck = function (mutation) {
    const target = mutation.target

    if (target.isContentEditable) {
        target.setAttribute('spellcheck', true)
    }
}

const initialisePlugin = function () {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            enableSpellcheck(mutation)
        })
    })

    const config = {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ['contenteditable']
    }

    const iframes = document.querySelectorAll('iframe')

    if (iframes.length) {
        iframes.forEach(el => {
            observer.observe(el.contentDocument.body, config)
        })
    }
}

setTimeout(initialisePlugin, 2500)
