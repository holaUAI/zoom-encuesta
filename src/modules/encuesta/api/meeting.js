import { ms_meetings } from "../../shared/api/providers";

const URI = "/ms/v1/meeting"

export const getByMeetingId = async (id) => {
    const response = await ms_meetings.get(`${URI}/by-meeting-id/${id}`);
    return response.data;
};