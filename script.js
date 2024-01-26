document.getElementById('mcknight35').addEventListener('click', function() {
    setActiveVersion('mcknight35');
    typeMessage(mcknight35Message, 'chatBody');
});

document.getElementById('mcknight4').addEventListener('click', function() {
    setActiveVersion('mcknight4');
    changeChatContent('Our most capable membership manager, great for tasks that require creativity and advanced reasoning, is only available in interview format.', 'chatBody');
});

document.getElementById('sendBtn').addEventListener('click', function() {
    window.location.href = "mailto:alexakmck@gmail.com?subject=Interview Invitation&body=I would like to invite Alexa McKnight for an interview.";
});

function setActiveVersion(versionId) {
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(versionId).classList.add('active');
}

const mcknight35Message = `Greetings, <br><br>

I’m Alexa. No, not that one... an actual human who wants to work for you! <br><br>

A bit about me: As the lead account executive at an insurtech start-up, I led all in-bound discovery calls, managed our CRM, prospected new clients, and reported directly to the CEO & CFO. <br><br>

I also worked in sales/negotiation on the Lloyd’s of London trading floor, selling multi-million dollar aircraft coverage and negotiating hull war risks. In my current role as a ski instructor at Jackson Hole, I interact daily with high-net worth individuals (often founders) and pride myself on professionalism and personability. <br><br>

With no previous coding or website building experience, I used GPT-4 to build this website (just for you, Hampton team!). <br><br> 

I'm a self-starter & total people person, and I'd love to help Hampton connect with founders to bring about a more collaborative future for entrepreneurship. <br><br> 

For McKnight-4 — the most capable membership manager yet— please drop me a note below to arrange an interview. <br><br>

Sincerely, <br><br>

Alexa McKnight`;

function typeMessage(message, elementId) {
    const element = document.getElementById(elementId);
    element.innerHTML = ""; // Clear previous content
    let i = 0;
    let tagBuffer = ""; // Buffer to hold a tag sequence
    let inTag = false; // Flag to denote we're inside a tag sequence
    const speed = 50; // The speed/duration of the effect in milliseconds

    function typeWriter() {
        if (i < message.length) {
            const char = message.charAt(i);

            // If we encounter a '<', we're starting a tag sequence
            if (char === '<') {
                inTag = true;
            }

            // Append the character to the tag buffer if we're in a tag sequence
            if (inTag) {
                tagBuffer += char;
            } else {
                // If we're not in a tag, we can append the character directly
                element.innerHTML += char;
            }

            // If we encounter a '>', we're ending a tag sequence
            if (char === '>' && inTag) {
                // Append the complete tag sequence and reset the buffer and flag
                element.innerHTML += tagBuffer;
                tagBuffer = "";
                inTag = false;
            }

            i++;
            setTimeout(typeWriter, inTag ? 0 : speed); // No delay for tag sequences
        }
    }
    typeWriter();
}

function changeChatContent(text, elementId) {
    const element = document.getElementById(elementId);
    element.innerHTML = text;
}

// Simulate initial typing on page load
typeMessage(mcknight35Message, 'chatBody');
// Here's the event listener for the send button
document.getElementById('sendBtn').addEventListener('click', function() {
    // Get the value from the chat input
    var chatInputValue = document.getElementById('chatInput').value;
    // Encode the chat input value to be used in a URL
    var encodedChatInputValue = encodeURIComponent(chatInputValue);
    // Construct the mailto link including the chat input in the body
    var mailtoLink = "mailto:alexakmck@gmail.com?subject=Interview Invitation&body=" + encodedChatInputValue;
    // Open the mail client
    window.location.href = mailtoLink;
});