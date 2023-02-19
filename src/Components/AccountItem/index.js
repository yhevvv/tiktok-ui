import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Style from './AccountItem.module.scss'

const cx = classNames.bind(Style)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_300x300.webp?x-expires=1676966400&x-signature=bfoqerAGo1LvSxqLsiGbzd1tcJk%3D" className={cx('avatar')} alt="ABC"></img>
            <div className={cx('info')}>    
                <h4 className={cx('name')}> 
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('iconCheck')}></FontAwesomeIcon>
                    <h5 className={cx('id')}>@id_123445</h5>
                </h4>
                <span className={cx('aaa')}></span>
            </div>
        </div>
    );
}

export default AccountItem;