/* Globocorp GPT Genie
   modern, maintainable, no global leaks */

const chat = document.getElementById('chat');
const form = document.getElementById('promptForm');
const promptBox = document.getElementById('promptInput');

// canned replies until real API is wired
const cannedReplies = [
    'Your wish is my command!',
    'Presto…100 points!',
    'Consider it done.',
    'Voilà! All set.',
    'Granted – with style!',
];

function addMessage(text, role = 'genie') {
    const outer = document.createElement('div');
    outer.className = `message ${role}`;

    // role label (visually matches mock-up)
    const label = document.createElement('span');
    label.className = 'message__role';
    label.textContent = role === 'user' ? 'YOU' : 'GENIE';
    outer.appendChild(label);

    // message body
    const body = document.createElement('span');
    body.textContent = text;
    outer.appendChild(body);

    chat.appendChild(outer);
    chat.scrollTop = chat.scrollHeight; // autoscroll
}

function fakeReply() {
    const reply =
        cannedReplies[Math.floor(Math.random() * cannedReplies.length)];
    addMessage(reply, 'genie');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const prompt = promptBox.value.trim();
    if (!prompt) return;

    addMessage(prompt, 'user');
    promptBox.value = '';

    // simulate async call
    setTimeout(fakeReply, 600);
});

// Add welcome message when the page loads
document.addEventListener('DOMContentLoaded', () => {
    addMessage(
        "Hello! I'm the Globocorp Genie. Your wish is my command!",
        'genie'
    );
});
