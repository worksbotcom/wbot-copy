'use client';

import axios from "axios";
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

const ContactInfo = () => {
  const [phone, setPhone] = useState("");

  //  FORM SUBMIT HANDLER
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = {
      fullname: e.target.fullname.value,
      phone: phone,
      email: e.target.email.value,
      role: e.target.role.value,
      message: e.target.message.value,
    };

    try {
      await axios.post("http://localhost:5000/api/career", formData);
      alert("Form submitted successfully!");
    } catch (error) {
      console.log(error);
      alert("Error submitting form");
    }
  };

  return (
    <section
      className="pt-20 pb-14 md:pb-16 lg:pb-20 xl:pb-[100px]"
      aria-label="Contact Information and Form"
    >
      <div className="main-container">
        <div className="space-y-[70px]">

          {/* Heading */}
          <div className="max-w-[680px] mx-auto text-center space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-2 max-sm:text-2xl max-sm:leading-snug max-sm:mt-4 font-semibold md:mt-5">
                Careers
              </h2>
            </RevealAnimation>
          </div>

          {/* FORM */}
          <div className="flex justify-center items-center">
            <RevealAnimation
              delay={0.3}
              className="max-w-[847px] w-full mx-auto bg-white dark:bg-background-6 rounded-4xl p-6 md:p-8 lg:p-11"
            >
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Name & Phone */}
                <div className="flex items-center flex-col md:flex-row gap-8 justify-between">

                  {/* Name */}
                  <div className="space-y-2 lg:max-w-[364px] w-full">
                    <label htmlFor="fullname" className="block text-tagline-2 text-secondary dark:text-accent font-medium">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      placeholder="Enter your name"
                      required
                      autoComplete="name"
                      className="rounded-sm w-full px-[18px] py-3 h-[48px] xl:h-[41px] border border-stroke-3 dark:border-stroke-7 bg-background-1 dark:bg-background-6 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary dark:placeholder:text-accent/60 dark:text-accent"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2 lg:max-w-[364px] w-full">
                    <label htmlFor="phone" className="block text-tagline-2 text-secondary dark:text-accent font-medium">
                      Your number
                    </label>

                    <PhoneInput
                      country={'in'}
                      value={phone}
                      onChange={(value) => setPhone(value)}
                      inputProps={{
                        name: 'phone',
                        required: true,
                        id: 'phone',
                      }}
                      containerStyle={{ width: '100%' }}
                      inputStyle={{
                        width: '100%',
                        height: '43px',
                        paddingLeft: '60px',
                        paddingRight: '18px',
                        borderRadius: '2px',
                        border: '1px solid #E5E7EB',
                        backgroundColor: 'transparent',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                      buttonStyle={{
                        border: '1px solid #E5E7EB',
                        borderRadius: '2px 0 0 2px',
                        background: 'transparent',
                      }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-tagline-2 text-secondary dark:text-accent font-medium">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    autoComplete="email"
                    className="rounded-sm w-full px-[18px] py-3 h-[48px] xl:h-[41px] border border-stroke-3 dark:border-stroke-7 bg-background-1 dark:bg-background-6 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary dark:placeholder:text-accent/60 dark:text-accent"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-tagline-2 text-secondary dark:text-accent font-medium">
                    Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="Role"
                    placeholder="Enter your Role"
                    required
                    className="rounded-sm w-full px-[18px] py-3 h-[48px] xl:h-[41px] border border-stroke-3 dark:border-stroke-7 bg-background-1 dark:bg-background-6 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary dark:placeholder:text-accent/60 dark:text-accent"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-tagline-2 text-secondary dark:text-accent font-medium">
                    Write message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    placeholder="Enter your messages"
                    required
                    className="rounded-sm w-full px-[18px] py-3 border border-stroke-3 dark:border-stroke-7 bg-background-1 dark:bg-background-6 text-tagline-2 placeholder:text-secondary/60 focus:outline-none focus:border-secondary dark:placeholder:text-accent/60 dark:text-accent"
                  />
                </div>

                {/* Terms */}
                <fieldset className="flex items-center gap-2 mb-4">
                  <label htmlFor="terms" className="flex items-center gap-x-3">
                    <input id="terms" type="checkbox" className="sr-only peer" required />
                    <span className="size-4 rounded-full border border-stroke-3 dark:border-stroke-7 relative after:absolute after:size-2.5 after:bg-primary-500 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100 peer-checked:border-primary-500 cursor-pointer" />
                  </label>

                  <label htmlFor="terms" className="text-tagline-3 cursor-pointer text-secondary/60 dark:text-accent/60">
                    I agree with the
                    <Link href="/terms-conditions" className="text-primary-500 underline text-tagline-3">
                      {' '}terms and conditions
                    </Link>
                  </label>
                </fieldset>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="rounded-sm btn btn-md btn-secondary w-full  before:content-none first-letter:uppercase"
                >
                  Submit
                </button>

              </form>
            </RevealAnimation>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
