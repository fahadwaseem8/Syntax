type InputSectionProps = {
  input: string;
  isDarkMode: boolean;
  onChange: (value: string) => void;
};

export const InputSection = ({
  input,
  isDarkMode,
  onChange,
}: InputSectionProps) => (
  <div
    className={`overflow-hidden rounded-lg border ${
      isDarkMode ? "border-gray-700" : "border-gray-200"
    }`}
  >
    <div className={`p-3 ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <h2
        className={`font-semibold ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Input
      </h2>
    </div>
    <textarea
      value={input}
      onChange={(e) => onChange(e.target.value)}
      className={`h-32 w-full resize-none p-4 focus:outline-none ${
        isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
      }`}
      placeholder="Enter input here..."
    />
  </div>
);
