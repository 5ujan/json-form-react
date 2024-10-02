import React, { useState } from 'react';

const DynamicForm = ({ formJSON }) => {
    const [formData, setFormData] = useState({});
    const [btnText, setBtnText] = useState("Copy Component");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    
const handleCopy = (e) => {
  e.preventDefault();

  const formHtml = document.getElementById("form-component").innerHTML;
  console.log(formHtml)
  

  navigator.clipboard
    .writeText(
      `
<html>
<head> 
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class = "bg-gray-800">
<form>${formHtml}</form>
</body>
</html>
`
    )
    .then(() => {
      setBtnText("Copied HTML To Clipboard!!");
    })
    .then(setTimeout(() => setBtnText("Copy"), 2000))
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
};


    const renderInput = (field, index) => {
        const { type, name, label, options } = field;

        switch (type) {
            case 'text':
            case 'email':
            case 'password':
                return (
                    <div key={index} className="mb-4">
                        <label className="block text-gray-300 mb-1">{label}</label>
                        <input
                            type={type}
                            name={name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded focus:outline-none"
                        />
                    </div>
                );
            case 'select':
                return (
                  <div key={index} className="mb-4">
                    <label className="block text-gray-300 mb-1">{label}</label>
                    <select
                      name={name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded focus:outline-none"
                    >
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                );
            case 'textarea':
                return (
                  <div key={index} className="mb-4">
                    <label className="block text-gray-300 mb-1">{label}</label>
                    <textarea
                      name={name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded focus:outline-none"
                    />
                  </div>
                );
            default:
                return null;
        }
    };

   return (
     <form className="bg-gray-900 p-6 rounded shadow-lg gap-4 flex flex-col justify-between min-w-[40%] h-[80vh]">
       <div
         className="border-b-2 border-gray-400 overflow-y-scroll pr-4 pb-4 h-full box-border"
         id="form-component"
       >
         {formJSON.fields.map(renderInput)}
       </div>
       <button
         className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-500 transition duration-200"
         onClick={handleCopy}
       >
         {btnText}
       </button>
     </form>
   );

};

export default DynamicForm;
