import * as Request from '~/Utils/httpRequest';

export const CommentCreate = async ({ token, id_video, comment }) => {
    try {
        const res = await Request.post(
            `videos/${id_video}/comments?token=${token}&comment=${comment}`,
        );
        return res;
    } catch (error) {
        console.log(error);
    }
};
