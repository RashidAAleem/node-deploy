

import express from "express";

const app = express();

const PORT = 5000;

app.use(express.json());

let users = [
  {
    id: 1,
    name: "Rana Rashd",
    email: "rashid@gmail.com",
  },
  {
    id: 2,
    name: "Rana Rashd",
    email: "rashid@gmail.com",
  },
  {
    id: 3,
    name: "Rana Rashd",
    email: "rashid@gmail.com",
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});
app.get("/users", (req, res) => {
  res.status(200).send(users);
});

app.post ('/users', (req, res)=>{
    users.push({id:users.length + 1, ...req.body})
    res.status(201).send({status: 201, message: 'User added Successfully'})
})

app.delete('/users/:id', (req, res)=>{
const { id } = req.params
const index = users.findIndex(user => user.id === parseInt(id))
users.splice(index, 1)
res.send({message: 'User Delete Successfully'})
})


app.put('/users/:id', (req, res)=>{
// const { id } = req.params
const index = users.findIndex(user => user.id === Number(req.params.id))
users.splice(index, 1, {id: Number(req.params.id),...req.body})
res.send({message: 'User Update Successfully'})
})

app.listen(PORT, () => {
  console.log("Server is running on Port 5000");
});

//from chatgpt
// app.delete('/users/:id', (req, res) => {
//   const userID = parseInt(req.params.id);

//   const updatedUsers = users.filter(user => user.id !== userID);

//   if (updatedUsers.length === users.length) {
//     return res.status(404).send({ message: 'User not found' });
//   }

//   users = updatedUsers;
//   res.send({ message: 'User deleted successfully' });
// });


//from chatgpt
// app.post('/users', (req, res)=>{
// const {
//     name, email
// } = req.body

// const newUser = {
//     id: users.length + 1,
//     name,
//     email
// }

// users.push(newUser);
// res.status(201).send(newUser);
// })

//from chatgpt
// app.put('/users/:id', (req, res) => {
//   const { id } = req.params;
//   const index = users.findIndex(user => user.id === parseInt(id));

//   if (index === -1) {
//     return res.status(404).send({ message: 'User not found' });
//   }

//   const { name, email } = req.body;

//   // Update the user's data
//   users[index] = {
//     ...users[index],
//     name: name || users[index].name,
//     email: email || users[index].email
//   };

//   res.send({ message: 'User updated successfully', user: users[index] });
// });




