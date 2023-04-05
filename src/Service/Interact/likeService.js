import * as Request from '~/Utils/httpRequest';

export const Like = async ({ token, id }) => {
    try {
        const res = await Request.post(
            `videos/${id}/like?token=${token}`,
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
