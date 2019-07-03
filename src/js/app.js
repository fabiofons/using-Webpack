import '../scss/style.scss';
//db.collection('users').doc()

const validation = () => {
  const inputUser = document.querySelector('#user-name');
  const loginUser = document.querySelector('.login');
  if (inputUser.value !== "") { 
    sessionStorage.setItem("userName", inputUser.value);
    loginUser.style.display = 'none';
    readMsgfromDB();
    readUserfromDB();
    createUserOnDB();
  } else {
    // alert("Ingresa tu nombre");
  }
}

const createUserOnDB = () => {
  const user = sessionStorage.getItem('userName');
  db.collection('users').doc(`${user}`).set({state:'active'});

}


//Add new message from imput
const bindEvent = () => {
  const inputMsg = document.querySelector('#send');    
  inputMsg.addEventListener("keydown", (event) => {
    if (event.keyCode === 13 && inputMsg.value !== "") {
      addToDB(inputMsg);
      inputMsg.value = "";
      autoScroll();
    }
  });
}
bindEvent();

//Read message from firebase
const readMsgfromDB = () => {
  db.collection("messages").orderBy("date", "asc")
  .onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if (change.type === "added") {
        let message = change.doc.data();
        if (!message.date){
          message.date = "Just now";          
        } else {
          const date =  moment.unix(message.date.seconds);
          message.date = date.format("DD-MM-YYYY HH:mm:ss");
        }
        addMessages(message);
      }
    });
  });
}

//read users from firebase
const readUserfromDB = () => {
  db.collection("users").onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if (change.type === "added") {
        const user = change.doc;
        addUser(user);
      }
    });
  });
}

//write a message to firebase
const addToDB = (text) => {
  const user = sessionStorage.getItem('userName');
  db.collection("messages").add({
    name: user, // Get name from localStorage
    date: firebase.firestore.FieldValue.serverTimestamp(),
    body: text.value
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  // .catch((error) => {
  //   console.error("Error adding document: ", error);
  // });
}

//Add new messages from DB

const addMessages = (message) => {
  const target = document.querySelector('div.chat');
  const div = document.createElement('div');
  div.classList.add("message");
  div.innerHTML = `<p class="title">${message.name} <span>${message.date}</span></p><p class="text">${message.body}</p>`;
  target.appendChild(div);
};

//Add new user from DB
const addUser = (user) => {
  const target = document.querySelector('aside.contacts');
  const div = document.createElement('div');
  div.classList.add("user");
  div.innerHTML = `<span class="state"><i class="far fa-circle"></i></span><p class="name">${user.id}</p><i class="fas fa-ellipsis-v"></i>`;
  target.appendChild(div);
};
// Scroll to last message

const lastMessage = document.getElementById('chat');

const autoScroll = () => {
  let shouldScroll = lastMessage.scrollTop + lastMessage.clientHeight === lastMessage.scrollHeight; // boolean
  if (!shouldScroll) {
    scrollToBottom();
  }
}

const scrollToBottom = () => {
  lastMessage.scrollTop = lastMessage.scrollHeight;
}

  /*const bindingEvent = () => {
    $('#user1').on("click", () => {
      verify();
      request('https://makeitreal.s3.amazonaws.com/chats/pedro.json');
    });
    $('#user2').on("click", () => {
      verify();
      request('https://makeitreal.s3.amazonaws.com/chats/maria.json');
    });
    $('#user3').on("click", () => {
      verify();
      request('https://makeitreal.s3.amazonaws.com/chats/mauricio.json');
    });
  }
  
  bindingEvent()*/

    /*
  const request = (url) => {
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(messages) {
      printMsgs(messages);
    });
  } 

  const dateNow = () => {
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let d = new Date;
    let month = months[d.getMonth()]; 
    let day = d.getDate();
    let hour = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    let fecha = month.concat(" ",day," ",hour);
    return fecha;
  }
  */

  /*const autoScroll = () => {
    let windowChat = document.querySelector(".window")
    windowChat.scrollBy(0, 100); 
  }*/

    
  /*
  const printMsgs = (messages) => {
    messages.forEach(person => {
      writer(person);               
    });
  }

  const addMsg = (msg) => {
    let person = { 
      name:"Fabio",
      date: firebase.firestore.FieldValue.serverTimestamp(), 
      body: msg.value
      }; 
    //addToDB(msg);
    msg.value = " ";        
  }

  const clean = () => {
    let window = document.querySelector(".window");
    if(window.childElementCount > 0){
      while (window.firstChild) {
      window.firstChild.remove();
      }     
    }
  }*/


