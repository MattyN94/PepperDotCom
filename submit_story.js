document.getElementById("storyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    // Collect form data
    var formData = new FormData(this);
    
    // Convert form data to JSON
    var jsonData = {};
    formData.forEach(function(value, key) {
      jsonData[key] = value;
    });
    
    // Send data to server using fetch API
    fetch("submit_story.py", {
      method: "POST",
      body: JSON.stringify(jsonData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then(data => {
      console.log(data); // Log server response
      window.location.href = "thank_you.html"; // Redirect to thank you page
    })
    .catch(error => {
      console.error("There was a problem with your fetch operation:", error);
    });
  });
  