'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import RHFTextField from '@/pages/components/ui/RHFTextField';
//export const metadata = {
//  title: 'ثبت نام',
//};

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import Button from '@/pages/components/ui/Button';
import { singinApi } from '@/services/authSrvice';

// Yup schema
const schema = yup.object({
  name: yup
    .string()
    .min(5, 'نام و نام خانوادگی باید حداقل ۵ کاراکتر باشد')
    .max(32, 'نام و نام خانوادگی نباید بیشتر از ۳۲ کاراکتر باشد')
    .required('نام و نام خانوادگی الزامی است'),
  email: yup.string().email('ایمیل نامعتبر است').required('ایمیل الزامی است'),
  password: yup.string().required('رمز عبور الزامی است'),
});
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const onSubmit = async (values) => {
    try {
      const { user } = await singinApi(values); // Corrected 'singinApi' to 'signinApi'
      console.log(user);
    } catch (error) {
      console.log(error?.response?.data?.message); // Error logging with optional chaining
    }
  };

  return (
    <div>
      <h1> ثبت نام </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          label="نام و نام خانوادگی"
          name="name"
          register={register}
          isRequired
          errors={errors}
        />
        <RHFTextField
          label="ایمیل"
          name="email"
          register={register}
          dir="ltr"
          isRequired
          errors={errors}
        />
        <RHFTextField
          label="رمز عبور"
          name="password"
          register={register}
          type="password"
          dir="ltr"
          isRequired
          errors={errors}
        />
        <div className="">
          {isLoading ? (
            <div>
              <Loading />
            </div>
          ) : (
            <Button
              type="submit"
              className="py-3 px-4 btn btn--primary rounded-xl w-full"
            >
              ورود
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Signup;
