import * as Request from '~/Utils/httpRequest';

export const editProfile = async ({ token, _method, nickname, last_name, bio }) => {
    try {
        const res = await Request.post(
            `auth/me?_method=${_method}&token=${token}&nickname=${nickname}&last_name=${last_name}&bio=${bio}`,
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

