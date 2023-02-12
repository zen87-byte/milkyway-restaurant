const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";

fetch(API_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const dataContainer = document.getElementById("dataContainer");
    dataContainer.innerHTML = JSON.stringify(data);
  })
  .catch(error => {
    console.error(error);
  });
