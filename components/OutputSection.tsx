import { LoadingSpinner } from "./LoadingSpinner";

type OutputSectionProps = {
  isDarkMode: boolean;
  loading: boolean;
  output: string;
};

export const OutputSection = ({
  isDarkMode,
  loading,
  output,
}: OutputSectionProps) => (
  <div
    className={`rounded-lg overflow-hidden border ${
      isDarkMode ? "border-gray-700" : "border-gray-200"
    }`}
  >
    <div className={`p-3 ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <h2
        className={`font-semibold ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Output
      </h2>
    </div>
    <div
      className={`h-[calc(100%-48px)] p-4 ${
        isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <LoadingSpinner />
          Executing code...
        </div>
      ) : (
        <pre className="whitespace-pre-wrap">
          {output || "Output will appear here..."}
        </pre>
      )}
    </div>
  </div>
);
