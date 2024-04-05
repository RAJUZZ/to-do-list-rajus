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
  
  function addTask() {
    var input = document.getElementById("taskInput").value.trim();
    if (input === '') {
      alert("Please enter a task!");
      return;
    }
    
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    var quote = getRandomQuote();
    li.innerHTML = '<span class="task-text">' + input + '</span>' + '<span class="timestamp">' </span>';
    
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
    };
    
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    ul.appendChild(li);
    
    document.getElementById("taskInput").value = "";
    
    displayQuote();
  }
  
  //function getCurrentTime() {
    //var now = new Date();
    //var hours = now.getHours();
    //var minutes = now.getMinutes();
   // var ampm = hours >= 12 ? 'PM' : 'AM';
    //hours = hours % 12;
   // hours = hours ? hours : 12; // the hour '0' should be '12'
   // minutes = minutes < 10 ? '0' + minutes : minutes;
    //var time = hours + ':' + minutes + ' ' + ampm;
   // var month = now.toLocaleString('default', { month: 'short' });
    //var date = now.getDate();
   // var year = now.getFullYear();
    //var formattedDate = month + ' ' + date + ', ' + year + ' at ' + time;
    //return formattedDate;
 // }
  
  document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
  
  // Display initial quote when page loads
  displayQuote();
  
