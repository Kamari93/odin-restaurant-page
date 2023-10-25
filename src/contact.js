function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '📞 (111)-235-81321';

    const address = document.createElement('p')
    address.textContent = '🏠 37112, Travis Ave, Houston TX';

    // const restaurantLocation = document.createElement('p');
    // restaurantLocation.textContent = <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.3542295070497!2d-95.38297748941245!3d29.73845977497515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf6e31da40df%3A0xe8f8a11e6640abf5!2s3711%20Travis%20St%2C%20Houston%2C%20TX%2077002!5e0!3m2!1sen!2sus!4v1698159040086!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>;
    const restaurantLocation = document.createElement('img');
    restaurantLocation.src = 'images/location.png';
    restaurantLocation.alt = 'LOFI & FLAPJACKS restaurant location';

    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    contact.appendChild(restaurantLocation)

    return contact;
};

function loadContact() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createContact())
}

export default loadContact