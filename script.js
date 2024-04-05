alert("Welcome To Our TO-DO-LIST");

const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing. - Walt Disney",
    author: "Walt Disney"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    author: "Sam Levenson"
  },
  {
    text: "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    author: "C.S. Lewis"
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    author: "Winston Churchill"
  },
  {
    text: "Believe you can and you're halfway there. - Theodore Roosevelt",
    author: "Theodore Roosevelt"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop. - Confucius",
    author: "Confucius"
  }
];

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

function displayQuote() {
  const quoteContainer = document.getElementById("quote");
  const quote = getRandomQuote();
  quoteContainer.innerHTML = '"' + quote.text + '" - ' + quote.author;
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const ul = document.getElementById("taskList");
  ul.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML = '<span class="task-text">' + task.text + '</span>';
    if (task.completed) {
      li.classList.add("completed");
    }

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function() {
      li.remove();
      saveTasks();
    };

    const completeButton = document.createElement("button");
    completeButton.className = "complete-btn";
    completeButton.innerHTML = "Complete";
    completeButton.onclick = function() {
      li.classList.toggle("completed");
      saveTasks();
    };

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    ul.appendChild(li);
  });
}

function saveTasks() {
  const tasks = [];
  const lis = document.querySelectorAll("#taskList li");
  lis.forEach(li => {
    const task = {
      text: li.querySelector('.task-text').innerText,
      completed: li.classList.contains('completed')
    };
    tasks.push(task);
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
  var input = document.getElementById("taskInput").value.trim();
  if (input === '') {
    alert("Please enter a task!");
    return;
  }

  var ul = document.getElementById("taskList");
  var li = document.createElement("li");
  li.innerHTML = '<span class="task-text">' + input + '</span>';

  var deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = function() {
    li.remove();
    saveTasks();
  };

  var completeButton = document.createElement("button");
  completeButton.className = "complete-btn";
  completeButton.innerHTML = "Complete";
  completeButton.onclick = function() {
    li.classList.toggle("completed");
    saveTasks();
  };

  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  ul.appendChild(li);

  document.getElementById("taskInput").value = "";

  saveTasks();
}

document.getElementById("taskInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Display initial quote when page loads
window.onload = function() {
  loadTasks();
  displayQuote();
};
