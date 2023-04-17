import * as Request from '~/Utils/httpRequest';

export const commentUnReact = async ({ id_comment, token }) => {
    try {
        const res = await Request.post(
            `comments/${id_comment}/unlike?token=${token}`,
        );
        return res;
    } catch (error) {
        console.log(error);
    }
};
