document.getElementById("storyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var formData = new FormData(this);
    var jsonData = {};
    
    formData.forEach(function(value, key) {
        jsonData[key] = value;
    });
    
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
        console.log(data); 
        // Redirect to thank you page
        window.location.href = "thank_you.html";
    })
    .catch(error => {
        console.error("There was a problem with your fetch operation:", error);
    });
});
