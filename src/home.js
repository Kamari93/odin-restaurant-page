function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const homeImage = document.createElement('img');
    homeImage.src = 'images/horn.png';
    homeImage.alt = 'Blueberry pancakes';

    home.appendChild(createParagraph(`Don't Panic It's Organic!`));
    home.appendChild(createParagraph(' A delicous assortment of freshly made to order pancakes topped with your choice of organically grown fruit and coupled with relaxing live music.'));
    home.appendChild(homeImage);
    home.appendChild(createParagraph("Order online or visit us!"));

    return home;
};

function createHeaderOne(text) {
    const header = document.createElement('h1');
    header.textContent = text;
    return header;
};

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
};

function loadHome() {
    // the main var will change later id content -> main
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());

};

export default loadHome;