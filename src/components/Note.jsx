import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import DisplayNote from './DisplayNote';

const Note = () => {
  const [notes, setNotes] = useState([]);
  const [addNote, setAddNote] = useState({ title: "", content: "" });
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const noteRef = collection(db, "note");

  useEffect(() => {
    const getNotes = async () => {
      const data = await getDocs(noteRef);
      setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getNotes();
  }, [noteRef]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddNote({ ...addNote, [name]: value });
  };

  const handleAdd = async () => {
    await addDoc(noteRef, addNote);
    setAddNote({ title: "", content: "" });
  };

  const handleUpdate = async () => {
    if (selectedNoteId) {
      const updateNoteRef = doc(db, "note", selectedNoteId);
      await updateDoc(updateNoteRef, addNote);
      setAddNote({ title: "", content: "" });
      setSelectedNoteId(null);
    }
  };

  const deleteNote = async (id) => {
    const deleteNoteRef = doc(db, "note", id);
    await deleteDoc(deleteNoteRef);
  };

  const editNote = (note) => {
    setAddNote({
      title: note.title,
      content: note.content,
    });
    setSelectedNoteId(note.id);
  };

  return (
    <div className="container">
      <form>
        <input
          type="text"
          name="title"
          placeholder="Enter title.."
          onChange={handleChange}
          value={addNote.title}
        />
        <textarea
          name="content"
          placeholder="Type content here..."
          onChange={handleChange}
          value={addNote.content}
          rows="4"
        ></textarea>
        <div style={{ display: "flex" }}>
          <button type="button" onClick={handleAdd}>
            Add
          </button>
          <button type="button" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </form>
      <div className="note-container">
        {notes &&
          notes.map((note) => (
            <DisplayNote
              key={note.id}
              title={note.title}
              content={note.content}
              id={note.id}
              getId={deleteNote}
              getUpdateNoteId={editNote}
            />
          ))}
      </div>
    </div>
  );
};

export default Note;
