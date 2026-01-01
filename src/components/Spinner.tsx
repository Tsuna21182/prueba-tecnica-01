import { MoonLoader } from "react-spinners";

function Spinner() {
  return (
    <div className="flex justify-center items-center mt-20">
      <MoonLoader color="white" size={120} aria-label="loading spinner" />
    </div>
  );
}

export default Spinner;
