import { MoonLoader } from "react-spinners";

function Spinner({ isDark }: { isDark: boolean }) {
  return (
    <div className="flex justify-center items-center mt-20 min-h-[50vh]">
      <MoonLoader
        color={isDark ? "#ffffff" : "#2563eb"}
        size={120}
        aria-label="loading spinner"
      />
    </div>
  );
}

export default Spinner;
