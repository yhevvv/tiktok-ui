import * as Request from '~/Utils/httpRequest';

export const logout = async ({ token }) => {
    try {
        const res = await Request.post(`auth/logout?token=${token}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

