// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addEmail, removeEmail, toggleEmail, selectAllEmails, deselectAllEmails } from '../components/Global/Slice';
// import { emailSchema } from '../components/Global/emailvalidator'; // Email validation with Zod

// const Dashboard = () => {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const [selectedTemplate, setSelectedTemplate] = useState(null);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const dispatch = useDispatch();
//   const emails = useSelector((state) => state.emails.emails);
//   const allSelected = useSelector((state) => state.emails.allSelected);
//   const templates = useSelector((state) => state.templates);

//   // Initialize theme based on localStorage or default to light mode
//   useEffect(() => {
//     const savedMode = localStorage.getItem('darkMode') === 'true';
//     setIsDarkMode(savedMode);
//     if (savedMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, []);

//   const handleAddEmail = () => {
//     setError('');
//     try {
//       emailSchema.parse(email); // Validate email using Zod
//       if (!emails.some((e) => e.value === email)) {
//         dispatch(addEmail(email)); // Add email if valid and not already added
//         setEmail('');
//       }
//     } catch (e) {
//       if (e instanceof Error) {
//         setError(e.message); // Display validation error
//       }
//     }
//   };

//   const handleToggleCheckbox = (emailValue) => {
//     dispatch(toggleEmail(emailValue)); // Toggle email selection
//   };

//   const handleSelectAll = () => {
//     dispatch(selectAllEmails()); // Select all emails
//   };

//   const handleDeselectAll = () => {
//     dispatch(deselectAllEmails()); // Deselect all emails
//   };

//   const handleSendEmail = () => {
//     if (!selectedTemplate) {
//       alert('Please select a template');
//       return;
//     }
//     const selectedEmails = emails.filter((email) => email.checked);
//     if (selectedEmails.length === 0) {
//       alert('Please select at least one email');
//       return;
//     }
//     // Implement your email sending logic here
//     alert(`Sending email to ${selectedEmails.length} addresses using template: ${selectedTemplate.name}`);
//   };

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle('dark', !isDarkMode);
//     localStorage.setItem('darkMode', !isDarkMode); // Save the user's preference in localStorage
//   };

//   return (
//     <div className="h-[90%] w-[90%] pt-6 bg-white dark:bg-gray-900">
//       <div className=" h-[100%] W-[40%] bg-[white] dark:bg-gray-800  rounded-lg shadow-lg">
//         <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Email Dashboard</h2>

//         <div className="flex space-x-2 mb-4">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="flex-1 p-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white"
//             placeholder="Enter email"
//           />
//           <button
//             onClick={handleAddEmail}
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700"
//           >
//             Add Email
//           </button>
//         </div>
//         {error && <p className="text-red-500 text-sm">{error}</p>}

//         <div className="flex justify-between mb-4">
//           <div>
//             <button onClick={handleSelectAll} className="px-4 py-2 bg-green-600 text-white rounded-md mr-2 dark:bg-green-700">
//               Select All
//             </button>
//             <button onClick={handleDeselectAll} className="px-4 py-2 bg-gray-600 text-white rounded-md dark:bg-gray-700">
//               Deselect All
//             </button>
//           </div>
//           <div>
//             <select
//               onChange={(e) => setSelectedTemplate(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white"
//             >
//               <option value="">Select Template</option>
//               {templates.map((template) => (
//                 <option key={template.id} value={template.id}>
//                   {template.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div>
//           {emails.length === 0 ? (
//             <p className="text-gray-500 dark:text-gray-300">No emails added yet.</p>
//           ) : (
//             <ul className="space-y-3">
//               {emails.map((email) => (
//                 <li key={email.value} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-md shadow-sm">
//                   <div className="flex items-center space-x-2">
//                     <input
//                       type="checkbox"
//                       checked={email.checked}
//                       onChange={() => handleToggleCheckbox(email.value)}
//                       className="h-4 w-4 text-blue-600 dark:text-blue-400"
//                     />
//                     <span className={`text-gray-700 dark:text-gray-200 ${email.checked ? 'line-through text-gray-400' : ''}`}>
//                       {email.value}
//                     </span>
//                   </div>
//                   <button
//                     onClick={() => dispatch(removeEmail(email.value))}
//                     className="text-red-500 hover:text-red-600 dark:text-red-400"
//                   >
//                     Delete
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         <div className="mt-6 text-center">
//           <button
//             onClick={handleSendEmail}
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-700"
//           >
//             Send Email
//           </button>
//         </div>

        
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import toast, { Toaster } from 'react-hot-toast';

// const Dashboard = () => {
//   const [emailInput, setEmailInput] = useState('');
//   const [message, setMessage] = useState('');
//   const [emailObject, setEmailObject] = useState(null);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [loading, setLoading] = useState(false);
 
//   const handleFormatEmails = () => {
//     if (!emailInput.trim()) {
//       toast.error('Please enter some email addresses.');
//       return;
//     }

//     const emails = emailInput.split(/\s+/); // Split on any whitespace
//     const validEmails = emails.filter((email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email));

//     if (validEmails.length === 0) {
//       toast.error('No valid email addresses found.');
//       return;
//     }

//     const emailObj = validEmails.reduce((acc, email) => {
//       acc[email] = email; // Store email as key-value pair
//       return acc;
//     }, {});

//     setEmailObject(emailObj);
//   };



//   const handleSendEmails = async () => {
//     if (!emailObject || !message) {
//       toast.error('Please ensure emails are collected and message is entered.');
    
//     } else {
//       const emailList = Object.keys(emailObject);
//       const url = "https://bulkmailsender.onrender.com/api/v1/send"
//       const datas = { emails: emailList, message }
//       setLoading(true)
//       axios.post(url, datas)
//         .then((res) => {
//           console.log(res)
//           toast.success(res.data.message)
//           setLoading(false)
//         })
//         .catch((error) => {
//           console.log(error)
//           setLoading(false)
//           toast.error(error.data.message)
//         })
//     }
//   };

//   return (
//     <div className={`flex flex-col items-center justify-center h-[100%] overflow-y-scroll pt-18  w-[100%]    dark:bg-gray-700 bg-gray-100 dark:text-[white]`}>
//       <div className="w-[80%]  p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">Email Bulk Sender</h1>
        
//         </div>
//   <Toaster/>
//         <textarea
//           className="w-full p-4 mb-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
//           rows="6"
//           placeholder="Paste your emails here..."
//           value={emailInput}
//           onChange={(e) => setEmailInput(e.target.value)}
//         ></textarea>

//         <textarea
//           className="w-full p-4 mb-6 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
//           rows="6"
//           placeholder="Enter your message..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         ></textarea>

//         <div className="flex flex-col sm:flex-row gap-4 mb-6">
//           <button
//             className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none"
//             onClick={handleFormatEmails}
//           >
//             Collect Emails
//           </button>
//           <button
//             className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 focus:outline-none"
//             onClick={handleSendEmails}
//             //  { loading ? disable : null}
//           >
//             { loading ? "Loading... " : "Send Emails"}
//           </button>
//         </div>

//         {/* Collected Emails Container */}
//         {emailObject && (
//   <div className="mt-4 max-h-[30%] overflow-y-scroll bg-gray-100 dark:bg-gray-700 p-4 border border-gray-300 rounded-lg dark:text-white">
//     <h2 className="text-lg font-semibold mb-2">Collected Emails:</h2>
//     <ul className="list-disc pl-5 space-y-2">
//       {Object.keys(emailObject).map((email, index) => (
//         <li key={index} className="text-sm text-gray-800 dark:text-gray-200">
//           {email}
//         </li>
//       ))}
//     </ul>
//   </div>
// )}

//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Dashboard = () => {
  const [emailInput, setEmailInput] = useState('');
  const [message, setMessage] = useState('');
  const [emailObject, setEmailObject] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  //  const handleFormatEmails = () => {
  //   if (!emailInput.trim()) {
  //     toast.error('Please enter some email addresses.');
  //     return;
  //   }

  //   const emails = emailInput.split(/\s+/); // Split on any whitespace
  //   const validEmails = emails.filter((email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email));

  //   if (validEmails.length === 0) {
  //     toast.error('No valid email addresses found.');
  //     return;
  //   }

  //   const emailObj = validEmails.reduce((acc, email) => {
  //     acc[email] = email; // Store email as key-value pair
  //     return acc;
  //   }, {});

  //   setEmailObject(emailObj);
  // };

  const handleFormatEmails = () => {
    if (!emailInput.trim()) {
      toast.error('Please enter some email addresses.');
      return;
    }
  
    const emails = emailInput.split(/\s+/); // Split on any whitespace
  
    // Preprocess emails: Remove all trailing non-alphanumeric characters
    const cleanedEmails = emails.map(email => email.replace(/[^a-zA-Z0-9@._-]+$/g, ''));
  
    const validEmails = cleanedEmails.filter(email => 
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    );
  
    if (validEmails.length === 0) {
      toast.error('No valid email addresses found.');
      return;
    }
  
    const emailObj = validEmails.reduce((acc, email) => {
      acc[email] = email; // Store email as key-value pair
      return acc;
    }, {});
  
    setEmailObject(emailObj);
  };
  

  const handleSendEmails = async () => {
    if (!emailObject || !message) {
      toast.error('Please ensure emails are collected and message is entered.');
    
    } else {
      const emailList = Object.keys(emailObject);
      const url = "https://bulkmailsender.onrender.com/api/v1/send"
      const datas = { emails: emailList, message }
      setLoading(true)
      axios.post(url, datas)
        .then((res) => {
          console.log(res)
          toast.success(res.data.message)
          setLoading(false)
        })
        .catch((error) => {
          console.log(error)
          setLoading(false)
          toast.error(error.data.message)
        })
    }
  };
  
  return (
    <div className={`flex flex-col items-center justify-center h-[100%] overflow-y-scroll pt-18  w-[100%] dark:bg-gray-700 bg-gray-100 dark:text-white`}>
      <div className="w-[80%] h-[90%] p-6 rounded-lg shadow-md bg-white overflow-y-scroll dark:bg-gray-800">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Email Bulk Sender</h1>
        </div>
        <Toaster />
        <textarea
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          rows="6"
          placeholder="Paste your emails here..."
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        ></textarea>

        <textarea
          className="w-full p-4 mb-6 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          rows="6"
          placeholder="Enter your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button
            className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none"
            onClick={handleFormatEmails}
          >
            Collect Emails
          </button>
          <button
            className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 focus:outline-none"
            onClick={handleSendEmails}
          >
            {loading ? "Loading..." : "Send Emails"}
          </button>
        </div>

        {/* Collected Emails Container */}
        {Object.keys(emailObject).length > 0 && (
          <div className="mt-4 max-h-[30%] overflow-y-scroll bg-gray-100 dark:bg-gray-700 p-4 border border-gray-300 rounded-lg dark:text-white">
            <h2 className="text-lg font-semibold mb-2">Collected Emails:</h2>
            <ul className="list-disc pl-5 space-y-2">
              {Object.keys(emailObject).map((email, index) => (
                <li key={index} className="text-sm text-gray-800 dark:text-gray-200">
                  {email}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
