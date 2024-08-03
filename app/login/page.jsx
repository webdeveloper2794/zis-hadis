"use client";

// import { authenticate } from "@/libs/actions";
// import { useFormState, useFormStatus } from "react-dom";

// export default function Page() {
//   const [errorMessage, dispatch] = useFormState(authenticate, undefined);

//   return (
//     <div className="flex w-full min-h-screen flex-col justify-center items-center bg-slate-100/50">
//       <h1 className="text-center text-green-700 text-xl font-semibold m-4">
//         Login to enter Admin page
//       </h1>
//       <form action={dispatch} className="flex flex-col gap-4">
//         <input type="email" name="email" placeholder="Email" required />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           required
//         />
//         <div>{errorMessage && <p>{errorMessage}</p>}</div>
//         <LoginButton />
//       </form>
//     </div>
//   );
// }

// function LoginButton() {
//   const { pending } = useFormStatus();

//   const handleClick = (event) => {
//     if (pending) {
//       event.preventDefault();
//     }
//   };

//   return (
//     <button aria-disabled={pending} type="submit" onClick={handleClick}>
//       Login
//     </button>
//   );
// }
