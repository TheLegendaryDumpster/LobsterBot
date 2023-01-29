function card(config, callback) {
    const { sections } = config;
    let container = document.createElement('div');
    container.classList.add('cardjs-card');

    for (const section of sections) {
        const { type, content } = section;
        if (type.startsWith('h') && type.length == 2) {
            let headerText = document.createElement(type);
            headerText.classList.add('cardjs-header');
            headerText.classList.add('cardjs-text');
            headerText.innerText = content;
            container.appendChild(headerText);
        }
        if (type == 'paragraph') {
            let p = document.createElement('p');
            p.innerText = content;
            p.classList.add('cardjs-paragraph');
            p.classList.add('cardjs-text');
            container.appendChild(p);
        }
        if (type == 'image') {
            let img = document.createElement('img');
            img.src = content;
            img.classList.add('cardjs-image');
            container.appendChild(img);
        }
        if (type == 'button') {
            if (section.buttonType == 'url') {
                let link = document.createElement('a');
                link.href = section.buttonURL;
                let button = document.createElement('button');
                button.innerText = content;
                link.appendChild(button);
                button.classList.add('cardjs-button')
                link.classList.add('cardjs-url-button-main')
                container.appendChild(link)
            }
        }
    }

    callback(container);
}