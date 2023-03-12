const url = 'https://api.themoviedb.org/3/';
const key = '431be5a1a4d902714410abe0289adf9b&';

export async function getRatedCarousel() {
  const response = await fetch(
    `${url}movie/top_rated?api_key=${key}language=en-US&page=1`,
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
    `${url}movie/popular?api_key=${key}language=en-US&page=1`,
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

export async function getMoviesReleased() {
  const response = await fetch(
    `${url}movie/upcoming?api_key=${key}&language=en-US&page=1`,
    {
      cache: 'no-store',
      next: {
        revalidate: 30,
      },
    }
  )

  const moviesReleased = await response.json();
  return moviesReleased;
}

export async function getTrending() {
  const response = await fetch(
    `${url}/trending/movie/week?api_key=${key}`,
    {
      cache: 'no-store',
      next: {
        revalidate: 30,
      },
    }
  );

  const tranding = await response.json();
  return tranding;
}

export async function getGenre() {
  const response = await fetch(
    `${url}genre/list?api_key=${key}language=en-US`,
    {
      cache: 'no-store',
      next: {
        revalidate: 30,
      },
    }
  );

  const genre = await response.json();
  return genre;
}
