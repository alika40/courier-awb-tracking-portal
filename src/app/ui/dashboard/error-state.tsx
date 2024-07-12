export const ErrorState = ({ inputName }: { inputName: string[] }) => {
  return (
    <div id="awb-error" aria-live="polite" aria-atomic="true">
      {inputName.map((error: string) => (
        <p className="mt-2 text-sm text-red-500" key={error}>
          {error}
        </p>
      ))}
    </div>
  );
};
