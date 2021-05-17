import { memo } from "react";
import { useHistory } from "react-router";
import { Button, Form, Input } from "components";
import { useLogin } from "./use-login";

export const LoginForm = memo(() => {
  const { push } = useHistory();
  const { register, handleSubmit, errors, isLoading, onSubmit } = useLogin();

  return (
    <Form
      className="w-11/12 md:w-2/3 lg:w-1/2 mx-auto grid grid-cols-1 gap-y-8 rounded-lg shadow "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="text-center pt-6 pb-3 bg-gradient-to-b from-indigo-700 to-indigo-500 h-18 text-white rounded-t text-lg font-semibold ">
        ورود
      </div>
      <div className="grid grid-cols-1 gap-y-10 px-10 py-4 bg-gradient-to-b from-indigo-500 ">
        <Input
          register={register}
          name="userName"
          type="text"
          required
          placeholder="نام کاربری"
          error={errors["userName"]?.message}
          className="mt-10"
        />
        <Input
          register={register}
          name="password"
          type="password"
          required
          placeholder="رمز ورود"
          error={errors["password"]?.message}
        />
        <div className="col-center w-full my-6" slot="actions">
          <Button
            className="h-10 w-2/3 mb-6 bg-pink-700 text-white"
            role="confirm"
            type="submit"
            loading={isLoading}
          >
            ورود
          </Button>
          <Button
            icon
            role="cancel"
            className="h-10 w-full  text-cyan-700"
            type="button"
            onClick={() => push("/authentication/register")}
          >
            آیا تا به حال ثبت نام نکرده اید؟
          </Button>
        </div>
      </div>
    </Form>
  );
});
