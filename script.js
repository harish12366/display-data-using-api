const url = "https://jsonplaceholder.typicode.com/users";

async function getUsers() {

    const loader = document.querySelector("#loader");
    const cardList = document.querySelector(".card-list");


    try {
        const response = await fetch(url);
        const data = await response.json();


        data.forEach(user => {

            const card = document.createElement("div");
            card.classList.add("card");

            const name = document.createElement("h2");
            name.textContent = user.name;

            card.appendChild(name);

            const email = document.createElement("p");
            email.innerHTML = `<strong>Email:</strong> ${user.email}`;

            card.appendChild(email);

            const phone = document.createElement("p");
            phone.innerHTML = `<strong>Phone:</strong> ${user.phone}`;

            card.appendChild(phone);

            const city = document.createElement("p");
            city.innerHTML = `<strong>City:</strong> ${user.address.city}`;

            card.appendChild(city);

            const company = document.createElement("p");
            company.innerHTML = `<strong>Company:</strong> ${user.company.name}`;

            card.appendChild(company);

            cardList.appendChild(card);
        });

    } catch (error) {
        console.log(error);
        cardList.textContent = "Failed to load users.";
    } finally {
        loader.style.display = "none";
    }
}

getUsers();