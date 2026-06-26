export async function getGithubRepos() {

  const response = await fetch(
    "https://api.github.com/users/rienman88/repos",
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  return response.json();
}
