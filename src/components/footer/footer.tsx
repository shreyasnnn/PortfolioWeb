import { useState, type FormEvent } from "react";
import emailjs from "emailjs-com";
import { Button } from "../../components/button";
import ArrowRightIcon from "../../assets/icons/arrowRightIcon";
import CopyRightIcon from "../../assets/icons/copyrightIcon";
import { sectionTexts, NAV_BAR_ITEM } from "../../dataController";
import FadeInScroll from "../../assets/UI/fadeInScroll";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  const handleChange = (field: "name" | "email", value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Please fill in both name and email");
      return;
    }

    const templateParams = { user_name: form.name, user_email: form.email };

    emailjs
      .send("service_ocpsvii", "template_wl8fi1x", templateParams, "g59nknhdnzMKBwAR2")
      .then(
        () => {
          alert("Message sent successfully!");
          setForm({ name: "", email: "" });
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <FadeInScroll delayMs={100}>
      <div className="flex items-center justify-center mb-[26%] md:mb-[10%] mt-20 md:mt-120 px-4">
        <div className="bg-use-grey-100 flex items-center justify-center flex-col p-3 sm:p-4 md:p-5 rounded-xl md:rounded-2xl w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-[40%]">
          <div className="bg-use-grey-200 w-full rounded-xl md:rounded-2xl flex items-center justify-center flex-col gap-2 sm:gap-3 md:gap-4 p-4 sm:p-5 md:p-6">
            
            {/* Primary Section Button */}
            <FadeInScroll delayMs={50}>
              <Button
                variant="primary"
                aria-label={sectionTexts.contactSection.btnText}
                className="text-body-xs sm:text-body-s rounded-2xl md:rounded-3xl mt-3 sm:mt-6 md:mt-8 px-6 py-2"
              >
                {sectionTexts.contactSection.btnText}
              </Button>
            </FadeInScroll>

            <FadeInScroll delayMs={350}>
              <h2 className="text-title-s sm:text-title-m font-use-semibold text-center">
                {sectionTexts.contactSection.title}
              </h2>
            </FadeInScroll>

            {/* Form Inputs */}
            <input
              type="text"
              value={form.name}
              placeholder="Enter your name"
              aria-label="Enter your name"
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full sm:w-4/5 md:w-3/5 px-3 sm:px-4 py-2 sm:py-3 mt-2 text-caption-xs text-use-grey-900 bg-use-grey-100 rounded-2xl md:rounded-3xl"
            />
            <input
              type="email"
              value={form.email}
              placeholder="Enter your email"
              aria-label="Enter your email"
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full sm:w-4/5 md:w-3/5 px-3 sm:px-4 py-2 sm:py-3 text-caption-xs text-use-grey-900 bg-use-grey-100 rounded-2xl md:rounded-3xl"
            />

            {/* Send Button */}
            <Button
              variant="primary"
              onClick={sendEmail}
              aria-label="Send message"
              className="cursor-pointer rounded-2xl md:rounded-3xl w-full sm:w-4/5 md:w-3/5 px-3 sm:px-4 py-2 sm:py-3 flex justify-between items-center gap-2 group transition-transform duration-300 ease-out hover:scale-105"
            >
              <span className="text-body-xs sm:text-body-s transition-all duration-300 ease-out">
                Send message
              </span>
              <ArrowRightIcon
                className="w-4 h-4 sm:w-5 sm:h-5 transform transition-all duration-300 ease-out group-hover:translate-x-10 group-hover:rotate-[320deg]"
                aria-hidden="true"
              />
            </Button>

            {/* Description */}
            <FadeInScroll delayMs={350} direction="down">
              <p className="text-caption-xs text-use-grey-900 mt-3 sm:mt-4">
                {sectionTexts.contactSection.description}
              </p>
            </FadeInScroll>

            {/* Contact Links */}
            <FadeInScroll delayMs={250} direction="down">
              <a
                href="tel:+91 8317449363"
                aria-label={`Call ${sectionTexts.contactSection.mobileNumber}`}
                className="text-body-s sm:text-title-xs font-use-medium"
              >
                {sectionTexts.contactSection.mobileNumber}
              </a>
            </FadeInScroll>
            <FadeInScroll delayMs={250} direction="down">
              <a
                href="mailto:nshreyas1309@gmail.com"
                aria-label={`Email ${sectionTexts.contactSection.gMail}`}
                className="text-body-s sm:text-title-s font-use-semibold"
              >
                {sectionTexts.contactSection.gMail}
              </a>
            </FadeInScroll>

            {/* Social/External Links */}
            <FadeInScroll delayMs={100} direction="down">
              <div className="flex flex-row flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 md:mb-10">
                {NAV_BAR_ITEM.ICON_CONFIG.map((button, index) => {
                  if (button.TITLE === "Resume") return null;
                  return (
                    <Button
                      key={index}
                      variant="secondary"
                      aria-label={button.TITLE ? `Open ${button.TITLE}` : "Open link"}
                      className="rounded-lg sm:rounded-xl h-10 sm:h-12 min-w-8 sm:min-w-10 shadow-card border-0 cursor-pointer transition duration-200 ease-in-out hover:-translate-y-1 mx-1 sm:mx-2"
                      onClick={() => handleClick(button.REDIRECT)}
                    >
                      <div className="flex items-center">
                        {button.IS_ACTIVE && <div className="mr-1" aria-hidden="true">🟢</div>}
                        {button.ICON && (
                          <img
                            loading="lazy"
                            src={button.ICON.URL}
                            alt={button.ICON.ALT || button.TITLE || "Social icon"}
                            className="h-4 sm:h-5"
                          />
                        )}
                        {button.TITLE && (
                          <span className="ml-1 text-xs sm:text-sm">{button.TITLE}</span>
                        )}
                      </div>
                    </Button>
                  );
                })}
              </div>
            </FadeInScroll>
          </div>

          {/* Footer */}
          <footer role="contentinfo" aria-label="Website footer" className="w-full flex items-center justify-center mt-4 sm:mt-6">
            <div className="flex items-center">
              <CopyRightIcon height={14} className="mr-1" aria-label="Copyright icon" />
              <span className="text-caption-xs">{sectionTexts.contactSection.copyRights}</span>
            </div>
          </footer>
        </div>
      </div>
    </FadeInScroll>
  );
}
