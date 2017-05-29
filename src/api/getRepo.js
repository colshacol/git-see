export const getRepo = async ({ owner, repo }) => {
  fetch(`http://localhost:3987/api/v1/repo/${this.state.inputValue}`)
    .then(res => res.json())
    .then(data => {
      return data
    }).catch(console.error);
};
