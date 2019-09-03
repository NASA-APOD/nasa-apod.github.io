export const getImage = (date) => {
  return fetch('http://localhost:7891/api/v1/apod', {
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
