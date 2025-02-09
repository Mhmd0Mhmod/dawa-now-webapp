import LogoNoText from "/public/assets/logoNoText.svg?react";

Logo.defaultProps = {
  center: false,
};

// function Logo({ center }: { center?: boolean }) {

function Logo() {
  return (
    <div className="relative flex items-center">
      <h1 className={`font-k2d text-7xl font-extrabold text-white`}>DawaNow</h1>
      <div>
        <LogoNoText className={"w-full"} />
      </div>
    </div>
  );
}

export default Logo;
