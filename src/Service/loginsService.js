import * as Request from '~/Utils/httpRequest';

export const login = async ({ email, password }) => {
    try {
        const res = await Request.post(`auth/login`, {
           email, password,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
