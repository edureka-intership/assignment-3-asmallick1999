class restaurantManager {
    restaurantList = [{
        name: "Hollywood Café",
        address: "Newtown, Kolkata - 700056",
        city: "Kolkata"
    },
    {
        name: "Polo Bar",
        address: "Jamalpur ,Purba Bardhaman - 712402",
        city: "Bardhaman"
    },
    {
        name: "Grill & Chill",
        address: "Bally ,Howrah - 730201",
        city: "Bally"
    }
    ];
    printAllRestaurantNames() {

    }
    filterRestaurantByCity = city => {
        console.log(this.restaurantList.filter(resturent => resturent.city == city))
    }
}

const obj1 = new restaurantManager();

obj1.restaurantList.forEach(name=>console.log(name.name))

obj1.filterRestaurantByCity("Kolkata")
