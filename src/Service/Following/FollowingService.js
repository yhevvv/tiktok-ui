import * as Request from '~/Utils/httpRequest';

export const Following = async ({ token, id_nickname }) => {
    try {
        const res = await Request.post(`users/${id_nickname}/follow?token=${token}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
