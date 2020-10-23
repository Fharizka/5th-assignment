// https://repl.it/@Friandy/js-async-exercice#script.js

// ===========================
// 1.PROMISE ALL


const getFirstName = () => {
  const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
          return (true) ?
              resolve("Binar") : reject(Error("Gagal"))
      }, 3000)
  });
  return promise;
};

const getLastName = (first) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          return (true) ?
              resolve(`${first} Academy`) : reject(Error("Gagal"))
      }, 3000)
  })
}


const handleOnClick = () => {
  var a = getFirstName().then(first => getLastName(first))
  var b = a.then(hasil => {
      document.querySelector("#hasil").innerText = hasil
  })
  Promise.all([a,b]).then(console.log(`Clicking...`))
}



// =======================================ANSWER
// 2.a. Promise Chaining

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject(Error("Invalid ID"))
      }
      let response;
      if (id > 10) {
        response = {
          sucess: false,
          id: id,
          message: "User Not Found!"
        }
      } else {
        response = {
          sucess: true,
          id: id,
          message: "User Found",
        };
      }
      resolve(response);
    }, 2000);
  });
}

const handleOnClick = () => {
  console.log("Clicked...")
  getUser(9).then((result) => {
    const dataUser = result;
    console.log(dataUser);
  })
    .catch((err) => {
      console.log(err);
    })
}



// ===========================
// 2.b. Promise All

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject(Error("Invalid ID"))
      }
      let response;
      if (id > 10) {
        response = {
          sucess: false,
          id: id,
          message: "User Not Found!"
        }
      } else {
        response = {
          sucess: true,
          id: id,
          message: "User Found",
        };
      }
      resolve(response);
    }, 2000);
  });
}



const handleOnClick = () => {
  console.log("Clicked...");
  Promise.all([getUser(11)])
    .then((response) => {
      const dataUser = response[0];
      console.log(dataUser);
    })
    .catch((Error) => {
      console.log(error)
    });
}


// ===========================
// 2.c. Async Await


const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject(Error("Invalid ID"))
      }
      let response;
      if (id > 10) {
        response = {
          sucess: false,
          id: id,
          message: "User Not Found!"
        }
      } else {
        response = {
          sucess: true,
          id: id,
          message: "User Found",
        };
      }
      resolve(response);
    }, 2000);
  });
}

const handleOnClick = async () => {
  console.log("Clicked...");
  try {
    const dataUser = await getUser(12);
    console.log(dataUser);
  } catch (error) {
    console.log(err);
  }
};