import { useEffect, useState } from 'react';
import * as commentListService from '~/Service/Comment/commentListService';
import Cookies from 'js-cookie';
import ReactionComment from './ReactionComment';
import DetailListComment from './DetailListComment';

function ListComment({ data }) {
    const token = Cookies.get('isToken');
    //get list comment
    const [listComment, setListComment] = useState([]);

    useEffect(() => {
        commentListService
            .commentList({ token: token, id_video: data?.id })
            .then((data) => {
                setListComment(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [data?.id, token]);

    const myData = JSON.parse(Cookies.get('dataUser'));

    return (
        <>
            {listComment?.map((data, index) => (
                <div key={index}>
                    {data?.user?.id === myData?.data?.id && (
                        <div style={{ display: 'none' }}>
                            {Cookies.set('idComment', data?.id)}
                        </div>
                    )}
                    <DetailListComment data={data}></DetailListComment>
                    <ReactionComment data={data}></ReactionComment>
                </div>
            ))}
        </>
    );
}

export default ListComment;
