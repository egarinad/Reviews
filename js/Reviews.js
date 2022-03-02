const data = [
    {
        id: 0,
        name: 'Tim Cook',
        job: 'C++ developer',
        img: '/img/tim-cook.jpeg',
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut placeat molestiae rem mollitia hic non quod earum delectus animidolorem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium impedit, voluptate dicta cum aut non similique quis vero quas consectetur suscipit deleniti voluptates, minima quaerat molestiae omnis totam ex maiores!",
    },
    {
        id: 1,
        name: 'Mark Zuckerberg',
        job: 'Web developer',
        img: '/img/mark-zuckerberg.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut placeat molestiae rem mollitia hic non quod earum delectus animi dolorem.Lorem, ipsum dolor sit amet consectetur adipisicing elit Laudantium impedit, voluptate dicta cum aut non similique quis",
    },
    {
        id: 2,
        name: 'Pavel Durov',
        job: 'Java developer',
        img: '/img/pavel-durov.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut placeat molestiae rem mollitia hic non quod earum delectus animi dolorem.Lorem, ipsum dolor sit amet consectetur adipisicing elit Laudantium impedit, voluptate dicta cum aut non similique quisLorem ipsum dolor sit amet consectetur adipisicing elit. Aut placeat molestiae rem mollitia hic non quod earum delectus animi dolorem.Lorem, ipsum dolor sit amet consectetur adipisicing elit Laudantium impedit, voluptate dicta cum aut non similique quis",
    },
    {
        id: 3,
        name: 'Jeff Bezos',
        job: 'JavaScript developer',
        img: '/img/jeff-bezos.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut placeat molestiae rem mollitia hic non quod earum delectus animi dolorem.Lorem, ipsum dolor sit amet consectetur adipisicing elit Laudantium impedit, voluptate dicta cum aut non similique quisLorem ipsum dolor sit amet consectetur adipisicing elit. Aut placeat molestiae rem mollitia hic"
    },
];

const img = document.querySelector('.person-img');
const name = document.querySelector('.review__name');
const job = document.querySelector('.review__job');
const info = document.querySelector('.review__info');

const buttons = document.querySelector('.buttons');
// const prevButton = document.querySelector('.buttons__prev-button');

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showInfo(currentItem);
})

buttons.addEventListener("click", function (e) {
    if (e.target.closest(".buttons__next-button")) {
        if (currentItem < data.length - 1)
            currentItem++;
        else currentItem = 0;
        showInfo(currentItem);
    }
    else if (e.target.closest('.buttons__prev-button')) {
        if (currentItem > 0)
            currentItem--;
        else currentItem = data.length - 1;
        showInfo(currentItem);

    }
})

function showInfo(currentItem) {
    const item = data[currentItem];
    name.innerText = item.name;
    job.innerText = item.job;
    img.src = item.img;
    info.innerText = item.text;
    // console.log(currentItem)
}