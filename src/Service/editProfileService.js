import * as Request from '~/Utils/httpRequest';

export const editProfile = async ({ token, _method }) => {
    try {
        const res = await Request.post(
            `auth/me?_method=${_method}&token=${token}`,
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
