// Function to add a comment to the comments list
function addComment() {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();
  
    if (commentText !== '') {
      const commentsList = document.getElementById('comments-list');
      const newComment = document.createElement('li');
      newComment.textContent = commentText;
      commentsList.appendChild(newComment);
  
      commentInput.value = '';
    }
  }
  
  // Function to increment the like count
  function incrementLikes() {
    const likeCount = document.getElementById('like-count');
    let count = parseInt(likeCount.textContent);
    count++;
    likeCount.textContent = count;
  }
  
  // Event listener for comment form submission
  const commentForm = document.getElementById('comment-form');
  commentForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addComment();
  });
  
  // Event listener for like button click
  const likeButton = document.getElementById('like-btn');
  likeButton.addEventListener('click', incrementLikes);
  
  // Function to handle video sharing
function shareVideo() {
    const videoLinkInput = document.getElementById('video-link-input');
    const videoUrl = document.getElementById('video-player').src;
    videoLinkInput.value = videoUrl;
    videoLinkInput.select();
    videoLinkInput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Video link copied!');
  }
  
  // Event listener for share button click
  const shareButton = document.getElementById('share-btn');
  shareButton.addEventListener('click', shareVideo);

  // Function to handle video playback
function playVideo() {
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.play();
  }
  
  function pauseVideo() {
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.pause();
  }
  
  // Event listeners for playback control buttons
  const playButton = document.getElementById('play-btn');
  const pauseButton = document.getElementById('pause-btn');
  playButton.addEventListener('click', playVideo);
  pauseButton.addEventListener('click', pauseVideo);

  // Function to handle comment sorting
function sortComments() {
    const sortOption = document.getElementById('comment-sort').value;
  }
  
  const commentSortSelect = document.getElementById('comment-sort');
  commentSortSelect.addEventListener('change', sortComments);
  
  
  
  