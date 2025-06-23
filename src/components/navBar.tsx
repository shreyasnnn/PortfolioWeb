import { useState } from "react";
import { LinkedinIcon} from "../assets/icons/linkedinIcon"
import { Button } from "./button";
import { GithubIcon } from "../assets/icons/githubIcon";
import { GmailIcon } from "../assets/icons/gmailIcon";
import { CallIocn } from "../assets/icons/callIcon";
import shreyasPhoto from'../assets/images/Passport-size-photo-shreyas.jpg'

export default function NavBar() {
  const [onMouseEnter, setOnMouseEnter] = useState(false);

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="flex flex-row gap-6 items-center">
        <Button
          variant="secondary"
          className="rounded-full p-0 shadow-card h-20 w-20"
        >
          <img
            src={shreyasPhoto}
            className="rounded-full"
          />
        </Button>

        <a
          href="https://drive.google.com/file/d/1ea481adLfFlJGPaHzV8FapbknrngB6Ou/view?usp=sharing"
          className="w-[250px] flex flex-col relative"
          onMouseEnter={() => setOnMouseEnter(true)}
          onMouseLeave={() => setOnMouseEnter(false)}
        >
          <span className="font-bold block text-xl">
            Shreyas Nagaraja
          </span>

          <div className="relative h-[40px] mt-1 flex items-center justify-center">
            <p
              className={`absolute top-0 left-0 w-full transition-opacity duration-300 ${
                onMouseEnter ? "opacity-0" : "opacity-100"
              }`}
            >
              Engineering student at Maharaja Institute of Technology Mysore
            </p>
            <p
              className={`absolute top-0 left-0 w-full transition-opacity duration-300 ${
                onMouseEnter ? "opacity-100" : "opacity-0"
              }`}
            >
              Click to see my profile
            </p>
          </div>
        </a>

        <Button
          variant="secondary"
          className="rounded-xl h-16 shadow-card border-0"
        >
          🟢 Resume
        </Button>

        <div className="flex flex-row gap-2 ml-3">
          <Button
            variant="secondary"
            className="rounded-xl h-16 shadow-card border-0"
            onClick={()=>{window.location.href = 'https://www.linkedin.com/in/shreyas-n-4837a2257/'}}
          >
            <LinkedinIcon height={30}/>
          </Button>
          <Button
            variant="secondary"
            className="rounded-xl h-16 shadow-card border-0"
            onClick={()=>{window.location.href = 'https://github.com/shreyasnnn'}}
          >
            <GithubIcon height={30}/>
          </Button>
          <Button
            variant="secondary"
            className="rounded-xl h-16 shadow-card border-0"
            onClick={()=>{window.location.href = 'https://mailto:nshreyas1309@gmail.com'}}
          >
            <GmailIcon height={30}/>
          </Button>
          <Button
            variant="secondary"
            className="rounded-xl h-16 shadow-card border-0"
            onClick={()=>{window.location.href = 'tel:+9134567890'}}
          >
            <CallIocn height={30}/>
          </Button>
        </div>
      </div>
    </div>
  );
}
