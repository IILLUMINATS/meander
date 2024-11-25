// Fetch download links from Firebase and update CSS variables
fetch('https://devlua-default-rtdb.firebaseio.com/Meander/links%20download.json')
    .then(response => response.json())
    .then(data => {
        // Update CSS variables with the fetched values
        document.documentElement.style.setProperty('--telegram-download-url', `'${data.apk}'`);
        document.documentElement.style.setProperty('--google-play-url', `'${data["google play"]}'`);
        document.documentElement.style.setProperty('--rustore-url', `'${data.rustore}'`);
    })
    .catch(error => console.error('Error fetching download links:', error));
