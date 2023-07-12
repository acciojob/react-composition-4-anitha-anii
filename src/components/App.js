 import React from "react";
import Form from "./Form";

const fields = [
  { name: "name", type: "text", label: "Name" },
  { name: "email", type: "email", label: "Email" },
  { name: "password", type: "password", label: "Password" },
];

const handleSubmit = (values) => {
  console.log(values);
};

const App = () => {
  return (
    <div>
            <Form fields={fields} onSubmit={handleSubmit} />
    </div>
  );
};


export default App;