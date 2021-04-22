async function getBrooklyn(numResults = 10) {
  let response  = await fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=BROOKLYN&$limit=${numResults}`
  ).then(data => data.json());

  return response
}


function getManhattan(numResults = 10) {
  let response = $.ajax({
    url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=MANHATTAN",
    type: "GET",
    data: {
      "$limit": numResults,
      "$$app_token": "kaenUKLgYvZ2wNzLCnLiCedIB"
    }
  });
  
  return response
}

function getQueens(numResults = 10) {
  let response = $.ajax({
    url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=QUEENS",
    type: "GET",
    data: {
      "$limit": numResults,
      "$$app_token": "kaenUKLgYvZ2wNzLCnLiCedIB"
    }
  });

  return response;
}
function getBronx(numResults = 10) {
  let response = $.ajax({
    url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=BRONX",
    type: "GET",
    data: {
      "$limit": numResults,
      "$$app_token": "kaenUKLgYvZ2wNzLCnLiCedIB"
    }
  });

  return response
}

 function getStatenIsland(numResults = 10) {
  let response = $.ajax({
    url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=STATEN%20ISLAND",
    type: "GET",
    data: {
      "$limit": numResults,
      "$$app_token": "kaenUKLgYvZ2wNzLCnLiCedIB"
    }
  });

  return response
}