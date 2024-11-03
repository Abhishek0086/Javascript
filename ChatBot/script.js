const chatbody =document.querySelector(".chat-body");
const messageInput =document.querySelector(".message-input");
const sendMessageButton =document.querySelector("#send-messages");

const API_KEY ="";
const API_URL ="https://llama3-1.llamameta.net/*?Policy=eyJTdGF0ZW1lbnQiOlt7InVuaXF1ZV9oYXNoIjoiaWZ6dWY2N3dqcTFkczQ4amVkNmEyMm9oIiwiUmVzb3VyY2UiOiJodHRwczpcL1wvbGxhbWEzLTEubGxhbWFtZXRhLm5ldFwvKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczMDcxNDYzOH19fV19&Signature=qAsyPwMOzuUqF9wYADCww4VQlzaNId9sd9SeEHe6UzztLVYyu1nARycdHL6tSN%7EYKDXoD2B-A77-sXdlQhNR5b782lrsU2lxpyYmfXEGDDifrcwDFqVL61sNf4bR5X2f1arzIWYs-axS48M1KTivpJb-DP6uJi9SfgWoP%7EfSNzdtdIX-pd217iJY9aLcgwbJnpwqpLqDcdUMmLK3rCucEA5vLOv%7E2mcm33BZqWO-b%7ENYs9fluHGlJOhpYaqAugWFGJekVV2Oc6pGPhv4n0KMr1wxzF5a2CcPzkYXQ%7EvLDAVSgYYqch8M1TAcO4dBACVUtAww467eHjZdAJy0RUKMFg__&Key-Pair-Id=K15QRJLYKIFSLZ&Download-Request-ID=1596717764612296";

const userData = {
    message: null
    
};

//create message element with dynamic classes and return it
const createMessageElement = (content,...classes) => {
    const div =document.createElement("div");
    div.classList.add("message", ...classes);
    div.innerHTML = content;
    return div;
}

const generatedBotResponse =() => {}

/* const createMessageElement = (content, classes) => {
    // Create a new element to safely parse and sanitize the content
    const tempDiv = document.createElement("div");
    tempDiv.textContent = content; // Set the content as plain text, automatically escaping any HTML

    const sanitizedContent = tempDiv.innerHTML; // Retrieve the sanitized HTML

    // Now create the message element
    const div = document.createElement("div");
    div.classList.add("message", classes);
    div.innerHTML = sanitizedContent; // Set the sanitized content as innerHTML
    return div;
}; */
    

//handing outgoing user messages
const handleOutgoingMessage = (e) => {
    e.preventDefault();

    userData.message = messageInput.value.trim();
    messageInput.value ="";

//create and display user message
    const messageContent = `<div class="message-text"></div>`;
    const outgoingMessageDiv = createMessageElement(messageContent, "user-message");
    outgoingMessageDiv.querySelector(".message-text").textContent = userData.message;
    chatbody.appendChild(outgoingMessageDiv);
//Simulate bot response with thiinking indicator after a delay
    setTimeout(() => {
    const messageContent = `<svg class="bot-avatar" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 20 20"><path fill="#fffff" d="M14.479 8c.179 0 .356.034.521.099V4.5A1.5 1.5 0 0 0 13.5 3h-3v-.5A.48.48 0 0 0 10 2c-.276 0-.5.23-.5.5V3h-3A1.5 1.5 0 0 0 5 4.5v4A1.5 1.5 0 0 0 6.5 10h6.294l.338-1.039l.004-.012A1.42 1.42 0 0 1 14.48 8M7 6.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m4 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0M10 18c1.743 0 3.042-.226 4.005-.612a1.3 1.3 0 0 1 .117-.44a1.42 1.42 0 0 1-.964-.897l-.004-.012l-.351-1.08l-.035-.09a1.2 1.2 0 0 0-.257-.383l-.064-.06a1.2 1.2 0 0 0-.406-.232l-1.08-.35l-.011-.005a1.423 1.423 0 0 1-.545-2.336H5.309a1.81 1.81 0 0 0-1.809 1.81v.689h.005c.034.78.248 1.757 1.123 2.555C5.584 17.43 7.234 18 10 18m5.226-7.647l-.348-1.07a.423.423 0 0 0-.799 0l-.348 1.07a2.2 2.2 0 0 1-1.377 1.397l-1.071.348a.423.423 0 0 0 0 .798l1.071.348a2.2 2.2 0 0 1 1.399 1.403l.348 1.07a.423.423 0 0 0 .798 0l.349-1.07a2.2 2.2 0 0 1 1.398-1.397l1.072-.348a.424.424 0 0 0 0-.798l-.022-.005l-1.072-.349a2.2 2.2 0 0 1-1.398-1.397m3.791 6.612l.766.248l.015.004a.303.303 0 0 1 .147.46a.3.3 0 0 1-.147.11l-.765.248a1.58 1.58 0 0 0-1 .999l-.248.764a.302.302 0 0 1-.57 0l-.249-.764a1.58 1.58 0 0 0-.999-1.002l-.765-.249a.303.303 0 0 1-.146-.46a.3.3 0 0 1 .146-.11l.765-.248a1.58 1.58 0 0 0 .984-.998l.249-.765a.302.302 0 0 1 .57 0l.249.765a1.58 1.58 0 0 0 .999.998"/></svg>
                <div class="message-text">
                    <div class="thinking-indicator">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>`;
    const incomingMessageDiv = createMessageElement(messageContent, "bot-message","thinking");
    chatbody.appendChild(incomingMessageDiv);
    generatedBotResponse();
    }, 600);
}

//Handle Enter key press for sending messages
messageInput.addEventListener("keydown", (e) => {
    const userMessage =e.target.value.trim();
    if (e.key === "Enter" && userMessage.length > 0) {
        handleOutgoingMessage(e);
        
    }
})

sendMessageButton.addEventListener("click", (e) => {
    handleOutgoingMessage(e);
    
})