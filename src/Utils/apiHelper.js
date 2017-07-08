const accessToken = '7a22f910dcdff63bd3ebbe48d022f05e8268c67249709b5489d923f97bcf96ec';
const fetchData = url => fetch(url, {
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
}).then(res => res.json());

export default fetchData;
