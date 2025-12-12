import { GoogleLogin } from 'react-google-login';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function ConnectGmail({ onSuccess }) {
  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Connect Gmail"
      scope="https://mail.google.com/"
      accessType="offline"
      prompt="consent"
      onSuccess={onSuccess}
      onFailure={(err) => console.log(err)}
    />
  );
}

export default ConnectGmail;
