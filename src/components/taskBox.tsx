import Link from 'next/link'
function TaskBox(id: number, description: string) {
  return (
    <div className='taskBoxContainer'>
      <Link
        href='/newbie/task/1'
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <div className='taskBox' id='taskBox1'>
          <br></br>
          Task 1<p>Meet your team!</p>
        </div>
      </Link>
      <div className='taskBox' id='taskBox2'>
        <br></br>
        Task 2<p>Install ZDI</p>
      </div>
      <div className='taskBox' id='taskBox3'>
        <br></br>
        Task 3<p>Install scooter</p>
      </div>
      <div className='taskBox' id='taskBox4'>
        <br></br>
        Task 4<p>Configure lotus</p>
      </div>
      <div className='taskBox' id='taskBox5'>
        <br></br>
        Task 5<p>Set up local env</p>
      </div>
      <div className='taskBox' id='taskBox6'>
        <br></br>
        Task 6<p>Access requests</p>
      </div>
    </div>
  )
}

export default TaskBox
