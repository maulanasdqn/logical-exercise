const url = "http://localhost:3000";

function task1() {
  return fetch(url);
}

async function task2() {
  const config = {
    method: "PATCH",
  };
  const res = await fetch(url + "/task2", config);
  return await res.json();
}

async function task3() {
  const config = {
    method: "POST",
  };
  return fetch(url + "/task3?user_id=3&role=admin", config);
}

function task4() {
  const payload = {
    username: "admin",
    password: "password"
  }

  const config = {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(url + "/task4", config);
}

export { task1, task2, task3, task4 };
