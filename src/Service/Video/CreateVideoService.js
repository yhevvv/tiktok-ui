import * as Request from '~/Utils/httpRequest';

export const VideoService = async ({
    description,
    upload_file,
    viewable,
    token,
    thumbnail_time,
    comment,
    duet,
    stitch,
}) => {
    try {
        const formData = new FormData();
        formData.append('upload_file', upload_file);
        const res = await Request.post(
            `videos?description=${description}&viewable=${viewable}&thumbnail_time=${thumbnail_time}${comment !== null ? `&allows[]=${comment}` : ''}${duet !== null ? `&allows[]=${duet}` : ''}${stitch !== null ? `&allows[]=${stitch}` :''}&token=${token}`,
            formData,
        );
        return res;
    } catch (error) {
        console.log(error);
    }
};
