const database = [ 
    { 
        id: 0, 
        productName: "Lavash mol goshti", 
        thumbnail: "https://avatars.mds.yandex.net/get-sprav-products/9854027/2a0000018a742bad01b2f69301614bb9e153/M_height", 
        category: "fast food", 
        price: 29000, 
        description: "A delicious lavash wrap with tender beef.", 
        ingredients: ["Beef", "Lavash Bread", "Lettuce", "Tomato", "Cheese", "Sauce"], 
        calories: 600 
    }, 
    { 
        id: 1, 
        productName: "Cheeseburger", 
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1kOC0wsZvKBGmYsrBLr5oAoFCFrE-QQg1Q&s", 
        category: "fast food", 
        price: 15000, 
        description: "A classic cheeseburger with a juicy beef patty.", 
        ingredients: ["Beef Patty", "Cheese", "Lettuce", "Tomato", "Pickles", "Bun"], 
        calories: 550 
    }, 
    { 
        id: 2, 
        productName: "Chicken Nuggets", 
        thumbnail: "https://w7.pngwing.com/pngs/237/677/png-transparent-burger-king-chicken-nuggets-chicken-fingers-mcdonald-s-chicken-mcnuggets-chicken-nugget-thumbnail.png", 
        category: "fast food", 
        price: 12000, 
        description: "Crispy and tender chicken nuggets.", 
        ingredients: ["Chicken", "Breading", "Seasoning"], 
        calories: 400 
    }, 
    { 
        id: 3, 
        productName: "Vegetarian Pizza", 
        thumbnail: "https://example.com/images/vegetarian_pizza.jpg", 
        category: "fast food", 
        price: 35000, 
        description: "A pizza loaded with fresh vegetables.", 
        ingredients: ["Pizza Dough", "Tomato Sauce", "Cheese", "Bell Peppers", "Onions", "Olives"], 
        calories: 800 
    }, 
    { 
        id: 4, 
        productName: "Caesar Salad", 
        thumbnail: "https://example.com/images/caesar_salad.jpg", 
        category: "salad", 
        price: 18000 
    }, 
    { 
        id: 5, 
        productName: "Grilled Chicken Sandwich", 
        thumbnail: "https://example.com/images/grilled_chicken_sandwich.jpg", 
        category: "fast food", 
        price: 20000, 
        description: "A sandwich with grilled chicken breast.", 
        ingredients: ["Grilled Chicken", "Lettuce", "Tomato", "Mayonnaise", "Bun"], 
        calories: 450 
    }, 
    { 
        id: 6, 
        productName: "French Fries", 
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE5-WBGEoC4A9ougwRoScqprBOT7gz-6mkyQ&s", 
        category: "fast food", 
        price: 8000, 
        description: "Crispy golden french fries.", 
        ingredients: ["Potatoes", "Salt", "Oil"], 
        calories: 300 
    }, 
    { 
        id: 7, 
 
        productName: "Chocolate Milkshake", 
        thumbnail: "https://icon2.cleanpng.com/20230720/tgh/transparent-ice-cream-1711100995531.webp", 
        category: "beverage", 
        price: 10000 
    }, 
    { 
        id: 8, 
        productName: "Margherita Pizza", 
        thumbnail: "https://example.com/images/margherita_pizza.jpg", 
        category: "fast food", 
        price: 30000, 
        description: "A classic Margherita pizza with fresh mozzarella.", 
        ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Basil"], 
        calories: 700 
    }, 
    { 
        id: 9, 
        productName: "Beef Burrito", 
        thumbnail: "https://example.com/images/beef_burrito.jpg", 
        category: "fast food", 
        price: 25000, 
        description: "A burrito filled with seasoned beef and beans.", 
        ingredients: ["Beef", "Beans", "Rice", "Cheese", "Tortilla", "Salsa"], 
        calories: 650 
    } 
];

let carouselBanner  = document.querySelector('#carousel-banner');

let filterData = database.filter(item => item.price <= 15000)

filterData.map(item => {
    let div = document.createElement('div')
    div.classList.add('carousel-item', 'w-full')
    div.setAttribute('id', "item" + item.id)

    div.innerHTML = `
    <img src=${item.thumbnail} class="w-full h-96" />
    `
    
    

    carouselBanner.append(div)
})

console.log(filterData)