import * as Request from '~/Utils/httpRequest';

export const Profile = async ({ nickname }) => {
    try {
        const res = await Request.get(`users/@${nickname}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
