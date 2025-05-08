// Toggle chat widget
document.addEventListener('DOMContentLoaded', function() {
  const chatButton = document.createElement('div');
  chatButton.className = 'chat-toggle';
  chatButton.innerHTML = '<i class="fas fa-comment"></i>';
  document.body.appendChild(chatButton);
  
  const chatWidget = document.querySelector('.chat-widget');
  
  chatButton.addEventListener('click', function() {
    chatWidget.style.display = chatWidget.style.display === 'block' ? 'none' : 'block';
  });
  
  // Form submission
  const messageForm = document.getElementById('messageForm');
  if (messageForm) {
    messageForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      messageForm.reset();
    });
  }
  
  // Chat functionality
  const chatInput = document.querySelector('.chat-input input');
  const chatSend = document.querySelector('.chat-input button');
  const chatMessages = document.querySelector('.chat-messages');
  
  if (chatSend) {
    chatSend.addEventListener('click', function() {
      if (chatInput.value.trim() !== '') {
        addMessage('You: ' + chatInput.value);
        chatInput.value = '';
        // Simulate reply after 1 second
        setTimeout(function() {
          addMessage('Support: Thank you for your message. We will reply soon.');
        }, 1000);
      }
    });
  }
  
  function addMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});