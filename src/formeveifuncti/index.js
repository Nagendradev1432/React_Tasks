import React, { useState } from "react";


function Index() {
  const [formData, setFormData] = useState({ user: "", mobile: "", image: "" });
  const [modalShow, setModalShow] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      // Handle file input
      const file = e.target.files[0]; // Get the selected file
      if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {

          // Set the base64 string as the image path in the state
          setFormData((prev) => ({
            ...prev,
            [name]: e.target.result,
          }));
        };

        reader.readAsDataURL(file); // Read the file as a base64 data URL
      }
    } else {
      // Handle text inputs
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handler = (e) => {
    e.preventDefault(); // Prevent default form submission
    setModalShow(true); // Show the modal
  };

  return (
    <>
      <form onSubmit={handler}>
        <input
          type="text"
          name="user"
          value={formData.user}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter your mobile number"
        />
        <input
          type="file"
          name="image"
          onChange={handleChange} // No `value` attribute for file input
          accept="image/*" // Accept only image files
        />
        <input type="submit" value="Submit" />
      </form>

      {/* <MyVerticallyCenteredModal
        name={formData.user}
        mobile={formData.mobile}
        image={formData.image} // Pass the image base64 string to the modal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
    </>
  );
}

export default Index;
