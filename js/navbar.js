// Fetch the navbar content from navbar.html
fetch('/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('body').insertAdjacentHTML('afterbegin', data);
    })
    .catch(error => console.error('Error fetching navbar:', error));
