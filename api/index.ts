export async function getRatedCarousel() {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/top_rated?api_key=431be5a1a4d902714410abe0289adf9b&language=en-US&page=1',
    {
      cache: 'no-store',
      next: {
        revalidate: 30,
      },
    }
  );

  const moviesRated = await response.json();

  return moviesRated;
}

export async function getPopularCarousel() {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=431be5a1a4d902714410abe0289adf9b&language=en-US&page=1',
    {
      cache: 'no-store',
      next: {
        revalidate: 30,
      },
    }
  );

  const moviesPopular = await response.json();
  return moviesPopular;
}
