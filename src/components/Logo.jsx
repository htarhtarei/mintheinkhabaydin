import logo from "../assets/logo.png"

const Logo = () => {
  return (
    <div className="my-8 w-screen">
      <div className="flex justify-center ">
        <img src={logo} alt="logo" className="w-36 h-36 rounded-full" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-center pt-4">လက်ထောက်ဗေဒင်</h1>
    </div>
  );
}

export default Logo
