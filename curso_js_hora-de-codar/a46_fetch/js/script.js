/*

  FECTH API é um meio nativo de realizar requisições a APIs com javascript
  podemos utilizar como PROMISE ou como ASYNC/AWAIT
  Se a requisição for GET é preciso passar apenas a URL
  do recurso que estamos resgatando da API
  Caso seja outro verbo, podemos configurar a 
  requisição com => method: body e headers

  O fetch é muito utilizado com frameeorks/libs como REACT, VUE e ANGULAR.
  
*/


const url = `https://jsonplaceholder.typicode.com/posts`

const loading = document.querySelector("#loading")

const postsContainer = document.querySelector("#posts-container")

const postPage = document.querySelector("#post")

const postContainer = document.querySelector("#post-container")

const commentsContainer = document.querySelector("#comments-container")

const commentForm = document.querySelector("#comment-form")

const email = document.querySelector("#email")

const bodyInput = document.querySelector("#body")

// get id from url

const urlSearchParams = new URLSearchParams(window.location.search)
const postId = urlSearchParams.get("id")

// get all posts

async function getAllPosts() {
  const response = await fetch(url)

  const data = await response.json()

  loading.classList.add("hide")

  data.map((posts) => {
    const div = document.createElement("div")
    div.setAttribute("class", "div-post")
    const title = document.createElement("h2")
    const body = document.createElement("p")
    const link = document.createElement("a")

    title.innerText = posts.title
    body.innerText = posts.body
    link.innerText = "Ler"
    link.setAttribute("href", `./posts.html?id=${posts.id}`)

    div.appendChild(title)
    div.appendChild(body)
    div.appendChild(link)

    postsContainer.appendChild(div)

  })
}

// get individual post

async function getPost(id) {
  const [responsePost, responseComment] = await Promise.all([
    fetch(`${url}/${id}`),
    fetch(`${url}/${id}/comments`)
  ])

  const dataPost = await responsePost.json()
  const dataComments = await responseComment.json()

  loading.classList.add("hide")
  postPage.classList.remove("hide")

  const title = document.createElement("h2")
  const body = document.createElement("p")

  title.innerText = dataPost.title
  body.innerText = dataPost.body

  postContainer.appendChild(title)
  postContainer.appendChild(body)

  dataComments.map(element => {
    createComments(element)
  })
}

function createComments(comment) {
  const div = document.createElement("div")
  const email = document.createElement("h3")
  const commentBody = document.createElement("p")

  email.innerText = comment.email
  commentBody.innerText = comment.body

  div.appendChild(email)
  div.appendChild(commentBody)

  commentsContainer.appendChild(div)
}

// post a comment

async function postComment(comment) {
  const response = await fetch(`${url}/${postId}/comments`, {
    method: "POST",
    body: comment,
    headers: {
      "Content-type": "application/json"
    }  
  })
  const data = await response.json()
  createComments(data)
}

if (!postId) {
  getAllPosts()
} else {
  getPost(postId)

  // add event to comment form

  commentForm.addEventListener("submit", (el) => {
    el.preventDefault()

    let comment = {
      email: email.value,
      body: bodyInput.value
    }

    comment = JSON.stringify(comment)

    postComment(comment)
    
  })
}