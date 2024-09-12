import "./globals.css";

import { FormProvider } from "../providers/FormContext";
// import { ErrorProvider } from "../providers/ErrorContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  );
}
