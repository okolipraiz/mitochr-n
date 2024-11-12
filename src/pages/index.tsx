import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 
import AuthLayout from "@/components/layouts/auth/AuthLayout";
import { CustomButton } from "@/components/dashboard/buttons/CustomButton";

type Inputs = {
  email: string;
  password: string;
};

const Home = () => {

 const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: Inputs) => {
    console.log(data);
    setIsLoading(true);
    // Use history.push for navigation in React
    navigate("/dashboard");
  };

  return (
    <AuthLayout page="onBoarding">
      <div className="container my-10 md:mx-auto md:my-14">
        <div className="mt-20 md:mx-20">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold">
              Login to <span className="text-[#00361D]">Vendpal</span>
            </h1>
            <p>Fill in some basic information to get access</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="pt-20">
            <div className="space-y-16">
              <div>
                <input
                  type="text"
                  className="w-full border-b border-black pb-3 placeholder-black focus-visible:outline-none rounded-none"
                  placeholder="Email Address*"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div>
                <input
                  type="password"
                  className="w-full border-b border-black pb-3 placeholder-black focus-visible:outline-none rounded-none"
                  placeholder="Enter password*"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
            </div>
            <div className="pb-4 pt-8 text-end text-gray-500">
              Forget password?
            </div>

            <CustomButton
              className="bg-vendpalGreen mt-6 w-full rounded-lg py-3 text-center text-white"
              text={isLoading ? "Logging..." : "Log in"}
              icon={isLoading && ""}
              disabled={isLoading}
              type={"submit"}
            />
            <div className="py-4 text-center">
              New User?{" "}
              <a className="text-vendpalGreen" href="#">
                Request Access
              </a>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Home;
