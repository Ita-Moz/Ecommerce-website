import CategoryIcon from '@mui/icons-material/Category';
function Admin() {
  return (
    <div className="flex flex-1 bg-gray-50">
      <div className="hidden md:flex md:w-64 md:flex-col">
      <ul className='p-5 space-y-2'>
        <li className='flex '><CategoryIcon/>Product</li>
        <li>Order</li>
      </ul>
      </div>

      <div className="flex flex-col flex-1">
        <main>
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              ADD YOUR CONTENT HERE
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Admin