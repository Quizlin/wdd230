fetch('file.txt')
.then(response => {
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return response.text();
})
.then(text => {
    text = fetch('file.txt').then(response => {
        document.getElementById("demo").innerHTML = response.text()
     })
})
.catch(error => {
    // Handle/report error
});