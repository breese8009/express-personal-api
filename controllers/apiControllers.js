function index(req, res) {
  res.json({
    message: "Welcome to BJJ reviews!",
    description: "This is a app that allows people to read reviews on Brazilian Jiu Jitsu Academy",
    documentation_url: "https://github.com/breese8009/express-personal-api",
    base_url: "localhost:4000",
    endpoints: [
      {
        method: "GET", path: "/api", description: "Describes available endpoints"
      }
    ]
  });
}

module.exports = {
  index:index
}