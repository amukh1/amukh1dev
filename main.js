let ghuser
let ghrepos

function Survey() {

    var Survey = prompt('Do you think the website looks nice?', ':>')

    if(Survey !== 'null' || null) {
    const whurl ="https://discord.com/api/webhooks/892951894207660093/G2VP-a67_KuYkx3Sh5VIpBtZ8aapY1JHzhSjIqkhKCGF-rFdiIvWqrODC5Cz_BtMf-oT"

    const msg = {
    "content": `A user has taken the survey on amukh1.dev ! Their response was: "${Survey}"`
}

    fetch(whurl + "?wait=true", 
    {"method":"POST", 
    "headers": {"content-type": "application/json"},
    "body": JSON.stringify(msg)})

    }
alert('Thank you for taking the survey!')
};

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
let data = JSON.parse(xhttp.responseText)
      console.log(data)
console.log(data.login)
document.getElementById("ghuser").innerHTML = data.login
document.getElementById("ghrepos").innerHTML = data.public_repos
    }
};
xhttp.open("GET", "https://api.github.com/users/amukh1", true);
xhttp.send();

