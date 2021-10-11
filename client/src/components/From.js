// import { useState } from "react";
// import { sendMessage } from "../SocketApi";

// function Form() {
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("selam");
//   };
//   if (!message) {
//     return false;
//   }
//   sendMessage("new-message", message);
//   return (
//     <Form onSubmit={handleSubmit}>
//       <input
//         value={message}
//         onChange={({ target: { value } }) => setMessage(value)}
//         className="message-input"
//         placeholder="write a messsage..."
//       />
//     </Form>
//   );
// }
// export default Form;
