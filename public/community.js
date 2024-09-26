  // Carica i commenti da LocalStorage all'avvio della pagina
  window.onload = function() {
    loadComments();
};

function addComment() {
    let commentInput = document.getElementById("commentInput").value;

    // Salva i commenti nel LocalStorage
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(commentInput);
    localStorage.setItem("comments", JSON.stringify(comments));

    // Aggiungi immediatamente il commento alla lista
    document.getElementById("commentInput").value = ""; // Reset textarea
    loadComments();
}

function loadComments() {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    let commentList = document.getElementById("commentList");
    commentList.innerHTML = ""; // Reset list

    // Visualizza tutti i commenti
    comments.forEach(comment => {
        let listItem = document.createElement("li");
        listItem.textContent = comment;
        commentList.appendChild(listItem);
    });
}