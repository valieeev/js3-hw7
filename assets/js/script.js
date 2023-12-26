document.getElementById('filterSelect').addEventListener('change', searchBooks)
document.getElementById('sortSelect').addEventListener('change', searchBooks)



function searchBooks() {

    const loader = document.getElementById('loader')
    const actionButton = document.getElementById('actionButton')
    const additionalInfo = document.getElementById('additionalInfo')


    function showAdditionalInfo() {
        loader.style.display = 'block';
        setTimeout(function() {
            loader.style.display = 'none';
      

            additionalInfo.style.display = 'block';
        }, 2000); 
    }
      actionButton.addEventListener('click', function() {
        showAdditionalInfo();
    });



    const searchInput = document.getElementById('searchInput')
    const query = searchInput.value

    if (!query) {
        alert('please write something')
        return
    }

    document.getElementById("results").innerHTML = ''
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`

    fetch(url)
    .then(responce => responce.json())
    .then(data => {
        displayResults(data.items)
    })
    .catch(err => { err })
}

function displayResults(books) {
    const resultContainer = document.getElementById('results')

    books.forEach(book => {
        
        const bookEl = document.createElement('div')

        const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Authors';
        const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'no-image.png';

        bookEl.classList.add('wrapper')
        bookEl.innerHTML = `      
        <div class="product-img">
            <img src="${thumbnail}" height="430" width="340">
        </div>
        <div class="product-info">
        <div class="product-text">
            <h1>${book.volumeInfo.title}</h1>
            <h2></h2>
            <p>Authors: ${authors}</p>
        </div>
            <div class="product-price-btn">
                <button type="button">Read More</button>
            </div>
      </div>`
      resultContainer.appendChild(bookEl)

    });
}


function searchLoading() {
        const loader = document.getElementById('loader')
    const actionButton = document.getElementById('actionButton')
    const additionalInfo = document.getElementById('additionalInfo')


    function showAdditionalInfo() {
        loader.style.display = 'block';
        setTimeout(function() {
            loader.style.display = 'none';
      

            additionalInfo.style.display = 'block';
        }, 3000); 
    }
      actionButton.addEventListener('click', function() {
        showAdditionalInfo();
    });
}


const loader = document.getElementById('loader');
const actionButton = document.getElementById('readmoreButton');
const additionalInfo = document.getElementById('addInfo');


function showAdditionalInfo() {
    loader.style.display = 'block';
    setTimeout(function() {
        loader.style.display = 'none';
        additionalInfo.style.display = 'block';
    }, 1000);
}

actionButton.addEventListener('click', function() {
  showAdditionalInfo();
});
