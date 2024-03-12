const divEle = document.querySelector(".card-container");

function display(userId){
// Create XMLHttpRequest
    const request=new XMLHttpRequest();

    // open Request
    request.open('GET',`https://dummyjson.com/users`);

    // Send Request
    request.send();
    

    // addEventListener on request
    request.addEventListener('load',function(){
        console.log(typeof this.responseText);
        let data=JSON.parse(this.responseText);
        console.log(data.users);

        data.users.forEach((user) => {
        // HTML element of the data
            let divEl=`<div class="user-card">
                <img src=${user.image} alt="Profile Image" />
                <h3>${user.firstName}</h3>
                <h3>${user.lastName}</h3>
                <p class="email">${user.email}</p>
                <button class="btn">View Profile</button>
                </div>`;

            divEle.insertAdjacentHTML('afterbegin',divEl)  
                    
        });


        // HTML element of the data
        // let divEl=`<div class="user-card">
        // <img src=${data.image} alt="Profile Image" />
        // <h3>${data.firstName}</h3>
        // <h3>${data.lastName}</h3>
        // <p class="email">${data.email}</p>
        // <button class="btn">View Profile</button>
        // </div>`;

        // divEle.innerHTML=divEl

    })
}

display(1)
