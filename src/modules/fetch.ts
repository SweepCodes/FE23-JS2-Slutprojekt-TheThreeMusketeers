const baseUrl = `https://musketeerium-default-rtdb.europe-west1.firebasedatabase.app/`;

type Users = {
  username: string;
  password: string;
  profilepic: string;
};
export async function getUsers(): Promise<Users> {
  let response = await fetch(baseUrl + "/.json");
  let data = await response.json();
  return data.users as Users;
}
// export async function getComments() {
//   let response = await fetch(baseUrl + "/.json");
//   let data = await response.json();
//   for (const key in data.comments) {
//     console.log(data.comments[key].category);
//     console.log(data.comments[key].username);
//     console.log(data.comments[key].image);
//     console.log(data.comments[key].context);
//   }
//   return data;
// }
export async function register(
  username: string,
  password: string,
  profilepic: string
) {
  const url = baseUrl + "/users/.json";
  let userInfo = { username, password, profilepic };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userInfo),
  };

  let response = await fetch(url, requestOptions);
  let data = await response.json();
  console.log(data);
}

export async function loginChecker(
  user: string,
  pass: string
): Promise<boolean> {
  const users = await getUsers();
  for (const key in users) {
    const currentUser = users[key];
    if (currentUser.username === user && currentUser.password === pass)
      return true;
  }
  alert("Wrong username or password");
  return false;
}
//   export async function postComment() {
//     const commentsUrl = ``
//     let comment = //comment text input queryselect
//     let commentObject = { comment };

//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(commentObject),
//     };

//     let response = await fetch(commentUrl, requestOptions);
//     let data = await response.json();
//     console.log(data);
//   }
