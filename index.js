import express from "express";
const app = express();
import "dotenv/config";
const port = process.env.PORT;

const githubData = {
  login: "paudeldipesh",
  id: 122140496,
  node_id: "U_kgDOB0e3UA",
  avatar_url: "https://avatars.githubusercontent.com/u/122140496?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/paudeldipesh",
  html_url: "https://github.com/paudeldipesh",
  followers_url: "https://api.github.com/users/paudeldipesh/followers",
  following_url:
    "https://api.github.com/users/paudeldipesh/following{/other_user}",
  gists_url: "https://api.github.com/users/paudeldipesh/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/paudeldipesh/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/paudeldipesh/subscriptions",
  organizations_url: "https://api.github.com/users/paudeldipesh/orgs",
  repos_url: "https://api.github.com/users/paudeldipesh/repos",
  events_url: "https://api.github.com/users/paudeldipesh/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/paudeldipesh/received_events",
  type: "User",
  site_admin: false,
  name: "Dipesh Paudel",
  company: null,
  blog: "",
  location: "Bharatpur-11, Chitwan",
  email: null,
  hireable: null,
  bio: "I don't have a life.",
  twitter_username: null,
  public_repos: 34,
  public_gists: 0,
  followers: 2,
  following: 1,
  created_at: "2023-01-07T04:47:30Z",
  updated_at: "2024-03-08T12:07:40Z",
};

app.get("/", (req, res) => {
  res.send(githubData.name);
});

app.get("/profile", (req, res) => {
  res.redirect(githubData.avatar_url);
});

app.get("/data", (req, res) => {
  res.json(githubData);
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
