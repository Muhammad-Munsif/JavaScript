// Definition taken from Chatgpt
// 01. GET Method
// Definition: The GET method is used to retrieve data from a server. It doesn't modify the data on the server.
// Use Case: Fetching data from an API endpoint.
// Syntax:
// axios.get(url, config)
//   .then(response => console.log(response.data))
//   .catch(error => console.error(error));

axios.get("https://reqres.in/api/users?page=2")
.then(response => handledata(response.data))
.catch(error => console.log(error))
function handledata(data){
    console.log(data)
}

// 2. POST Method
// Definition: The POST method is used to send data to a server, often to create new resources.
// Use Case: Submitting form data, adding new entries to a database.
// Syntax:
// axios.post(url, data, config)
//   .then(response => console.log(response.data))
//   .catch(error => console.error(error));

axios.post('https://reqres.in/api/users',
    {
        "name": "morpheus",
        "job": "leader"
    })
.then( response => console.log(response.data))
.catch(error => console.log(`The work is not done ${error}`));


// 3. PUT Method
// Definition: The PUT method is used to update an existing resource on the server. It replaces the entire resource with the new data.
// Use Case: Updating a complete record or resource.
// Syntax:
// axios.put(url, data, config)
//   .then(response => console.log(response.data))
//   .catch(error => console.error(error));

axios.put('https://reqres.in/api/users/2',
    {
        "firstName" : "Muhammad",
        "lastName" : "Munsif",
        "address" : "Peshawar",
        "job" : "frontend developer",
        "company" : "Alright Tech Limited Ptv"
    }
)
.then(response => console.log(response.data))
.catch(error => console.log(`You have make a mistake`,error));

// 4. DELETE Method
// Definition: The DELETE method is used to remove a resource from the server.
// Use Case: Deleting an entry or record from a database.
// Syntax:
// axios.delete(url, config)
//   .then(response => console.log(response.data))
//   .catch(error => console.error(error));

axios.delete('https://reqres.in/api/users/2')
.then(response => console.log(response.data))
.catch(error => console.log(error));