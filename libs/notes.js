const { v4: uuidv4 } = require('uuid');

const fs = require("fs");
const path = require("path");

function createNewNote(newNote, notes) {
    newNote.id = uuidv4();
    
    notes.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notes }, null, 2)
    )

    return newNote;
}

function validateNote(note) {
    if(!note.title || typeof note.title !== 'string') {
        return false;
    }
    if(!note.text || typeof note.text !== 'string') {
        return false;
    }

    return true;
}

module.exports = { createNewNote, validateNote }
