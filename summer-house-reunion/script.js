function submitRSVP() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const partySize = document.getElementById('partySize').value;

    if (!firstName || !lastName || !email || !partySize) {
      document.getElementById('formError').style.display = 'block';
      return false;
    } else {
      document.getElementById('formError').style.display = 'none';
      document.getElementById('formLoading').style.display = 'block';
      return true;
    }
  }