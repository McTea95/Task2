// // Importiere erforderliche Module

// const express = require('express');
// const router = express.Router();
// const Task = require('../models/task'); // Annahme, dass ein Task-Modell vorhanden ist

// // Definiere die GET-Route für /tasks

// router.get('/tasks', async (req, res) => {
//   try {
//     const tasks = await Task.find(); // Aufgaben aus der MongoDB abrufen
//     res.render('tasks', { tasks }); // tasks.pug mit den Aufgaben rendern
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// router.delete('/tasks/:id', async (req, res) => {
//   try {
//     const taskId = req.params.id;
//     await Task.findByIdAndRemove(taskId); // Aufgabe aus der MongoDB löschen
//     res.redirect('/tasks'); // Weiterleitung zur Aufgabenliste nach dem Löschen
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // POST /tasks - Neue Aufgabe erstellen
// router.post('/tasks', async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const newTask = new Task({ title, description });
//     await newTask.save();
//     res.status(201).json(newTask);
//   } catch (error) {
//     res.status(500).json({ error: 'Fehler beim Erstellen der Aufgabe' });
//   }
// });

// // Exportiere den Router

// module.exports = router;
