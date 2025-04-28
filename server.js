const express  = require('express');
const logger   = require('morgan');
const db       = require('./db');
const Task     = require('./models/task');

const app = express();

app.use(logger('dev'));

app.post('/tasks', async (req, res) => 
{
  const newTask = await Task.create(
  {
    text: "Clean You room Bro",
    isComplete: false
  });
  res.send(newTask);
})
  
app.get('/tasks/:id', async (req, res) => 
{
  const task = await Task.findById(req.params.id);
  res.send(task);
})

app.get('/tasks', async (req, res) => 
{
  const allTasks = await Task.find()
  res.send(allTasks);
})

app.put('/tasks', async (req, res) => 
{
  const id         = req.query.id;
  const isComplete = req.query.isComplete;
  const updatedTask = await Task.findByIdAndUpdate(id, 
  {
    isComplete: isComplete,
  })
  res.send(updatedTask);
})

app.delete('/tasks/:id',  async (req, res) => 
{
  const deletedTask = await Task.findByIdAndDelete(req.params.id);
  res.send(deletedTask);
})

app.listen('3000', () => 
{
  console.log('Listening to port 3000');
});
