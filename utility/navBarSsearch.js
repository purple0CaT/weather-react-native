export const fetchSearchQuery = async (value) => {
  try {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=10&appid=2bfd5ccc7de6daf21fc35b1af7b3431c`;
    const res = await fetch(url);
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      alert("Error");
    }
  } catch (error) {
    alert("Error");
    console.log(error);
  }
};
