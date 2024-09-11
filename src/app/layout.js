import localFont from "next/font/local";
import "./globals.css";
import { useContext } from "react";
import { FormProvider } from "../components/FormContext";
// import FormContext from "../components/FormContext";
import ProgressBar from "../components/ProgressBar";

export default function RootLayout({ children }) {
  // const { step } = useContext(FormContext);

  return (
    <html lang="en">
      <FormProvider>
        {/* <ProgressBar /> */}
        <body>{children}</body>
      </FormProvider>
    </html>
  );
}
