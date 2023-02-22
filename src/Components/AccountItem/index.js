import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Style from './AccountItem.module.scss'

import Image from "../Image";
import images from "~/assets/images";

const cx = classNames.bind(Style)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image src={images.avatar2} className={cx('avatar')} alt={images.NoImage}></Image>
            <div className={cx('info')}>    
                <h4 className={cx('name')}> 
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('iconCheck')}></FontAwesomeIcon>
                    <div className={cx('id')}>@id_123445</div>
                </h4>
                <span className={cx('aaa')}></span>
            </div>
        </div>
    );
}

export default AccountItem;