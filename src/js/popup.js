const button = document.getElementById("button");

// When the button is clicked, inject the script into current page
button.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ 
        active: true, 
        currentWindow: true, 
        lastFocusedWindow: true 
    });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: turtleAlert,
    });
});

// Send an alert to the page when the button is clicked
const turtleAlert = () => {
    alert("Turtle invasion!");
}

