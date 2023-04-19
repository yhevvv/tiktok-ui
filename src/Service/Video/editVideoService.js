import * as Request from '~/Utils/httpRequest';

export const EditVideo = async ({
    token,
    id_video,
    viewable,
    comment,
    duet,
    stitch,
}) => {
    try {
        const res = await Request.post(
            `videos/${id_video}?_method=PATCH&token=${token}&viewable=${viewable}&${
                comment !== null ? `&allows[]=${comment}` : ''
            }${duet !== null ? `&allows[]=${duet}` : ''}${
                stitch !== null ? `&allows[]=${stitch}` : ''
            }`,
        );
        return res;
    } catch (error) {
        console.log(error);
    }
};
