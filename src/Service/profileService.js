import * as Request from '~/Utils/httpRequest';

export const Profile = async ({token}) => {
    try {
        const res = await Request.get(`auth/me`, {
            params: {
             token,
            },
        }); //api
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
