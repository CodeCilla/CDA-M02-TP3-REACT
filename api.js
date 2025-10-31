const API_URL = 'http://localhost:3000/api';

export async function fetchEvents(city = null, category = null) {
  let url = `${API_URL}/events`;

  const params = new URLSearchParams();
  if (city) params.append('city', city);
  if (category) params.append('category', category);

  if ([...params].length > 0) url += `?${params.toString()}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.data;
}

export async function fetchCities() {
  const response = await fetch(`${API_URL}/cities`);
  const data = await response.json();
  return data.data;
}

export async function fetchCategories() {
  const response = await fetch(`${API_URL}/categories`);
  const data = await response.json();
  return data.data;
}
