import GithubIcon from "@/components/icons/GithubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import DevIcon from "@/components/icons/DevIcon";
import ResumeIcon from "@/components/icons/ResumeIcon";

function ExternalLinksAndIcons() {
  const ICON_SIZE = 48;

  return (
    <div className="flex gap-8 text-center">
      {/* GitHub */}
      <a href="https://github.com/TommyJu" target="_blank">
        <GithubIcon size={ICON_SIZE} />
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/tommyju/" target="_blank">
        <LinkedInIcon size={ICON_SIZE} />
      </a>

      {/* Dev.to */}
      <a href="https://dev.to/tommy_ju" target="_blank">
        <DevIcon size={ICON_SIZE} />
      </a>

      {/* Resume */}
      <a href="resume_tommy_ju.pdf" target="_blank" >
      <ResumeIcon size={ICON_SIZE}/>
      </a>
    </div>
  );
}

export default ExternalLinksAndIcons;
