import * as Request from '~/Utils/httpRequest';

export const SignUp = async ({ type, email, password }) => {
    try {
        const res = await Request.post(`auth/register`, {
           type , email, password,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
