document.getElementById('btn1').addEventListener('click', getText);
document.getElementById('btn2').addEventListener('click', getJson);
document.getElementById('btn3').addEventListener('click', getExternal);

//Fetch local Text file
function getText() {
  fetch('test.txt')
    .then(res => res.text())
    .then(data => {
      document.getElementById('output').innerHTML = data;
    })
    .catch(error => document.getElementById('output').innerHTML = error);
}

//Fetch Local Json Data
function getJson() {
  fetch('posts.json')
    .then(res => res.json())
    .then(posts => {
      let output = '';
      posts.forEach(post => {
        output += `<li>${post.title}<p>${post.body}</p></li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(error => document.getElementById('output').innerHTML = error);
}

//Fetch External Data
function getExternal() {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(users => {
      let output = '';
      users.forEach(user => {
        output += `<li><img src=${user.avatar_url} height = '100' width='100'> ${user.login}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(error => document.getElementById('output').innerHTML = error);
}