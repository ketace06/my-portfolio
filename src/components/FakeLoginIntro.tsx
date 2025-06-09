const FakeLogin = ({ onLogin }: { onLogin: () => void }) => {
  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="https://64.media.tumblr.com/d4d58fce4e215a15641c378df2e64b45/e67f7b676443ff36-2c/s1280x1920/a60668dc192ad3273f00efa48b29ced333b3f55c.png"
          className="avatar"
        />
        <h2 className="username">User</h2>
        <button className="login-button" onClick={onLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default FakeLogin;
