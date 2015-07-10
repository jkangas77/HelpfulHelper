
var mail = document.getElementById('openEmail')
mail.addEventListener('click',function(){window.open("https://mail.google.com")});

var subs = document.getElementById('openSubs')
subs.addEventListener('click',function(){window.open("https://www.youtube.com/feed/subscriptions")});

var happy = document.getElementById('happyButton')
happy.addEventListener('click',function(){
var webArray = ["http://hristu.net/","http://doge2048.com/","http://ihasabucket.com/",
"http://haneke.net/","http://bringvictory.com/","http://riddlydiddly.com/","http://www.omfgdogs.com/",
"http://jefemagril.github.io/0/","http://www.darthsanddroids.net/episodes/0001.html",
"http://recursivedrawing.com/","https://www.facebook.com/Cycle7Official","http://wonderfl.net/c/tNGi/fullscreen"]
window.open(webArray[Math.floor(Math.random()*webArray.length)])
});

var push = document.getElementById('pushText')
push.addEventListener('click',function(){
var text = document.getElementById('textField').value
// window.open(text)

var bookmarks = document.getElementById('bookmarks');
newlink = document.createElement("a");
newlink.innerHTML=("<img src = 'Happy.png' class='annoyingChild'/>");
bookmarks.appendChild(newlink);
});

var deleting = document.getElementById('deleteButtons');
deleting.addEventListener('click',function(){
  var bookmarks = document.getElementById('bookmarks');
  bookmarks.innerHTML=""
});
