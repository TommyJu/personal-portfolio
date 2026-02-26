import Image from "next/image";
import Link from "next/link";
import "@/css/card.css";
import LinkIcon from "@/icons/link.svg";

interface CardProps {
  title?: string;
  secondaryTitle?: string;
  description?: string;
  tags?: string[];
  date?: string;
  imageSrc?: string;
  href?: string;
}

function Card({
  title,
  secondaryTitle,
  description,
  tags,
  date,
  imageSrc,
  href,
}: CardProps) {
  const LINK_ICON_SIZE = 18;
  const IMAGE_WRAPPER_WIDTH_IN_PX = "120px";

  const content = (
    <div className="card-container">
      <div className="card-container-left">
        <div className="image-wrapper">
          {imageSrc && <Image src={imageSrc} fill className="image" alt="" sizes={IMAGE_WRAPPER_WIDTH_IN_PX}/>}
        </div>
        {date && <p className="date">{date}</p>}
      </div>

      <div className="card-container-right">
        <span className="title-and-icon-container">
          {title && <h4 className="title">{title}</h4>}
          {href && <LinkIcon width={LINK_ICON_SIZE} height={LINK_ICON_SIZE} className="link-icon"/>}
        </span>
        {secondaryTitle && (
          <h5 className="secondary-title">{secondaryTitle}</h5>
        )}
        {description && <p className="description">{description}</p>}
        <div className="tag-container">
          {tags?.map((tag) => (
            <p key={tag} className="tag">
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="card-link" target="_blank">
        {content}
      </Link>
    );
  } else {
    return content;
  }
}

export default Card;
