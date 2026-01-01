import { useEffect } from "react";
import { useDarkMode } from "../store/useGetUsersStore";

function ToggleMode() {
  const isDark = useDarkMode((state) => state.isDark);

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("darkMode", String(isDark));
  }, [isDark]);

  return (
    <button
      onClick={() => useDarkMode.getState().toggleDarkMode()}
      aria-label="Toggle dark mode"
      className="bg-gray-400 dark:bg-gray-500 p-1 w-12 rounded-xl cursor-pointer"
    >
      <div
        className={`bg-white dark:bg-gray-900 w-5 h-5 rounded-full transition-transform duration-300 transform ${
          isDark ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default ToggleMode;
