// Step 1: Set up the database (using an array as a simple example)
let database = [];

// Step 2: Fetch data from the API
function fetchDataFromAPI() {
  const apiUrl = 'https://thedogapi.org/v1/breeds/API_KEY'; // Replace with the actual API URL

  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      return null;
    });
}

// Step 3: Process the data and store it in the database
function processAndStoreData() {
  fetchDataFromAPI()
    .then((data) => {
      if (data) {
        // Assuming the API response is an array of objects, you might need to adapt this based on the actual API response structure
        database = data.map((item) => {
          return {
            id: item.id,
            name: item.name,
            // Add other relevant properties you want to store in the database
          };
        });
        console.log('Data stored in the database:', database);
      }
    })
    .catch((error) => {
      console.error('Error processing data:', error);
    });
}

// Step 4: Call the function to start fetching and storing data
processAndStoreData();
