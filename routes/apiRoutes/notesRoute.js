const router = require('express').Router();

const { notes } = require("../../db/db");

const { createNewNote, validateNote, deleteNote } = require('../../libs/notes');

router.get('/notes', (req, res) => {
    const result = notes;
    res.json(result);
});

router.post('/notes', (req, res) => {
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    if (deleteNote(req.params.id, notes)) {
        return res.sendStatus(200);
    }
    return res.sendStatus(404);
});

module.exports = router;
