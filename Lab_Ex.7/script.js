const httpRequest = new XMLHttpRequest();
const url = 'https://books-api-rz6d.onrender.com/books';
const ajaxButton = document.getElementById('fetch-button');
const bookList = document.getElementById('data');

ajaxButton.addEventListener('click', () => {
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        const books = JSON.parse(httpRequest.responseText);
        displayBooks(books);
      } else {
        alert('Request failed.');
      }
    }
  };

  httpRequest.open('GET', url, true);
  httpRequest.send();
});

function displayBooks(books) {
  bookList.innerHTML = '';
  books.forEach((book) => {
    bookList.innerHTML += `
      <div class="card">
        <div class="card-body">
          <h3>${book.title}</h3>
          <p class="card-text">${book.author}</p>
          <a href="${book.link}">Link</a>
        </div>
      </div>`;
  });
}
