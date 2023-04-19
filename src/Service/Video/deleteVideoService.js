import * as Request from '~/Utils/httpRequest';

export const DeleteVideo = async ({ id_video, token }) => {
    try {
        const res = await Request.Delete(`videos/${id_video}?token=${token}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
