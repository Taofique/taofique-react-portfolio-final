import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { contactLinks } from "../data/contact";

const Contact = ({ hasAnimated }) => {
  const contactLinksWithIcons = contactLinks.map((link) => ({
    ...link,
    icon:
      link.label === "Email Me" ? (
        <Mail className="w-5 h-5 mr-2" />
      ) : link.label === "Github" ? (
        <Github className="w-5 h-5 mr-2" />
      ) : (
        <Linkedin className="w-5 h-5 mr-2" />
      ),
  }));

  return (
    <section id="contact" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 delay-500 ${
            hasAnimated.contact
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-8 text-black dark:text-white">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Feel free to reach out if you'd like to collaborate or just say
            hello!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
            {/* First button */}
            <a
              href={contactLinksWithIcons[0].href}
              target="_blank"
              className={`flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-lg font-medium transition-all duration-300
                bg-black text-white shadow-md hover:shadow-lg hover:bg-gray-800
                dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:hover:text-black
              `}
            >
              {contactLinksWithIcons[0].icon}
              {contactLinksWithIcons[0].label}
            </a>

            {/* Secondary buttons */}
            <div className="flex gap-4 sm:gap-8">
              <a
                href={contactLinksWithIcons[1].href}
                target="_blank"
                className={`flex items-center justify-center flex-1 sm:flex-none px-6 py-3 rounded-lg font-medium transition-all duration-300
                  border-2 border-black text-black hover:bg-black hover:text-white
                  dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black
                `}
              >
                {contactLinksWithIcons[1].icon}
                {contactLinksWithIcons[1].label}
              </a>

              <a
                href={contactLinksWithIcons[2].href}
                target="_blank"
                className={`flex items-center justify-center flex-1 sm:flex-none px-6 py-3 rounded-lg font-medium transition-all duration-300
                  border-2 border-black text-black hover:bg-black hover:text-white
                  dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black
                `}
              >
                {contactLinksWithIcons[2].icon}
                {contactLinksWithIcons[2].label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
