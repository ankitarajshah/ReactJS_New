import logo from "../assets/logo.png";

// import classes from "./Header.module.css";
// import { styled } from "styled-components";

// const StyledHeader = styled.header`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: 2rem;
//   margin-bottom: 2rem;
//   header img {
//     object-fit: contain;
//     margin-bottom: 2rem;
//     width: 11rem;
//     height: 11rem;
//   }
//   & img {
//     object-fit: contain;
//     margin-bottom: 2rem;
//     width: 11rem;
//     height: 11rem;
//   }

//   & h1 {
//     font-size: 1.5rem;
//     font-weight: 600;
//     letter-spacing: 0.4em;
//     text-align: center;
//     text-transform: uppercase;
//     color: #9a3412;
//     font-family: "Pacifico", cursive;
//     margin: 0;
//   }

//   & p {
//     text-align: center;
//     color: #a39191;
//     margin: 0;
//   }
//   @media (min-width: 768px) {
//     & {
//       margin-bottom: 4rem;
//     }

//     & h1 {
//       font-size: 2.25rem;
//     }
//   }
// `;
// export default function Header() {
//   return (
//     <StyledHeader>
//       <img src={logo} />
//       <h1>React Art</h1>
//       <p>This p tag styled using CSS modules</p>
//     </StyledHeader>
//   );
// }

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 md:mb-16 text-red-300">
      <img src={logo} className="mb-8 w-44 object-contain" />
      <h1 className="text-4xl font-semibold tracking-widest text-center uppercase text-amber-700 font-title">
        React Art
      </h1>
      <p className="text-stone-500">This p tag styled using CSS modules</p>
    </header>
  );
}
