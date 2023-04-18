import * as Request from '~/Utils/httpRequest';

export const VideoUser = async ({ id }) => {
    try {
        const res = await Request.get(`users/${id}/videos`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
