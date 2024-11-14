document.addEventListener('DOMContentLoaded', function () {
    fetch('http://127.0.0.1:8000/api/ipos/')
        .then(response => response.json())
        .then(data => {
            let ipoList = document.getElementById('ipo-list');
            data.forEach(ipo => {
                ipoList.innerHTML += `
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <div class="card-body">
                                <h5 class="card-title">${ipo.company_name}</h5>
                                <p class="card-text">Price Band: ${ipo.price_band}</p>
                                <p>Open Date: ${ipo.open_date}</p>
                                <p>Close Date: ${ipo.close_date}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        });
});
