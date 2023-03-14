import * as Request from '~/Utils/httpRequest';

export const imageProfile = async ({ token, _method, avatar }) => {
    try {
        const formData = new FormData();
        formData.append('avatar', avatar);

        const res = await Request.post(`auth/me`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
            },
            params: {
                _method: _method,
            },
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
};
