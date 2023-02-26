import * as Request from '~/Utils/httpRequest';

export const getSuggested = async ({ page, perPage}) => {
    try {
        const res = await Request.get(`users/suggested`, {
            params: {
                page,
                per_page: perPage,
            },
        }); //api
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
