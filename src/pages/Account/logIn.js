
export default function logIn() {
    return (
      <div className="contact">
        
        <form>
        <h2>Hi! Welcome Back</h2>
          <label>
            <span>Email</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Password</span>
            <textarea name="message" required></textarea>
          </label>
          <button className="form-button">Submit</button>
          <p>Don't Have a Account?&nbsp;Try &nbsp;<b>Sign Up</b></p>
        </form>
      </div>
    )
  }