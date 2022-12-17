import { Header } from "../components/gobal";

export const SignInPage = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex flex-row w-full">
          <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
            <div className="flex lg:hidden justify-between items-center w-full py-4">
              <div className="flex items-center justify-start space-x-3">
                <span className="bg-black rounded-full w-6 h-6"></span>
                <a href="#" className="font-medium text-lg">
                  Brand
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>Not a member? </span>
                <a href="#" className="underline font-medium text-[#070eff]">
                  Sign up now
                </a>
              </div>
            </div>
            <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
              <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative w-fit">
                <span>Sign in with Google</span>
              </button>
            </div>
          </div>

          <div className="hidden lg:flex flex-col justify-between lg:p-8 xl:p-12 lg:max-w-lg xl:max-w-3xl bg-[url('/login-banner.png')]">
            <div className="flex items-center justify-start space-x-3"></div>
            <div className="space-y-5">
              <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
                Do you aspire to be an <br />
                <span className="text-white">indoor champion?</span>
              </h1>

              <p className="text-md md:text-xl text-white float-right">
                The only indoor sports facility and training center in
                Sacramento CA, specializing in Baseball, Softball, Futsal and
                Cricket. Book now for an action packed fun and learning.
              </p>
            </div>
            <p className="font-medium"></p>
          </div>
        </div>
      </div>
    </>
  );
};
