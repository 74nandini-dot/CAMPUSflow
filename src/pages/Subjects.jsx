import { useState, useContext } from "react";
import "./Subjects.css";
import { SubjectContext } from "../context/SubjectContext";

function Subjects() {
  const { subjectList, setSubjectList } = useContext(SubjectContext);

  const [newSubject, setNewSubject] = useState({
  name: "",
  code: "",
  });

  const [showForm, setShowForm] = useState(false);

  const [editingSubjectId, setEditingSubjectId] = useState(null);

  const addSubject = () => {
      if (!newSubject.name.trim() || !newSubject.code.trim()) {
        alert("Please enter subject name and code");
        return;
      }

      if (editingSubjectId !== null) {
        setSubjectList(
          subjectList.map((subject) =>
            subject.id === editingSubjectId
              ? {
                  ...subject,
                  name: newSubject.name,
                  code: newSubject.code,
                }
              : subject
          )
        );
      } else {
        const subject = {
          id: Date.now(),
          name: newSubject.name,
          code: newSubject.code,
        };

        setSubjectList([...subjectList, subject]);
      }

      setNewSubject({
        name: "",
        code: "",
      });

      setEditingSubjectId(null);
      setShowForm(false);
    };

const deleteSubject = (id) => {
  setSubjectList(
    subjectList.filter((subject) => subject.id !== id)
  );
};

const editSubject = (id) => {
  const subject = subjectList.find(
    (subject) => subject.id === id
  );

  setNewSubject({
    name: subject.name,
    code: subject.code,
  });

  setEditingSubjectId(id);
  setShowForm(true);
};

  return (
    <div  className="subjects-page">
      <h1>My Subjects</h1>

      <button onClick={() => setShowForm(true)}>
        Add Subject
        </button>

    {showForm && (
    <div className="subject-form">
        <input
        type="text"
        placeholder="Subject name"
        value={newSubject.name}
        onChange={(e) =>
          setNewSubject({
            ...newSubject,
            name: e.target.value,
          })
        }
      />
        <input
        type="text"
        placeholder="Subject code"
        value={newSubject.code}
        onChange={(e) =>
          setNewSubject({
            ...newSubject,
            code: e.target.value,
          })
        }
      />

        <button
          className="form-submit-button"
          onClick={addSubject}
        >
          {editingSubjectId !== null ? "Update Subject" : "Add Subject"}
        </button>

        <button
          className="form-cancel-button"
          onClick={() => {
            setNewSubject({
              name: "",
              code: "",
            });
            setEditingSubjectId(null);
            setShowForm(false);
          }}
        >
          Cancel
        </button>
      </div>
    )}

      {subjectList.map((subject) => (
       <div className="subject-item" key={subject.id}>
          <h2>{subject.name}</h2>
          <p>{subject.code}</p>

          <button
           className="delete-button"
            onClick={() => deleteSubject(subject.id)}>
            Delete
          </button>

          <button 
           className="edit-button"
           onClick={() => editSubject(subject.id)}>
            Edit
          </button>

        </div>
      ))}
     
    </div>
  );
}

export default Subjects