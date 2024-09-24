import React, { useRef } from "react"
import { Button, Form } from "react-bootstrap"
import { Note } from "../models/noteModel"

interface INewNoteProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const AddNewNotes: React.FC<INewNoteProps> = ({ notes, setNotes }) => {
    const titleRef = useRef<HTMLInputElement>(null)
    const textRef = useRef<HTMLTextAreaElement>(null)
    const colorRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        const newNote: Note = {
            id: (new Date).toString(),
            title: titleRef.current!.value,
            text: textRef.current!.value,
            color: colorRef.current!.value,
            date: (new Date).toString(),
        }
        setNotes([...notes, newNote])
    }

    return (
        <>
            <h2>Create Notes</h2>
            <Form className="mt-3 mb-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter title for the note"
                        ref={titleRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Text</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your notes" as="textarea"
                        rows={3}
                        ref={textRef} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
                    <Form.Control
                        type="color" id="colorInput"
                        defaultValue="#dfdfdf"
                        title="Choose your color"
                        ref={colorRef} />
                </Form.Group>
                <Button type="submit" variant="primary">Submit</Button>
            </Form>
        </>
    )
}

export default AddNewNotes
