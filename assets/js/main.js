async function run() {
    // Guides

    const guides = await fetch('/guides.html').then(res => {return res.text()});
    document.getElementById('guides').innerHTML += guides;

    // Cards

    const data = await fetch('/data.json').then(res => {return res.json()});

    for (let i = 0; i < data.categories.length; i++) {
        const category = data.categories[i];

        var template = document.getElementById('category-template');

        var clone = template.content.cloneNode(true);
        clone.querySelectorAll('.category')[0].id = category.title;

        var h1 = clone.querySelectorAll('h1');
        h1[0].textContent = category.title;
        h1[0].style.borderColor = category.color;

        var div = clone.querySelectorAll('div');
        div[1].id = category.title + '-content';

        document.getElementById('categories').appendChild(clone);
    }

    for (let i = 0; i < data.items.length; i++) {
        const item = data.items[i];
        
        var template = document.getElementById('card-template');
        var clone = template.content.cloneNode(true);
        clone.querySelectorAll('.card')[0].id = item.title;

        var h1 = clone.querySelectorAll('h1');
        h1[0].textContent = item.title;
        h1[1].textContent = item.description;

        clone.querySelectorAll('.image')[0].style.backgroundImage = 'url(\'/assets/img/' + item.image + '\')';

        var a = clone.querySelectorAll('a');
        a[0].setAttribute('href', `/dl/${item.filename}`);
        a[1].setAttribute('href', '#' + item.type.text);
        
        var div = clone.querySelectorAll('div');
        for (let i = 0; i < item.tags.length; i++) {
            const tag = item.tags[i];
            div[2].appendChild(await getTag(tag));
        }
        div[2].appendChild(await getTag(item.type));

        document.getElementById(item.category + '-content').appendChild(clone);
    }
}

async function getTag(data) {
    var template = document.getElementById('card-tag-template');
    var clone = template.content.cloneNode(true);

    var p = clone.querySelectorAll('p');
    p[0].textContent = data.text;
    p[0].classList.add('bg-' + data.color);

    return clone
}

run()