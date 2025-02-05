const API_GATEWAY = process.env.NEXT_PUBLIC_API_GATEWAY_URL;

export async function login(email, password) {
  const res = await fetch(`${API_GATEWAY}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

export async function register(name, email, password) {
  const res = await fetch(`${API_GATEWAY}/api/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  return res.json();
}
