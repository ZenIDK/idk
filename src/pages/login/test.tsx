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
  let { data } = await supabase.from('Manager').select()
  console.log(data)
  return {
    props: {
     manager: data
    },
  }
}

export default Page;