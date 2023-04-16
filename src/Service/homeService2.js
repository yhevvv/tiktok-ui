import * as Request from '~/Utils/httpRequest';

export const home = async ( type, page ) => {
    try {
        const res = await Request.get(`videos?type=${type}&page=${page}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
