const apiUrl = 'http://127.0.0.1:8000/api/';

function fetchWithRetry(url, options) {
    return fetch(url, options)
        .then(response => response.json())
        .catch(error => {
            // Check if it's a CORS error
            if (error.name === 'TypeError' && error.message.includes('cross-origin')) {
                handleCORSFailure();
            } else {
                // Log other types of errors
                console.error('Fetch error:', error);
            }
        });
}

function fetchHomeData() {
    fetchWithRetry(apiUrl + "home/")
        .then(homeData => {
            console.log("homeData:", homeData);
            displayHomeData(homeData);
        });


}

function displayHomeData(data) {
    const certificateList = document.getElementById("home-list");
    certificateList.innerHTML = "";

    // Loop through the data
    data.forEach(element => {
        // Create HTML elements based on the fetched data
        const htmlContent = `
        <h1>${element.judul}</h1>
            <h2>${element.deskripsi}</h2>
            <div class="d-flex">
                <a href="#about" class="btn-get-started scrollto">Tentang Kita</a>
                <a href="${element.link_video}" class="glightbox btn-watch-video"><i
                        class="bi bi-play-circle"></i><span>Sekilas MUI Batu</span></a>
            </div>
        `;

        // Append the HTML content to the certificateList container
        certificateList.innerHTML += htmlContent;
    });
}

fetchHomeData()