import * as Request from '~/Utils/httpRequest';

export const getSuggested = async ({ page, per_page }) => {
    try {
        const res = await Request.get(`users/suggested`, {
            params: {
                page,
                per_page,
            },
        }); //api
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
