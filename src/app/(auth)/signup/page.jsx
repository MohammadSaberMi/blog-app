'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Link from 'next/link';
import Button from '@/pages/components/ui/Button';
import RHFTextField from '@/pages/components/ui/RHFTextField';
import { useAuth } from '@/pages/context/AuthContxt';
import { SpinnerMini } from '@/pages/components/ui/Spinner';

const schema = yup
  .object({
    name: yup.string().min(5).required('نام و نام خانوادگی را وارد کنید'),
    email: yup.string().email().required('ایمیل را وارد کنید'),
    password: yup.string().required('رمز عبور را وارد کنید'),
  })
  .required();

function Singin() {
  const { signup } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({ resolver: yupResolver(schema), mode: 'onTouched' });
  const onSubmit = async (values) => {
    await signup(values);
  };

  return (
    <div>
      <h1 className="text-xl  font-bold text-secondary-500 text-center mb-6">
        ثبت نام
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField
          label="نام و نام خانوادگی"
          name="name"
          errors={errors}
          register={register}
          type="text"
          dir="ltr"
        />
        <RHFTextField
          label="ایمیل"
          name="email"
          errors={errors}
          register={register}
          type="text"
          dir="ltr"
        />
        <RHFTextField
          label="رمز عبور"
          name="password"
          errors={errors}
          register={register}
          type="password"
          dir="ltr"
        />
        <div className="">
          {isLoading ? (
            <div className="flex  justify-center ">
              <SpinnerMini />
            </div>
          ) : (
            <Button
              type="submit"
              className="py-3 px-4 btn btn--primary rounded-xl w-full"
            >
              ثبت نام
            </Button>
          )}
        </div>
      </form>

      <Link href="/signin" className="text-secondary-400 mt-6 text-center">
        ورود
      </Link>
    </div>
  );
}

export default Singin;
