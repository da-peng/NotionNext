import Link from 'next/link'

export default function LeftMenuBar () {
  return (
    <div className='w-30  border-r hidden lg:block pt-8'>
      <section>
        <Link href='/' legacyBehavior>
          <div className='text-center cursor-pointer  hover:text-black'>
            <i className='fas fa-home text-gray-500'/>
          </div>
        </Link>
      </section>
    </div>
  );
}
