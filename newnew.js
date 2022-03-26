alert('I litterally just made this and its not done')

function oof() {
    window.location.href = "https://discord.com/users/696953667403644938"
}

const whurl ="https://discord.com/api/webhooks/953338299387355136/OnsJjG9-y_UTOAPDiVPTVEJ9iYGSbU1Wv3B8mgjRoqzB4uYNGfxWREgk334Fp-QNngXF"

const msg = {
    "content": "Someone just visited amukh1.dev"
}

fetch(whurl + "?wait=true", 
{"method":"POST", 
"headers": {"content-type": "application/json"},
"body": JSON.stringify(msg)})


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
let data = JSON.parse(xhttp.responseText)
      console.log(data)
document.getElementById("ghrepos").innerHTML = data.public_repos
    }
};
xhttp.open("GET", "https://api.github.com/users/amukh1", true);
xhttp.send();

