const one_click = document.querySelector('.bar_menu');

    document.querySelector('#openMenu').addEventListener('click', () => {
        one_click.style.display = 'none';
        document.querySelector('#openMenu').style.display = 'none';
        document.querySelector('#cloesMenu').style.display = 'block';
    })

    document.querySelector('#cloesMenu').addEventListener('click', () => {
        one_click.style.display = 'block';
        document.querySelector('#openMenu').style.display = 'block';
        document.querySelector('#cloesMenu').style.display = 'none';
    })