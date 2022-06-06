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

function findNoteById(id, notes) {
    return notes.filter(note => note.id === id)[0];
}

function deleteNote(id, notes) {
    const note = findNoteById(id, notes);

    if(!note) {
        return false;
    };
    
    notes.splice(
        notes.indexOf(note, notes.length / 2), 1
    );

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notes }, null, 2)
    );

    return true;
}

module.exports = { createNewNote, validateNote, deleteNote };
