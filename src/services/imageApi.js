export const getImage = (date) => {
  return fetch('https://api-nasa-apod.herokuapp.com/api/v1/apod', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      date,
    })
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch image';

      return json;
    });
};
