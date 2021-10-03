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

}};