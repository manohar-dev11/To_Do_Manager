const API_URL = "http://127.0.0.1:5000/tasks";

async function fetchTasks(){

const res = await fetch(API_URL);

return await res.json();

}

async function createTaskAPI(task){

await fetch(API_URL, {
method: "POST",
headers: {
"Content-Type":"application/json"
},
body: JSON.stringify(task)
});

}

async function deleteTaskAPI(id){

await fetch(`${API_URL}/${id}`,{
method:"DELETE"
});

}