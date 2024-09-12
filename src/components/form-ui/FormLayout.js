import ProgressBar from "./ProgressBar";

export default function FormLayout({ children }) {
  return (
    <>
      <ProgressBar />
      {children}
    </>
  );
}
