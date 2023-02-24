import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import Style from './Image.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Image = forwardRef(
    (
        {
            src,
            alt,
            className,
            fallback: customFallback = images.NoImage,
            ...prop
        },
        ref,
    ) => {
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
    },
);

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
