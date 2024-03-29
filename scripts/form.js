document.getElementById('fruitForm').onsubmit = function(event) {
    var checkboxes = document.querySelectorAll('input[name="fruit"]:checked');

    if (checkboxes.length < 3) {
        document.getElementById('error-message').textContent = 'Please select at least 3 fruits.';
        event.preventDefault(); // Prevent form submission
        return false;
    }
    document.getElementById('error-message').textContent = ''; // Clear error message
    return true; // Allow form submission
};

const linksURL = "https://auzfest.github.io/Bountiful-Foods/data/links.json";


async function getFruit() {
  const response = await fetch(linksURL);
  const data = await response.json();
  console.log(data);
/*   displayLinks(data);
 */}

getFruit();


/* const url = "https://www.fruityvice.com/api/fruit/all";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

apiFetch();
 */