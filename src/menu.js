function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.append(createMenuItem(
        'Blueberry Coconut',
        `Dive into a tropical paradise with our Blueberry Coconut Buttermilk Pancakes.`
    ));
    menu.append(createMenuItem(
        'Banana Nut Fudge',
        `Experience the perfect fusion of sweet, ripe bananas and rich, nutty peanut fudge in every bite.`
    ));
    menu.append(createMenuItem(
        `Blackberry Buttermilk`,
        `A delightful blend of tangy blackberries and fluffy buttermilk pancakes. A burst of berry goodness in every bite!`
    ));
    menu.append(createMenuItem(
        'Buttermilk Classic',
        `These golden gems are light, airy, and absolutely timeless.`
    ));
    menu.append(createMenuItem(
        'Mixedberry Buttermilk',
        `Our fluffy buttermilk pancakes are generously studded with a medley of sweet and tart mixed berries.`
    ));
    menu.append(createMenuItem(
        `Orange Marmalade`,
        `Our light, fluffy pancakes are crowned with a zesty orange topping and a dollop of citrusy marmalad.`
    ));
    menu.append(createMenuItem(
        `Apple Caramel Nut`,
        `These pancakes are a warm, comforting indulgence featuring tender apples, gooey caramel, a hint of cinnamon, and a satisfying crunch of walnuts.`
    ));
    menu.append(createMenuItem(
        `Walnut Buttermilk`,
        `These golden, fluffy pancakes are generously sprinkled with crunchy walnuts.`
    ));
    menu.append(createMenuItem(
        `Wildberry Buttermilk`,
        `Each stack features our signature fluffy buttermilk pancakes loaded with a vibrant mix of wildberries, creating a sweet and tangy symphony in every mouthful.`
    ));
    menu.append(createMenuItem(
        `Strawberry Hazelnut`,
        `Our fluffy pancakes are lavishly adorned with succulent strawberries and a sprinkle of toasted hazelnuts.`
    ));

    return menu;
};

function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h6");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    const imageContainer = document.createElement('div')
    const foodImage = document.createElement("img");
    // split the original string at the space character (' ') using split(' '), which returns an array containing both parts. Then, we select the first element (index 0)
    foodImage.src = `images/pancakes/${name.split(' ')[0].toLowerCase()}.png`;
    foodImage.alt = `${name}`;
    // imageContainer.appendChild(foodImage);

    menuItem.appendChild(foodImage);
    // menuItem.appendChild(imageContainer);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
};

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;