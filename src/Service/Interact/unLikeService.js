import * as Request from '~/Utils/httpRequest';

export const UnLike = async ({ token, id }) => {
    try {
        const res = await Request.post(
            `videos/${id}/unlike?token=${token}`,
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
