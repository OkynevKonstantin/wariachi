const navBtn = document.getElementById('navBtn');

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('active');
});

const productName = "Шоколадная плитка";
const price = 199.99;
const stockQuantity = 250;
const discountPercent = 15;
const inStock = true;

console.log("type of productName:", typeof productName);       
console.log("type of price:", typeof price);                   
console.log("type of stockQuantity:", typeof stockQuantity);   
console.log("type of discountPercent:", typeof discountPercent); 
console.log("type of inStock:", typeof inStock);