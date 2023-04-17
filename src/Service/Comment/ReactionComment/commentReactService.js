import * as Request from '~/Utils/httpRequest';

export const CommentReact = async ({ id_comment, token }) => {
    try {
        const res = await Request.post(
            `comments/${id_comment}/like?token=${token}`,
        );
        return res;
    } catch (error) {
        console.log(error);
    }
};
