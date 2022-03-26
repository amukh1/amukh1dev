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
