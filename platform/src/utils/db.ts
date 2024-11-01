export const fetchUserInfo = async (email: string) => {
    const cachedUserInfo = localStorage.getItem('userInfo');
    if (cachedUserInfo) {
      return JSON.parse(cachedUserInfo);
    }
    const encodedEmail = encodeURIComponent(email);
    const response = await fetch(`/api/auth/user/${encodedEmail}`, {
      method: 'GET',
    });
    const data = await response.json();
    localStorage.setItem('userInfo', JSON.stringify(data));
    return data;
  }
  