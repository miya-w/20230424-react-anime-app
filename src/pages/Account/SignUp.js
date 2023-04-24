
export default function SignUp() {
    return (
       
       
      <div className="contact">
     
        <form>
        <h2>Create a new Account</h2>
        <label>
            <span>Your Name</span>
            <input type="Name" name="Name" required />
          </label>
          <label>
            <span>Your email</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Password</span>
            <textarea name="message" required></textarea>
          </label>
          <button className="form-button">Submit</button>
          
          <p>Had an Account?&nbsp; Try &nbsp;<b>Lon In</b></p>
        </form>
      </div>
    
    )
  }