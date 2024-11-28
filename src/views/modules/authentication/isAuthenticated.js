// Mock authentication check
export const isAuthenticated = () => {
    return !!localStorage.getItem("username"); 
  };
  