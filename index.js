function addingEventListener() {
    //binds an event listener in addingEventListener():
    input.addEventListener('click', clickAlert);
    //basically binding is including an event using the JavaScript syntax written above
}

//code is available from the README.md file
const input = document.getElementById('input');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);