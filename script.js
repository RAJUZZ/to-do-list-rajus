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
  
  function addTask() {
  var input = document.getElementById("taskInput").value.trim();
  if (input === '') {
    alert("Please enter a task!");
    return;
  }
  
  var ul = document.getElementById("taskList");
  var li = document.createElement("li");
  var quote = getRandomQuote();
  li.innerHTML = '<span class="task-text">' + input + '</span>' + '<span class="timestamp">Added: ' + getCurrentTime() + '</span>' + '<span class="quote">' + quote.text + ' - ' + quote.author + '</span>';
  
  var deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = function() {
    li.remove();
  };
  
  var completeButton = document.createElement("button");
  completeButton.className = "complete-btn";
  completeButton.innerHTML = "Complete";
  completeButton.onclick = function() {
    li.classList.toggle("completed");
    if (li.classList.contains("completed")) {
      completeButton.innerHTML = "Undo";
    } else {
      completeButton.innerHTML = "Complete";
    }
  };
  
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  ul.appendChild(li);
  
  document.getElementById("taskInput").value = "";
  displayQuote();
  }
