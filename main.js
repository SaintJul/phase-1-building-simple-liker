// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likes = document.getElementsByClassName("like-glyph")

for(const heart of likes){
  heart.addEventListener("click", function() {
    mimicServerCall()

  .then(function(){

    if (heart.innerHTML === EMPTY_HEART){
   heart.innerText = FULL_HEART
   heart.className = "activated-heart"
    }else{
   heart.innerHTML = EMPTY_HEART
    }
  })
  .catch(function(error){
    const err = document.getElementById("modal")
    err.className = ""
    err.innerText = error
    setTimeout(() => err.className = "", 2000)

  })
  
 
  })
  
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
