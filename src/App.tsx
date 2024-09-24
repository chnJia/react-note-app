import React, { useState } from 'react'
import { Note } from './models/noteModel'
import Header from './components/Header';
import NotesList from './components/NotesList';
import { Col, Container, Row } from 'react-bootstrap';
import AddNewNotes from './components/AddNewNotes';

function App() {
  const newNote: Note = {
    id: (new Date).toString(),
    title: "Meetings",
    text: "Final project SE team meating",
    color: "dfdfdf",
    date: (new Date).toString()
  }

  const [notes, setNotes] = useState<Note[]>([newNote])

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <AddNewNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
