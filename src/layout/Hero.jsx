import img1 from '../assets/img/child-labour.png';

function Hero() {
  return (
    <div className="bg-[#FFFFFF] pt-20">
      <div className="">
        <h1 className="text-5xl font-bold text-black text-left pl-14">
          Child labour
        </h1>
        <div className='pl-16'>
          <img src={img1} alt="" />
          <p className='text-black'>
            This page introduces you to the issues surrounding child labour. It
            explains what child labour is, where and why children work and how
            working can prevent them from going to school and trap them in a
            cycle of poverty.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero
