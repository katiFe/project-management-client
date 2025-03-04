import axios from 'axios';

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5000/api',
      withCredentials: true
    });
  }

 signup = (username, password) => {
    return this.service
    .post('/signup', { username, password })
    .then(response => response.data);
  }; 

  loggedin = () => {
    return this.service.get('/loggedin').then(response => response.data);
  };

  login = (username, password) => {
    return this.service.post('/login', { username, password }).then(response => response.data);
  };
   
  logout = () => {
    return this.service.post('/logout', {}).then(response => response.data);
  };
}

const authService = new AuthService();

export default authService;

