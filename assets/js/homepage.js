// Great way to get API information and reformat it via JSON into an array of objects.
var getUserRepos = function () {
  var response = fetch("https://api.github.com/users/octocat/repos").then(
    function (response) {
      response.json().then(function (data) {
        console.log(data);
      });
    }
  );
};
console.log("outside");
getUserRepos();
