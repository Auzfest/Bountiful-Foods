const url = new URL(window.location);
const formData = url.searchParams;

document.querySelector("#firstName").textContent = formData.get('firstName');
document.querySelector("#email").textContent = formData.get('email');

const fruits = formData.getAll('fruit');
document.querySelector("#fruit").textContent = fruits.join(', ');

document.querySelector("#spInstructions").textContent = formData.get('specialInstructions');