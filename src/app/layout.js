import "./globals.css";

import { FormProvider } from "../components/FormContext";
import { ErrorProvider } from "../components/ErrorContext";

import ProgressBar from "@/components/ProgressBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FormProvider>
          <ErrorProvider>
            <ProgressBar />
            {children}
          </ErrorProvider>
        </FormProvider>
      </body>
    </html>
  );
}
