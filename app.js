const content = {
    "posts": [
        {
            "title":  "Uma breve História do Mundo",
            "autor": "Geoffrey Blainey",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/916itKJ9AAL.jpg"
        },
        {
            "title": "O corpo fala",
            "autor": "Pierre Weil e Roland Tompakow",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "imgUrl": "https://coisasdeatleta.files.wordpress.com/2017/08/oi.png"
        },
        {
            "title":  "Nutrição Vital",
            "autor": "Soraya Terra Coury",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "imgUrl": "https://shopfacil.vteximg.com.br/arquivos/ids/1151102/Livro---Nutricao-Vital--uma-Abordagem-Holistica-da-Alimentacao-e-Saude_0.jpg"
        }
    ]
}

const blogContent = document.querySelector("#corpo");

content.posts.forEach(element => {
    const post = document.createElement('div');
    post.classList.add('post_content')

    const title = document.createElement('div');
    const author = document.createElement('div');
    const text = document.createElement('div');
    const img = document.createElement('img');

    title.innerHTML = element.title;
    title.classList.add('title_post');

    author.innerHTML = element.autor;
    author.classList.add('author_post');

    text.innerHTML = element.text;
    text.classList.add('text_post');

    img.src = element.imgUrl;
    img.classList.add('img_post');

    post.appendChild(title);
    post.appendChild(author);
    post.appendChild(text);
    post.appendChild(img);
    blogContent.appendChild(post);
});

console.log(lista)