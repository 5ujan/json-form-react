import DynamicForm from "../components/DynamicForm";
// import Modal from "../components/Modal";
import { useState } from "react";

export default function Home() {
  const [formJSON, setFormJSON] = useState({
    fields: [
      { type: "text", name: "firstName", label: "First Name" },
      { type: "text", name: "lastName", label: "Last Name" },
      { type: "email", name: "email", label: "Email" },
      { type: "textarea", name: "message", label: "Message" },
      {
        type: "select",
        name: "subject",
        label: "Subject",
        options: [
          { value: "general", label: "General Inquiry" },
          { value: "support", label: "Support" },
          { value: "feedback", label: "Feedback" },
        ],
      },
    ],
  });

  const [text, setText] = useState(JSON.stringify(formJSON, null, 2));

  const [error, setError] = useState("");

  const handleTextareaChange = (e) => {
    e.preventDefault()
    const value = e.target.value;
    setText(value)
    try {
      const jsonValue = JSON.parse(value);
      setError(""); 
    } catch (error) {
      setError("Invalid JSON");
    }
  };

  const handleGenerate = () => {
   !error&&setFormJSON(JSON.parse(text));
  };

  return (
    <div className="flex flex-col gap-5 w-full h-full">
    
      <h1 className="text-gray-200 text-2xl capitalize">
        Write the form requirements in JSON format in the text area below, click
        "Generate" to generate the component and copy to copy the html component to clipboard.
      </h1>
      <div className="flex flex-col justify-evenly lg:flex-row w-[90%] gap-10 min-h-[80vh]">
        <div className="flex flex-col min-w-[50%] gap-2 bg-gray-900 items-center">
          <textarea
            className={`min-w-[100%] min-h-[70vh] bg-gray-900 p-2 text-white font-mono focus:outline-none`}
            value={text}
            onChange={handleTextareaChange}
          ></textarea>
          {error && <p className="text-red-500">{error}</p>}
          <button
            className={`${
              !error ? "" : "type-disabled"
            } bg-purple-600 px-4 py-2 mb-4 rounded text-2xl`}
            onClick={handleGenerate}
          >
            Generate
          </button>
        </div>
        <DynamicForm formJSON={formJSON} />
      </div>
        {/* <Modal></Modal> */}
    </div>
  );
}
