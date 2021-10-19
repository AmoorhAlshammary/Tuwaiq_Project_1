const  mainpge = $("#mainpge");
function mainpgeHide(){
  mainpge.hide();
}
function mainpgeShow(){
  mainpge.show();
}
function mainpgeRemove(){
  mainpge.remove();
}

    

    const main = $("#main");
    const nameInput = $("#name");
    const imgInput = $("#img");
    const descriptionInput = $("#description");
    
    
    const users = [
        { Name: "Faisal", img: "pp.jpg", description: "supervisor" },
        { Name: "Amirah", img: "aa.jpg",description : "painter" }];
    
        function mainpage(array) {
          for (let i = 0; i < array.length; i++) {
            const div= $(`<div class="secondryContainer">
            <li>Nam: ${array[i].Name}</li>
               <img src="${array[i].img}">
               <p> ${array[i].description}></p>
            </div>`);
            mainpge.append(div);
          }
        }
    
        mainpage(users);

        
          function adduser(){
          const newuser= {
            Name: nameInput.val(),
            img: imgInput.val(),
            description: descriptionInput.val(),
          };
         users.push(newuser);
         mainpge.html("")
         mainpage(users)

        //  mainpage([newuser]);
        }
        
