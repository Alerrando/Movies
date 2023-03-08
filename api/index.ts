export async function getFeaturedCarousel() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=431be5a1a4d902714410abe0289adf9b&language=en-US&page=1",
    {
      cache: "no-store",
      next: {
        revalidate: 30,
      },
    }
  );

  const repos = await response.json();

  return repos;
}
