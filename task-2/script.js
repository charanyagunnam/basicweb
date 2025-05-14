// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please complete all fields!");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Enter a valid email address.");
    return;
  }

  alert("Message sent successfully! 🎉");
  this.reset();
});

// To-Do List
function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (!taskText) return;

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', function () {
    this.remove();
  });

  document.getElementById('taskList').appendChild(li);
  input.value = '';
}
