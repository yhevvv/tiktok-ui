import Style from './GlobalStyle.scss'
import classNames from 'classnames/bind'



function GlobalStyles ({ children, Theme }){
    
    const cx = classNames.bind(Style)

    
    return (
        <div className={cx(`${Theme}`)}>
            {children}
        </div>
    )
}

export default GlobalStyles