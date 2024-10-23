


//свитч
const listItems = document.querySelectorAll('li');
const imageDisplay = document.getElementById('image-display');

listItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const newImage = item.getAttribute('data-image');
        imageDisplay.classList.add('opacity-0'); // Уменьшаем видимость

        setTimeout(() => {
            imageDisplay.src = newImage; // Меняем изображение
            imageDisplay.classList.remove('opacity-0'); // Восстанавливаем видимость
        }, 300); // Задержка на время перехода
    });
});



// скролл меню
const header = document.getElementById('header');
window.addEventListener('scroll', function () {
    if (window.scrollY > 70) {
        header.style.backgroundColor = 'rgba(0, 89, 255, 1)';
        header.style.padding = "2rem 2rem"
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.padding = '2rem 2rem';
    }
});

// кнопка наверх
let scrollTopButton = document.getElementById('scrollTopButton');
scrollTopButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// меню для маленькой версии
const openMenuButton = document.getElementById('openMenuSmall');
const menu = document.getElementById('menuSmall');
const menuLinks = menu.querySelectorAll('a');
let menuIcon = document.getElementById('menuIcon');
let currentSrc = menuIcon.getAttribute('src');
function closeMenu() {
    menu.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openMenu() {
    menu.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    header.style.backgroundColor = 'rgba(0, 89, 255, 1)';
    header.style.padding = "2rem 2rem"
}

openMenuButton.addEventListener('click', function () {
    if (menu.style.display === 'flex' || getComputedStyle(menu).display === 'flex') {
        closeMenu();
        menuIcon.setAttribute('src', './asset/бургер.svg');
    } else {
        openMenu();
        menuIcon.setAttribute('src', './asset/cross.svg');
    }
});



// Добавляем слушатели событий для каждой ссылки внутри блока с id "menu"
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        closeMenu();
        menuIcon.setAttribute('src', './asset/бургер.svg');
    });
});

// Вопросы
const accordionOpen = document.getElementById('accordion-open');
// Ищем все кнопки внутри контейнера
const buttons = accordionOpen.querySelectorAll('[id^="button-"]');
// Добавляем слушателя событий click к каждой кнопке
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const currentBgColor = button.dataset.bgColor;
        if (!currentBgColor || currentBgColor === '#82B0F5') {
            button.dataset.bgColor = 'rgba(0, 89, 255, 1)';
            button.textColor = 'white';
            button.Rradius = '0rem'
        } else {
            // Иначе устанавливаем первый цвет
            button.dataset.bgColor = '#82B0F5';
            button.textColor = 'white';
            button.Rradius = '0.75rem'
        }
        // Применяем цвет фона и текста кнопки
        button.style.backgroundColor = button.dataset.bgColor;
        button.style.color = button.textColor;
        button.style.borderBottomRightRadius = button.Rradius;
        button.style.borderBottomLeftRadius = button.Rradius;
    });
});




// формы
document.addEventListener('DOMContentLoaded', function () {
    event.preventDefault();

    document.getElementById('close').addEventListener('click', function () {
        document.getElementById('popupContainer').style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    //document.getElementById('send').addEventListener('click', function () {
        //document.getElementById('popupContainer').style.display = 'none';
        //document.getElementById('popupThank').style.display = 'flex';
    //});

    document.getElementById('close1').addEventListener('click', function () {
        document.getElementById('popupThank').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    let openButtons = document.querySelectorAll('[id="openPopupButton"]');

    openButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            document.getElementById('popupContainer').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    document.getElementById('opengetAQuoteThank').addEventListener('click', function () {
        document.getElementById('getAQuote').style.display = 'none';
        document.getElementById('getAQuoteThank').style.display = 'flex';
    });

    document.getElementById('opengetAQuoteThank1').addEventListener('click', function () {
        document.getElementById('getAQuote1').style.display = 'none';
        document.getElementById('getAQuoteThank1').style.display = 'flex';
    });
    document.getElementById('openfooterForm').addEventListener('click', function () {
        document.getElementById('footerForm').style.display = 'none';
        document.getElementById('footerThank').style.display = 'flex';
    });

    document.getElementById('send-1').addEventListener('click', function () {
        document.getElementById('form-base-2').style.display = 'none';
        document.getElementById('ThanksFile').style.display = 'flex';
    });

});


// для галлерии проекты
document.addEventListener("DOMContentLoaded", function () {
    const projectCarouselContainer = document.querySelector("#galleryProject");
    const popupCarouselContainer = document.querySelector("#gallerypo");

    const projectItems = projectCarouselContainer.children;
    const popupItems = popupCarouselContainer.children;

    let currentIndex = 0;

    function showItem(index, direction) {
        for (let i = 0; i < projectItems.length; i++) {
            if (direction === "left") {
                projectItems[i].classList.add("fadeOutAndSlideLeft");
                popupItems[i].classList.add("fadeOutAndSlideLeft");
            } else if (direction === "right") {
                projectItems[i].classList.add("fadeOutAndSlideRight");
                popupItems[i].classList.add("fadeOutAndSlideRight");
            }
        }

        setTimeout(function () {
            for (let i = 0; i < projectItems.length; i++) {
                projectItems[i].classList.add("hidden");
                projectItems[i].classList.remove("fadeOutAndSlideLeft", "fadeOutAndSlideRight");

                popupItems[i].classList.add("hidden");
                popupItems[i].classList.remove("fadeOutAndSlideLeft", "fadeOutAndSlideRight");
            }

            projectItems[index].classList.remove("hidden");
            projectItems[index].classList.add("fadeInAndSlideIn");

            popupItems[index].classList.remove("hidden");
            popupItems[index].classList.add("fadeInAndSlideIn");
        }, 800);
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % projectItems.length;
        showItem(currentIndex, "left");
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + projectItems.length) % projectItems.length;
        showItem(currentIndex, "right");
    }

    document.querySelectorAll("#buttonstart").forEach(function (button) {
        button.addEventListener("click", prevItem);
    });

    document.querySelectorAll("#buttonend").forEach(function (button) {
        button.addEventListener("click", nextItem);
    });

    showItem(currentIndex, "left");
});

// внутри галерии
document.addEventListener("DOMContentLoaded", function () {
    const smallImages = document.querySelectorAll("#small-image .w-full.h-full");
    const largeImage = document.querySelector("#large-image");

    smallImages.forEach((smallImage) => {
        smallImage.addEventListener("click", function () {
            const backgroundImage = window.getComputedStyle(this).backgroundImage;
            const imageUrl = backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
            largeImage.style.backgroundImage = `url('${imageUrl}')`;
            console.log(imageUrl);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const smallImages1 = document.querySelectorAll("#small-image1 .w-full.h-full");
    const largeImage1 = document.querySelector("#large-image1");

    smallImages1.forEach((smallImage) => {
        smallImage.addEventListener("click", function () {
            const backgroundImage = window.getComputedStyle(this).backgroundImage;
            const imageUrl = backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
            largeImage1.style.backgroundImage = `url('${imageUrl}')`;
            console.log(imageUrl);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const smallImages2 = document.querySelectorAll("#small-image2 .w-full.h-full");
    const largeImage2 = document.querySelector("#large-image2");
    smallImages2.forEach((smallImage) => {
        smallImage.addEventListener("click", function () {
            const backgroundImage = window.getComputedStyle(this).backgroundImage;
            const imageUrl = backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
            largeImage2.style.backgroundImage = `url('${imageUrl}')`;
            console.log(imageUrl);
        });
    });
});

// открытие галереи попап
let GalleryPopup = document.querySelectorAll('#openPopupGallery');
GalleryPopup.forEach(function (button) {
    button.addEventListener('click', function () {
        document.getElementById('gallerypopup').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

// закрыть галлерею
let close2 = document.querySelectorAll('#close2')
close2.forEach((button) =>
    button.addEventListener('click', function () {
        document.getElementById('gallerypopup').style.display = 'none';
        document.body.style.overflow = 'auto';

    }))

// для галлерии решения
function changeImage(src) {
    document.getElementById('cubeImage').src = src;
}
function changeImage1(src) {
    document.getElementById('cubeImage1').src = src;
}
function changeImage2(src) {
    document.getElementById('cubeImage2').src = src;
}


// для маленькой галлереи скролл услуги
document.addEventListener("DOMContentLoaded", function () {

    let items = Array.from(document.getElementById("items-list1").children)
    let res = items.map((item, i) => ({ item, button: document.getElementById(`item${i + 1}button`) }))

    // define an observer instance
    let observer = new IntersectionObserver(onIntersection, {
        root: null,   // default is the viewport
        threshold: 0.8 // percentage of target's visible area. Triggers "onIntersection"
    })

    // callback is called on intersection change
    function onIntersection(entries, opts) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let id = entry.target.id + "button"
                let target = document.getElementById(id)

                res.forEach(r => {
                    r.button.setAttribute("aria-selected", false)
                    let temp = document.createElement("input")
                    temp.focus()
                    delete temp
                })
                target.setAttribute("aria-selected", true)
            }
        })
    }

    res.forEach(r => {
        observer.observe(r.item)
        r.button.onclick = (event) => {
            event.preventDefault()
            r.item.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
            res.forEach(k => k.button.setAttribute("aria-selected", false))
            r.button.setAttribute("aria-selected", true)
        }
    })

});