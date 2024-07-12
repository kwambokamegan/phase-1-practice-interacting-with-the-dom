document.addEventListener('DOMContentLoaded', () => {
    let timer = 0;
    let timerInterval;
    const timerDisplay = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const likeButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.getElementById('list');
  
    // Function to start the timer
    function startTimer() {
      timerInterval = setInterval(() => {
        timer++;
        timerDisplay.textContent = timer;
      }, 1000);
    }
  
    // Function to pause the timer
    function pauseTimer() {
      clearInterval(timerInterval);
      pauseButton.textContent = 'resume';
      plusButton.disabled = true;
      minusButton.disabled = true;
      likeButton.disabled = true;
      commentForm.querySelector('button').disabled = true;
    }
  
    // Function to resume the timer
    function resumeTimer() {
      startTimer();
      pauseButton.textContent = 'pause';
      plusButton.disabled = false;
      minusButton.disabled = false;
      likeButton.disabled = false;
      commentForm.querySelector('button').disabled = false;
    }
  
    // Start the timer on page load
    startTimer();
  
    // Increment timer
    plusButton.addEventListener('click', () => {
      timer++;
      timerDisplay.textContent = timer;
    });
  
    // Decrement timer (with lower limit of 0)
    minusButton.addEventListener('click', () => {
      if (timer > 0) {
        timer--;
        timerDisplay.textContent = timer;
      }
    });
  
    // "Like" button functionality
    likeButton.addEventListener('click', () => {
      const li = document.createElement('li');
      li.textContent = `${timer} has been liked`;
      commentsList.appendChild(li);
    });
  
    // Pause/resume button functionality
    pauseButton.addEventListener('click', () => {
      if (pauseButton.textContent === 'pause') {
        pauseTimer();
      } else {
        resumeTimer();
      }
    });
  
    // Comment form submission
    commentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const commentInput = commentForm.querySelector('input[type="text"]');
      const comment = commentInput.value.trim();
      if (comment !== '') {
        const li = document.createElement('li');
        li.textContent = comment;
        commentsList.appendChild(li);
        commentInput.value = '';
      }
    });
  });