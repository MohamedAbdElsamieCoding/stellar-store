const AuthFormSection = () => {
  return (
    <div className="px-12 py-35 flex min-h-screen ">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2 justify-start">
          <p className="text-white">System Access</p>
          <p className="text-text">Identify yourself to proceed to terminal.</p>
        </div>
        <div className="flex justify-around font-headline">
          <button className="active:underline active:text-primary w-full uppercase">
            Login
          </button>
          <button className="active:underline active:text-primary  w-full uppercase">
            Register
          </button>
        </div>
        <div>Login form</div>
        <div>Register Form</div>
      </div>
    </div>
  );
};

export default AuthFormSection;
