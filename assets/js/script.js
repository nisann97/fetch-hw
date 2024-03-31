"use strict"


let table = document.querySelector("table tbody");

let modal = document.querySelector(".modal");

async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    let tableData = "";
    posts.forEach(data => {
        tableData += `<tr>
        <td>${data.userId}</td>
                <td class="data-id">${data.id}</td>
                <td>${data.title}</td>
               
                <td> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Get Info</button></td>
              </tr>`
    });

    table.innerHTML = tableData;

   


        async function getById(id){
 
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const postId = await response.json();
            return postId;
            
        }

        let infoBtn = document.querySelectorAll(".btn")

        infoBtn.forEach(btn => {
            btn.addEventListener("click", function(){
                
                modal.style.block = "display";
                let dataId = document.querySelector(".data-id");
                let clickedPostId = parseInt(dataId.innerText);
                let modalBody = document.querySelector(".modal-body");
                
                getById(clickedPostId).then(postId => {
                    if(postId.id === clickedPostId){

                       let modalBodyText = "";
                       
                      modalBodyText += `<p>${postId.body}<p>`;

                      modalBody.innerHTML = modalBodyText;


                    }
                })

                getPosts();
                
            })


    });
   
    








}

getPosts();
