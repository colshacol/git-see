export const getRepo = ({ repoStr }) => {
  return fetch(`http://localhost:3987/api/v1/repo/${repoStr}`)
    .then(res => res.json())
    .then(data => {
      return data
    }).catch(err => {
      console.warn('Got no repo back: ', repoStr)
      return {
        _id: false
      }
    });
};
