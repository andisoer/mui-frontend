document.getElementById('tambah_dt').addEventListener('submit', function(e) {e.preventDefault();
    
    
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const telp = document.getElementById('telp').value;
    const topik = document.getElementById('topik').options[document.getElementById('topik').selectedIndex].value;
    const pesan = document.getElementById('pesan').value;
    const token = localStorage.getItem('accessToken');

    fetch('http://127.0.0.2:8000/apia/konsultasi/',{
        method: 'POST',
        headers: 
            {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${token}`
            },
        body: JSON.stringify({ 
            nama: nama,
            email: email,
            nomor_telepon: telp,
            topik: topik,
            pesan: pesan,
         })
    })
    .then(response =>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('Salah kabeh');
        }
        
    })
    .then(data => {
        console.log('Success :',data);
        // $('#exampleModal').modal('hide');
        window.location.reload()
    })
    .catch(error => {
        console.error('Error :',error);  
    });

});