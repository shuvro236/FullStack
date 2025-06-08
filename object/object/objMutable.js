let newCar ={
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color : "Red",
}

console.log("Original car object:", newCar);

let carCopy = newCar;
carCopy.year = 2025;
carCopy.color = "Blue";
console.log("Modified car copy object:", carCopy);

let carClone = {...newCar}; // Shallow copy using spread operator
carClone.brand = "Honda";
carClone.model = "Civic";
carClone.year = 2023;
carClone.color = "Green";
console.log("Modified car clone object:", carClone);
//console.log("Original car object after modifications:", newCar);