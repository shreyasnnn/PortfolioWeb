import { useState, type FormEvent } from "react";
import emailjs from "emailjs-com";
import { Button } from "../../components/button";
import ArrowRightIcon from "../../assets/icons/arrowRightIcon";
import CopyRightIcon from "../../assets/icons/copyrightIcon";
import { sectionTexts, NAV_BAR_ITEM } from "../../dataController";
import FadeInScroll from "../../assets/UI/fadeInScroll";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleClick = (url: string) => window.open(url, "_blank");

  const handleChange = (field: "name" | "email", value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setStatus("loading");

    const templateParams = {
      user_name: form.name,
      user_email: form.email,
    };

    emailjs
      .send("service_ocpsvii", "template_wl8fi1x", templateParams, "g59nknhdnzMKBwAR2")
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus("error");
      });
  };

  return (
    <FadeInScroll delayMs={100}>
      <div className="flex items-center justify-center mb-[26%] md:mb-[10%] mt-20 md:mt-120 px-4">
        <div className="bg-use-grey-100 flex flex-col items-center p-4 md:p-6 rounded-2xl w-full sm:w-4/5 md:w-3/5 lg:w-2/5">
          <div className="bg-use-grey-200 w-full rounded-2xl flex flex-col items-center gap-4 p-6">
            {/* Primary Section Button */}
            <FadeInScroll delayMs={50}>
              <Button
                variant="primary"
                aria-label={sectionTexts.contactSection.btnText}
                className="text-body-xs sm:text-body-s rounded-3xl mt-6 px-6 py-2"
              >
                {sectionTexts.contactSection.btnText}
              </Button>
            </FadeInScroll>

            {/* Section Title */}
            <FadeInScroll delayMs={350}>
              <h2 className="text-title-s sm:text-title-m font-use-semibold text-center">
                {sectionTexts.contactSection.title}
              </h2>
            </FadeInScroll>

            {/* Contact Form */}
            <form
              onSubmit={sendEmail}
              className="flex flex-col items-center w-full gap-3 sm:gap-4"
            >
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Enter your name"
                aria-label="Enter your name"
                required
                className="w-full sm:w-4/5 md:w-3/5 px-4 py-3 text-caption-xs text-use-grey-900 bg-use-grey-100 rounded-3xl"
              />

              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Enter your email"
                aria-label="Enter your email"
                required
                className="w-full sm:w-4/5 md:w-3/5 px-4 py-3 text-caption-xs text-use-grey-900 bg-use-grey-100 rounded-3xl"
              />

              <Button
                type="submit"
                variant="primary"
                disabled={status === "loading"}
                aria-label="Send message"
                className="rounded-3xl w-full sm:w-4/5 md:w-3/5 px-4 py-3 flex justify-between items-center gap-2 group transition-transform duration-300 ease-out hover:scale-105 disabled:opacity-50"
              >
                <span className="text-body-xs sm:text-body-s">
                  {status === "loading" ? "Sending..." : "Send message"}
                </span>
                <ArrowRightIcon
                  className="w-4 h-4 sm:w-5 sm:h-5 transform transition-all duration-300 ease-out group-hover:translate-x-10 group-hover:rotate-[320deg]"
                  aria-hidden="true"
                />
              </Button>
            </form>

            {/* Feedback message */}
            {status === "success" && (
              <p className="text-green-600 text-caption-xs mt-2">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-caption-xs mt-2">Failed to send. Please try again.</p>
            )}

            {/* Description */}
            <FadeInScroll delayMs={350} direction="down">
              <p className="text-caption-xs text-use-grey-900 mt-4">
                {sectionTexts.contactSection.description}
              </p>
            </FadeInScroll>

            {/* Phone & Email */}
            <FadeInScroll delayMs={250} direction="down">
              <a
                href={`tel:${sectionTexts.contactSection.mobileNumber}`}
                className="text-body-s sm:text-title-xs font-use-medium"
              >
                {sectionTexts.contactSection.mobileNumber}
              </a>
            </FadeInScroll>
            <FadeInScroll delayMs={250} direction="down">
              <a
                href={`mailto:${sectionTexts.contactSection.gMail}`}
                className="text-body-s sm:text-title-s font-use-semibold"
              >
                {sectionTexts.contactSection.gMail}
              </a>
            </FadeInScroll>

            {/* Social Links */}
            <FadeInScroll delayMs={100} direction="down">
              <div className="flex flex-row flex-wrap justify-center gap-3 mt-8 mb-8">
                {NAV_BAR_ITEM.ICON_CONFIG.map((button, index) => {
                  if (button.TITLE === "Resume") return null;
                  return (
                    <Button
                      key={index}
                      variant="secondary"
                      onClick={() => handleClick(button.REDIRECT)}
                      className="rounded-xl h-12 min-w-10 shadow-card border-0 cursor-pointer transition duration-200 ease-in-out hover:-translate-y-1"
                      aria-label={button.TITLE ? `Open ${button.TITLE}` : "Open link"}
                    >
                      <div className="flex items-center">
                        {button.IS_ACTIVE && <span className="mr-1" aria-hidden="true">🟢</span>}
                        {button.ICON && (
                          <img
                            loading="lazy"
                            src={button.ICON.URL}
                            alt={button.ICON.ALT || button.TITLE || "Social icon"}
                            className="h-5"
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
          <footer
            role="contentinfo"
            aria-label="Website footer"
            className="w-full flex items-center justify-center mt-6"
          >
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
