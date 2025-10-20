import "./FormSign.css";
import { useForm } from "react-hook-form";
import Formimg from "../../assets/Formimg.jpg";
import goggle from "../../assets/google-iconn.png";
import apple from "../../assets/apple-iconn.png";
import { useNavigate } from "react-router";

function FormSign() {

   const navigate = useNavigate();

  const goHome = () => {
    navigate("/"); // Navigate to home page
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm();

  async function onSubmit(data) {
    console.log("Submitted Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    reset();
  }

  return (
    <div className="form-section">
      <div className="form-wrapper">
        
        {/* LEFT FORM SIDE */}
        <div className="form-area">
          
          <h2 className="form-title">Tech <span style={{color:"#00a2e7"}}>Mart</span></h2>
          <h2 className="text-center font-semibold text-xl" >Create an Account</h2>
          <div className="cross-icon" onClick={goHome}>
            <i class="fa-solid fa-xmark"></i>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
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

            {/* Phone */}
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

            {/* Email */}
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

            {/* Password */}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  message:
                    "Min 8 chars, with uppercase, lowercase, number & special char",
                },
              })}
            />
            {errors.password && (
              <p className="error-text">{errors.password.message}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-btn"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
   
   <div className="brand-imgs">
    <div className="first-brand">
      <img src={apple} alt="" />
    </div>
     <div className="first-brand">
      <img src={goggle} alt="" />
    </div>
   </div>
   
   <div className="already-acc">
    <h6>Already have an account? <b>Sign In</b></h6>
   </div>

        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="form-image">
          <img src={Formimg} alt="Form visual" />
        </div>

      </div>
    </div>
  );
}

export default FormSign;
