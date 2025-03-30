// Add your code here
function submitData(name, email){
    return fetch('http://localhost:3000/users',{
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        },
        body: JSON.stringify({ name: name, email: email }),}
    )
    .then(res => res.json())
    .then(data => {
        // Extract the new id from the response and append it to the DOM
        const idElement = document.createElement('p');
        idElement.textContent = `New ID: ${data.id}`;
        document.body.appendChild(idElement);
      
    })
    .catch(error => {
        // Append the error message to the DOM
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
    });
    }
