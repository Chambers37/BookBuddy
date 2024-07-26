

const Account = ({ token }) => {
  return (
    <>
      {
        token ? <h2>Here is your account info!</h2> : <h2>You must login first!</h2>
      }
    </>
  )
}

export default Account