window.odometerOptions = {
    format: " ddd", // https://github.hubspot.com/odometer/ Change how digit groups are formatted, and how many digits are shown after the decimal point
};

var kz = {
    zagolovok: 'Қазақстан Республикасы халық есептеуіші',
    ed_izm: 'адам',
    primech: 'Ағымдағы халық санын бағалау Қазақстан Республикасы Ұлттық статистика бюросының деректеріне негізделген.<br> Бағалау ресми емес.',
    pojasnenie: 'Нақты тарихи кезенді көру үшін графикте тышқанмен (саусақпен тартыңыз) қызықтырған уақыт диапазоны аймақты басып жүргізіңіз. Бастапқы жағдайға қайтару үшін жоғары оң жақтағы "Reset zoom" батырмасын басыңыз.',
    nizhn_colontitul: 'Нұрлан Ханжігітов, N.Khanzhigitov@gmail.com, 2020'

};

var ru = {
    zagolovok: 'Счетчик населения Республики Казахстан',
    ed_izm: 'человек',
    primech: 'Оценка текущей численности населения основана на данных Бюро национальной статистики Республики Казахстан.<br> Оценка неофициальная.',
    pojasnenie: 'Чтобы посмотреть конкретный исторический период, на графике нажмите и проведите мышью (растяните пальцами) в районе интересующего Вас временного диапазона. Для возврата графика в исходное состояние, нажмите на появившуюся справа вверху кнопку "Reset zoom".',
    nizhn_colontitul: 'Нурлан Ханжигитов, N.Khanzhigitov@gmail.com, 2020',

};


changeLagnuage();

function changeLagnuage() {
    var language = ru;
    document.querySelectorAll('[text]').forEach(el => {
        el.innerHTML = language[el.getAttribute('text')];
    })
}


const langEl = document.querySelector('.lang_link');
const link = document.querySelectorAll('a');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');
    });
});