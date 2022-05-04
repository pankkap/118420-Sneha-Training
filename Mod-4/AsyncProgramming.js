// JavaScript is Which kind of Programming ?
// JavaScript is Synchrounousy
// Fetch API using Asynchronous Technique

const api_url = "https://jsonplaceholder.typicode.com/users";

function getData(url) {

    setTimeout(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => displayData(data));      
    }, 3000);

  
  // .catch((error) => console.log(error.message));
}

getData(api_url);

function displayData(serverData) {
  console.log(serverData);
  for (var user of serverData) {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");

    td1.innerText = `${user.id}`;
    td2.innerText = `${user.name}`;
    td3.innerText = `${user.email}`;
    td4.innerText = `${user.phone}`;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    document.getElementById("myTable").appendChild(tr);
  }
}
