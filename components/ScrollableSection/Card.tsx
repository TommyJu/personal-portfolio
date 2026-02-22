import Image from 'next/image';

interface CardProps {
    title?: string;
    secondaryTitle?: string;
    description?: string;
    tags?: string[];
    date?: string;
    imageSrc?: string;
    isClickable?: boolean;
};

function Card({title, secondaryTitle, description, tags, date, imageSrc, isClickable = true} : CardProps) {
  return (
    <div className="card-container">
        <div className="card-container-left">
            {date && (<p className='date'>{date}</p>)}
            {imageSrc && (<Image src={imageSrc} className='image' alt=""/>)}
            
        </div>
        <div className="card-container-right">
            {title && (<h4 className='title'>{title}</h4>)}
            {secondaryTitle && (<h5 className='secondary-title'>{secondaryTitle}</h5>)}
            {description && (<p className='description'>{description}</p>)}
            <div className="tag-container">
                {tags && tags.map((tag) => {
                    return <p key={tag} className="tag">{tag}</p>
                })}
            </div>
        </div>
        

    </div>
  )
}

export default Card