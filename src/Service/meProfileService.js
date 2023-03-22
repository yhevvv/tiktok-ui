import * as Request from '~/Utils/httpRequest';

export const meProfile = async ({ token }) => {
    try {
        const res = await Request.get(`auth/me?token=${token}`);
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
