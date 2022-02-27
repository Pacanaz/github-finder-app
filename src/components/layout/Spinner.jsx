import spinner from './assets/spinner.gif'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img
        width={180}
        className='text-center mx-auto select-none'
        src={spinner}
        alt='Loading...'
      />
      <p className='text-center'>Loading...</p>
    </div>
  )
}

export default Spinner
