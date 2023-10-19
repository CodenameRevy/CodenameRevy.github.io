const spyScroll = () => {
    const sections = document.querySelectorAll('.section');

    window.onscroll = () => {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (let s in sections) {
            if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPosition) {
                const id = sections[s].id;
                var selected = document.querySelector('.selected');
                if (selected !== null) {
                    selected.classList.remove('selected');
                }
                var next = document.querySelector(`a[href*="${id}"]`);
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

spyScroll();