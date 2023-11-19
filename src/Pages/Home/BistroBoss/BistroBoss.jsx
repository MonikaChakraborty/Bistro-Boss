import img1 from '../../../assets/home/chef-service.jpg';

const BistroBoss = () => {
  return (
    <div className='relative mb-24 max-w-screen-xl mx-auto'>
      <img src={img1} alt="" />
      <div className='bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-8 px-8  lg:py-20 lg:px-36 text-center '>
        <h3 className='uppercase text-4xl mb-3'>Bistro Boss</h3>
        <p className='w-[800px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroBoss;
