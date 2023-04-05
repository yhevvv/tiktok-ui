import * as Request from '~/Utils/httpRequest';

export const UnFollowing = async ({ token, nickname }) => {
    try {
        const res = await Request.post(
            `users/${nickname}/unfollow?token=${token}`,
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
