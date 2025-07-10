import { ms_meetings } from "../../shared/api/providers";

const URI = "/ms/v1/rating";

export const save = async (data) => {
    const response = await ms_meetings.post(`${URI}/save`, data);
    return response.data;
};