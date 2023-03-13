import * as Request from '~/Utils/httpRequest';

export const editProfile = async ({ token, _method, nickname, last_name, bio, avatar }) => {
    try {
        const res = await Request.post(
            `auth/me?_method=${_method}&token=${token}&nickname=${nickname}&last_name=${last_name}&bio=${bio}&avatar=${avatar}`,
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
};


// import * as Request from '~/Utils/httpRequest';

// export const editProfile = async ({ token, _method, nickname, last_name, bio, avatar }) => {
//     try {
//         const formData = new FormData();
//         formData.append('avatar', avatar);

//         const res = await Request.post(`auth/me`, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//                 'Authorization': `Bearer ${token}`,
//             },
//             params: {
//                 _method: _method,
//                 nickname: nickname,
//                 last_name: last_name,
//                 bio: bio,
//             },
//         });

//         return res.data;
//     } catch (error) {
//         console.log(error);
//     }
// };
