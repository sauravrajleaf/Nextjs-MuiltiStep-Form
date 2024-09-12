import "./globals.css";

import { FormProvider } from "../components/FormContext";
import ProgressBar from "@/components/ProgressBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FormProvider>
          <ProgressBar />
          {children}
        </FormProvider>
      </body>
    </html>
  );
}
