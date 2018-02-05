var axios = require('axios');

module.exports = {
    fetchRepos: function(username) {
        return axios.get(`https://api.github.com/users/${username}/repos`)
          .then(res => {
            const persons = res.data;
            return persons;
          })
          .catch(error => {
              return 0;
          });
    }
};