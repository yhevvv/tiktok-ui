import * as Request from '~/Utils/httpRequest';

export const followingAccount = async ({page, token}) => {
    try {
        const res = await Request.get(`me/followings`, {
            params: {
                page,
                token: token,
            },
        }); //api
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
