import Image from "next/image";
import Link from "next/link";
import "@/css/card.css";

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
  const content = (
    <div className="card-container">
      <div className="card-container-left">
        <div className="image-wrapper">
          {imageSrc && <Image src={imageSrc} fill className="image" alt="" />}
        </div>
        {date && <p className="date">{date}</p>}
      </div>

      <div className="card-container-right">
        {title && <h4 className="title">{title}</h4>}
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
