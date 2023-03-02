import { supabase } from './../lib/supabaseClient';

function Page({ manager }) {
  return (
    <ul>
      {manager.map((man) => (
        <li key={man.team}>{man.email}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  const email = "abcd@gmail.com"
  let { data } = await supabase.from('Manager').select()
  const {error} = await supabase.from('Manager').insert({email: "abcd123@gmail.com", team: "zeus"})
  console.log(error)
  console.log(data?.some(item => item.email === email))
  console.log(data)
  return {
    props: {
     manager: data
    },
  }
}

export default Page;