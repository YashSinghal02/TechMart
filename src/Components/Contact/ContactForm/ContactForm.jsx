import "./ContactForm.css"
import { useForm } from "react-hook-form";
import contactformimg from "../../../assets/contactformimg.jpg";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  async function onSubmit(data) {
    console.log("Submitted Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    reset();
  }

  return (
    <div className="main-contact-form">
      <div className="contact-img">
        <img src={contactformimg} alt="Contact illustration" />
      </div>

      <div className="form-contact">
        <h2 className="form-title">Get In Touch</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 3, message: "Min length is 3" },
                maxLength: { value: 20, message: "Max length is 20" },
              })}
            />
            {errors.name && <p className="error-text">{errors.name.message}</p>}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="number">Phone Number</label>
            <input
              type="tel"
              id="number"
              placeholder="Enter your phone number"
              {...register("number", {
                required: "Phone Number is required",
                pattern: {
                  value: /^(\+91|0)?[789]\d{9}$/,
                  message: "Enter a valid phone number",
                },
              })}
            />
            {errors.number && <p className="error-text">{errors.number.message}</p>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && <p className="error-text">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  message: "Min 8 chars, with uppercase, lowercase, number & special char",
                },
              })}
            />
            {errors.password && (
              <p className="error-text">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="formbtn"
          >
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>{isSubmitting ? "Submitting..." : "Send"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;