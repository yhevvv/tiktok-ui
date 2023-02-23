import * as Request from '~/Utils/request';

export const search = async (q, type = 'less') => {
    try {
        const res = await Request.get(`users/search`, {
            params: {
                q,
                type,
            },
        }); //api
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
