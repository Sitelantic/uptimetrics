type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-lighter-base-bg flex justify-center">
      <div className="container flex gap-8 flex-col justify-around items-center p-8">
        <div className="max-w-3xl text-center flex flex-col gap-8">
          <h2 className="font-extrabold">
            The world's leading <br></br>
            <span className="text-bright-green">uptime monitor</span>
          </h2>
          <h6 className="normal-case">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </h6>
        </div>
        <div className="py-4 flex flex-col gap-8">
          <div className="navbar__button flex justify-center">
            <h6 className="bg-bright-green text-dark-green font-semibold p-4 max-w-max">
              Start monitoring
            </h6>
          </div>
          <div className="flex gap-4">
            <div>
              <p>No credit card required</p>
            </div>
            <div>
              <p>50 monitors for free</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
