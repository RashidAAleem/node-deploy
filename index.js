

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
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) {
    return res.status(404).json({ message: "User Not Found"})
  }
  res.status(200).json(user);
});

app.post ('/users', (req, res)=>{
  const newUser = {
    id:users.length + 1, ...req.body

  }
  users.push(newUser);  
  res.status(201).json({ message: 'User added Successfully', user: newUser})
})

app.delete('/users/:id', (req, res)=>{
// const { id } = req.params
const index = users.findIndex(user => user.id === Number(req.params.id));
if (index === -1) {
  return res.status(404).json({ message: "user not found"})
  
}
const deletedUser = users.splice(index, 1)
res.json({message: 'User Delete Successfully', user: deletedUser[0]});
});


app.put('/users/:id', (req, res)=>{
// const { id } = req.params
const index = users.findIndex(user => user.id === Number(req.params.id))
if (index === -1) {
  return res.status(404).json({ message: "user not found"});
}
const updatedUser =  {id: Number(req.params.id),...req.body}
users[index] = updatedUser;

res.json({message: 'User Updated Successfully', user: updatedUser});
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




