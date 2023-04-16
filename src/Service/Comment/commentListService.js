import * as Request from '~/Utils/httpRequest';

export const commentList = async ({ token, id_video }) => {
    try {
        const res = await Request.get(
            `videos/${id_video}/comments?token=${token}`,
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
