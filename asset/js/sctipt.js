



document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('#openForm').forEach(item =>
        item.addEventListener('click', () => {
            document.getElementById('popup').style.display = 'flex';
            // Заблокировать скролл
            document.body.classList.add('overflow-hidden');
        })
    );
    
    document.querySelectorAll('#close').forEach(item =>
        item.addEventListener('click', () => {
            document.getElementById('popup').style.display = 'none';
            document.getElementById('popupThank').style.display = 'none';
            // Разблокировать скролл
            document.body.classList.remove('overflow-hidden');
        })
    );

    const accordionButtons = document.querySelectorAll('.accordion-button');
    const accordionIcons = document.querySelectorAll('.accordion-icon');
    const accordionPanels = document.querySelectorAll('.accordion-panel');

    accordionButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const panel = accordionPanels[index];
            const icon = accordionIcons[index];
            const isPanelHidden = panel.classList.toggle('hidden');
            icon.src = isPanelHidden ? './asset/Polygon 1.svg' : './asset/Polygon 2.svg';
            if (isPanelHidden) {
                button.style.backgroundColor = '';
                button.style.color = '';
            } else {
                button.style.backgroundColor = '#03254A';
                button.style.color = 'white';
            }
        });
    });

    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');

        if (window.scrollY > 50) {
            header.classList.add('bg-white', 'md:py-3', 'py-[0.1rem]','shadow-md');
            header.classList.remove('bg-transparent', 'md:py-9');
        } else {
            header.classList.add('bg-transparent', 'md:py-9');
            header.classList.remove('bg-white', 'md:py-3', 'py-[0.1rem]', 'shadow-md');
        }
    });

    document.querySelectorAll('#accordion').forEach(item =>
        item.addEventListener('click', () => {
            let panel = document.getElementById('panel');
            if (panel.style.display === 'flex') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'flex';
            }
        })
    );
});

let openMenu = document.getElementById('openMenu')
let Menu = document.getElementById('Menu')
openMenu.addEventListener('click', () => {
    if (Menu.style.display === 'flex') {
        Menu.style.display = 'none';
    } else {
        Menu.style.display = 'flex';
    }
}
)
document.querySelectorAll("a").forEach(item =>
    item.addEventListener('click', () => {
        Menu.style.display = 'none';
        console.log(item)
    }))

