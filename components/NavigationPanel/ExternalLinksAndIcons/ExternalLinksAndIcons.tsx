import GithubIcon from "@/icons/github.svg";
import LinkedInIcon from "@/icons/linkedin.svg";
import DevIcon from "@/icons/dev.svg";
import ResumeIcon from "@/icons/resume.svg";
import "@/css/icon.css"

function ExternalLinksAndIcons() {
  const ICON_SIZE = 48;

  return (
    <div className="flex gap-8 text-center">
      {/* GitHub */}
      <a href="https://github.com/TommyJu" target="_blank">
        <GithubIcon width={ICON_SIZE} height={ICON_SIZE} className="icon"/>
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/tommyju/" target="_blank">
        <LinkedInIcon width={ICON_SIZE} height={ICON_SIZE} className="icon"/>
      </a>

      {/* Dev.to */}
      <a href="https://dev.to/tommy_ju" target="_blank">
        <DevIcon width={ICON_SIZE} height={ICON_SIZE} className="icon"/>
      </a>

      {/* Resume */}
      <a href="resume_tommy_ju.pdf" target="_blank">
      <ResumeIcon width={ICON_SIZE} height={ICON_SIZE} className="icon"/>
      </a>
    </div>
  );
}

export default ExternalLinksAndIcons;
