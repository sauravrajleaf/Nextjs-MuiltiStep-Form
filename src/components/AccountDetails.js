export default function AccountDetails({
  prevStep,
  nextStep,
  handleInputChange,
  formData,
}) {
  return (
    <form>
      <h2>Account Details</h2>
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        required
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        required
      />
      <button type="button" onClick={nextStep}>
        Next
      </button>
      <button type="button" onClick={prevStep}>
        Previous
      </button>
    </form>
  );
}
