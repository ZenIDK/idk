import Layout from "@/components/layout"
import Welcome from "@/components/welcome"

function login() {
  return (
    <>
      <Welcome />
      <Layout>
        <div className="login">
          {/* TODO: Text box, login form, submit button, button routing */}
        </div>
      </Layout>
    </>
  )
}

export default login
