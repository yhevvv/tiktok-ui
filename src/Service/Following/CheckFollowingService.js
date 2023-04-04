import * as Request from '~/Utils/httpRequest';

export const CheckFollowing = async ({ token, page }) => {
    try {
        const res = await Request.get(`me/followings`, {
            params: { token, page },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
