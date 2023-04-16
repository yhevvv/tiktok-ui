import * as Request from '~/Utils/httpRequest';

export const CommentDelete = async ({ id_comment, token }) => {
    try {
        const res = await Request.del(`comments/${id_comment}?token=${token}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
