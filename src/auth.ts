class Auth {
  authenticated: boolean;

  constructor() {
    this.authenticated = false;
  }

  signIn = (callBack: () => void): void => {
    this.authenticated = true;
    callBack();
  };

  signOut = (callBack: () => void): void => {
    this.authenticated = false;
    callBack();
  };

  isAuthenticated = (): boolean => this.authenticated;
}

export default new Auth();
