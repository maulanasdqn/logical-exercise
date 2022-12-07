const url = "http://localhost:3000";
function task1() {
  return fetch(url); // TODO: replace this
}

async function task2() {
  const response = await fetch(url + "/task2", {
    method: "PATCH",
  }).then((res) => res.json());

  return response;
}

function task3() {
  return fetch(url + "/task3?user_id=3&role=admin", {
    method: "POST",
  });
}

function task4() {
  const user = {
    username: "admin",
    password: "password",
  };

  return fetch(url + "/task4", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export { task1, task2, task3, task4 };
