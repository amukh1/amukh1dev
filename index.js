// const whurl ="https://discord.com/api/webhooks/892951894207660093/G2VP-a67_KuYkx3Sh5VIpBtZ8aapY1JHzhSjIqkhKCGF-rFdiIvWqrODC5Cz_BtMf-oT"

// const msg = {
//     "content": "A user has loaded amukh1s website!"
// }

// fetch(whurl + "?wait=true", 
// {"method":"POST", 
// "headers": {"content-type": "application/json"},
// "body": JSON.stringify(msg)})
const data = 'it worked'
const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  const response = await fetch('/api', options);
  const json = await response.json();
  console.log(json);
