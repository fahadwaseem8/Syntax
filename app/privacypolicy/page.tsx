"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const PrivacyPolicy = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div
      className={`flex min-h-screen flex-col ${
        isDarkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
      />

      <main className="container mx-auto flex-grow px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <h1
            className={`mb-8 text-4xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Privacy Policy
          </h1>

          <div
            className={`space-y-8 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <p>
              This privacy policy applies to the Syntax app (hereby referred
              to as "Application") for web and mobile devices that was created
              by Fahad Waseem (hereby referred to as "Service Provider") as a
              Free service. This service is intended for use "AS IS".
            </p>

            <section>
              <h2
                className={`mb-4 text-2xl font-semibold ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Information Collection and Use
              </h2>
              <p className="mb-4">
                The Application collects information when you download and use
                it. This information may include information such as:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Your device's Internet Protocol address (e.g. IP address)
                </li>
                <li>
                  The pages of the Application that you visit, the time and date
                  of your visit, the time spent on those pages
                </li>
                <li>The time spent on the Application</li>
                <li>
                  The operating system you use on your web or mobile device
                </li>
              </ul>
              <p className="mt-4">
                The Application does not gather precise information about the
                location of your web or mobile device.
              </p>
            </section>

            <section>
              <h2
                className={`mb-4 text-2xl font-semibold ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Third Party Access
              </h2>
              <p className="mb-4">
                Only aggregated, anonymized data is periodically transmitted to
                external services to aid the Service Provider in improving the
                Application and their service. The Service Provider may share
                your information with third parties in the ways that are
                described in this privacy statement.
              </p>
              <p className="mb-4">
                Please note that the Application utilizes third-party services
                that have their own Privacy Policy about handling data. Below
                are the links to the Privacy Policy of the third-party service
                providers used by the Application:
              </p>
              <ul className="list-disc pl-6">
                <li>Google Play Services</li>
              </ul>
            </section>

            <section>
              <h2
                className={`mb-4 text-2xl font-semibold ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Contact Us
              </h2>
              <p>
                If you have any questions regarding privacy while using the
                Application, or have questions about the practices, please
                contact the Service Provider via email at{" "}
                <a
                  href="mailto:fahadwaseem8@gmail.com"
                  className={`${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  } hover:underline`}
                >
                  fahadwaseem8@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default PrivacyPolicy;
