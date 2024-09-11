export default function ProgressBar({ step }) {
  return (
    <div>
      <p>Step {step} of 3</p>
      <progress value={step} max="3"></progress>
    </div>
  );
}
