const scrollSpy = () => {
    const sections = document.querySelectorAll('.section');

    window.onscroll = () => {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (const s in sections) {
            // biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
            if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPosition) {
                const id = sections[s].id;
                const selected = document.querySelector('.selected');
                if (selected !== null) {
                    selected.classList.remove('selected');
                }
                const next = document.querySelector(`a[onclick*="scrollToAnchor('#${id}')"]`);
                if (next !== null) {
                    next.parentNode.classList.add('selected');
                }
            }
        }
    }
}

const scrollToAnchor = (anchor) => {
    document.querySelector(anchor).scrollIntoView();
}

scrollSpy();