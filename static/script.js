// const options = {method: 'GET'};

// fetch('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=u63CtTFvmtcyFrkizeVKKUGev7jYgNU3', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
var borrower = prompt("User name: ");
  document.getElementById("bookdetails").style.display="none";
var input = document.getElementById("e1");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
     document.getElementById("bookdetails").style.display="none";
    event.preventDefault();
    searchbook()
  }
});

function searchbook(){
  var j = document.getElementById("e1").value;
  const options = {method: 'GET'};
document.getElementById('b2').innerHTML='';
fetch('https://www.googleapis.com/books/v1/volumes?q='+j+'&key=AIzaSyCqx2mZz_BC0-IudUzG6mWp7x0ogf-cM2g', options)
  .then(response => response.json())
  .then(response => response.items.forEach(showbooks))
  .catch(err => console.error(err));

}
function showbooks(j){
  console.log(j)
  var link = j.selfLink;
  var id =j.id;
 var title = j.volumeInfo.title;
 var author = j.volumeInfo.authors;
  var img =j.volumeInfo.imageLinks.smallThumbnail;
  var desc=j.volumeInfo.description ;
  document.getElementById('b2').innerHTML+=`<div title="${title}" class="column" onclick="j('${link}')"><div class="card"><img src="${img}"/><div class="bookdit"><p class="truncate book-title ">${title}</p><button onclick="m('${id}','${title}')">Borrow</button></div></div></div>`;
}

function j(j){

const options = {method: 'GET'};

fetch(j, options)
  .then(response => response.json())
  .then(response => descbooks(response))
  .catch(err => console.error(err));
}
function descbooks(j){
document.getElementById("bookdetails").style.display="block";
   var title = j.volumeInfo.title;
  var author = j.volumeInfo.authors;
  var img =j.volumeInfo.imageLinks.smallThumbnail;
  var desc=j.volumeInfo.description ;
   document.getElementById("bookdetailtitle").innerHTML=title;
  document.getElementById("bookdetaildescription").innerHTML=desc;
   document.getElementById("bookdetailimg").src= img;
}
async function m(id,title){
  
  console.log(id,title,borrower);
  const url = `https://cs.adhvaithprasad.repl.co/api/borrow/${title}/${borrower}/${id}`;
const options = {method: 'GET'};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
}
function closebookdetail(){
  document.getElementById("bookdetails").style.display="none";
}
