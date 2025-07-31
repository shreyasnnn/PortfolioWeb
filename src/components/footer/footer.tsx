import { useState, type FormEvent } from "react";
import emailjs from "emailjs-com";
import { Button } from "../../components/button";
import ArrowRightIcon from "../../assets/icons/arrowRightIcon";
import CopyRightIcon from "../../assets/icons/copyrightIcon";
import { myMial, myMobileNumber, NAV_BAR_ITEM } from "../../dataController";
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

    const templateParams = {
      user_name: form.name,
      user_email: form.email,
    };

    emailjs
      .send(
        "service_ocpsvii", // ✅ Your service ID
        "template_wl8fi1x", // ✅ Your template ID
        templateParams,
        "g59nknhdnzMKBwAR2" // ✅ Your public API key
      )
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
      <div className="flex items-center justify-center mb-[8%] mt-120">
      <div className="bg-use-grey-100 flex items-center justify-center flex-col p-3 rounded-2xl w-[40%]">
        <div className="bg-use-grey-200 w-full rounded-2xl flex items-center justify-center flex-col gap-2">
          <FadeInScroll delayMs={50}>
            <Button variant="primary" className="text-body-s rounded-3xl mt-10">
              Contact
            </Button>
          </FadeInScroll>

          <FadeInScroll delayMs={350}>
            <h2 className="text-title-m font-use-semibold">Get in Touch</h2>
          </FadeInScroll>

          <input
            type="text"
            value={form.name}
            placeholder="Enter your name"
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-[60%] px-4 py-3 mt-2 text-caption-xs text-use-grey-900 bg-use-grey-100 rounded-3xl"
          />
          <input
            type="email"
            value={form.email}
            placeholder="Enter your email"
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-[60%] px-4 py-3 text-caption-xs text-use-grey-900 bg-use-grey-100 rounded-3xl"
          />

          <Button
            variant="primary"
            onClick={sendEmail}
            className="rounded-3xl w-[60%] px-4 py-3 flex justify-between items-center gap-2"
          >
            Send message <ArrowRightIcon />
          </Button>

          <FadeInScroll delayMs={350} direction="down">
            <p className="text-caption-xs text-use-grey-900 mt-4">
            Let's Connect
          </p>
          </FadeInScroll>

          <FadeInScroll delayMs={250} direction="down">
            <a
            href="tel:+91 8317449363"
            className="text-title-xs font-use-medium"
          >
            {myMobileNumber}
          </a>
          </FadeInScroll>
          <FadeInScroll delayMs={250} direction="down">
            <a
            href="mailto:nshreyas1309@gmail.com"
            className="text-title-s font-use-semibold"
          >
            {myMial}
          </a>
          </FadeInScroll>
          <FadeInScroll delayMs={100} direction="down">
            <div className="flex flex-row space-x-3 mt-10 mb-10">
            {NAV_BAR_ITEM.ICON_CONFIG.map((button, index) => {
              // Skip the "Resume" button
              if (button.TITLE === "Resume") return null;

              return (
                <Button
                  key={index}
                  variant="secondary"
                  className={`${
                    button.TITLE && "mx-6"
                  } rounded-xl h-12 min-w-10 shadow-card border-0 cursor-pointer transition duration-200 ease-in-out hover:-translate-y-1`}
                  onClick={() => handleClick(button.REDIRECT)}
                >
                  <div className="flex">
                    {button.IS_ACTIVE && <div>🟢</div>}
                    {button.ICON && (
                      <img
                        className="h-5"
                        src={button.ICON.URL}
                        alt={button.ICON.ALT}
                      />
                    )}
                    {button.TITLE && <div>{button.TITLE}</div>}
                  </div>
                </Button>
              );
            })}
          </div>
          </FadeInScroll>
        </div>

        <p className="w-full flex items-center justify-center text-caption-xs mt-6">
          <CopyRightIcon height={18} className="mr-1" /> 2024, Rights Reserved
        </p>
      </div>
    </div>
    </FadeInScroll>
  );
}
