document.addEventListener('DOMContentLoaded',function(){
    fetchGallery();
});

function fetchGallery(){
    // const token = localStorage.getGallery('accessToken');
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAzMTQxNzY1LCJpYXQiOjE3MDMxNDE0NjUsImp0aSI6IjMzNmZkYmJjMGU0MDQyNzk5YjA4MmU5OWU3NTAxMGUwIiwidXNlcl9pZCI6MX0.iBoa54Np8fhijkwiqIWi9cJFsr_e7O7GBEfy8LN6y9E';
    fetch('http://127.0.0.1:8000/api/gallery/',
    {
        // headers: {
        //     'Authorization' : `Bearer ${token}`
        // }
    }
    )
        .then(response => response.json())
        .then(data => displayItems(data))
        .catch(error => console.error('Error:', error));
}

function displayItems(gallery){
    const itemsContainer = document.getElementById('gallery')
    gallery.forEach(gallery => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('col-md-4');
        itemElement.innerHTML = `
        <div class="card crop-img">
        <img
          src="${gallery.Gambar}"
          class="card-img-top"
          width="200"
          height="200"
        />
        <div class="card-body">
          <h5 class="card-title">${gallery.Judul}</h5>
          <p class="card-text">
            ${gallery.Deskripsi}
          </p>
        </div>
      </div>
        `;
        itemsContainer.appendChild(itemElement)
    });

    document.querySelectorAll('.update-btn').forEach(button => {
        button.addEventListener('click', function(){
            openUpdateModal(this.getAttribute('data-id'));
        });
    });
};
