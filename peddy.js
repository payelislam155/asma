const loadCategorys = () => {
        fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then(response => response.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error));
        };
        const loadCategorysCard = (Id) => {
             fetch(`https://openapi.programming-hero.com/api/peddy/category/${Id}`)
             .then(response => response.json())
             .then(arman => displayCards(arman.data))
             .catch(error => console.log(error));
        };

        const displayCategories = (categories) => {
        const categoryContainer = document.getElementById("catagories");
        categories.forEach((item) => {
        // Create a card div for each category
        const card = document.createElement("div");
        card.classList = "flex items-center relative border rounded-lg active:rounded-full active:border-2 active:border-green-400 active:bg-green-200 active:duration-200 active:delay-10 ease-out px-4 m-2";

        // Create a button 
        const button = document.createElement("button");
        button.classList = `flex gap-2 items-center px-16 py-3 font-bold text-2xl`;
        button.innerHTML = `<img class="size-10" src="${item.category_icon}"/>${item.category}`;
        button.onclick = ()=> {
            loadCategorysCard(item.category);
        };

        // Append the image 
        // card.appendChild(img);
        card.appendChild(button);

        // Add the card
        categoryContainer.appendChild(card);
    });
};

const loadcardsCatagories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then(response => response.json())
        .then(response => displayCards(response.pets))
        .catch(error => console.log(error));
};

const displayCards = (pets) => {
    const cardContainer = document.getElementById("CardsPets");
    
    // Clear previous content
    cardContainer.innerHTML = '';

    pets.forEach((pet) => {
        console.log(pet);
        
        // Create a card div
        const card = document.createElement("div");
        card.classList.add("border", "p-4", "m-2","rounded-lg");

        card.innerHTML = `
            <div class="px-0 space-y-2">
                <figure class="relative">
                    <img class="w-full h-full object-cover rounded-lg" src="${pet.image}" alt="${pet.pet_name}"/>
                </figure>
                <h2 class="font-bold text-2xl">${pet.pet_name}</h2>
                <p class="text-lg flex items-center gap-2"><span><img src="images/breed.png"/></span>Breed:${pet?.breed ? pet?.breed :'Normal Breed'}</p>
                <p class="text-lg flex items-center gap-2"><span><img src="images/birth.png"/></span>Birth:${pet?.date_of_birth ? pet?.date_of_birth : 'Not Available'}</p>
                <p class="text-lg flex items-center gap-2"><span><img src="images/gender.png"/></span>Gender:${pet?.gender == "Male" || pet?.gender == "Female" ? pet?.gender : 'Not Gender'}</p>
                <p class="text-lg flex items-center gap-2"><span><img src="images/price.png"/></span>Price:${pet?.price !== null ? pet?.price : 'Not Mentioned'}</p>
                <p class="border-t border-gray-300"></p>
                <div class="flex items-center justify-between mb-10">
                   <button onclick="loadVideo('${pet.petId}')"><img class="border border-gray-300 p-2 rounded-lg" src="images/like.png"></button>
                   <button onclick="loadVideo('${pet.petId}')" class="border border-gray-300 text-green-800 font-semibold p-2 rounded-lg">Adopt</button>
                   <button onclick="loadDetailscard('${pet.petId}')" class="border border-gray-300 text-green-800 font-semibold p-2 rounded-lg">Details</button>
                </div>
            </div>
        `;

        // Add the card to the container
        cardContainer.appendChild(card);
    });
};
// {/* <p>${pet.pet_details}</p> */}

loadCategorys();
loadcardsCatagories();