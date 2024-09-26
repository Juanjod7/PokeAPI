document.getElementById("fetchButton").addEventListener("click", fetchData);

function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/users') 
    .then(response => response.json())
    .then(data => {
      const tableBody = document.querySelector("#dataTable tbody");
      tableBody.innerHTML = ""; 
      data.forEach(item => {
        const row = document.createElement("tr");
        
        const cellId = document.createElement("td");
        cellId.textContent = item.id;
        row.appendChild(cellId);

        const cellName = document.createElement("td");
        cellName.textContent = item.name;
        row.appendChild(cellName);

        const cellEmail = document.createElement("td");
        cellEmail.textContent = item.email;
        row.appendChild(cellEmail);

        const cellAddress = document.createElement("td");
        cellAddress.textContent = `${item.address.street}, ${item.address.suite}, ${item.address.city} - ${item.address.zipcode}`;
        row.appendChild(cellAddress);

        
        const cellPhone = document.createElement("td");
        cellPhone.textContent = item.phone;
        row.appendChild(cellPhone);

        
        const cellWebsite = document.createElement("td");
        const link = document.createElement("a");
        link.href = `http://${item.website}`;
        link.textContent = item.website;
        link.target = "_blank"; 
        cellWebsite.appendChild(link);
        row.appendChild(cellWebsite);

        const cellCompany = document.createElement("td");
        cellCompany.textContent = item.company.name;
        row.appendChild(cellCompany);

        
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error al traer los datos:', error));
}
