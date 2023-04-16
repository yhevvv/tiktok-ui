import * as Request from '~/Utils/httpRequest';

export const home = async (type, page) => {
    try {
        const res = await Request.get(`videos`, {
            params: {
                type,
                page,
            },
        }); //api
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
