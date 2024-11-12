import React from "react";

type AuthPage = "onBoarding";

type AuthLayoutProps = React.PropsWithChildren & {
  page: AuthPage;
};

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid h-screen grid-cols-1 md:grid-cols-2">
      <div className="relative hidden h-screen w-full md:block">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-vector/payment-information-concept-illustration_114360-2886.jpg?t=st=1731334450~exp=1731338050~hmac=f3085b2114b7fda9e245edb7f955e013650865c4c97ae05ad9b20be697e28017&w=1380)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Content goes here */}
        <div className="relative left-5 top-5 z-10">
          <h1 className="text-3xl text-white">
            <img
              src={"/images/vendpal-green.svg"}
              alt="logo"
              width={100}
              height={100}
            />
          </h1>
        </div>
      </div>
      {children}
    </div>
  );
}

export default AuthLayout;
