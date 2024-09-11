import localFont from "next/font/local";
import "./globals.css";
import { FormProvider } from "@/components/FormContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <FormProvider>
        <body>{children}</body>
      </FormProvider>
    </html>
  );
}
