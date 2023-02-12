var pages = [
    {name: "pancake", url: "pancake.html"},
    {name: "croissant", url: "croissant.html"},
    {name: "cupcake", url: "cupcake.html"},
    {name: "donut", url: "donut.html"},
    {name: "gelato", url: "gelato.html"},
    {name: "pudding", url: "pudding.html"},
    {name: "sandwich", url: "sandwich.html"},
    {name: "tiramisu", url: "tiramisu.html"},
    {name: "arrabiata", url: "/views/api/themealdb.html"},
  ];

  function validateAndRedirect() {
    var input = document.getElementById("searchInput").value;
    if (!input) {
      alert("Please enter a search query");
      return false;
    }

    var page = pages.find(function(p) {
      return p.name === input.toLowerCase();
    });

    if (page) {
      window.location.href = page.url;
    } else {
      window.location.href = "notfound.html";
    }

    return false;
  }
