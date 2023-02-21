import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import Style from './Image.module.scss';
import classNames from 'classnames';

function Image(
    { src, alt, className, fallback: customFallback = images.NoImage, ...prop },
    ref,
) {
    const [fallback, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallback);
    };

    return (
        <img
            className={classNames(Style.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...prop}
            onError={handleError}
        ></img>
    );
}

export default forwardRef(Image);
